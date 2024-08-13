import CategoryCard from "@/components/ui/cards/CategoryCard";
import { ICatalogProps } from "@/types/props.types";

export default function Catalog({ categoriesTree }: ICatalogProps) {
    return (
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 max-[560px]:grid-cols-2 gap-5">
            {categoriesTree.data.map((category) => {
                return <CategoryCard key={category.id} category={category} />;
            })}
        </div>
    );
}
