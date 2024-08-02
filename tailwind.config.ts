/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: { center: true, padding: "1rem" },
        extend: {
            lineHeight: {
                100: "100%",
                110: "110%",
                120: "120%",
                130: "130%",
                140: "140%",
                150: "150%",
                160: "160%",
                170: "170%",
                180: "180%",
                190: "190%",
                200: "200%",
            },
            colors: {
                black: { DEFAULT: "var(--black)", 30: "var(--black-30)" },

                white: {
                    DEFAULT: "var(--white)",
                    15: "var(--white-15)",
                    80: "var(--white-80)",
                },

                primary: {
                    DEFAULT: "var(--primary)",
                },

                secondary: {
                    DEFAULT: "var(--secondary)",
                },

                placeholder: {
                    DEFAULT: "var(--placeholder)",
                },
                placeholder2: {
                    DEFAULT: "var(--placeholder2)",
                },

                gray: {
                    DEFAULT: "var(--gray)",
                },

                gray2: {
                    DEFAULT: "var(--gray2)",
                },

                gray3: {
                    DEFAULT: "var(--gray3)",
                },

                gray4: {
                    DEFAULT: "var(--gray4)",
                },

                gray5: {
                    DEFAULT: "var(--gray5)",
                },

                main: {
                    DEFAULT: "var(--main)",
                    5: "var(--main-5)",
                    10: "var(--main-10)",
                    light: "var(--main-light)",
                },

                blue: {
                    DEFAULT: "var(--blue)",
                },

                red: {
                    DEFAULT: "var(--red)",
                },
            },
        },
    },

    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".flex-center": {
                    "@apply flex items-center justify-center": {},
                },
                ".transition-300": {
                    "@apply transition-all duration-300": {},
                },
                ".sm-margin": {
                    "@apply sm:mx-0 -mx-4": {},
                },
                ".section-header-wrapper": {
                    "@apply flex flex-col md:gap-[60px] gap-10": {},
                },
                ".section-margin": {
                    "@apply xl:mt-[120px] md:mt-[80px] mt-[60px]": {},
                },
                ".last-section-margin": {
                    "@apply xl:mb-[120px] md:mb-[80px] mb-[60px]": {},
                },
                ".section-padding": {
                    "@apply xl:py-[120px] md:py-[80px] py-[60px]": {},
                },
                ".swiper-with-grid": {
                    "@apply w-full max-w-full max-h-screen min-h-0 min-w-0": {},
                },

                ".main-btn": {
                    "@apply flex-center gap-4 bg-main border-main border-2 text-white hover:bg-transparent hover:text-main py-4 px-6 rounded-[32px] min-w-[160px] w-max":
                        {},
                },
                ".common-products-grid": {
                    "@apply md:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 sm:gap-x-6 sm:gap-y-7 gap-x-5 gap-y-6":
                        {},
                },
                ".products-grid-wrapper": {
                    "@apply lg:grid flex flex-col grid-cols-[300px,1fr] gap-5":
                        {},
                },
            });
        }),
    ],
};
