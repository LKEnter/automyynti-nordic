import "@/lib/morfoos";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { createRequireMorfoosAdmin } from "@morfoos/morfoos-os/server";
import { createUnifiedCmsHandlers } from "@morfoos/morfoos-os/cms/handlers";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "content");

const handlers = createUnifiedCmsHandlers({
  siteId: process.env.NEXT_PUBLIC_SITE_ID ?? "development",
  requireAdmin: createRequireMorfoosAdmin(),
  uploadAdapter: async ({ file, filename, siteId, folder }) => {
    const segment = folder?.trim() || "general";
    const dir = path.join(uploadRoot, siteId, segment);
    fs.mkdirSync(dir, { recursive: true });
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const diskPath = path.join(dir, `${randomUUID()}-${safeName}`);
    fs.writeFileSync(diskPath, Buffer.from(await file.arrayBuffer()));
    return { url: `/uploads/content/${siteId}/${segment}/${path.basename(diskPath)}` };
  },
  onRevalidate: () => revalidatePath("/"),
});

type CmsCtx = { params: Promise<{ cms?: string[] }> };

/** Catch-all segment is `cms`; package handlers expect `route`. */
function adaptCtx(ctx: CmsCtx) {
  return { params: ctx.params.then(({ cms }) => ({ route: cms })) };
}

export const dynamic = "force-dynamic";

export const GET = (req: Request, ctx: CmsCtx) => handlers.handleGET(req, adaptCtx(ctx));
export const POST = (req: Request, ctx: CmsCtx) => handlers.handlePOST(req, adaptCtx(ctx));
export const PATCH = (req: Request, ctx: CmsCtx) => handlers.handlePATCH(req, adaptCtx(ctx));
export const DELETE = (req: Request, ctx: CmsCtx) => handlers.handleDELETE(req, adaptCtx(ctx));
