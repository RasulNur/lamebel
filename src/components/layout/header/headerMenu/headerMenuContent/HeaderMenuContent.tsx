import Icon from "@/components/ui/Icon";
import SearchForm from "../../../../ui/SearchForm";
import { ISingleMenu } from "@/types/api/menus.types";
import Link from "next/link";

export default function HeaderMenuContent({
    closeModal,
    menu,
}: {
    closeModal: () => void;
    menu?: ISingleMenu;
}) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-end">
                <button className="p-2 hover:opacity-60" onClick={closeModal}>
                    <Icon name="x" className="stroke-primary" />
                </button>
            </div>

            <SearchForm />

            {menu && (
                <ul className="2xl:hidden flex-col gap-2">
                    {menu.data.menuItems.map((link) => {
                        return (
                            <li key={link.id}>
                                <Link
                                    href={link.url}
                                    className="inline-block py-2 hover:text-main text-sm font-medium w-full">
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
