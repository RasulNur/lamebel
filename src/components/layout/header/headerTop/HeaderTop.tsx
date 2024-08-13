"use client";

import Image from "next/image";
import Link from "next/link";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import HeaderMenu from "../headerMenu/HeaderMenu";
import HeaderList from "../headerList/HeaderList";
import HeaderIcons from "../headerIcons/HeaderIcons";
import { useEffect, useState } from "react";
import SearchForm from "@/components/ui/SearchForm";
import { IHeaderTopProps } from "@/types/props.types";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import LangDropdown from "../langDropdown/LangDropdown";
import HeaderSearch from "../headerSearch/HeaderSearch";

export default function HeaderTop({
    lang,
    settings,
    menu,
    categories,
}: IHeaderTopProps) {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const { isHidden } = useHeaderScroll();

    return (
        <div
            className={`relative py-3 bg-white z-[90] transition-all duration-500 header-top ${
                isHidden ? "shadow-md" : ""
            }`}>
            <div className="container flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                            className=" lg:min-w-[200px] lg:w-[200px] sm:min-w-[160px] sm:w-[160px] min-[400px]:min-w-[140px] w-[140px] h-auto"
                        />
                    </Link>
                    <div className="2xl:block hidden">
                        <HeaderMenu categories={categories} />
                    </div>

                    <HeaderList menu={menu} />
                </div>
                <div className="flex items-center justify-end xl:gap-6 sm:gap-4 gap-2 shrink-0 grow">
                    <HeaderSearch />

                    {settings.phone && (
                        <Link
                            href={`tel:${settings.phone}`}
                            className="lg:block hidden font-semibold hover:text-main py-2 whitespace-nowrap">
                            {numberWithSpaces(
                                settings.phone,
                                "#### ## ### ## ##",
                            )}
                        </Link>
                    )}

                    <LangDropdown />

                    <HeaderIcons
                        lang={lang}
                        setIsSearchOpen={setIsSearchOpen}
                    />

                    <div className="2xl:hidden">
                        <HeaderMenu menu={menu} categories={categories} />
                    </div>
                </div>
            </div>
        </div>
    );
}
