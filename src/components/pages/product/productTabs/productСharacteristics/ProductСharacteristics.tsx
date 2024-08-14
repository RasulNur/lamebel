import { useText } from "@/context/text.context";
import useLimit from "@/hooks/useLimit";
import { IProductСharacteristicsProps } from "@/types/props/pages.types";

export default function ProductСharacteristics({
    productAttributes,
}: IProductСharacteristicsProps) {
    const { text } = useText();
    const { handleLimit, isShow, limit } = useLimit({
        data: productAttributes.data,
        limitNumber: 10,
    });

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                {productAttributes.data
                    .slice(0, limit)
                    .map((productAttribute) => {
                        return (
                            <div
                                key={productAttribute.id}
                                className="flex items-end">
                                <h4 className="w-max leading-130 text-sm text-placeholder whitespace-nowrap">
                                    {productAttribute.name}
                                </h4>
                                <div className="border-b border-dotted w-full border-placeholder"></div>
                                <p className="text-sm leading-120 min-w-max">
                                    {productAttribute.attribute_values
                                        .map((attr) => attr.name)
                                        .join(", ")}
                                </p>
                            </div>
                        );
                    })}
            </div>
            {productAttributes.data.length > 5 && (
                <button
                    type="button"
                    onClick={handleLimit}
                    className="text-xs text-second w-max hover:text-main transition-300">
                    {isShow ? text("Скрыть") : text("Показать еще")}
                </button>
            )}
        </div>
    );
}
