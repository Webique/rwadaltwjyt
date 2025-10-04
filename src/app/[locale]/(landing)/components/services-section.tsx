"use client";

import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.ServicesSection");

  return (
    <section id="services" className="bg-muted/30 max-w-screen overflow-hidden">
      <div className="layout py-20"></div>
    </section>
  );
}
