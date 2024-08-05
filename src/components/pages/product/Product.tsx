"use client";

import { ISingleProduct } from "@/types/api/products.types";
import ProductSidebar from "./productSidebar/ProductSidebar";
import ProductGallery from "./productGallery/ProductGallery";
import ProductTabs from "./productTabs/ProductTabs";
import { useState } from "react";

export default function Product({ product }: { product: ISingleProduct }) {
    const [tabIndex, setTabIndex] = useState<number>(0);

    return (
        <div className="flex flex-col md:gap-10 gap-5">
            <div className="grid xl:grid-cols-[1fr,400px] lg:grid-cols-[1fr,350px] md:gap-10 gap-5">
                <div className="flex flex-col gap-10">
                    <ProductGallery product={product} />
                    <div className="lg:block hidden">
                        <ProductTabs
                            tabIndex={tabIndex}
                            setTabIndex={setTabIndex}
                        />
                    </div>
                </div>

                <ProductSidebar product={product} setTabIndex={setTabIndex} />
            </div>
            <div className="lg:hidden">
                <ProductTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
            </div>
        </div>
    );
}
