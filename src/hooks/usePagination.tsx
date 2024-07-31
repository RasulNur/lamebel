import { IMeta } from "@/types/api/api.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function usePagination({ meta }: { meta: IMeta }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [visibleNumbers, setVisibleNumbers] = useState<number[]>([
        meta.current_page,
        meta.current_page + 1,
        meta.current_page + 2,
        meta.current_page + 3,
    ]);

    const handleClick = ({ page }: { page: number }) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, []);

    useEffect(() => {
        setVisibleNumbers([
            meta.current_page - 1,
            meta.current_page,
            meta.current_page + 1,
        ]);

        if (meta.current_page == 1) {
            setVisibleNumbers([
                meta.current_page,
                meta.current_page + 1,
                meta.current_page + 2,
                meta.current_page + 3,
            ]);
        }
        if (meta.current_page == 2) {
            setVisibleNumbers([
                meta.current_page,
                meta.current_page + 1,
                meta.current_page + 2,
            ]);
        }

        if (meta.current_page == meta.last_page) {
            setVisibleNumbers([
                meta.current_page - 3,
                meta.current_page - 2,
                meta.current_page - 1,
                meta.current_page,
            ]);
        }
        if (meta.current_page == meta.last_page - 1) {
            setVisibleNumbers([
                meta.current_page - 2,
                meta.current_page - 1,
                meta.current_page,
            ]);
        }
    }, [meta.current_page]);

    return { visibleNumbers, handleClick };
}
