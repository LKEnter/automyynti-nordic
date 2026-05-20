import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";

// 1. Compile immutable page structural SEO parameters
export const generateMetadata = () => generateMorfoosSEO({
  title: "Esimerkki Yritys Oy | LVI-Asennus & Huolto",
  description: "Laadukkaat ja sertifioidut LVI-asennukset ammattitaidolla alueellasi. Pyydä tarjous jo tänään.",
  path: "/",
  ogImage: "/assets/default-og.jpg"
});

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* 2. Structured JSON-LD Schema data injected cleanly into the markup */}
      <LocalBusinessSchema 
        name="Esimerkki Yritys Oy"
        phone="+358401234567"
        email="info@esimerkkijohtava.fi"
        address={{
          streetAddress: "Keskuskatu 12 A",
          addressLocality: "Helsinki",
          postalCode: "00100",
          addressCountry: "FI"
        }}
      />
      
      <div className="text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
          Morfoos Boilerplate Actived
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Digitaalinen verkkotunnuspohja.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500">
          Tämä sivu on valmiiksi konfiguroitu tukemaan automaattista konversioseurantaa, schema-merkintöjä sekä optimoitua välimuistia.
        </p>
      </div>
    </main>
  );
}