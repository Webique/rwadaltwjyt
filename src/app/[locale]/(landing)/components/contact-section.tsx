"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

const getContactInfo = (tContact: any) => [
  {
    icon: Phone,
    title: tContact("contactInfo.phone"),
    value: tContact("contactInfo.phoneValue"),
    description: tContact("contactInfo.phoneDesc")
  },
  {
    icon: Mail,
    title: tContact("contactInfo.email"),
    value: tContact("contactInfo.emailValue"),
    description: tContact("contactInfo.emailDesc")
  },
  {
    icon: MapPin,
    title: tContact("contactInfo.location"),
    value: tContact("contactInfo.locationValue"),
    description: tContact("contactInfo.locationDesc")
  },
  {
    icon: Clock,
    title: tContact("contactInfo.workingHours"),
    value: tContact("contactInfo.workingHoursValue"),
    description: tContact("contactInfo.workingHoursDesc")
  }
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/966509645040",
    color: "text-green-500"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rwadaltwjyt@gmail.com",
    color: "text-blue-500"
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+966509645040",
    color: "text-primary"
  }
];

export default function ContactSection() {
  const tContact = useTranslations("IndexPage.ContactSection");

  return (
    <section id="contact" className="bg-muted/30 max-w-screen overflow-hidden">
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
            {tContact("title")}{" "}
            <span className="text-primary">{tContact("touch")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            {tContact("description")}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-foreground mb-6 text-3xl font-bold">
                {tContact("contactInfo.title")}
              </h3>
              <p className="text-muted-foreground mb-8">
                {tContact("contactInfo.description")}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {getContactInfo(tContact).map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <info.icon className="text-primary h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-foreground mb-2 text-xl font-bold">
                          {info.title}
                        </h4>
                        <p className="text-primary mb-1 text-lg font-semibold">
                          {info.value}
                        </p>
                        <p className="text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-foreground text-xl font-bold">
                {tContact("quickContact")}
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background border-primary/20 hover:border-primary/40 flex items-center space-x-2 rounded-lg border px-6 py-3 transition-colors"
                  >
                    <link.icon className={`h-5 w-5 ${link.color}`} />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground mb-2 text-3xl font-bold">
                    {tContact("form.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {tContact("form.description")}
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-foreground mb-2 block text-sm font-medium">
                        {tContact("form.firstName")}
                      </label>
                      <input
                        type="text"
                        className="border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                        placeholder={tContact("form.firstNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="text-foreground mb-2 block text-sm font-medium">
                        {tContact("form.lastName")}
                      </label>
                      <input
                        type="text"
                        className="border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                        placeholder={tContact("form.lastNamePlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      {tContact("form.email")}
                    </label>
                    <input
                      type="email"
                      className="border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                      placeholder={tContact("form.emailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      {tContact("form.phone")}
                    </label>
                    <input
                      type="tel"
                      className="border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                      placeholder={tContact("form.phonePlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      {tContact("form.serviceInterest")}
                    </label>
                    <select className="border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2">
                      <option value="">{tContact("form.selectService")}</option>
                      <option value="hr">{tContact("form.hrService")}</option>
                      <option value="admin">
                        {tContact("form.adminService")}
                      </option>
                      <option value="gov">{tContact("form.govService")}</option>
                      <option value="consulting">
                        {tContact("form.consultingService")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      {tContact("form.message")}
                    </label>
                    <textarea
                      rows={4}
                      className="border-border focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                      placeholder={tContact("form.messagePlaceholder")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center space-x-2 rounded-lg px-6 py-4 font-semibold transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    <span>{tContact("form.sendMessage")}</span>
                  </motion.button>
                </form>

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-green-200 bg-green-50 p-4"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800">
                        {tContact("whatsapp.title")}
                      </h4>
                      <p className="text-sm text-green-600">
                        {tContact("whatsapp.description")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
