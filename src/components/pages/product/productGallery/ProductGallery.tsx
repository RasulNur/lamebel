"use client";

import GalleryGrid from "./galleryGrid/GalleryGrid";
import GallerySwiper from "./gallerySwiper/GallerySwiper";
import { IProductGalleryProps } from "@/types/props.types";

export default function ProductGallery({ product }: IProductGalleryProps) {
    return (
        <>
            <div className="lg:block hidden">
                <GalleryGrid product={product} />
            </div>
            <div className="lg:hidden">
                <GallerySwiper product={product} />
            </div>
        </>
    );
}
