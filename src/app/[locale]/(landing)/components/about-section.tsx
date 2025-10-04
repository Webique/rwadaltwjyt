"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const t = useTranslations("IndexPage.AboutSection");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const stats = [
    {
      number: 18,
      suffix: "+",
      label: t("achievements.experience"),
    },
    {
      number: 100,
      suffix: "%",
      label: t("achievements.saudiWorkforce"),
    },
    {
      number: 42,
      suffix: "+",
      label: t("achievements.compliance"),
    },
    {
      number: 100,
      suffix: "+",
      label: t("achievements.trackRecord"),
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold">
            {t("badge")}
          </span>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]"
          >
            <ExportedImage
              src="/images/about.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: dir === "rtl" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                {t("whyChooseUs")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                {t("whyChooseUsDesc")}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 bg-gray-50 shadow-sm transition-all hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="text-primary mb-3 text-4xl font-bold lg:text-5xl">
                        <AnimatedCounter
                          end={stat.number}
                          suffix={stat.suffix}
                          duration={2000}
                          delay={index * 200}
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
