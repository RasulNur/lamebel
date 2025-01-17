"use client";

import Carousel from "@/components/ui/fancybox/Carousel";
import Fancybox from "@/components/ui/fancybox/Fancybox";
import { IGallerySwiperProps } from "@/types/props/pages.types";
import Image from "next/image";

export default function GallerySwiper({ product }: IGallerySwiperProps) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: true,
                },
            }}>
            <Carousel
                options={{
                    infinite: true,
                }}>
                {product.data.gallery.map((img, id) => {
                    return (
                        <div
                            key={id}
                            className="f-carousel__slide relative flex-center"
                            data-fancybox="gallery"
                            data-src={img.original}>
                            <Image
                                alt={product.data.name}
                                title={product.data.name}
                                src={img.original}
                                className="w-full sm:h-[400px] h-[300px] object-contain"
                                width={400}
                                height={400}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </Fancybox>
    );
}
