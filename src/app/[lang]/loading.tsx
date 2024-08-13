"use client";

import OvalSpinner from "@/components/ui/OvalSpinner";

export default function Loading() {
    return (
        <div className="absolute top-0 right-0 flex-center h-screen w-full bg-white z-[10000]">
            <OvalSpinner size={80} />
        </div>
    );
}
