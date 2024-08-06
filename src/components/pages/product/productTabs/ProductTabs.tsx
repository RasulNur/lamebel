"use client";

import { SetState } from "@/types/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import ProductDescription from "./productDescription/ProductDescription";
import ProductReviews from "./productReviews/ProductReviews";
import ProductСharacteristics from "./productСharacteristics/ProductСharacteristics";
import { IProductAttributes, ISingleProduct } from "@/types/api/products.types";
import BlockForScroll from "../../../ui/BlockForScroll";
import { Lang } from "@/types/api/api.types";
import { IReviews } from "@/types/api/reviews.types";

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
    lang,
    reviews,
}: {
    tabIndex: number;
    setTabIndex: SetState<number>;
    productAttributes: IProductAttributes;
    product: ISingleProduct;
    lang: Lang;
    reviews: IReviews;
}) {
    return (
        <TabGroup
            selectedIndex={tabIndex}
            onChange={setTabIndex}
            className="relative flex flex-col gap-10">
            <BlockForScroll id="product-tabs" />

            <TabList className="flex sm:flex-row flex-col sm:items-center gap-4">
                {tabs.map((tab) => {
                    return (
                        <Tab as={Fragment} key={tab.id}>
                            {({ selected }) => (
                                <button
                                    className={`custom-btn hover:border-main outline-none text-main ${
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
                        lang={lang}
                        reviews={reviews}
                    />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
}
