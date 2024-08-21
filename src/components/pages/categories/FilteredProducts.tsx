import { getProducts } from "@/api/productsApi";
import { getTexts } from "@/api/textsApi";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProductCard from "@/components/ui/cards/ProductCard";
import ProductsSwiper from "@/components/ui/swipers/ProductsSwiper";
import Pagination from "@/components/ui/pagination/Pagination";
import { IFilteredProductsProps } from "@/types/props/pages.types";

export default async function FilteredProducts({
    filterName,
    swiperName,
    page,
    lang,
}: IFilteredProductsProps) {
    const products = await getProducts({
        [filterName]: 1,
        quantity: 20,
        page: Number(page),
        lang,
    });

    const swiperProducts = await getProducts({
        page: 1,
        quantity: 10,
        [swiperName]: 1,
        lang,
    });
    const { text } = await getTexts({ lang });

    return (
        <>
            <section className="mt-5">
                <div className="container">
                    {(!products.data ||
                        (products.data && products.data.length == 0)) && (
                        <div className="size-full flex-center py-10">
                            <h3 className="text-[18px] font-medium uppercase">
                                {text("Ничего не найдено")}
                            </h3>
                        </div>
                    )}
                    {products.data && products.data.length > 0 && (
                        <div className="mb-[100px] flex flex-col gap-10">
                            <div className="products-grid">
                                {products.data.map((product) => {
                                    return (
                                        <ProductCard
                                            lang={lang}
                                            key={product.id}
                                            product={product}
                                        />
                                    );
                                })}
                            </div>
                            {products.meta.last_page > 1 && (
                                <Pagination meta={products.meta} />
                            )}
                        </div>
                    )}
                </div>
            </section>

            <SectionWrapper className="last-section-margin">
                <ProductsSwiper
                    lang={lang}
                    products={swiperProducts.data}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Новинки"
                />
            </SectionWrapper>
        </>
    );
}
