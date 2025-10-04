"use client";

import * as m from "motion/react-m";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";
import ExportedImage from "next-image-export-optimizer";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const t = useTranslations("IndexPage.AboutSection");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const stats = [
    {
      number: "18+",
      label: t("achievements.experience"),
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      number: "100%",
      label: t("achievements.saudiWorkforce"),
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      number: "42+",
      label: t("achievements.compliance"),
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      number: "100+",
      label: t("achievements.trackRecord"),
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    }
  ];

  const values = [
    {
      title: t("values.excellence"),
      description: t("values.excellenceDesc"),
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      title: t("values.clientCentric"),
      description: t("values.clientCentricDesc"),
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: t("values.innovation"),
      description: t("values.innovationDesc"),
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: t("values.trust"),
      description: t("values.trustDesc"),
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  ];

  return (
    <section
      id="about"
      className="max-w-screen relative overflow-hidden bg-white py-20"
    >
      <div className="layout">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            {t("title")}
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Main Content */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ExportedImage
              src="/images/about.jpg"
              alt="رواد التوجية - فريق العمل المهني"
              width={600}
              height={400}
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: dir === "rtl" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {t("whyChooseUs")}
              </h3>
              <p className="mb-6 text-gray-600">{t("whyChooseUsDesc")}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <svg
                        className="mb-3 h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={stat.icon}
                        />
                      </svg>
                      <div className="mb-1 text-3xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("ourMission")}
                  </h4>
                  <p className="text-sm text-gray-600">{t("ourMissionDesc")}</p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    {t("ourVision")}
                  </h4>
                  <p className="text-sm text-gray-600">{t("ourVisionDesc")}</p>
                </CardContent>
              </Card>
            </div>
          </m.div>
        </div>

        {/* Values */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-3xl font-bold text-gray-900">
              {t("ourValues")}
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("ourValuesDesc") ||
                "Our core values that guide our professional services"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gray-100 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={value.icon}
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
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
