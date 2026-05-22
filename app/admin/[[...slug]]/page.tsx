import { AdminRouter } from "@morfoos/morfoos-os/admin-router";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function AdminCatchAllPage({ params }: PageProps) {
  // Safe Next.js App Router asynchronous resolution structure
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug || [];

  return (
    <AdminRouter 
      slug={currentSlug} 
      siteId={process.env.NEXT_PUBLIC_SITE_ID || "development"} 
    />
  );
}