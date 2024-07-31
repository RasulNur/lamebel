import Icon from "@/components/ui/Icon";
import { ISingleCategory } from "@/types/api/categories.types";
import Link from "next/link";

export default function ParentCategory({
    parentCategory,
}: {
    parentCategory: ISingleCategory | string;
}) {
    return (
        <>
            {typeof parentCategory !== "string" && (
                <Link
                    className="red-btn red-link group max-w-none"
                    href={`/categories/${parentCategory.data.id}-${parentCategory.data.slug}`}>
                    <Icon
                        name="chevron"
                        className="stroke-white size-3 rotate-180 group-hover:stroke-main"
                    />
                    {parentCategory.data.name}
                </Link>
            )}
        </>
    );
}
