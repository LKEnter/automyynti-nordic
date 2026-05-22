import "@/lib/morfoos";
import { createAdminAnalyticsGET, createRequireMorfoosAdmin } from "@morfoos/morfoos-os/server";

export const GET = createAdminAnalyticsGET({
  requireAdmin: createRequireMorfoosAdmin(),
  defaultSiteId: process.env.NEXT_PUBLIC_SITE_ID,
});
