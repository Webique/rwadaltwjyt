"use client";

import * as m from "motion/react-m";

import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  // const t = useTranslations("IndexPage.TestimonialsSection");
  // const locale = useLocale();
  // const dir = getLangDir(locale);

  const testimonials = [
    {
      name: "أحمد محمد العتيبي",
      company: "شركة التقنية المتقدمة",
      position: "مدير الموارد البشرية",
      content:
        "شركة رواد التوجية قدمت لنا خدمات متميزة في إدارة الموارد البشرية. فريقهم المحترف ساعدنا في تحسين عملياتنا بشكل كبير.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "فاطمة السالم",
      company: "مؤسسة النجاح التجارية",
      position: "المدير التنفيذي",
      content:
        "نحن سعداء جداً بالخدمات الإدارية التي تقدمها رواد التوجية. دقة في المواعيد وجودة في الأداء.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "محمد عبدالله القحطاني",
      company: "مجموعة الأعمال الحديثة",
      position: "رئيس مجلس الإدارة",
      content:
        "العلاقات الحكومية كانت دائماً تحدياً لنا، لكن رواد التوجية جعلتها سهلة ومبسطة. ننصح بهم بشدة.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "نورا أحمد",
      company: "شركة التطوير الشامل",
      position: "مدير العمليات",
      content:
        "الاستشارات التجارية التي قدمتها لنا رواد التوجية ساعدتنا في اتخاذ قرارات استراتيجية صحيحة.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "خالد المطيري",
      company: "مؤسسة الابتكار التقني",
      position: "المدير المالي",
      content:
        "خدمة عملاء ممتازة ودعم على مدار الساعة. رواد التوجية يضعون رضا العميل في المقام الأول.",
      rating: 5,
      avatar: "👨‍🎓"
    },
    {
      name: "ريم العتيبي",
      company: "شركة الحلول المتكاملة",
      position: "مدير المشاريع",
      content:
        "فريق محترف وذو خبرة عالية. ساعدونا في إنجاز جميع المعاملات الحكومية بسرعة وكفاءة.",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="max-w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-20">
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
            آراء عملائنا
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-16 rounded-full"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            اكتشفوا ما يقوله عملاؤنا عن خدماتنا المهنية وخبرتنا في مجال الموارد
            البشرية والإدارة
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <m.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-yellow-400"
                      >
                        ⭐
                      </m.span>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="mb-6 text-lg leading-relaxed text-gray-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="from-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r to-blue-600 text-2xl text-white transition-transform duration-300 group-hover:scale-110">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position}
                      </div>
                      <div className="text-primary text-sm font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>

        {/* Stats */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-white p-12 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div>
              <div className="text-primary mb-2 text-4xl font-bold">98%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-4xl font-bold">500+</div>
              <div className="text-gray-600">عميل راضٍ</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-4xl font-bold">18+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-4xl font-bold">24/7</div>
              <div className="text-gray-600">دعم متاح</div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
