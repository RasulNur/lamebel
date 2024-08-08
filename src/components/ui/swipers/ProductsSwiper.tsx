"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "../cards/ProductCard";
import { IProductsSwiperProps } from "@/types/props.types";

export default function ProductsSwiper({
    title,
    subtitle,
    products,
}: IProductsSwiperProps) {
    return (
        <div className="section-header-wrapper">
            <SectionHeader title={title} subtitle={subtitle} />

            <Swiper
                slidesPerView={1.2}
                speed={600}
                spaceBetween={24}
                autoplay={{ delay: 10000 }}
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
                {products.data.map((product) => {
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
