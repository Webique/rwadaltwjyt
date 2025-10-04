"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.ServicesSection");
  // const locale = useLocale();
  // const dir = getLangDir(locale);

  const services = [
    {
      id: "hr",
      title: t("servicesList.hr.title"),
      description: t("servicesList.hr.description"),
      icon: "👥",
      color: "from-blue-500 to-blue-600",
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
      icon: "📋",
      color: "from-green-500 to-green-600",
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
      icon: "🏛️",
      color: "from-purple-500 to-purple-600",
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
      icon: "💼",
      color: "from-orange-500 to-orange-600",
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
      number: "18+",
      label: t("stats.yearsExperience")
    },
    {
      number: "100%",
      label: t("stats.saudiWorkforce")
    },
    {
      number: "500+",
      label: t("stats.clientsServed")
    },
    {
      number: "24/7",
      label: t("stats.supportAvailable")
    }
  ];

  return (
    <section id="services" className="bg-muted/30 max-w-screen overflow-hidden">
      <div className="layout py-20">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            {t("title")} <span className="text-primary">{t("services")}</span>
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            نقدم مجموعة شاملة من الخدمات المهنية المصممة لتلبية احتياجاتكم
            التجارية ومساعدتكم على تحقيق أهدافكم بكفاءة وفعالية.
          </p>
        </m.div>

        {/* Stats */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary mb-2 text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Services Grid */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <m.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-0">
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${service.color} p-8 text-white`}
                  >
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">
                      الخدمات المقدمة:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <m.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: featureIndex * 0.1
                          }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-600"
                        >
                          <div className="bg-primary mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                          {feature}
                        </m.li>
                      ))}
                    </ul>
                  </div>
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
          className="from-primary rounded-2xl bg-gradient-to-r to-blue-600 p-12 text-center text-white"
        >
          <h3 className="mb-4 text-3xl font-bold">{t("cta.title")}</h3>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            {t("cta.description")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="text-primary bg-white px-8 py-6 text-lg hover:bg-gray-100"
            >
              {t("cta.consultation")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:text-primary border-white px-8 py-6 text-lg text-white hover:bg-white"
            >
              {t("cta.portfolio")}
            </Button>
          </div>
        </m.div>
      </div>
    </section>
  );
}
