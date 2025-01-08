"use client";

import { CartProvider } from "@/context/cart.context";
import { ViewedProvider } from "@/context/viewed.context";
import { TextProvider } from "@/context/text.context";
import { WishlistProvider } from "@/context/wishlist.context";
import { IContextProvidersProps } from "@/types/props/types";
import { LangProvider } from "@/context/lang.context";

export function ContextProviders({ children, locale }: IContextProvidersProps) {
    return (
        <LangProvider>
            <TextProvider locale={locale}>
                <ViewedProvider>
                    <CartProvider locale={locale}>
                        <WishlistProvider locale={locale}>{children}</WishlistProvider>
                    </CartProvider>
                </ViewedProvider>
            </TextProvider>
        </LangProvider>
    );
}
