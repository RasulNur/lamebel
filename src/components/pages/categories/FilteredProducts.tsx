import { getProducts } from "@/api/productsApi";
import { getTexts } from "@/api/textsApi";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProductCard from "@/components/ui/ProductCard";
import ProductsSwiper from "@/components/ui/ProductsSwiper";
import Pagination from "@/components/ui/pagination/Pagination";
import { ProductsFilter } from "@/types/api/products.types";
import { ICategoriesPagesProductsProps } from "@/types/props.types";

export default async function FilteredProducts({
    filterName,
    swiperName,
    page,
    lang,
}: ICategoriesPagesProductsProps) {
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

    const getTitle = (swiperName: ProductsFilter) => {
        return swiperName == "is_bestseller"
            ? text("Хиты продаж")
            : swiperName == "is_popular"
            ? text("Популярные товары")
            : swiperName == "is_new"
            ? text("Все новинки")
            : swiperName == "is_special"
            ? text("Специально для вас")
            : text("Все акции");
    };
    const getLink = (swiperName: ProductsFilter) => {
        return swiperName == "is_bestseller"
            ? "bestsellers"
            : swiperName == "is_popular"
            ? "popular"
            : swiperName == "is_new"
            ? "new"
            : swiperName == "is_special"
            ? "special"
            : "promotion";
    };

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
                    products={swiperProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Новинки"
                />
            </SectionWrapper>
        </>
    );
}
