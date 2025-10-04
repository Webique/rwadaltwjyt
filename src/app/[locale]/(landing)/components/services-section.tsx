"use client";

import { Briefcase, Building2, FileText, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.ServicesSection");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const services = [
    {
      id: "hr",
      title: t("servicesList.hr.title"),
      description: t("servicesList.hr.description"),
      icon: Users,
      features: [
        t("servicesList.hr.features.recruitment"),
        t("servicesList.hr.features.payroll"),
        t("servicesList.hr.features.relations"),
        t("servicesList.hr.features.performance")
      ]
    },
    {
      id: "admin",
      title: t("servicesList.admin.title"),
      description: t("servicesList.admin.description"),
      icon: FileText,
      features: [
        t("servicesList.admin.features.documents"),
        t("servicesList.admin.features.optimization"),
        t("servicesList.admin.features.support"),
        t("servicesList.admin.features.compliance")
      ]
    },
    {
      id: "government",
      title: t("servicesList.government.title"),
      description: t("servicesList.government.description"),
      icon: Building2,
      features: [
        t("servicesList.government.features.transactions"),
        t("servicesList.government.features.compliance"),
        t("servicesList.government.features.licenses"),
        t("servicesList.government.features.documents")
      ]
    },
    {
      id: "consulting",
      title: t("servicesList.consulting.title"),
      description: t("servicesList.consulting.description"),
      icon: Briefcase,
      features: [
        t("servicesList.consulting.features.planning"),
        t("servicesList.consulting.features.improvement"),
        t("servicesList.consulting.features.risk"),
        t("servicesList.consulting.features.growth")
      ]
    }
  ];

  const stats = [
    {
      number: 18,
      suffix: "+",
      label: t("stats.yearsExperience")
    },
    {
      number: 100,
      suffix: "%",
      label: t("stats.saudiWorkforce")
    },
    {
      number: 500,
      suffix: "+",
      label: t("stats.clientsServed")
    },
    {
      number: 24,
      suffix: "/7",
      label: t("stats.supportAvailable")
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-white pb-24">
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
            {t("title")} <span className="text-primary">{t("services")}</span>
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

        {/* Services Grid */}
        <div className="mx-auto mb-20 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <m.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="group h-full w-full max-w-md border-0 bg-white py-3 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-4 text-center sm:p-6">
                  {/* Icon */}
                  <div className="bg-primary/10 mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <m.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 10
                        }
                      }}
                      className="text-primary h-8 w-8"
                    >
                      <service.icon className="h-full w-full" />
                    </m.div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-gray-800">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-base leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">
                      {t("servicesProvided")}
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <m.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.05
                          }}
                          viewport={{ once: true }}
                          className="text-center text-base text-gray-600"
                        >
                          {feature}
                        </m.li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Button
                    size="lg"
                    className="hover:text-primary hover:border-primary border transition-all duration-300 hover:scale-105 hover:bg-white"
                    asChild
                  >
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("discoverMore")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </m.div>
          ))}
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
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-primary bg-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("cta.consultation")}
                </a>
              </Button>
              <Button
                size="lg"
                className="text-primary bg-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("cta.getStarted")}
                </a>
              </Button>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
