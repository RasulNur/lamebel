"use client";

import Icon from "@/components/ui/Icon";
import NewsCard from "@/components/ui/cards/NewsCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { INewsSwiperProps } from "@/types/props/pages.types";

export default function NewsSwiper({ news }: INewsSwiperProps) {
    return (
        <div className="section-header-wrapper">
            <div className="flex sm:flex-row flex-col gap-5 sm:items-center justify-between">
                <SectionHeader title="Новости" subtitle="нАШИ Новости" />
                <div className="news-swiper-nav flex items-center gap-3">
                    <button className="group flex-center lg:size-[60px] size-10 rounded-full bg-main border-2 border-main hover:enabled:bg-transparent swiper-prev">
                        <Icon
                            name="chevron"
                            className="stroke-white group-enabled:group-hover:stroke-main size-4 -rotate-180"
                        />
                    </button>
                    <button className="group flex-center lg:size-[60px] size-10 rounded-full bg-main border-2 border-main hover:enabled:bg-transparent swiper-next">
                        <Icon
                            name="chevron"
                            className="stroke-white group-enabled:group-hover:stroke-main size-4"
                        />
                    </button>
                </div>
            </div>

            <Swiper
                slidesPerView={1.2}
                spaceBetween={24}
                speed={600}
                autoplay={{ delay: 10000 }}
                modules={[Autoplay, Navigation]}
                className="swiper-with-grid"
                navigation={{
                    prevEl: ".news-swiper-nav .swiper-prev",
                    nextEl: ".news-swiper-nav .swiper-next",
                    disabledClass: "opacity-60",
                    hiddenClass: "!hidden",
                }}
                breakpoints={{
                    450: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}>
                {news.data.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className="h-auto">
                            <NewsCard singleNews={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
