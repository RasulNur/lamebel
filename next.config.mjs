import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{ protocol: "https", hostname: process.env.PATTERN }],
    },
    env: {
        API: process.env.API_URL,
    },
    async redirects() {
        return [
            {
                source: "/dashboard/profile",
                missing: [
                    {
                        type: "cookie",
                        key: "token",
                    },
                ],
                permanent: false,
                destination: "/",
            },
            {
                source: "/dashboard/orders",
                missing: [
                    {
                        type: "cookie",
                        key: "token",
                    },
                ],
                permanent: false,
                destination: "/",
            },
            {
                source: "/dashboard/addresses",

                missing: [
                    {
                        type: "cookie",
                        key: "token",
                    },
                ],
                permanent: false,
                destination: "/",
            },
            {
                source: "/checkout",
                missing: [
                    {
                        type: "cookie",
                        key: "token",
                    },
                ],
                permanent: false,
                destination: "/",
            },
        ];
    },
};

export default withNextIntl(nextConfig);
