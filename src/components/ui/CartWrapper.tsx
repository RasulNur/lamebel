"use client";

import { ICartWrapperProps } from "@/types/props.types";

export default function CartWrapper({ content, sidebar }: ICartWrapperProps) {
    return (
        <section className="mt-5 last-section-margin">
            <div className="container">
                <div className="grid lg:grid-cols-[1fr,400px] gap-10">
                    {content}
                    {sidebar}
                </div>
            </div>
        </section>
    );
}
