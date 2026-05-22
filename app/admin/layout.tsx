import "@/lib/morfoos";
import React from "react";

export const metadata = {
  title: "Morfoos OS — Hallintapaneeli",
  robots: "noindex, nofollow",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="morfoos-admin-wrapper min-h-screen bg-slate-50 antialiased">
      {children}
    </div>
  );
}