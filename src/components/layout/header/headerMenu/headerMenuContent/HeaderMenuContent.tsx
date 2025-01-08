import Icon from "@/components/ui/Icon";
import SearchForm from "../../../../ui/SearchForm";
import { Link as IntlLink } from "@/i18n/routing";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import { IHeaderMenuContentProps } from "@/types/props/types";
import Link from "next/link";

export default function HeaderMenuContent({ closeModal, menu, categories, settings }: IHeaderMenuContentProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-end">
                <button className="p-2 hover:opacity-60" onClick={closeModal}>
                    <Icon name="x" className="stroke-primary" />
                </button>
            </div>

            <SearchForm className="grow w-full" inputClassName="!rounded-[32px]" />

            {menu && (
                <ul className="2xl:hidden flex flex-col gap-2 pb-5 border-b border-gray3">
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

            <ul className="flex flex-col gap-2 pb-5 border-b border-gray3">
                {categories.data.map((category) => {
                    return (
                        <li key={category.id}>
                            <IntlLink
                                href={`/categories/${category.id}-${category.slug}`}
                                onClick={closeModal}
                                className="inline-block py-2 hover:text-main text-sm font-medium w-full">
                                {category.name}
                            </IntlLink>
                        </li>
                    );
                })}
            </ul>
            <div className="flex flex-col gap-3">
                {settings.phone && (
                    <IntlLink
                        href={`tel:${settings.phone}`}
                        className="font-semibold hover:text-main py-1 whitespace-nowrap sm:text-base text-sm">
                        {numberWithSpaces(settings.phone, "#### ## ### ## ##")}
                    </IntlLink>
                )}
                {settings.telegram && (
                    <IntlLink
                        href={settings.telegram}
                        className="group bg-blue py-2 px-3 flex-center gap-3 text-white hover:text-blue hover:bg-transparent border-2 border-blue rounded-[30px] font-semibold text-sm">
                        <Icon name="telegram" className="block fill-white group-hover:fill-blue" />
                        <span>Наш телеграм</span>
                    </IntlLink>
                )}
            </div>
        </div>
    );
}
