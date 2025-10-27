"use client";

import { Star } from "lucide-react";
import * as m from "motion/react-m";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function ReviewsSection() {
  const t = useTranslations("IndexPage.ReviewsSection");
  const locale = useLocale();
  const dir = getLangDir(locale);

  const reviews = [
    {
      id: "review-1",
      name: "عبدالعزيز بن ابراهيم",
      review: "الأخ أبو سعد صادق و محترف و نصوح وهذا اللي نحتاجه في أعمالنا",
      date: "قبل 11 شهرًا",
      rating: 5,
    },
    {
      id: "review-2",
      name: "Dr.AbdulRahman Al-Dayel",
      review: "المستشار سعدون بن سعد العبدان محترف و دقيق جداَ بتقديم جميع الخدمات الحكومية وخصوصَ إنشاء السجلات أو التعديل، ومطلع على جميع التعاملات الحكومية وكذلك سريع جداَ بتنفيذ الإجراءات ولا يحتاج تتابعه بإنجاز أعمالكم",
      date: "قبل سنة",
      rating: 5,
    },
    {
      id: "review-3",
      name: "خالد الدمخ",
      review: "مشاء الله تبارك الله تعاملهم ممتاز أبو سعد صاحبها محترم و فاهم",
      date: "قبل 10 أشهر",
      rating: 5,
    },
    {
      id: "review-4",
      name: "MEM 353",
      review: "نشكر الأخ ابو سعد حقيقة انه يستاهل الشكر على سرعة الانجاز واسال الله له التوفيق",
      date: "قبل سنة",
      rating: 5,
    },
    {
      id: "review-5",
      name: "مجد المطيري",
      review: "المستشار ابو سعد من الأشخاص المتميزين ويمتلك خبرة واسعه في الخدمات الحكومية والمعاملات والإجراءات العمالية",
      date: "قبل 11 شهرًا",
      rating: 5,
    },
    {
      id: "review-6",
      name: "موسى سعد",
      review: "الله يوفقه ما شاء الله تعامل من احسن ما يكون خدمني في كل شيء احتاجه وما قصر الله يسعده",
      date: "قبل 10 أشهر",
      rating: 5,
    },
    {
      id: "review-7",
      name: "Tiger !",
      review: "كل الشكر والتقدير للأخ أبو سعد على الدقه والأمانة والإنجاز السريع وإلى الأمام دائماً",
      date: "قبل سنة",
      rating: 5,
    },
    {
      id: "review-8",
      name: "محمد السالم",
      review: "ونعم الرجل و تعامل محترف الله يوفقهم",
      date: "قبل سنة",
      rating: 5,
    },
    {
      id: "review-9",
      name: "وليد",
      review: "الحقيقة المكتب يعمل باحترافية والفرق جدا متفاعل ومتجاوب ولديهم قدره على الانجاز",
      date: "قبل سنة",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            <span className="text-primary">آراء</span> العملاء
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("description")}
          </p>
        </m.div>

        {/* Carousel */}
        <div className="relative px-8 md:px-16">
          <Carousel
            dir={dir}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4"
                >
                  <Card className="h-full border-0 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6">
                      {/* Rating */}
                      <div className="mb-4 flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-amber-400 h-5 w-5 fill-current"
                          />
                        ))}
                      </div>

                      {/* Review Content */}
                      <p className="mb-6 text-gray-700 leading-relaxed">
                        {review.review}
                      </p>

                      {/* Author & Date */}
                      <div className="border-t border-gray-100 pt-4">
                        <div className="font-semibold text-gray-900">
                          {review.name}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          {review.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

