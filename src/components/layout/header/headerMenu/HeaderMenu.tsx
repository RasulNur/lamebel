"use client";

import MenuWrapper from "@/components/ui/MenuWrapper";
import { useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";
import HeaderMenuBtn from "./HeaderMenuBtn";

export default function HeaderMenu() {
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
                menuBtn={<HeaderMenuBtn openModal={openModal} />}
                menuContent={<HeaderMenuContent closeModal={closeModal} />}
            />
        </>
    );
}
