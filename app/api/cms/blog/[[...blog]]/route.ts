import { NextResponse } from "next/server";
import { blogCmsHandlers } from "@/lib/blog-cms";

export const dynamic = "force-dynamic";

type BlogCtx = { params: Promise<{ blog?: string[] }> };

function idCtx(id: string) {
  return { params: Promise.resolve({ id }) };
}

async function dispatch(req: Request, ctx: BlogCtx) {
  const segments = (await ctx.params).blog ?? [];
  const h = blogCmsHandlers;
  const method = req.method.toUpperCase();

  if (segments.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const [resource, id, sub] = segments;

  switch (resource) {
    case "posts":
      if (segments.length === 1) {
        if (method === "GET") return h.listPosts(req);
        if (method === "POST") return h.createPost(req);
      }
      if (segments.length === 2 && id) {
        if (method === "GET") return h.getPost(req, idCtx(id));
        if (method === "PATCH" || method === "PUT") return h.updatePost(req, idCtx(id));
        if (method === "DELETE") return h.deletePost(req, idCtx(id));
      }
      if (segments.length === 3 && id && sub === "quick" && method === "PATCH") {
        return h.quickUpdatePost(req, idCtx(id));
      }
      break;

    case "categories":
      if (segments.length === 1) {
        if (method === "GET") return h.listCategories(req);
        if (method === "POST") return h.createCategory(req);
      }
      if (segments.length === 2 && id) {
        if (method === "PATCH" || method === "PUT") return h.updateCategory(req, idCtx(id));
        if (method === "DELETE") return h.deleteCategory(req, idCtx(id));
      }
      break;

    case "tags":
      if (segments.length === 1) {
        if (method === "GET") return h.listTags(req);
        if (method === "POST") return h.createTag(req);
      }
      if (segments.length === 2 && id) {
        if (method === "PATCH" || method === "PUT") return h.updateTag(req, idCtx(id));
        if (method === "DELETE") return h.deleteTag(req, idCtx(id));
      }
      break;

    case "tag-groups":
      if (segments.length === 1) {
        if (method === "GET") return h.listTagGroups(req);
        if (method === "POST") return h.createTagGroup(req);
      }
      if (segments.length === 2 && id) {
        if (method === "PATCH" || method === "PUT") return h.updateTagGroup(req, idCtx(id));
        if (method === "DELETE") return h.deleteTagGroup(req, idCtx(id));
      }
      break;

    case "media":
      if (segments.length === 1) {
        if (method === "GET") return h.listMedia(req);
        if (method === "POST") return h.uploadMedia(req);
      }
      break;

    case "upload":
      if (segments.length === 1 && method === "POST") return h.uploadMedia(req);
      break;
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export const GET = (req: Request, ctx: BlogCtx) => dispatch(req, ctx);
export const POST = (req: Request, ctx: BlogCtx) => dispatch(req, ctx);
export const PATCH = (req: Request, ctx: BlogCtx) => dispatch(req, ctx);
export const PUT = (req: Request, ctx: BlogCtx) => dispatch(req, ctx);
export const DELETE = (req: Request, ctx: BlogCtx) => dispatch(req, ctx);
