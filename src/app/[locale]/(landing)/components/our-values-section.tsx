"use client";

import { Award, Lightbulb, Shield, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export default function OurValuesSection() {
  const t = useTranslations("IndexPage.OurValuesSection");

  const values = [
    {
      title: t("values.excellence"),
      description: t("values.excellenceDesc"),
      icon: Award
    },
    {
      title: t("values.clientCentric"),
      description: t("values.clientCentricDesc"),
      icon: Users
    },
    {
      title: t("values.innovation"),
      description: t("values.innovationDesc"),
      icon: Lightbulb
    },
    {
      title: t("values.trust"),
      description: t("values.trustDesc"),
      icon: Shield
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-20 text-center">
            <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold">
              {t("badge")}
            </span>
            <h3 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              {t("title")}
            </h3>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <value.icon className="text-primary h-8 w-8" />
                    </div>
                    <h4 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-800">
                      {value.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                      {value.description}
                    </p>
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
