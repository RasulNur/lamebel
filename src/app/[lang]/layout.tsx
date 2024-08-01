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
import HeaderCategories from "../../components/layout/headerCategories/HeaderCategories";
import { IRootLayoutParams } from "@/types/pageParams.types";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    preload: true,
    display: "swap",
});

export default function RootLayout({
    children,
    params: { lang },
}: Readonly<IRootLayoutParams>) {
    return (
        <html lang={lang} className={montserrat.className}>
            <body>
                <Toaster position="top-right" />
                <CookiesProvider>
                    <ContextProviders lang={lang}>
                        <div className="min-h-screen h-full flex flex-col justify-between">
                            <Header lang={lang} />

                            <main className="grow h-full">{children}</main>
                            <Footer lang={lang} />
                        </div>
                    </ContextProviders>
                </CookiesProvider>
            </body>
        </html>
    );
}
