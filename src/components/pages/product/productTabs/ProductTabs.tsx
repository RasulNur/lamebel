"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import ProductDescription from "./productDescription/ProductDescription";
import ProductReviews from "./productReviews/ProductReviews";
import ProductСharacteristics from "./productСharacteristics/ProductСharacteristics";
import BlockForScroll from "../../../ui/BlockForScroll";
import { IProductTabsProps } from "@/types/props/pages.types";

const tabs = [
    { id: 0, title: "Xарактеристики" },
    { id: 1, title: "Описание" },
    { id: 2, title: "Отзывы" },
];

export default function ProductTabs({
    tabIndex,
    setTabIndex,
    productAttributes,
    product,
    locale,
    reviews,
}: IProductTabsProps) {
    return (
        <TabGroup
            selectedIndex={tabIndex}
            onChange={setTabIndex}
            className="relative flex flex-col gap-10">
            <BlockForScroll id="product-tabs" />

            <TabList className="flex sm:flex-row flex-col items-center gap-4">
                {tabs.map((tab) => {
                    return (
                        <Tab as={Fragment} key={tab.id}>
                            {({ selected }) => (
                                <button
                                    className={`custom-btn hover:border-main outline-none text-main sm:w-max w-full ${
                                        selected
                                            ? "bg-main border-main text-white"
                                            : ""
                                    }`}>
                                    {tab.title}
                                </button>
                            )}
                        </Tab>
                    );
                })}
            </TabList>

            <TabPanels>
                <TabPanel>
                    <ProductСharacteristics
                        productAttributes={productAttributes}
                    />
                </TabPanel>

                <TabPanel>
                    <ProductDescription product={product} />
                </TabPanel>

                <TabPanel>
                    <ProductReviews
                        product={product}
                        locale={locale}
                        reviews={reviews}
                    />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
}
