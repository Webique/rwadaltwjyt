"use client";

import {
  Award,
  CheckCircle,
  Shield,
  Star,
  TrendingUp,
  Users
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

const getAchievements = (tAbout: any) => [
  {
    icon: Award,
    title: tAbout("achievements.experience"),
    description: tAbout("achievements.experienceDesc")
  },
  {
    icon: Users,
    title: tAbout("achievements.saudiWorkforce"),
    description: tAbout("achievements.saudiWorkforceDesc")
  },
  {
    icon: Shield,
    title: tAbout("achievements.compliance"),
    description: tAbout("achievements.complianceDesc")
  },
  {
    icon: TrendingUp,
    title: tAbout("achievements.trackRecord"),
    description: tAbout("achievements.trackRecordDesc")
  }
];

const getValues = (tAbout: any) => [
  {
    title: tAbout("values.excellence"),
    description: tAbout("values.excellenceDesc")
  },
  {
    title: tAbout("values.clientCentric"),
    description: tAbout("values.clientCentricDesc")
  },
  {
    title: tAbout("values.innovation"),
    description: tAbout("values.innovationDesc")
  },
  {
    title: tAbout("values.trust"),
    description: tAbout("values.trustDesc")
  }
];

export default function AboutSection() {
  const t = useTranslations("LocaleLayout");
  const tAbout = useTranslations("IndexPage.AboutSection");

  return (
    <section id="about" className="bg-background max-w-screen overflow-hidden">
      <div className="layout py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-foreground mb-6 text-4xl font-bold lg:text-5xl">
                  {tAbout("title")}{" "}
                  <span className="text-primary">Rawad Al-Tawjih</span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  {t("description")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-foreground text-2xl font-bold">
                  {tAbout("ourMission")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tAbout("ourMissionDesc")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-foreground text-2xl font-bold">
                  {tAbout("ourVision")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tAbout("ourVisionDesc")}
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-foreground text-2xl font-bold">
                {tAbout("ourValues")}
              </h3>
              <div className="grid gap-4">
                {getValues(tAbout).map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="text-foreground font-semibold">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div className="grid gap-6">
              {getAchievements(tAbout).map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <achievement.icon className="text-primary h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground mb-2 text-xl font-bold">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 border-primary/20 rounded-2xl border p-8"
            >
              <div className="space-y-6 text-center">
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <Star className="text-primary h-8 w-8" />
                  <h3 className="text-foreground text-2xl font-bold">
                    {tAbout("whyChooseUs")}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-primary mb-2 text-3xl font-bold">
                      18+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {tAbout("yearsExperience")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary mb-2 text-3xl font-bold">
                      100%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {tAbout("saudiWorkforce")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary mb-2 text-3xl font-bold">
                      500+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {tAbout("happyClients")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary mb-2 text-3xl font-bold">
                      24/7
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {tAbout("support")}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
