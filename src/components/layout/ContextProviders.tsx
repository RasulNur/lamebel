"use client";

import { CartProvider } from "@/context/cart.context";
import { ViewedProvider } from "@/context/viewed.context";
import { TextProvider } from "@/context/text.context";
import { WishlistProvider } from "@/context/wishlist.context";
import { IContextProvidersProps } from "@/types/props/types";

export function ContextProviders({ children, lang }: IContextProvidersProps) {
    return (
        <TextProvider lang={lang}>
            <ViewedProvider>
                <CartProvider lang={lang}>
                    <WishlistProvider lang={lang}>{children}</WishlistProvider>
                </CartProvider>
            </ViewedProvider>
        </TextProvider>
    );
}
