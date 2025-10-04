"use client";

import * as m from "motion/react-m";

import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSection() {
  // const t = useTranslations("IndexPage.ProcessSection");
  // const locale = useLocale();
  // const dir = getLangDir(locale);

  const steps = [
    {
      number: "01",
      title: "التواصل الأولي",
      description:
        "نتواصل معكم لفهم احتياجاتكم التجارية وتحديد الخدمات المناسبة",
      icon: "📞",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "التحليل والتقييم",
      description:
        "نقوم بتحليل متطلباتكم وتقييم الوضع الحالي لتطوير خطة عمل مخصصة",
      icon: "🔍",
      color: "from-green-500 to-green-600"
    },
    {
      number: "03",
      title: "تقديم الحلول",
      description: "نقدم لكم الحلول المناسبة مع شرح مفصل لكل خدمة ومزاياها",
      icon: "💡",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "04",
      title: "التنفيذ والمتابعة",
      description:
        "نبدأ في تنفيذ الخدمات مع متابعة مستمرة لضمان تحقيق النتائج المطلوبة",
      icon: "⚡",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      title: "التقييم والتحسين",
      description: "نقيم النتائج ونعمل على التحسين المستمر لضمان رضاكم التام",
      icon: "📈",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="max-w-screen overflow-hidden bg-white py-20">
      <div className="layout">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            كيف نعمل معكم
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            نتبع منهجية عمل منظمة ومحترفة لضمان تقديم أفضل الخدمات وتحقيق
            أهدافكم التجارية
          </p>
        </m.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="from-primary to-primary absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 transform bg-gradient-to-r via-blue-500 lg:block"></div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div
                        className={`mx-auto h-20 w-20 bg-gradient-to-r ${step.color} flex items-center justify-center rounded-full text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110`}
                      >
                        {step.number}
                      </div>
                      {/* Icon */}
                      <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="group-hover:text-primary mb-4 text-xl font-bold text-gray-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="from-primary rounded-2xl bg-gradient-to-r to-blue-600 p-12 text-center text-white">
            <h3 className="mb-6 text-3xl font-bold">
              لماذا تختارون رواد التوجية؟
            </h3>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="mb-4 text-5xl">🎯</div>
                <h4 className="mb-2 text-xl font-bold">دقة في التنفيذ</h4>
                <p className="text-white/90">
                  نلتزم بالمواعيد المحددة ونقدم خدمات عالية الجودة
                </p>
              </div>
              <div>
                <div className="mb-4 text-5xl">🤝</div>
                <h4 className="mb-2 text-xl font-bold">شراكة حقيقية</h4>
                <p className="text-white/90">
                  نعمل كشريك حقيقي لنجاحكم وليس مجرد مقدم خدمة
                </p>
              </div>
              <div>
                <div className="mb-4 text-5xl">💡</div>
                <h4 className="mb-2 text-xl font-bold">حلول مبتكرة</h4>
                <p className="text-white/90">
                  نقدم حلولاً مبتكرة ومخصصة لاحتياجاتكم الخاصة
                </p>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
