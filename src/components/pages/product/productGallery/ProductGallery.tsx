"use client";

import { IProductGalleryProps } from "@/types/props/pages.types";
import GalleryGrid from "./galleryGrid/GalleryGrid";
import GallerySwiper from "./gallerySwiper/GallerySwiper";

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
