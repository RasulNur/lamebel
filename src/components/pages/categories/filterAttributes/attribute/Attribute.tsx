"use client";

import HideFilter from "@/components/ui/HideFilter";
import AttributeCheckbox from "./attributeCheckbox/AttributeCheckbox";
import { useState } from "react";
import useLimit from "@/hooks/useLimit";
import { useText } from "@/context/text.context";
import { IAttributeProps } from "@/types/props/pages.types";

export default function Attribute({
    attribute,
    isDisabled,
    setIsDisabled,
}: IAttributeProps) {
    const { handleLimit, isShow, limit } = useLimit({
        data: attribute.attribute_values,
        limitNumber: 5,
    });
    const { text } = useText();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div>
            <HideFilter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={attribute.name}
            />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-3`}>
                <div className="flex flex-col gap-2">
                    {attribute.attribute_values
                        .slice(0, limit)
                        .map((attrVal) => {
                            return (
                                <AttributeCheckbox
                                    attrId={attribute.id}
                                    attrSlug={attribute.slug}
                                    attrValId={attrVal.id}
                                    attrValSlug={attrVal.slug}
                                    label={attrVal.name}
                                    key={attrVal.id}
                                    isDisabled={isDisabled}
                                    setIsDisabled={setIsDisabled}
                                />
                            );
                        })}
                </div>
                {attribute.attribute_values.length > 5 && (
                    <button
                        type="button"
                        onClick={handleLimit}
                        className="text-xs text-second w-max hover:text-main transition-300">
                        {isShow ? text("Скрыть") : text("Показать еще")}
                    </button>
                )}
            </div>
        </div>
    );
}
