import { useEffect, useState } from "react";

export default function useHeaderSize() {
    const [height, setHeight] = useState<number>(160);

    useEffect(() => {
        const header = document.querySelector("header.header");
        if (header) {
            const handleScroll = () => {
                setHeight(header.clientHeight);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [height]);

    return { height };
}
