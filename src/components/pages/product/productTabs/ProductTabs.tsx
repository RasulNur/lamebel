"use client";

import { SetState } from "@/types/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";

const tabs = [
    { id: 0, title: "Xарактеристики" },
    { id: 1, title: "Описание" },
    { id: 2, title: "Отзывы" },
];

export default function ProductTabs({
    tabIndex,
    setTabIndex,
}: {
    tabIndex: number;
    setTabIndex: SetState<number>;
}) {
    return (
        <TabGroup
            selectedIndex={tabIndex}
            onChange={setTabIndex}
            className="relative flex flex-col gap-10">
            <div
                id="product-tabs"
                className="absolute lg:-top-[160px] -top-[95px]">
                {/* block for scrolling */}
            </div>

            <TabList className="flex items-center gap-4">
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
                <TabPanel>Content 1</TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </TabGroup>
    );
}
