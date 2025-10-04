"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRight, Users, Building2, FileText, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  const t = useTranslations("LocaleLayout");
  const tHeader = useTranslations("Header");
  const tHero = useTranslations("IndexPage.HeroSection");

  return (
    <section
      id="home"
      className="from-background via-background to-primary/5 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br"
    >
      {/* Background Pattern */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5" />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-foreground text-5xl font-bold leading-tight lg:text-7xl">
                <span className="text-primary">{t("short_name")}</span>
              </h1>
              <p className="text-muted-foreground text-xl font-medium lg:text-2xl">
                {tHeader("siteDescription")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" className="group px-8 py-6 text-lg">
                {tHeader("cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                {tHero("learnMore")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Services Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-primary/20 hover:border-primary/40 h-full p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Users className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {tHero("humanResources")}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {tHero("humanResourcesDesc")}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-primary/20 hover:border-primary/40 h-full p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Building2 className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {tHero("administrative")}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {tHero("administrativeDesc")}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="border-primary/20 hover:border-primary/40 h-full p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <FileText className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {tHero("governmentRelations")}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {tHero("governmentRelationsDesc")}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="border-primary/20 hover:border-primary/40 h-full p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Shield className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {tHero("compliance")}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {tHero("complianceDesc")}
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-primary/10 absolute right-20 top-20 h-20 w-20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-secondary/10 absolute bottom-20 left-20 h-32 w-32 rounded-full blur-xl"
      />
    </section>
  );
}
