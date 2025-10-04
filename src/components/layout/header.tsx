"use client";

import { Mail, Phone } from "lucide-react";
import { AnimatePresence, type Variants } from "motion/react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const mobileNavItemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b",
          isMenuOpen
            ? "bg-background"
            : "bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur",
        )}
      >
        {/* Top Bar - Hidden on mobile */}
        <div className="bg-primary text-primary-foreground hidden py-2 md:block">
          <div className="layout">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <m.a
                  href={`tel:${siteConfig.support.phone}`}
                  className="flex items-center space-x-2 hover:underline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">{siteConfig.support.phone}</span>
                </m.a>
                <m.a
                  href={`mailto:${siteConfig.support.email}`}
                  className="flex items-center space-x-2 hover:underline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.support.email}</span>
                </m.a>
              </div>
              <m.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-sm">{t("available24_7")}</span>
                <LocaleSwitcher className="text-white" isTop={true} />
              </m.div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="layout">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Logo smallInMobile />
            </m.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 md:flex">
              {navItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-foreground hover:text-primary relative font-medium transition-colors",
                      "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current",
                      "before:transition-all before:duration-300 hover:before:w-full",
                    )}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
            </nav>

            {/* CTA  */}
            <div className="hidden items-center space-x-4 md:flex">
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center"
              >
                <Button
                  className="group me-2 rounded-full px-5 py-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:inline-flex"
                  asChild
                >
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("cta")}
                  </a>
                </Button>
              </m.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center"
              >
                <LocaleSwitcher className="w-auto" isTop={false} />

                <button
                  className="text-foreground hover:bg-muted rounded-md p-2 transition-all duration-300 hover:scale-105"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <div className="space-y-1.5">
                    <m.div
                      animate={
                        isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                    <m.div
                      animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                    <m.div
                      animate={
                        isMenuOpen
                          ? { rotate: -45, y: -6 }
                          : { rotate: 0, y: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="h-0.5 w-6 bg-current"
                    />
                  </div>
                </button>
              </m.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <m.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="bg-background overflow-hidden border-t md:hidden"
              >
                <nav className="py-6">
                  <div className="space-y-4 px-4">
                    {navItems.map((item, index) => (
                      <m.div key={index} variants={mobileNavItemVariants}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-foreground hover:text-primary hover:bg-primary/10 focus:ring-primary block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                          {item.label}
                        </Link>
                      </m.div>
                    ))}

                    {/* CTA in Mobile Menu */}
                    <m.div
                      variants={mobileNavItemVariants}
                      className="border-t pt-4"
                    >
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-lg transition-all duration-300 hover:shadow-2xl"
                        asChild
                      >
                        <a
                          href={siteConfig.links.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t("cta")}
                        </a>
                      </Button>
                    </m.div>
                  </div>
                </nav>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
