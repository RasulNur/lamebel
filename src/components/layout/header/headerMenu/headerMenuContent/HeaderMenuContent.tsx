import Icon from "@/components/ui/Icon";
import SearchForm from "../../../../ui/SearchForm";
import Link from "next/link";
import { IHeaderMenuContentProps } from "@/types/props.types";

export default function HeaderMenuContent({
    closeModal,
    menu,
    categories,
}: IHeaderMenuContentProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-end">
                <button className="p-2 hover:opacity-60" onClick={closeModal}>
                    <Icon name="x" className="stroke-primary" />
                </button>
            </div>

            <SearchForm />

            {menu && (
                <ul className="2xl:hidden flex flex-col gap-2">
                    {menu.data.menuItems.map((link) => {
                        return (
                            <li key={link.id}>
                                <Link
                                    href={link.url}
                                    onClick={closeModal}
                                    className="inline-block py-2 hover:text-main text-sm font-medium w-full">
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}

            <ul className="flex flex-col gap-2">
                {categories.data.map((category) => {
                    return (
                        <li key={category.id}>
                            <Link
                                href={`/categories/${category.id}-${category.slug}`}
                                onClick={closeModal}
                                className="inline-block py-2 hover:text-main text-sm font-medium w-full">
                                {category.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
