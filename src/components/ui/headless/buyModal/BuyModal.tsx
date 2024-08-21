"use client";

import { useText } from "@/context/text.context";
import { useState } from "react";
import DialogWrapper from "../DialogWrapper";
import BuyModalForm from "./BuyModalForm";
import classNames from "classnames";
import { IBuyModalProps } from "@/types/props/ui.types";

export default function BuyModal({ product, lang, className }: IBuyModalProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { text } = useText();

    return (
        <>
            <DialogWrapper
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Купить сразу"}
                dialogClassname="max-h-[500px]"
                button={
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className={classNames(
                            "main-btn min-[460px]:py-[10px] py-2 lg:px-6 min-[460px]:px-4 px-2 group flex items-center gap-2 min-w-0",
                            `${
                                product.in_stock === 0
                                    ? "bg-placeholder2 border-placeholder2 hover:bg-placeholder2 pointer-events-none hover:text-main"
                                    : ""
                            }`,
                            className,
                        )}>
                        {product.in_stock === 0
                            ? text("Нет в наличии")
                            : text("Купить сразу")}
                    </button>
                }
                content={<BuyModalForm product={product} lang={lang} />}
            />
        </>
    );
}
