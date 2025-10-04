"use client";

import {
  Award,
  Briefcase,
  Building2,
  Clock,
  Quote,
  Star,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.TestimonialsSection");

  const testimonials = [
    {
      id: "ahmed",
      name: t("testimonials.ahmed.name"),
      company: t("testimonials.ahmed.company"),
      position: t("testimonials.ahmed.position"),
      content: t("testimonials.ahmed.content"),
      icon: Users,
      rating: 5
    },
    {
      id: "fatima",
      name: t("testimonials.fatima.name"),
      company: t("testimonials.fatima.company"),
      position: t("testimonials.fatima.position"),
      content: t("testimonials.fatima.content"),
      icon: Award,
      rating: 5
    },
    {
      id: "mohammed",
      name: t("testimonials.mohammed.name"),
      company: t("testimonials.mohammed.company"),
      position: t("testimonials.mohammed.position"),
      content: t("testimonials.mohammed.content"),
      icon: Building2,
      rating: 5
    },
    {
      id: "noura",
      name: t("testimonials.noura.name"),
      company: t("testimonials.noura.company"),
      position: t("testimonials.noura.position"),
      content: t("testimonials.noura.content"),
      icon: Briefcase,
      rating: 5
    },
    {
      id: "khaled",
      name: t("testimonials.khaled.name"),
      company: t("testimonials.khaled.company"),
      position: t("testimonials.khaled.position"),
      content: t("testimonials.khaled.content"),
      icon: Clock,
      rating: 5
    },
    {
      id: "reem",
      name: t("testimonials.reem.name"),
      company: t("testimonials.reem.company"),
      position: t("testimonials.reem.position"),
      content: t("testimonials.reem.content"),
      icon: Building2,
      rating: 5
    }
  ];

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
    <section className="bg-primary/5 relative overflow-hidden py-24">
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

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="group h-full w-full border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Quote Icon */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="bg-primary/10 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
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
                        className="text-primary h-6 w-6"
                      >
                        <testimonial.icon className="h-full w-full" />
                      </m.div>
                    </div>
                    <Quote className="text-primary/20 h-8 w-8" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <m.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="text-primary h-5 w-5 fill-current" />
                      </m.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="mb-6 flex-1 text-base leading-relaxed text-gray-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-primary mt-1 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
