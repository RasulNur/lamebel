"use client";

import Icon from "@/components/ui/Icon";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import { IHeaderCategoriesProps } from "@/types/props/types";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import { Link } from "@/i18n/routing";

const links = [
    { id: 0, title: "Диваны" },
    { id: 1, title: "Мягкая мебель" },
    { id: 2, title: "Эксклюзив lamebel.uz" },
    { id: 3, title: "Коллекция «Цветы»" },
];

export default function HeaderCategories({ settings }: IHeaderCategoriesProps) {
    const { isHidden } = useHeaderScroll();

    return (
        <div
            className={`block transition-all duration-500 bg-white z-[89] shadow-md ${
                isHidden
                    ? "absolute invisible opacity-0 -translate-y-full w-full pointer-events-none z-[-99]"
                    : "relative visible opacity-100 translate-y-0"
            }`}>
            <div
                className={`container py-2 ${
                    isHidden ? "h-0 opacity-0" : ""
                } flex items-center justify-between`}>
                <div className="lg:flex hidden items-center gap-6">
                    {links.map((link) => {
                        return (
                            <Link
                                href="/"
                                key={link.id}
                                className="py-2 text-sm hover:text-main font-medium">
                                {link.title}
                            </Link>
                        );
                    })}
                </div>

                {settings.phone && (
                    <Link
                        href={`tel:${settings.phone}`}
                        className="lg:hidden font-semibold hover:text-main py-2 whitespace-nowrap sm:text-base text-sm">
                        {numberWithSpaces(settings.phone, "#### ## ### ## ##")}
                    </Link>
                )}

                {settings.telegram && (
                    <Link
                        href={settings.telegram}
                        className="group bg-blue py-2 2xl:px-3 px-2 flex-center gap-3 text-white hover:text-blue hover:bg-transparent border-2 border-blue rounded-[30px] font-semibold text-sm">
                        <Icon
                            name="telegram"
                            className="block fill-white group-hover:fill-blue"
                        />
                        <span className="sm:inline hidden max-[550px]:hidden">
                            Наш телеграм
                        </span>
                        <span className="sm:hidden">Телеграм</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
