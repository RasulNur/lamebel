"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
    return (
        <AppProgressBar
            height="4px"
            color="var(--main)"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
}
