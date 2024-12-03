import ProductsGrid from "@/components/ui/ProductsGrid";
import SearchForm from "@/components/ui/SearchForm";
import { ISearchProps } from "@/types/props/pages.types";

export default function Search({ products, keyword, locale }: ISearchProps) {
    return (
        <div className="products-grid-wrapper">
            <SearchForm keyword={keyword} className="grow w-full" />

            <ProductsGrid products={products} locale={locale} />
        </div>
    );
}
