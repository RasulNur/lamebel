"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Icon from "@/components/ui/Icon";
import FilterCategories from "../filterCategories/FilterCategories";
import FilterBrands from "../filterBrands/FilterBrands";
import FilterPrice from "../filterPrice/FilterPrice";
import FilterAttributes from "../filterAttributes/FilterAttributes";
import ClearFilters from "../clearFilters/ClearFilters";
import ParentCategory from "../parentCategory/ParentCategory";
import { useText } from "@/context/text.context";
import { IProductsFiltersMenuProps } from "@/types/props.types";

export default function ProductsFiltersMenu({
    attributes,
    categoryBrands,
    price,
    subCategories,
    parentCategory,
}: IProductsFiltersMenuProps) {
    let [isOpen, setIsOpen] = useState(false);
    const { text } = useText();
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <button
                type="button"
                className="py-2 transition-300 flex items-center gap-[10px] hover:invert-[0.4]"
                onClick={openModal}>
                <Icon name="filter" className="size-4 fill-primary" />

                {text("Фильтры")}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-[99]"
                    onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="linear duration-100 opacity"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="linear duration-100 opacity "
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black opacity-25 z-[2]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-[3]">
                        <div className="flex min-h-full justify-end text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="linear duration-300 opacity"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="linear duration-300 opacity "
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Dialog.Panel className="flex flex-col gap-[30px] justify-between w-full md:max-w-md transform overflow-y-scroll bg-white md:px-10 px-[30px] pt-[34px] pb-10 text-left align-middle shadow-xl transition-all">
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title
                                            as="h3"
                                            className="font-medium uppercase">
                                            Фильтровать по
                                        </Dialog.Title>

                                        <button
                                            onClick={closeModal}
                                            className="py-2 rounded-[4px]">
                                            <Icon
                                                name="x"
                                                className="size-4 stroke-primary"
                                            />
                                        </button>
                                    </div>

                                    <div className="flex flex-col gap-10 grow h-full">
                                        <ParentCategory
                                            parentCategory={parentCategory}
                                        />
                                        {subCategories.data.length > 0 && (
                                            <FilterCategories
                                                categories={subCategories}
                                            />
                                        )}
                                        {categoryBrands.data.length > 0 && (
                                            <FilterBrands
                                                brands={categoryBrands}
                                            />
                                        )}
                                        <FilterAttributes
                                            attributes={attributes}
                                        />
                                        <FilterPrice price={price} />
                                        <ClearFilters price={price} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
