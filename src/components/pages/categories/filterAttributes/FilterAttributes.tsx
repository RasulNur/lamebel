import { ICategoryAttributes } from "@/types/api/categories.types";
import Attribute from "./attribute/Attribute";

export default function FilterAttributes({
    attributes,
}: {
    attributes: ICategoryAttributes;
}) {
    return (
        <div className="flex flex-col gap-10">
            {attributes.data.map((attribute) => {
                return <Attribute key={attribute.id} attribute={attribute} />;
            })}
        </div>
    );
}
