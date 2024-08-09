import { useEffect, useState } from "react";
import useHeaderScroll from "./useHeaderScroll";

export default function useHeaderSize() {
    const [height, setHeight] = useState<number>(160);
    const { isHidden } = useHeaderScroll();

    useEffect(() => {
        const header = document.querySelector("header.header");
        const headerTop = document.querySelector("header.header .header-top");
        if (header && headerTop) {
            const handleScroll = () => {
                if (isHidden) {
                    setHeight(headerTop.clientHeight);
                } else {
                    setHeight(header.clientHeight);
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [height, isHidden]);

    return { height };
}
