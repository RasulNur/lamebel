"use client";

import { useText } from "@/context/text.context";

export default function Error({ reset }: { reset: () => void }) {
    const { text } = useText();
    return (
        <div className="container">
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
