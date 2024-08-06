"use client";

import { IProducts } from "@/types/api/products.types";
import ProductCard from "./ProductCard";
import Pagination from "./pagination/Pagination";
import Empty from "./Empty";

export default function ProductsGrid({ products }: { products: IProducts }) {
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
