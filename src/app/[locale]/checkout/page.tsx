import { getTexts } from "@/api/textsApi";
import Checkout from "@/components/pages/checkout/Checkout";
import PageHeader from "@/components/ui/PageHeader";
import { Metadata } from "next";
import {
    getPaymentMethods,
    getShippingMethods,
} from "@/api/checkoutMethodsApi";
import { getAddresses } from "@/api/addressesApi";
import { getCookies } from "next-client-cookies/server";
import { IPageParams } from "@/types/pageParams.types";

export default async function CheckoutPage({
    params: { locale },
}: IPageParams) {
    const cookies = getCookies();
    const token = cookies.get("token");
    const { text } = await getTexts({ locale });
    const paymentMethods = await getPaymentMethods({ locale });
    const shippingMethods = await getShippingMethods({ locale });
    const addresses = await getAddresses({ token, locale });

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
                            locale={locale}
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
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ locale });
    return {
        title: text("Оформление заказа"),
        description: text("Оформление заказа"),
        keywords: text("Оформление заказа"),
    };
}
