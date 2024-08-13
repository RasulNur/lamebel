"use client";

import { useText } from "@/context/text.context";
import { IErrorProps } from "@/types/props.types";

export default function Error({ reset }: IErrorProps) {
    const { text } = useText();
    return (
        <div className="container">
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
