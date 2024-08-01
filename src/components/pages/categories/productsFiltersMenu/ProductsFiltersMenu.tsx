"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { IProductsFiltersMenuProps } from "@/types/props.types";
import MenuWrapper from "../../../ui/MenuWrapper";
import ProductsFilters from "../productsFilters/ProductsFilters";
import ProductFiltersMenuBtn from "./ProductFiltersMenuBtn";

export default function ProductsFiltersMenu({
    attributes,
    categoryBrands,
    price,
    subCategories,
    parentCategory,
}: IProductsFiltersMenuProps) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <MenuWrapper
                closeModal={closeModal}
                isOpen={isOpen}
                menuBtn={<ProductFiltersMenuBtn openModal={openModal} />}
                menuContent={
                    <div className="flex flex-col gap-[30px] justify-between">
                        <div className="flex items-center justify-end">
                            <button
                                onClick={closeModal}
                                className="py-2 hover:opacity-60">
                                <Icon name="x" className="stroke-primary" />
                            </button>
                        </div>
                        <ProductsFilters
                            attributes={attributes}
                            categoryBrands={categoryBrands}
                            price={price}
                            subCategories={subCategories}
                            parentCategory={parentCategory}
                        />
                    </div>
                }
            />
        </>
    );
}
