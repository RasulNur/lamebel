import { getTexts } from "@/api/textsApi";
import Cart from "@/components/pages/cart/Cart";
import CartTotal from "@/components/pages/cart/CartTotal";
import Checkout from "@/components/pages/checkout/Checkout";
import CartWrapper from "@/components/ui/CartWrapper";
import PageHeader from "@/components/ui/PageHeader";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import {
    getPaymentMethods,
    getShippingMethods,
} from "@/api/checkoutMethodsApi";
import { getAddresses } from "@/api/addressesApi";
import { getCookies } from "next-client-cookies/server";

export default async function CheckoutPage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    const cookies = getCookies();
    const token = cookies.get("token");
    const { text } = await getTexts({ lang });
    const paymentMethods = await getPaymentMethods({ lang });
    const shippingMethods = await getShippingMethods({ lang });
    const addresses = await getAddresses({ token, lang });

    return (
        <>
            <PageHeader
                title={text("Оформление заказа")}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Оформление заказа"),
                }}
            />
            {typeof addresses !== "string" && (
                <section className="mt-5 last-section-margin">
                    <div className="container">
                        <Checkout
                            lang={lang}
                            paymentMethods={paymentMethods}
                            shippingMethods={shippingMethods}
                            addresses={addresses}
                        />
                    </div>
                </section>
            )}
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Оформление заказа"),
        description: text("Оформление заказа"),
        keywords: text("Оформление заказа"),
    };
}
