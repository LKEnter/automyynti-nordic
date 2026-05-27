import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isDemo = process.env.MORFOOS_DEMO === "1";

export function middleware(request: NextRequest) {
  if (!isDemo) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/admin") ||
    pathname.startsWith("/api/cms")
  ) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/api/cms/:path*"],
};
