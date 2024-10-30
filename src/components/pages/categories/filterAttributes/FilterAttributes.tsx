import { IFilterAttributesProps } from "@/types/props/pages.types";
import Attribute from "./attribute/Attribute";

export default function FilterAttributes({
    attributes,
    isDisabled,
    setIsDisabled,
}: IFilterAttributesProps) {
    return (
        <div className="flex flex-col gap-10">
            {attributes.data.map((attribute) => {
                return (
                    <Attribute
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                        key={attribute.id}
                        attribute={attribute}
                    />
                );
            })}
        </div>
    );
}
