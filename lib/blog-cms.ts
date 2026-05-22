import "@/lib/morfoos";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { createRequireMorfoosAdmin } from "@morfoos/morfoos-os/server";
import { createBlogCmsHandlers } from "@morfoos/morfoos-os/blog/cms";

const uploadRoot = path.join(process.cwd(), "public", "uploads", "blog");

export const blogCmsHandlers = createBlogCmsHandlers({
  siteId: process.env.NEXT_PUBLIC_SITE_ID ?? "development",
  requireAdmin: createRequireMorfoosAdmin(),
  uploadAdapter: async ({ file, filename, siteId, postId }) => {
    const segment = postId?.trim() || "draft";
    const dir = path.join(uploadRoot, siteId, segment);
    fs.mkdirSync(dir, { recursive: true });
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const diskPath = path.join(dir, `${randomUUID()}-${safeName}`);
    fs.writeFileSync(diskPath, Buffer.from(await file.arrayBuffer()));
    const relative = `/uploads/blog/${siteId}/${segment}/${path.basename(diskPath)}`;
    return { url: relative, relative };
  },
  listMediaAdapter: async ({ siteId }) => {
    const root = path.join(uploadRoot, siteId);
    if (!fs.existsSync(root)) return [];
    const assets: Array<{ url: string; filename: string; createdAt?: string }> = [];
    const walk = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else {
          const rel = full.replace(path.join(process.cwd(), "public"), "").replace(/\\/g, "/");
          const stat = fs.statSync(full);
          assets.push({
            url: rel,
            filename: entry.name,
            createdAt: stat.mtime.toISOString(),
          });
        }
      }
    };
    walk(root);
    return assets;
  },
  publicOrigin: process.env.NEXT_PUBLIC_SITE_URL,
  onRevalidate: ({ slug, previousSlug }) => {
    revalidatePath("/");
    if (slug) revalidatePath(`/blogi/${slug}`);
    if (previousSlug && previousSlug !== slug) revalidatePath(`/blogi/${previousSlug}`);
  },
});
