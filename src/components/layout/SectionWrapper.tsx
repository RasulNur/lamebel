"use client";

import { ISectionWrapperProps } from "@/types/props.types";
import classNames from "classnames";

export default function SectionWrapper({
    children,
    className,
}: ISectionWrapperProps) {
    return (
        <section className={classNames(`section-margin`, className)}>
            <div className="container">{children}</div>
        </section>
    );
}
