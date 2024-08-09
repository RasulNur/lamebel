import { useEffect, useState } from "react";

export default function useHeaderScroll() {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160 && !isHidden) {
                setIsHidden(true);
            } else if (window.scrollY <= 160) {
                setIsHidden(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { isHidden };
}
