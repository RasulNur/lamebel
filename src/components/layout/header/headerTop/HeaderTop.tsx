"use client";

import Image from "next/image";
import Link from "next/link";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import HeaderMenu from "../headerMenu/HeaderMenu";
import HeaderList from "../headerList/HeaderList";
import HeaderIcons from "../headerIcons/HeaderIcons";
import { useState } from "react";
import SearchForm from "@/components/ui/SearchForm";
import { IHeaderTopProps } from "@/types/props.types";

export default function HeaderTop({ lang, settings, menu }: IHeaderTopProps) {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    return (
        <div className="py-6">
            <div className="container flex items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                            className="lg:min-w-[248px] lg:w-[248px] md:min-w-[200px] md:w-[200px] sm:min-w-[160px] sm:w-[160px] min-w-[120px] w-[120px] h-auto"
                        />
                    </Link>
                    <div className="2xl:block hidden">
                        <HeaderMenu />
                    </div>

                    {isSearchOpen ? (
                        <div className="2xl:block hidden w-full">
                            <SearchForm />
                        </div>
                    ) : (
                        <HeaderList menu={menu} />
                    )}
                </div>
                <div className="flex items-center xl:gap-6 sm:gap-4 gap-2 shrink-0">
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

                    <HeaderIcons
                        lang={lang}
                        setIsSearchOpen={setIsSearchOpen}
                    />

                    <div className="2xl:hidden">
                        <HeaderMenu menu={menu} />
                    </div>
                </div>
            </div>
        </div>
    );
}
