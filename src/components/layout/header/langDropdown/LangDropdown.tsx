"use client";

import {
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Listbox,
} from "@headlessui/react";
import { useCookies } from "next-client-cookies";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import i18nConfig from "../../../../../i18nConfig";
import { ILangOption } from "@/types/types";

const langs: ILangOption[] = [
    { id: 0, lang: "uz", label: "UZ" },
    { id: 1, lang: "ru", label: "РУ" },
    { id: 2, lang: "en", label: "EN" },
];

export default function LangDropdown() {
    const COOKIE_NAME = "NEXT_LOCALE";
    const { refresh, replace } = useRouter();

    const cookies = useCookies();
    const locale = cookies.get(COOKIE_NAME);
    const [selectedLang, setSelectedLang] = useState<ILangOption>(langs[0]);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        const finded = langs.find((el) => el.lang === locale);
        if (finded) {
            setSelectedLang(finded);
        }
    }, []);

    const handleChange = (value: ILangOption) => {
        setSelectedLang(value);
        cookies.set(COOKIE_NAME, value.lang);
        let newPathname = `${pathname}`;
        if (locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            newPathname = `/${value.lang}${pathname}`;
        } else {
            newPathname = `${pathname.replace(`/${locale}`, `/${value.lang}`)}`;
        }

        if (params.size > 0) {
            replace(`${newPathname}?${params.toString()}`, {
                scroll: false,
            });
        } else {
            replace(`${newPathname}`, { scroll: false });
        }
        refresh();
    };

    return (
        <Listbox
            value={selectedLang}
            onChange={(value) => handleChange(value)}
            as="div"
            className="relative z-[91]">
            <ListboxButton
                type="button"
                className="h-full relative flex items-center gap-2 text-sm font-semibold capitalize hover:opacity-60 p-2">
                {selectedLang.label}
            </ListboxButton>
            <ListboxOptions
                modal={false}
                as="div"
                transition
                className="absolute bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-md top-[calc(100%+10px)] left-1/2 -translate-x-1/2 origin-top transition-300 data-[closed]:translate-y-[10px] data-[closed]:opacity-0 overflow-hidden">
                {langs.map((lang) => (
                    <ListboxOption key={lang.id} value={lang} as={Fragment}>
                        {({ focus, selected }) => (
                            <button
                                className={`py-2 px-4 ${
                                    focus ? "text-main" : ""
                                } w-full ${
                                    selected
                                        ? "text-white bg-main pointer-events-none"
                                        : ""
                                }`}
                                type="button">
                                {lang.label}
                            </button>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
