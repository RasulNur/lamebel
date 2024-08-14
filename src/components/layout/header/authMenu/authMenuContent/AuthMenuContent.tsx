"use client";

import Login from "@/components/pages/auth/login/Login";
import Register from "@/components/pages/auth/register/Register";
import ResetPassword from "@/components/pages/auth/resetPassword/ResetPassword";
import Icon from "@/components/ui/Icon";
import { IAuthMenuContentProps } from "@/types/props/types";
import { AuthTab } from "@/types/types";
import { useState } from "react";

export default function AuthMenuContent({
    closeModal,
    lang,
}: IAuthMenuContentProps) {
    const [authTab, setAuthTab] = useState<AuthTab>("login");
    return (
        <div className="flex flex-col gap-5 auth-menu">
            <div className="flex items-center justify-end">
                <button className="p-2 hover:opacity-60" onClick={closeModal}>
                    <Icon name="x" className="stroke-primary" />
                </button>
            </div>

            {authTab === "login" ? (
                <Login
                    setAuthTab={setAuthTab}
                    lang={lang}
                    closeModal={closeModal}
                />
            ) : authTab === "register" ? (
                <Register
                    setAuthTab={setAuthTab}
                    lang={lang}
                    closeModal={closeModal}
                />
            ) : (
                authTab === "reset-password" && (
                    <ResetPassword setAuthTab={setAuthTab} lang={lang} />
                )
            )}
        </div>
    );
}
