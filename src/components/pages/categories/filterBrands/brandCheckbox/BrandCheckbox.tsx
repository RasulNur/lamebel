import Checkbox from "@/components/ui/formElements/Checkbox";
import { IBrandCheckboxProps } from "@/types/props/pages.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BrandCheckbox({
    brand,
    isDisabled,
    setIsDisabled,
}: IBrandCheckboxProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    const brandsParams = params.get("brands");

    const brandParamString = `${brand.id}-${brand.slug}`;

    const handleChecked = () => {
        setIsDisabled(true);
        if (brandsParams) {
            const brandsIds = brandsParams.split(",");

            if (brandsIds.includes(brandParamString)) {
                const filteredBrandsIds = brandsIds.filter(
                    (el) => el !== brandParamString,
                );
                if (filteredBrandsIds.length == 0) params.delete("brands");
                else params.set("brands", filteredBrandsIds.join(","));
            } else {
                brandsIds.push(brandParamString);
                params.set("brands", brandsIds.join(","));
            }
        } else params.set("brands", brandParamString);
        params.set("page", `1`);
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        if (brandsParams) {
            const brandsIds = brandsParams.split(",");
            if (brandsIds.includes(brandParamString)) {
                setIsChecked(true);
                setIsDisabled(false);
            } else setIsChecked(false);
        } else setIsChecked(false);
    }, [brandsParams]);

    useEffect(() => {
        if (brandsParams)
            brandsParams.includes(brandParamString) && setIsChecked(true);
    }, []);

    return (
        <Checkbox
            handleChecked={handleChecked}
            isChecked={isChecked}
            label={brand.name}
            isDisabled={isDisabled}
        />
    );
}
