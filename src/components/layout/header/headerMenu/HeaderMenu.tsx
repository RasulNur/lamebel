"use client";

import MenuWrapper from "@/components/ui/MenuWrapper";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import HeaderMenuContent from "./headerMenuContent/HeaderMenuContent";
import { IHeaderMenuProps } from "@/types/props.types";

export default function HeaderMenu({ menu }: IHeaderMenuProps) {
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
                menuBtn={
                    <button
                        className="group main-btn w-max min-w-0 2xl:py-4 2xl:px-6 p-3"
                        onClick={openModal}>
                        <Icon
                            name="menu"
                            className="stroke-white group-hover:stroke-main"
                        />
                        <span className="2xl:inline-block hidden">Каталог</span>
                    </button>
                }
                menuContent={
                    <HeaderMenuContent menu={menu} closeModal={closeModal} />
                }
            />
        </>
    );
}
