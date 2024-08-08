"use client";

import Icon from "@/components/ui/Icon";
import MenuWrapper from "../../../ui/headless/MenuWrapper";
import { useState } from "react";
import AuthMenuContent from "./authMenuContent/AuthMenuContent";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { IAuthMenuProps } from "@/types/props.types";

export default function AuthMenu({ lang }: IAuthMenuProps) {
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
