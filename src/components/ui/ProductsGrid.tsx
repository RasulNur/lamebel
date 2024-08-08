"use client";

import ProductCard from "./cards/ProductCard";
import Pagination from "./pagination/Pagination";
import Empty from "./Empty";
import { IProductsGridProps } from "@/types/props.types";

export default function ProductsGrid({ products }: IProductsGridProps) {
    return (
        <div className="flex flex-col gap-7">
            {(!products.data ||
                (products.data && products.data.length == 0)) && <Empty />}
            <div className="sidebar-products-grid">
                {products.data.map((product) => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
            {products.meta.last_page > 1 && <Pagination meta={products.meta} />}
        </div>
    );
}
