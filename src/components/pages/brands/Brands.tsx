import { getBrands } from "@/api/brandsApi";
import BrandCard from "@/components/ui/cards/BrandCard";
import Pagination from "@/components/ui/pagination/Pagination";
import { IBrandsProps } from "@/types/props/pages.types";

export default async function Brands({ page, locale }: IBrandsProps) {
    const brands = await getBrands({
        quantity: 20,
        page: Number(page),
        locale,
    });
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="brands-grid w-full">
                {brands.data.map((brand) => {
                    return <BrandCard brand={brand} key={brand.id} />;
                })}
            </div>

            {brands.meta.last_page > 1 && <Pagination meta={brands.meta} />}
        </div>
    );
}
