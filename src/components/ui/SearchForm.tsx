"use client";

import Icon from "@/components/ui/Icon";
import { useText } from "@/context/text.context";
import { ISearchFormProps } from "@/types/props.types";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function SearchForm({ keyword = "" }: ISearchFormProps) {
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
        <form className="grow w-full" onSubmit={handleSubmit}>
            <div className="overlap-input">
                <input
                    value={value}
                    className="!py-[14.5px]"
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    minLength={3}
                    maxLength={25}
                    required
                    placeholder=""
                />
                <label htmlFor="">{text("Поиск")}</label>
                <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-4 p-2">
                    <Icon name="loupe" className="stroke-primary" />
                </button>
            </div>
        </form>
    );
}
