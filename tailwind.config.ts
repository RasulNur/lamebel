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

                main: {
                    DEFAULT: "var(--main)",
                    light: "var(--main-light)",
                },

                blue: {
                    DEFAULT: "var(--blue)",
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
                ".section-margin": {
                    "@apply xl:mt-[120px] md:mt-[80px] mt-[60px]": {},
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
            });
        }),
    ],
};
