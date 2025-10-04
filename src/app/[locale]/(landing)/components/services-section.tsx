"use client";

import {
  Building2,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Users
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

const getServices = (tServices: any) => [
  {
    icon: Users,
    title: tServices("servicesList.hr.title"),
    description: tServices("servicesList.hr.description"),
    features: [
      tServices("servicesList.hr.features.recruitment"),
      tServices("servicesList.hr.features.payroll"),
      tServices("servicesList.hr.features.relations"),
      tServices("servicesList.hr.features.performance")
    ]
  },
  {
    icon: Building2,
    title: tServices("servicesList.admin.title"),
    description: tServices("servicesList.admin.description"),
    features: [
      tServices("servicesList.admin.features.documents"),
      tServices("servicesList.admin.features.optimization"),
      tServices("servicesList.admin.features.support"),
      tServices("servicesList.admin.features.compliance")
    ]
  },
  {
    icon: FileText,
    title: tServices("servicesList.government.title"),
    description: tServices("servicesList.government.description"),
    features: [
      tServices("servicesList.government.features.transactions"),
      tServices("servicesList.government.features.compliance"),
      tServices("servicesList.government.features.licenses"),
      tServices("servicesList.government.features.documents")
    ]
  },
  {
    icon: Shield,
    title: tServices("servicesList.consulting.title"),
    description: tServices("servicesList.consulting.description"),
    features: [
      tServices("servicesList.consulting.features.planning"),
      tServices("servicesList.consulting.features.improvement"),
      tServices("servicesList.consulting.features.risk"),
      tServices("servicesList.consulting.features.growth")
    ]
  }
];

const getStats = (tServices: any) => [
  { number: "18+", label: tServices("stats.yearsExperience") },
  { number: "100%", label: tServices("stats.saudiWorkforce") },
  { number: "500+", label: tServices("stats.clientsServed") },
  { number: "24/7", label: tServices("stats.supportAvailable") }
];

export default function ServicesSection() {
  const t = useTranslations("Footer");
  const tServices = useTranslations("IndexPage.ServicesSection");

  return (
    <section id="services" className="bg-muted/30 max-w-screen overflow-hidden">
      <div className="layout py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold lg:text-5xl">
            {tServices("title")}{" "}
            <span className="text-primary">{tServices("services")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            {t("companyDescription")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {getStats(tServices).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-primary mb-2 text-4xl font-bold lg:text-5xl">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {getServices(tServices).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-primary/20 hover:border-primary/40 group h-full p-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center space-y-6 text-center">
                  <div className="bg-primary/10 group-hover:bg-primary/20 rounded-2xl p-4 transition-colors">
                    <service.icon className="text-primary h-12 w-12" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-foreground text-2xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="w-full space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary/5 border-primary/20 p-8">
            <div className="mb-4 flex items-center justify-center space-x-4">
              <Clock className="text-primary h-8 w-8" />
              <h3 className="text-foreground text-2xl font-bold">
                {tServices("cta.title")}
              </h3>
            </div>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
              {tServices("cta.description")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 font-semibold transition-colors"
              >
                {tServices("cta.consultation")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-primary text-primary hover:bg-primary/5 rounded-lg border px-8 py-4 font-semibold transition-colors"
              >
                {tServices("cta.portfolio")}
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
