import { getProducts } from "@/api/productsApi";
import ProductsGrid from "@/components/ui/ProductsGrid";
import { IBrandProps } from "@/types/props/pages.types";
import BrandCategories from "./BrandCategories";

export default async function Brand({ brandId, page, locale }: IBrandProps) {
    const products = await getProducts({
        page: Number(page),
        quantity: 20,
        brands: [brandId],
        locale,
    });
    return (
        <div className="products-grid-wrapper">
            <BrandCategories brandId={brandId} locale={locale} />
            <ProductsGrid products={products} locale={locale} />
        </div>
    );
}
