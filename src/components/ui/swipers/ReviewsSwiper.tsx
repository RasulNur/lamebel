"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Fancybox from "@/components/ui/fancybox/Fancybox";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewsSwiper() {
    return (
        <div className="section-header-wrapper">
            <SectionHeader title="Видео отзывы" subtitle="О компании" />
            <Fancybox>
                <Swiper
                    slidesPerView={1.2}
                    speed={600}
                    spaceBetween={24}
                    autoplay={{ delay: 10000 }}
                    modules={[Autoplay, Pagination]}
                    className="swiper-with-grid reviews-swiper"
                    breakpoints={{
                        460: { slidesPerView: 1.5 },
                        560: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        clickable: true,
                        type: "bullets",
                        hiddenClass: "!hidden",
                    }}>
                    {Array(6)
                        .fill("")
                        .map((el, id) => {
                            return (
                                <SwiperSlide key={id} className="h-auto">
                                    <div
                                        data-fancybox="gallery"
                                        data-src={
                                            "https://www.youtube.com/embed/4g44AWUCcCs?si=u0LLq7w80Jg-dSf2"
                                        }>
                                        <Image
                                            src="/images/review.jpg"
                                            alt=""
                                            width={490}
                                            height={360}
                                            className="w-full xl:h-[360px] md:h-[300px] h-[260px] object-cover object-center"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </Fancybox>
        </div>
    );
}
