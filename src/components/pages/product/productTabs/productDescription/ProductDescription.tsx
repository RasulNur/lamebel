import { IProductDescriptionProps } from "@/types/props.types";

export default function ProductDescription({
    product,
}: IProductDescriptionProps) {
    return (
        <div className="text-section">
            <p>{product.data.description}</p>
        </div>
    );
}
