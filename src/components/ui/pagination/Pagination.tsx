"use client";

import { IMeta } from "@/types/api/api.types";
import PaginationButton from "./PaginationButton";
import PaginationNumbers from "./PaginationNumbers";
import usePagination from "@/hooks/usePagination";

export default function Pagination({ meta }: { meta: IMeta }) {
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
