import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import InventorySection from "./components/InventorySection";
import FinancingSection from "./components/FinancingSection";
import FinancingPartnersSection from "./components/FinancingPartnersSection";
import ServicesSection from "./components/ServicesSection";
import PromiseSection from "./components/PromiseSection";
import WhyCustomersReturnSection from "./components/WhyCustomersReturnSection";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";

// 1. Compile immutable page structural SEO parameters
export const generateMetadata = () => generateMorfoosSEO({
  title: "Automyynti Nordic | Vaihtoautot ja rahoitus Helsingissä",
  description: "Huolella valittuja vaihtoautoja, joustava rahoitus ja rehellinen palvelu Helsingissä. Tutustu valikoimaan ja hae rahoitusta.",
  path: "/",
  ogImage: "/assets/default-og.jpg"
});

export default function Page() {
  return (
    <main className="w-full">
      {/* 2. Structured JSON-LD Schema data injected cleanly into the markup */}
      <LocalBusinessSchema
        name="Automyynti Nordic"
        phone="+358400000001"
        email="info@automyynti-nordic.fi"
        address={{
          streetAddress: "Esimerkkikatu 1",
          addressLocality: "Helsinki",
          postalCode: "00100",
          addressCountry: "FI"
        }}
      />

      <Hero />

      <InventorySection />
      <FinancingSection />
      <FinancingPartnersSection />
      <ServicesSection />
      <PromiseSection />
      <WhyCustomersReturnSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
