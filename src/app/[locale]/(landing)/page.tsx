import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
