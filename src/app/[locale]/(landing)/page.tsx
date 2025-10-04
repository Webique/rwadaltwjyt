import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import ClientsSection from "./components/clients-section";
// import ContactSection from "./components/contact-section";
import HeroSection from "./components/hero-section";
import OurValuesSection from "./components/our-values-section";
import ProcessSection from "./components/process-section";
import ServicesSection from "./components/services-section";
import TestimonialsSection from "./components/testimonials-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OurValuesSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ClientsSection />
      {/* <ContactSection /> */}
      <WhatsAppFloat />
    </main>
  );
}
