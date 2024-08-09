import {
    getProduct,
    getProductAttributes,
    getProducts,
} from "@/api/productsApi";
import { notFound } from "next/navigation";
import { getTexts } from "@/api/textsApi";
import PageHeader from "@/components/ui/PageHeader";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProductsSwiper from "@/components/ui/swipers/ProductsSwiper";
import Product from "@/components/pages/product/Product";
import { getReviews } from "@/api/reviewsApi";
import { getProductGroup } from "@/api/productGroupApi";
import { IPageParamsWithId } from "@/types/pageParams.types";
import ReviewsSwiper from "@/components/ui/swipers/reviewsSwiper/ReviewsSwiper";

export default async function ProductPage({
    params: { id, lang },
}: IPageParamsWithId) {
    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        lang,
    });
    const bestsellerProducts = await getProducts({
        is_bestseller: 1,
        quantity: 10,
        lang,
    });
    const productAttributes = await getProductAttributes({
        productId: product.data.id,
        lang,
    });
    const reviews = await getReviews({ lang, productId: product.data.id });
    const { text } = await getTexts({ lang });
    const productGroup = await getProductGroup({
        lang,
        productGroupId: product.data.product_group_id,
    });
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
                    products={bestsellerProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Хиты интернет продаж"
                />
            </SectionWrapper>
            <SectionWrapper className="last-section-margin">
                <ReviewsSwiper />
            </SectionWrapper>
        </>
    );
}

export async function generateMetadata({
    params: { id, lang },
}: IPageParamsWithId) {
    const slug = id.split("-").slice(1).join("-");

    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        lang,
    });

    if (!product || product.data.slug !== slug) notFound();

    return {
        title: product.data.seo_title,
        description: product.data.meta_description,
        keywords: product.data.meta_keywords,
    };
}
