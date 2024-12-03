import Icon from "@/components/ui/Icon";
import { IParentCategory } from "@/types/props/pages.types";
import { Link } from "@/i18n/routing";

export default function ParentCategory({ parentCategory }: IParentCategory) {
    return (
        <>
            {typeof parentCategory !== "string" && (
                <Link
                    className="main-btn group"
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
