import type { Metadata } from "next";
import { MorfoosGlobalProvider } from "@morfoos/core/providers";
import "./globals.css";

// Fallback baseline metadata metrics
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://morfoos.fi"),
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>
        {/* Automatically activates case-insensitive link delegation and form monitoring */}
        <MorfoosGlobalProvider 
          siteId={process.env.NEXT_PUBLIC_SITE_ID || "development_fallback"}
          autoTrackClicks={true}
        >
          {children}
        </MorfoosGlobalProvider>
      </body>
    </html>
  );
}