"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

export interface IProduct {
    id: number;
    title: string;
    img: string;
}

const products: IProduct[] = [
    {
        id: 0,
        title: "Угловой диван-кровать",
        img: "/images/categories/01.png",
    },
    {
        id: 1,
        title: "Угловой диван-кровать 'Mardin Light Gray'",
        img: "/images/categories/02.png",
    },
    {
        id: 2,
        title: "Диван-кровать",
        img: "/images/categories/03.png",
    },
    {
        id: 3,
        title: "Угловой диван-кровать 'Mardin Light Gray Super Deluxe'",
        img: "/images/categories/04.png",
    },
    {
        id: 4,
        title: "Угловой диван-кровать",
        img: "/images/categories/01.png",
    },
    {
        id: 5,
        title: "Угловой диван-кровать 'Mardin Light Gray'",
        img: "/images/categories/02.png",
    },
    {
        id: 6,
        title: "Диван-кровать",
        img: "/images/categories/03.png",
    },
    {
        id: 7,
        title: "Угловой диван-кровать 'Mardin Light Gray Super Deluxe'",
        img: "/images/categories/04.png",
    },
    {
        id: 8,
        title: "Угловой диван-кровать",
        img: "/images/categories/01.png",
    },
    {
        id: 9,
        title: "Угловой диван-кровать 'Mardin Light Gray'",
        img: "/images/categories/02.png",
    },
    {
        id: 10,
        title: "Диван-кровать",
        img: "/images/categories/03.png",
    },
    {
        id: 11,
        title: "Угловой диван-кровать 'Mardin Light Gray Super Deluxe'",
        img: "/images/categories/04.png",
    },
];

export default function ProductsSwiper() {
    return (
        <div className="flex flex-col gap-[60px]">
            <SectionHeader
                title="ШИРОКИЙ АССОРТИМЕНТ"
                subtitle="Наша Продукция"
            />

            <Swiper
                slidesPerView={1.2}
                speed={600}
                spaceBetween={24}
                // autoplay={{ delay: 10000 }}
                modules={[Autoplay, Pagination]}
                className="swiper-with-grid products-swiper"
                breakpoints={{
                    370: { slidesPerView: 1.5 },
                    520: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                pagination={{
                    clickable: true,
                    type: "bullets",
                    hiddenClass: "!hidden",
                }}>
                {products.map((product) => {
                    return (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
