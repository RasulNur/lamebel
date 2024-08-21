"use client";

import PageHeader from "@/components/ui/PageHeader";
import { useText } from "@/context/text.context";
import { useViewed } from "@/context/viewed.context";
import Product from "./Product";
import ProductsSwiper from "@/components/ui/swipers/ProductsSwiper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ReviewsSwiper from "@/components/ui/swipers/ReviewsSwiper";
import ProductAdvantages from "./productAdvantages/ProductAdvantages";
import ViewedSwiper from "@/components/ui/swipers/ViewedSwiper";
import { useEffect } from "react";
import { IProductPageWrapperProps } from "@/types/props/pages.types";

export default function ProductPageWrapper({
    product,
    lang,
    productAttributes,
    reviews,
    productGroup,
    bestsellerProducts,
    similarProducts,
}: IProductPageWrapperProps) {
    const { addProduct } = useViewed();
    const { text } = useText();

    const {
        h1_name,
        body,
        seo_title,
        meta_description,
        meta_keywords,
        book,
        ...productItem
    } = product.data;

    useEffect(() => {
        addProduct({ product: productItem });
    }, [product]);

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [
                        { href: "/", title: text("Главная") },
                        {
                            href: `/categories/${product.data.categories[0].id}-${product.data.categories[0].slug}`,
                            title: product.data.categories[0].name,
                        },
                    ],

                    current: product.data.seo_title,
                }}
                title={product.data.seo_title}
            />

            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Product
                        product={product}
                        productAttributes={productAttributes}
                        lang={lang}
                        reviews={reviews}
                        productGroup={productGroup}
                    />
                </div>
            </section>
            <SectionWrapper className="bg-main-light section-padding">
                <ProductsSwiper
                    lang={lang}
                    products={bestsellerProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Хиты интернет продаж"
                />
            </SectionWrapper>
            <SectionWrapper>
                <ProductsSwiper
                    lang={lang}
                    products={similarProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Похожие товары"
                />
            </SectionWrapper>

            <SectionWrapper className="last-section-margin">
                <ReviewsSwiper />
            </SectionWrapper>

            <SectionWrapper className="bg-gray6 section-padding">
                <ProductAdvantages />
            </SectionWrapper>

            <ViewedSwiper productId={product.data.id} lang={lang} />
        </>
    );
}
