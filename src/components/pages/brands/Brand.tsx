import { getProducts } from "@/api/productsApi";
import ProductsGrid from "@/components/ui/ProductsGrid";
import { IBrandProps } from "@/types/props/pages.types";
import BrandCategories from "./BrandCategories";

export default async function Brand({ brandId, page, lang }: IBrandProps) {
    const products = await getProducts({
        page: Number(page),
        quantity: 20,
        brands: [brandId],
        lang,
    });
    return (
        <div className="products-grid-wrapper">
            <BrandCategories brandId={brandId} lang={lang} />
            <ProductsGrid products={products} lang={lang} />
        </div>
    );
}
