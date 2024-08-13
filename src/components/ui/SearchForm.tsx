"use client";

import Icon from "@/components/ui/Icon";
import { useText } from "@/context/text.context";
import { ISearchFormProps } from "@/types/props.types";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function SearchForm({
    keyword = "",
    className,
    setIsFocused,
    inputClassName,
}: ISearchFormProps) {
    const { push } = useRouter();
    const params = new URLSearchParams("");
    const [value, setValue] = useState<string>(keyword);
    const { text } = useText();
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        params.set("keyword", value);

        push(`/search?${params.toString()}`, { scroll: false });
        setValue("");
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="overlap-input">
                <input
                    value={value}
                    className={classNames("!py-[14.5px]", inputClassName)}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    minLength={3}
                    maxLength={25}
                    required
                    placeholder=""
                    onFocus={() => setIsFocused && setIsFocused(true)}
                    onBlur={() => setIsFocused && setIsFocused(false)}
                />
                <label htmlFor="">{text("Поиск")}</label>
                <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-4 p-2 hover:opacity-60">
                    <Icon name="loupe" className="stroke-primary" />
                </button>
            </div>
        </form>
    );
}
