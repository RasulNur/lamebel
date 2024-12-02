import { NextIntlClientProvider } from "next-intl";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "next-client-cookies/server";
import { ContextProviders } from "@/components/layout/ContextProviders";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./globals.scss";
import { IRootLayoutParams } from "@/types/pageParams.types";
import MainWrapper from "@/components/layout/MainWrapper";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ProgressBar from "@/components/ui/ProgressBar";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    preload: true,
    display: "swap",
});

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<IRootLayoutParams>) {
    if (!routing.locales.includes(locale)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale} className={montserrat.className}>
            <body>
                <Toaster position="top-right" />
                <NextIntlClientProvider messages={messages}>
                    <CookiesProvider>
                        <ContextProviders locale={locale}>
                            <div className="min-h-screen h-full flex flex-col justify-between">
                                <Header locale={locale} />

                                <MainWrapper>{children}</MainWrapper>

                                <Footer locale={locale} />
                            </div>
                        </ContextProviders>
                    </CookiesProvider>
                </NextIntlClientProvider>
                <ProgressBar />
            </body>
        </html>
    );
}
