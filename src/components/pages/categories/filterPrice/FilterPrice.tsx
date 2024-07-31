"use client";

import HideFilter from "@/components/ui/HideFilter";
import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IPrices } from "@/types/api/categories.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterPrice({ price }: { price: IPrices }) {
    const MIN = price.min;
    const MAX = price.max;
    const [value, setValue] = useState<number[]>([MIN, MAX]);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const priceParams = searchParams.get("price");

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set("price", `${value[0]}-${value[1]}`);
        params.set("page", `1`);
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [value]);

    useEffect(() => {
        if (priceParams) {
            const priceParamsArr = priceParams.split("-");
            setValue([Number(priceParamsArr[0]), Number(priceParamsArr[1])]);
        }
    }, [priceParams]);

    return (
        <div>
            <HideFilter isOpen={isOpen} setIsOpen={setIsOpen} title={"Цена"} />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-1`}>
                <Slider
                    range
                    allowCross={false}
                    className="price-slider"
                    step={500}
                    value={value}
                    min={MIN}
                    max={MAX}
                    onChange={(value) =>
                        Array.isArray(value) && setValue(value)
                    }
                />
                <div className="flex items-center justify-between gap-4 leading-[40px] text-sm lowercase">
                    <p>
                        <span className="text-secondary3">От: </span>
                        <span className="font-medium">
                            {new Intl.NumberFormat("fr-FR").format(value[0])}
                        </span>
                    </p>
                    <p>
                        <span className="text-secondary3">До: </span>
                        <span className="font-medium">
                            {new Intl.NumberFormat("fr-FR").format(value[1])}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
