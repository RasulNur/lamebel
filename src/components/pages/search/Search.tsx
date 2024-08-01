import { IProducts } from "@/types/api/products.types";
import ProductsGrid from "@/components/ui/ProductsGrid";
import SearchForm from "@/components/ui/SearchForm";

export default function Search({
    products,
    keyword,
}: {
    products: IProducts;
    keyword: string;
}) {
    return (
        <div className="products-grid-wrapper">
            <SearchForm keyword={keyword} />

            <ProductsGrid products={products} />
        </div>
    );
}
