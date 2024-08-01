"use client";

import Icon from "@/components/ui/Icon";
import MenuWrapper from "../../../ui/MenuWrapper";
import { useState } from "react";
import AuthMenuContent from "./authMenuContent/AuthMenuContent";
import { Lang } from "@/types/api/api.types";
import { useCookies } from "next-client-cookies";
import Link from "next/link";

export default function AuthMenu({ lang }: { lang: Lang }) {
    let [isOpen, setIsOpen] = useState(false);
    const cookies = useCookies();
    const token = cookies.get("token");

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            {token ? (
                <Link href="/dashboard/profile" className="group p-2">
                    <Icon
                        name="user"
                        className="stroke-primary group-hover:stroke-main size-5"
                    />
                </Link>
            ) : (
                <MenuWrapper
                    closeModal={closeModal}
                    menuBtn={
                        <button className="group p-2" onClick={openModal}>
                            <Icon
                                name="user"
                                className="stroke-primary group-hover:stroke-main size-5"
                            />
                        </button>
                    }
                    isOpen={isOpen}
                    menuContent={
                        <AuthMenuContent lang={lang} closeModal={closeModal} />
                    }
                />
            )}
        </>
    );
}
