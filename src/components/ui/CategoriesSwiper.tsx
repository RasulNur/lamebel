"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import CategoryCard from "@/components/ui/CategoryCard";
import { ICategoriesTree } from "@/types/api/categories.types";

export default function CategoriesSwiper({
    categories,
}: {
    categories: ICategoriesTree;
}) {
    return (
        <div className="section-header-wrapper">
            <SectionHeader title="ШИРОКИЙ АССОРТИМЕНТ" subtitle="Наш Каталог" />

            <Swiper
                slidesPerView={2}
                speed={600}
                spaceBetween={24}
                autoplay={{ delay: 10000 }}
                modules={[Autoplay, Pagination]}
                className="swiper-with-grid categories-swiper"
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        spaceBetween: 60,
                        slidesPerView: 5,
                    },
                    1536: {
                        spaceBetween: 100,
                        slidesPerView: 6,
                    },
                }}
                pagination={{
                    clickable: true,
                    type: "bullets",
                    hiddenClass: "!hidden",
                }}>
                {categories.data.map((category) => {
                    return (
                        <SwiperSlide key={category.id}>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
