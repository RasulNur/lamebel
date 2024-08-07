"use client";

import Fancybox from "@/components/ui/fancybox/Fancybox";
import { IGalleryGridProps } from "@/types/props.types";
import Image from "next/image";

export default function GalleryGrid({ product }: IGalleryGridProps) {
    return (
        <Fancybox>
            <div className="grid grid-cols-2 gap-5">
                {product.data.gallery.map((galleryItem, id) => {
                    return (
                        <div
                            key={id}
                            className="w-full h-full relative min-h-[500px] bg-gray2 product-gallery-item"
                            data-fancybox="gallery"
                            data-src={galleryItem.original}>
                            <Image
                                src={galleryItem.original}
                                alt={product.data.name}
                                fill={true}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </Fancybox>
    );
}
