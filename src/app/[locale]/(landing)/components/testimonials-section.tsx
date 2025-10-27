"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.TestimonialsSection");

  const stats = [
    {
      number: 98,
      suffix: "%",
      label: t("stats.satisfaction"),
      description: t("stats.satisfactionDesc")
    },
    {
      number: 500,
      suffix: "+",
      label: t("stats.clients"),
      description: t("stats.clientsDesc")
    },
    {
      number: 18,
      suffix: "+",
      label: t("stats.experience"),
      description: t("stats.experienceDesc")
    },
    {
      number: 24,
      suffix: "/7",
      label: t("stats.support"),
      description: t("stats.supportDesc")
    }
  ];

  return (
    <section
      id="testimonials"
      className="bg-primary/5 relative overflow-hidden py-24"
    >
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
            {t("title")} <span className="text-primary">{t("clients")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            {t("description")}
          </p>
        </m.div>

        {/* Stats */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full border-0 bg-white shadow-sm transition-all hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-primary mb-3 text-4xl font-bold lg:text-5xl">
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={2000}
                        delay={index * 200}
                      />
                    </div>
                    <div className="mb-2 text-sm font-medium text-gray-900">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </div>
        </m.div>

      </div>
    </section>
  );
}
