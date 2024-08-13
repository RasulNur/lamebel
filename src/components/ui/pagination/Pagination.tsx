"use client";

import { IPaginationProps } from "@/types/props.types";
import PaginationButton from "./PaginationButton";
import PaginationNumbers from "./PaginationNumbers";
import usePagination from "@/hooks/usePagination";

export default function Pagination({ meta }: IPaginationProps) {
    const { handleClick, visibleNumbers } = usePagination({ meta });

    return (
        <div className="flex items-center justify-between flex-wrap gap-5 mt-[60px]">
            <PaginationButton
                handleClick={handleClick}
                meta={meta}
                type="prev"
            />

            <PaginationNumbers
                meta={meta}
                visibleNumbers={visibleNumbers}
                handleClick={handleClick}
            />

            <PaginationButton
                handleClick={handleClick}
                meta={meta}
                type="next"
            />
        </div>
    );
}