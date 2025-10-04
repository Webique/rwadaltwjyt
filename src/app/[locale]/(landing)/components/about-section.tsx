"use client";

import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.AboutSection");

  return (
    <section id="about" className="bg-background max-w-screen overflow-hidden">
      <div className="layout py-20"></div>
    </section>
  );
}
