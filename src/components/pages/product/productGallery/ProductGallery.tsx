"use client";

import Fancybox from "@/components/ui/fancybox/Fancybox";
import { ISingleProduct } from "@/types/api/products.types";
import Image from "next/image";
import GalleryGrid from "./galleryGrid/GalleryGrid";
import GallerySwiper from "./gallerySwiper/GallerySwiper";

export default function ProductGallery({
    product,
}: {
    product: ISingleProduct;
}) {
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
