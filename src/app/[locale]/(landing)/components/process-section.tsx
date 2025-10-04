"use client";

import {
  Award,
  CheckCircle2,
  Lightbulb,
  PhoneCall,
  SearchCheck,
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSection() {
  const t = useTranslations("IndexPage.ProcessSection");

  const steps = [
    {
      number: "01",
      title: t("steps.contact.title"),
      description: t("steps.contact.description"),
      icon: PhoneCall,
    },
    {
      number: "02",
      title: t("steps.analysis.title"),
      description: t("steps.analysis.description"),
      icon: SearchCheck,
    },
    {
      number: "03",
      title: t("steps.solution.title"),
      description: t("steps.solution.description"),
      icon: Lightbulb,
    },
    {
      number: "04",
      title: t("steps.implementation.title"),
      description: t("steps.implementation.description"),
      icon: CheckCircle2,
    },
    {
      number: "05",
      title: t("steps.evaluation.title"),
      description: t("steps.evaluation.description"),
      icon: Award,
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-white py-24">
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
            {t("description")}
          </p>
        </m.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="from-primary to-primary absolute inset-x-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 transform bg-gradient-to-r lg:block"></div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 bg-white text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className="bg-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="from-primary/90 to-primary relative overflow-hidden rounded-2xl bg-gradient-to-r p-12 text-center text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute -end-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-4 -start-4 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
              {t("cta.title")}
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("cta.description")}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h4 className="mb-2 text-xl font-bold">
                  {t("cta.features.precision.title")}
                </h4>
                <p className="text-white/90">
                  {t("cta.features.precision.description")}
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12" />
                </div>
                <h4 className="mb-2 text-xl font-bold">
                  {t("cta.features.partnership.title")}
                </h4>
                <p className="text-white/90">
                  {t("cta.features.partnership.description")}
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  <Lightbulb className="h-12 w-12" />
                </div>
                <h4 className="mb-2 text-xl font-bold">
                  {t("cta.features.innovation.title")}
                </h4>
                <p className="text-white/90">
                  {t("cta.features.innovation.description")}
                </p>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
