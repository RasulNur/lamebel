import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Checkbox from "@/components/ui/formElements/Checkbox";
import { IAttributeCheckboxProps } from "@/types/props/pages.types";

export default function AttributeCheckbox({
    label,
    attrId,
    attrValId,
    attrSlug,
    attrValSlug,
    isDisabled,
    setIsDisabled,
}: IAttributeCheckboxProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    const attrParamString = `attributes`;
    const attrValParamString = `${attrId}-${attrSlug}_${attrValId}-${attrValSlug}`;
    const attrParams = params.get(attrParamString);

    const handleChecked = () => {
        setIsDisabled(true);
        if (attrParams) {
            const attrIds = attrParams.split(",");

            if (attrIds.includes(attrValParamString)) {
                const filteredAttrIds = attrIds.filter(
                    (el) => el !== attrValParamString,
                );
                if (filteredAttrIds.length == 0) params.delete(attrParamString);
                else params.set(attrParamString, filteredAttrIds.join(","));
            } else {
                attrIds.push(attrValParamString);
                params.set(attrParamString, attrIds.join(","));
            }
        } else params.set(attrParamString, attrValParamString);
        params.set("page", `1`);
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        if (attrParams) {
            const attrIds = attrParams.split(",");
            if (attrIds.includes(attrValParamString)) {
                setIsDisabled(false);
                setIsChecked(true);
            } else setIsChecked(false);
        } else setIsChecked(false);
    }, [attrParams]);

    useEffect(() => {
        if (attrParams)
            attrParams.includes(attrValParamString) && setIsChecked(true);
    }, []);

    return (
        <Checkbox
            handleChecked={handleChecked}
            isChecked={isChecked}
            label={label}
            isDisabled={isDisabled}
        />
    );
}
