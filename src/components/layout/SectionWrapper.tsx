"use client";

import classNames from "classnames";

export default function SectionWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={classNames(`section-margin`, className)}>
            <div className="container">{children}</div>
        </section>
    );
}
