import { getTexts } from "@/api/textsApi";
import Cart from "@/components/pages/cart/Cart";
import CartTotal from "@/components/pages/cart/CartTotal";
import CartWrapper from "@/components/ui/CartWrapper";
import PageHeader from "@/components/ui/PageHeader";
import { IPageParams } from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function CartPage({ params: { lang } }: IPageParams) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                title={text("Корзина")}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Корзина"),
                }}
            />

            <CartWrapper content={<Cart />} sidebar={<CartTotal />} />
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Корзина"),
        description: text("Корзина"),
        keywords: text("Корзина"),
    };
}
