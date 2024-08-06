import { ISingleProduct } from "@/types/api/products.types";

export default function ProductDescription({
    product,
}: {
    product: ISingleProduct;
}) {
    return (
        <div className="text-section">
            <p>{product.data.description}</p>
        </div>
    );
}
