"use client";

import Icon from "@/components/ui/Icon";
import NewsCard from "@/components/ui/NewsCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const news = [
    {
        id: 0,
        title: "Мебель и товары",
        text: "Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке.",
        img: "/images/news/01.png",
    },
    {
        id: 1,
        title: "Мебель и товары для детской со скидками для детской со скидками",
        text: "Мы накопили опыт и ноу-хау, необходимые для того.",
        img: "/images/news/02.png",
    },
    {
        id: 2,
        title: "Мебель и товары со скидками",
        text: "Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке. Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке.",
        img: "/images/news/03.png",
    },
    {
        id: 3,
        title: "Мебель и товары",
        text: "Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке.",
        img: "/images/news/01.png",
    },
    {
        id: 4,
        title: "Мебель и товары для детской со скидками",
        text: "Мы накопили опыт и ноу-хау, необходимые для того.",
        img: "/images/news/02.png",
    },
    {
        id: 5,
        title: "Мебель и товары со скидками",
        text: "Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке. Мы накопили опыт и ноу-хау, необходимые для того, чтобы предложить нашим клиентам индивидуальные решения по переработке и упаковке.",
        img: "/images/news/03.png",
    },
];

export default function NewsSwiper() {
    return (
        <div className="section-header-wrapper">
            <div className="flex sm:flex-row flex-col gap-5 sm:items-center justify-between">
                <SectionHeader title="Новости" subtitle="нАШИ Новости" />
                <div className="news-swiper-nav flex items-center gap-3">
                    <button className="group flex-center lg:size-[60px] size-10 rounded-full bg-main border-2 border-main hover:bg-transparent swiper-prev">
                        <Icon
                            name="chevron"
                            className="stroke-white group-hover:stroke-main size-4 -rotate-180"
                        />
                    </button>
                    <button className="group flex-center lg:size-[60px] size-10 rounded-full bg-main border-2 border-main hover:bg-transparent swiper-next">
                        <Icon
                            name="chevron"
                            className="stroke-white group-hover:stroke-main size-4"
                        />
                    </button>
                </div>
            </div>

            <Swiper
                slidesPerView={1.2}
                spaceBetween={24}
                speed={600}
                // autoplay={{ delay: 10000 }}
                modules={[Autoplay, Navigation]}
                className="swiper-with-grid"
                navigation={{
                    prevEl: ".news-swiper-nav .swiper-prev",
                    nextEl: ".news-swiper-nav .swiper-next",
                    disabledClass: "opacity-80",
                    hiddenClass: "!hidden",
                }}
                breakpoints={{
                    450: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}>
                {news.map((item) => {
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
