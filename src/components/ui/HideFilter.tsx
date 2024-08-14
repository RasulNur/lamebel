"use client";

import { IHideFilterProps } from "@/types/props/ui.types";
import Icon from "./Icon";

export default function HideFilter({
    setIsOpen,
    isOpen,
    title,
}: IHideFilterProps) {
    return (
        <button
            className={`group flex justify-between items-center w-full ${
                isOpen ? "mb-4" : ""
            }`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}>
            <span className="font-medium group-hover:text-main leading-150">
                {title}
            </span>
            <Icon
                name="chevron"
                className={`${
                    isOpen ? "-rotate-90" : "rotate-90"
                } stroke-primary group-hover:stroke-main !size-3`}
            />
        </button>
    );
}
