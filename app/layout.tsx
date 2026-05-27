import type { Metadata } from "next";
import { MorfoosGlobalProvider } from "@morfoos/core/providers";
import Header from "./components/Header";
import "./globals.css";

// Fallback baseline metadata metrics
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
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
          <Header />
          {children}
        </MorfoosGlobalProvider>
      </body>
    </html>
  );
}