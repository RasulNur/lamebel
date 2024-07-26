/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
module.exports = {
    // const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: { center: true, padding: "1rem" },
        extend: {
            lineHeight: {
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
                black: { DEFAULT: "var(--black)" },

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

                gray: {
                    DEFAULT: "var(--gray)",
                },

                main: {
                    DEFAULT: "var(--main)",
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
                ".transition-500": {
                    "@apply transition-all duration-300": {},
                },
            });
        }),
    ],
};
// export default config;
