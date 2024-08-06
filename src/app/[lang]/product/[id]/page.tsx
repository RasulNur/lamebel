import {
    getProduct,
    getProductAttributes,
    getProducts,
} from "@/api/productsApi";
import { notFound } from "next/navigation";
import { getTexts } from "@/api/textsApi";
import { Lang } from "@/types/api/api.types";
import PageHeader from "@/components/ui/PageHeader";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProductsSwiper from "@/components/ui/ProductsSwiper";
import Product from "@/components/pages/product/Product";
import { getReviews } from "@/api/reviewsApi";

export default async function ProductPage({
    params: { id, lang },
}: {
    params: { id: string; lang: Lang };
}) {
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
            {/* <div>
                <Product product={product} lang={lang} />
            </div> */}
        </>
    );
}

export async function generateMetadata({
    params: { id, lang },
}: {
    params: { id: string; lang: Lang };
}) {
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
