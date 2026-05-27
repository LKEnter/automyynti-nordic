import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import RecentSection from "./components/RecentSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaBanner from "./components/CtaBanner";
import ContactSection from "./components/ContactSection";

// 1. Compile immutable page structural SEO parameters
export const generateMetadata = () => generateMorfoosSEO({
  title: "Esimerkki Yritys Oy | LVI-Asennus & Huolto",
  description: "Laadukkaat ja sertifioidut LVI-asennukset ammattitaidolla alueellasi. Pyydä tarjous jo tänään.",
  path: "/",
  ogImage: "/assets/default-og.jpg"
});

export default function Page() {
  return (
    <main className="w-full">
      {/* 2. Structured JSON-LD Schema data injected cleanly into the markup */}
      <LocalBusinessSchema 
        name="Matinkylän Auto"
        phone="+35898842635"
        email="tuomo.saaristo@matinkylanauto.fi"
        address={{
          streetAddress: "Hannuksenpelto 4",
          addressLocality: "Espoo",
          postalCode: "02270",
          addressCountry: "FI"
        }}
      />
      
      <Hero />

      <ServicesSection />
      <RecentSection />
      <AboutSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaBanner />
      <ContactSection />
    </main>
  );
}