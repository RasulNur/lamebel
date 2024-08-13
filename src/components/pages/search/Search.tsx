import ProductsGrid from "@/components/ui/ProductsGrid";
import SearchForm from "@/components/ui/SearchForm";
import { ISearchProps } from "@/types/props.types";

export default function Search({ products, keyword, lang }: ISearchProps) {
    return (
        <div className="products-grid-wrapper">
            <SearchForm keyword={keyword} className="grow w-full" />

            <ProductsGrid products={products} lang={lang} />
        </div>
    );
}
