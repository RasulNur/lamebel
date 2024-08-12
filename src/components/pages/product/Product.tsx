"use client";

import ProductSidebar from "./productSidebar/ProductSidebar";
import ProductGallery from "./productGallery/ProductGallery";
import ProductTabs from "./productTabs/ProductTabs";
import { useState } from "react";
import { IProductProps } from "@/types/props.types";

export default function Product({
    product,
    productAttributes,
    lang,
    reviews,
    productGroup,
}: IProductProps) {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const {
        h1_name,
        body,
        seo_title,
        meta_description,
        meta_keywords,
        book,
        ...productItem
    } = product.data;

    return (
        <div className="flex flex-col md:gap-10 gap-5">
            <div className="grid xl:grid-cols-[1fr,400px] lg:grid-cols-[1fr,350px] md:gap-10 gap-5">
                <div className="flex flex-col gap-10">
                    <ProductGallery product={product} />
                    <div className="lg:block hidden">
                        <ProductTabs
                            tabIndex={tabIndex}
                            setTabIndex={setTabIndex}
                            productAttributes={productAttributes}
                            product={product}
                            lang={lang}
                            reviews={reviews}
                        />
                    </div>
                </div>

                <ProductSidebar
                    product={productItem}
                    setTabIndex={setTabIndex}
                    attributes={productAttributes}
                    productGroup={productGroup}
                />
            </div>
            <div className="lg:hidden">
                <ProductTabs
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex}
                    productAttributes={productAttributes}
                    product={product}
                    lang={lang}
                    reviews={reviews}
                />
            </div>
        </div>
    );
}
