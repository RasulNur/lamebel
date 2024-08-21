import { IProductDescriptionProps } from "@/types/props/pages.types";

export default function ProductDescription({
    product,
}: IProductDescriptionProps) {
    return (
        <div className="text-section">
            <p>{product.data.description}</p>
        </div>
    );
}
