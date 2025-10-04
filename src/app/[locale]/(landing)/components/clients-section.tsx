"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const ClientsSection = () => {
  const t = useTranslations("IndexPage.ClientsSection");

  const locale = useLocale();
  const dir = getLangDir(locale);

  const items = [
    { src: "/images/clients/1.png", width: 150, height: 150 },
    { src: "/images/clients/2.png", width: 150, height: 150 },
    { src: "/images/clients/3.png", width: 150, height: 150 },
    { src: "/images/clients/4.png", width: 150, height: 150 },
    { src: "/images/clients/5.png", width: 213, height: 142 },
    { src: "/images/clients/6.png", width: 150, height: 150 },
    { src: "/images/clients/7.png", width: 150, height: 150 },
    { src: "/images/clients/8.png", width: 150, height: 150 },
    { src: "/images/clients/9.png", width: 150, height: 150 },
    { src: "/images/clients/10.png", width: 150, height: 150 },
    { src: "/images/clients/11.png", width: 150, height: 150 }
  ];

  const achievements = [
    {
      number: "18+",
      label: t("achievements.yearsExperience"),
      description: t("achievements.yearsExperienceDesc")
    },
    {
      number: "100%",
      label: t("achievements.saudiWorkforce"),
      description: t("achievements.saudiWorkforceDesc")
    },
    {
      number: "500+",
      label: t("achievements.clientsServed"),
      description: t("achievements.clientsServedDesc")
    },
    {
      number: "24/7",
      label: t("achievements.supportAvailable"),
      description: t("achievements.supportAvailableDesc")
    }
  ];

  return (
    <section id="clients" className="relative bg-gray-50 py-24">
      <div className="relative">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout mb-16 text-center"
        >
          <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {t("description")}
          </p>
        </m.div>

        {/* Clients Carousel */}
        <Carousel
          dir={dir === "rtl" ? "ltr" : "rtl"}
          opts={{
            align: "start",
            loop: true,
            watchDrag: false
          }}
          plugins={[
            AutoScroll({
              speed: 1.5
            })
          ]}
          className="max-w-full overflow-hidden pb-10"
        >
          <CarouselContent>
            {[...items, ...items, ...items].map((partner, index) => (
              <CarouselItem
                key={index}
                className="flex basis-auto items-center px-2 ps-3"
              >
                <ExportedImage
                  src={partner.src}
                  alt={`client ${index + 1}`}
                  width={partner.width}
                  height={partner.height}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Achievements Stats */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="layout mb-16"
        >
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">
                  {achievement.number}
                </div>
                <div className="mb-2 text-lg font-semibold text-gray-900">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default ClientsSection;
