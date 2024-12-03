"use client";

import {
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Listbox,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { ILangOption } from "@/types/types";
import { Link, usePathname } from "@/i18n/routing";
import { useLocaleTS } from "@/hooks/useLocaleTS";

const langs: ILangOption[] = [
    { id: 0, locale: "uz", label: "UZ" },
    { id: 1, locale: "ru", label: "РУ" },
    { id: 2, locale: "en", label: "EN" },
];

export default function LangDropdown() {
    const pathname = usePathname();
    const locale = useLocaleTS();
    const [selectedLang, setSelectedLang] = useState<ILangOption>(
        langs.find((item) => item.locale == locale) ?? langs[0],
    );

    return (
        <Listbox
            value={selectedLang}
            onChange={(value) => setSelectedLang(value)}
            as="div"
            className="relative z-[91]">
            <ListboxButton
                type="button"
                className="h-full relative flex items-center gap-2 sm:text-base text-sm font-semibold capitalize hover:text-main sm:p-2 p-1">
                {selectedLang.label}
            </ListboxButton>
            <ListboxOptions
                modal={false}
                as="div"
                transition
                className="absolute bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-md top-[calc(100%+10px)] left-1/2 -translate-x-1/2 origin-top transition-300 data-[closed]:translate-y-[10px] data-[closed]:opacity-0 overflow-hidden">
                {langs.map((locale) => (
                    <ListboxOption key={locale.id} value={locale} as={Fragment}>
                        {({ focus, selected }) => (
                            <Link
                                href={pathname}
                                locale={locale.locale}
                                className={`flex py-2 px-4 ${
                                    focus ? "text-main" : ""
                                } w-full ${
                                    selected
                                        ? "text-white bg-main pointer-events-none"
                                        : ""
                                }`}
                                type="button">
                                {locale.label}
                            </Link>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
