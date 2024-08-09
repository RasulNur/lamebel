"use client";

import useHeaderSize from "@/hooks/useHeaderSize";
import { IBlockForScrollProps } from "@/types/props.types";

export default function BlockForScroll({ id }: IBlockForScrollProps) {
    const { height } = useHeaderSize();

    return (
        <div id={id} className="absolute" style={{ top: `-${height}px` }}></div>
    );
}
