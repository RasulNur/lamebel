"use client";

import { IProductAttributes, ISingleProduct } from "@/types/api/products.types";
import ProductSidebar from "./productSidebar/ProductSidebar";
import ProductGallery from "./productGallery/ProductGallery";
import ProductTabs from "./productTabs/ProductTabs";
import { useState } from "react";
import { Lang } from "@/types/api/api.types";
import { IReviews } from "@/types/api/reviews.types";
import { IProductGroup } from "@/types/api/productGroup.types";

export default function Product({
    product,
    productAttributes,
    lang,
    reviews,
    productGroup,
}: {
    product: ISingleProduct;
    productAttributes: IProductAttributes;
    lang: Lang;
    reviews: IReviews;
    productGroup: IProductGroup | "Not exist";
}) {
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
                            productAttributes={productAttributes}
                            product={product}
                            lang={lang}
                            reviews={reviews}
                        />
                    </div>
                </div>

                <ProductSidebar
                    product={product}
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
