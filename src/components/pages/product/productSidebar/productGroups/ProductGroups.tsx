import { IProductGroupsProps } from "@/types/props/pages.types";
import ProductGroupsButton from "./productGroupsButton/ProductGroupsButton";

export default function ProductGroups({
    attributes,
    productGroup,
}: IProductGroupsProps) {
    const activeAttributes = attributes.data
        .map((attr) => {
            return attr.attribute_values.map((attrVal) => {
                return {
                    id: attrVal.id,
                    parentId: attr.id,
                    isActive: true,
                };
            });
        })
        .flat();

    return (
        <div className="flex flex-col gap-4 mb-6">
            {typeof productGroup !== "string" &&
                productGroup.data.attributes.map((attrGroup) => {
                    return (
                        <div key={attrGroup.id} className="flex flex-col gap-2">
                            <h4 className="text-sm uppercase">
                                {attrGroup.name}:
                            </h4>
                            <div className="flex gap-2">
                                {attrGroup.attribute_values.map(
                                    (attrValGroup) => {
                                        return (
                                            <ProductGroupsButton
                                                productGroup={productGroup}
                                                activeAttributes={
                                                    activeAttributes
                                                }
                                                groupAttrVal={attrValGroup}
                                                groupAttr={attrGroup}
                                                key={attrValGroup.id}
                                            />
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
