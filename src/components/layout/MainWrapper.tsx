"use client";

import useHeaderSize from "@/hooks/useHeaderSize";
import { IMainWrapperProps } from "@/types/props/types";

export default function MainWrapper({ children }: IMainWrapperProps) {
    const { height } = useHeaderSize();

    return (
        <main
            className="grow h-full transition-all duration-500"
            style={{ paddingTop: `${height}px` }}>
            {children}
        </main>
    );
}
