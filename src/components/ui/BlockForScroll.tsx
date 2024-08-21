"use client";

import useHeaderSize from "@/hooks/useHeaderSize";
import { IBlockForScrollProps } from "@/types/props/ui.types";

export default function BlockForScroll({ id }: IBlockForScrollProps) {
    const { height } = useHeaderSize();

    return (
        <div
            id={id}
            className="absolute transition-300"
            style={{ top: `-${height + 10}px` }}></div>
    );
}
