"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IClearFiltersProps } from "@/types/props.types";

export default function ClearFilters({ price }: IClearFiltersProps) {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    return (
        <button
            type="button"
            onClick={() => {
                const params = new URLSearchParams(searchParams);

                params.delete("brands");
                params.delete("attributes");
                params.set("price", `${price.min}-${price.max}`);
                params.set("page", "1");
                replace(`${pathname}?${params.toString()}`, { scroll: false });
            }}
            className="main-btn max-w-none w-full">
            Очистить все фильтры
        </button>
    );
}
