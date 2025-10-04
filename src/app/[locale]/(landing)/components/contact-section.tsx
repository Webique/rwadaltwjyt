"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");

  const contactInfo = [
    {
      icon: Phone,
      title: t("contactInfo.phone"),
      value: t("contactInfo.phoneValue"),
      description: t("contactInfo.phoneDesc"),
      href: "tel:+966509645040",
    },
    {
      icon: Mail,
      title: t("contactInfo.email"),
      value: t("contactInfo.emailValue"),
      description: t("contactInfo.emailDesc"),
      href: "mailto:" + t("contactInfo.emailValue"),
    },
    {
      icon: MapPin,
      title: t("contactInfo.location"),
      value: t("contactInfo.locationValue"),
      description: t("contactInfo.locationDesc"),
    },
    {
      icon: Clock,
      title: t("contactInfo.workingHours"),
      value: t("contactInfo.workingHoursValue"),
      description: t("contactInfo.workingHoursDesc"),
    },
  ];

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900">
            {t("title")} <span className="text-primary">{t("touch")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("description")}
          </p>
        </m.div>

        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Wrapper = info.href ? Link : "div";
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Wrapper
                  href={info.href || "#"}
                  target={info.href ? "_blank" : undefined}
                  className={info.href ? "block" : ""}
                >
                  <Card className="bg-primary/5 hover:bg-primary/10 border-0 shadow-sm transition-transform hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="bg-primary mb-4 flex h-14 w-14 items-center justify-center rounded-xl">
                        <info.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h3>
                      <p dir="ltr" className="text-primary mt-1 font-medium">
                        {info.value}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </Wrapper>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
