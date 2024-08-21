import { useEffect, useState } from "react";
import useHeaderScroll from "./useHeaderScroll";

export default function useHeaderSize() {
    const [height, setHeight] = useState<number>(132);
    const { isHidden } = useHeaderScroll();

    const handleScroll = (headerHeight: number) => {
        setHeight(headerHeight);
    };
    useEffect(() => {
        const header = document.querySelector("header.header");
        if (header) {
            window.addEventListener("scroll", () =>
                handleScroll(header.clientHeight),
            );

            return () => {
                window.removeEventListener("scroll", () =>
                    handleScroll(header.clientHeight),
                );
            };
        }
    }, [height, isHidden]);

    useEffect(() => {
        const header = document.querySelector("header.header");
        header && setHeight(header.clientHeight);
    }, []);

    return { height };
}
