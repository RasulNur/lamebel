"use client";

import { useEffect, useRef } from "react";

export default function StaticMap({ iframe }: { iframe: string }) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef && mapRef.current) {
            mapRef.current.innerHTML = iframe;
        }
    }, [iframe]);

    return <div className="w-full bg-gray" ref={mapRef}></div>;
}
