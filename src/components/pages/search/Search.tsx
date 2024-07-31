import { IProducts } from "@/types/api/products.types";
import ProductsGrid from "@/components/ui/ProductsGrid";
import SearchForm from "@/components/ui/SearchForm";

export default function Search({ products }: { products: IProducts }) {
    return (
        <div className="products-grid-wrapper">
            <SearchForm />

            <ProductsGrid products={products} />
        </div>
    );
}
