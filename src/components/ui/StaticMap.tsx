"use client";

import { IStaticMapProps } from "@/types/props.types";
import { useEffect, useRef } from "react";

export default function StaticMap({ iframe }: IStaticMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef && mapRef.current) {
            mapRef.current.innerHTML = iframe;
        }
    }, [iframe]);

    return <div className="w-full bg-gray" ref={mapRef}></div>;
}
