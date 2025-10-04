"use client";

import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Email from "@/assets/icons/email.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import Whatsapp2 from "@/assets/icons/whatsapp-2.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("clients"), href: "#clients" },
    { label: t("testimonials"), href: "#testimonials" }
  ];

  const services = [
    { label: t("hrServices"), href: "#hr" },
    { label: t("administrativeServices"), href: "#admin" },
    { label: t("governmentRelations"), href: "#government" },
    { label: t("businessConsulting"), href: "#consulting" }
  ];

  const socialLinks = [
    {
      name: t("socialMedia.instagram"),
      url: siteConfig.links.instagram,
      icon: Instagram
    },
    {
      name: t("socialMedia.tiktok"),
      url: siteConfig.links.tiktok,
      icon: Tiktok
    },
    {
      name: t("socialMedia.email"),
      url: `mailto:${siteConfig.support.email}`,
      icon: Email
    },
    {
      name: t("socialMedia.whatsapp"),
      url: siteConfig.support.whatsapp,
      icon: Whatsapp2
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="layout px-4 py-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo
              className="mb-6 ps-10"
              imgClassName="sm:size-36 size-36 rounded-none h-auto sm:h-auto"
              removeText
            />
            <p className="text-sm leading-relaxed opacity-90">
              {t("companyDescription")}
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("services")}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={service.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {service.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("contactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary h-4 w-4" />
                <span className="text-sm">{siteConfig.support.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary h-4 w-4" />
                <span className="text-sm">{siteConfig.support.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary h-4 w-4" />
                <span className="text-sm">{t("saudiArabia")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-primary h-4 w-4" />
                <span className="text-sm">{t("available24_7")}</span>
              </div>
            </div>

            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group inline-flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors"
              >
                <Whatsapp className="h-4 w-4 fill-white" />
                <span className="text-sm font-medium">
                  {t("connectViaWhatsApp")}
                </span>
                <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </a>
            </m.div>
          </m.div>
        </div>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-8 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <m.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full p-2"
                  title={social.name}
                >
                  <social.icon
                    className={cn(
                      "fill-secondary-foreground stroke-secondary-foreground size-5",
                      index === 2 && "fill-none"
                    )}
                  />
                </m.a>
              ))}
            </div>
          </div>
        </m.div>

        {/* Copyright */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-6 border-t pt-6 text-center"
        >
          <p className="text-sm opacity-75">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
