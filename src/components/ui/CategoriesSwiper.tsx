"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import CategoryCard from "@/components/ui/CategoryCard";

export interface ICategory {
    id: number;
    title: string;
    img: string;
}

const categories: ICategory[] = [
    { id: 0, title: "Мягкая мебель", img: "/images/categories/01.png" },
    { id: 1, title: "Диваны", img: "/images/categories/02.png" },
    { id: 2, title: "Шкафы", img: "/images/categories/03.png" },
    { id: 3, title: "Офисная", img: "/images/categories/04.png" },
    { id: 4, title: "Детская", img: "/images/categories/05.png" },
    { id: 5, title: "Мягкая мебель", img: "/images/categories/01.png" },
    { id: 6, title: "Диваны", img: "/images/categories/02.png" },
    { id: 7, title: "Шкафы", img: "/images/categories/03.png" },
    { id: 8, title: "Офисная", img: "/images/categories/04.png" },
    { id: 9, title: "Детская", img: "/images/categories/05.png" },
];

export default function CategoriesSwiper() {
    return (
        <div className="flex flex-col gap-[60px]">
            <SectionHeader
                title="ШИРОКИЙ АССОРТИМЕНТ"
                subtitle="Наша Каталог"
            />

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
                {categories.map((category) => {
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
