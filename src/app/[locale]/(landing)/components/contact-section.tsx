"use client";

import * as m from "motion/react-m";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const contactInfo = [
    {
      icon: "📞",
      title: t("contactInfo.phone"),
      value: t("contactInfo.phoneValue"),
      description: t("contactInfo.phoneDesc"),
      color: "from-green-500 to-green-600"
    },
    {
      icon: "📧",
      title: t("contactInfo.email"),
      value: t("contactInfo.emailValue"),
      description: t("contactInfo.emailDesc"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📍",
      title: t("contactInfo.location"),
      value: t("contactInfo.locationValue"),
      description: t("contactInfo.locationDesc"),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🕒",
      title: t("contactInfo.workingHours"),
      value: t("contactInfo.workingHoursValue"),
      description: t("contactInfo.workingHoursDesc"),
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    t("form.hrService"),
    t("form.adminService"),
    t("form.govService"),
    t("form.consultingService")
  ];

  return (
    <section id="contact" className="bg-muted/30 max-w-screen overflow-hidden">
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
            {t("title")} <span className="text-primary">{t("touch")}</span>
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {t("description")}
          </p>
        </m.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {t("contactInfo.title")}
              </h3>
              <p className="mb-8 text-gray-600">
                {t("contactInfo.description")}
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div
                          className={`h-16 w-16 bg-gradient-to-r ${info.color} flex items-center justify-center rounded-full text-2xl text-white transition-transform duration-300 group-hover:scale-110`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 text-lg font-semibold text-gray-900">
                            {info.title}
                          </h4>
                          <p className="text-primary mb-1 text-xl font-bold">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-8 text-center text-white"
            >
              <h4 className="mb-2 text-xl font-bold">{t("whatsapp.title")}</h4>
              <p className="mb-4 text-green-100">{t("whatsapp.description")}</p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={() =>
                  window.open("https://wa.me/966509645040", "_blank")
                }
              >
                💬 تواصل عبر واتساب
              </Button>
            </m.div>
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: dir === "rtl" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {t("form.title")}
                  </h3>
                  <p className="text-gray-600">{t("form.description")}</p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        {t("form.firstName")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("form.firstNamePlaceholder")}
                        className="focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        {t("form.lastName")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("form.lastNamePlaceholder")}
                        className="focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      className="focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t("form.serviceInterest")}
                    </label>
                    <select className="focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2">
                      <option value="">{t("form.selectService")}</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t("form.message")}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("form.messagePlaceholder")}
                      className="focus:ring-primary w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-6 text-lg"
                  >
                    {t("form.sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}
