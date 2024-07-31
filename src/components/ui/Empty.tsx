"use client";

import { useText } from "@/context/text.context";

export default function Empty() {
    const { text } = useText();

    return (
        <div className="size-full flex-center py-10">
            <h3 className="text-lg font-medium uppercase">
                {text("Ничего не найдено")}
            </h3>
        </div>
    );
}
