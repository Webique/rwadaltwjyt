"use client";

import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");

  return (
    <section id="contact" className="bg-muted/30 max-w-screen overflow-hidden">
      <div className="layout py-20"></div>
    </section>
  );
}
