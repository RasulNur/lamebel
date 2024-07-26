/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{ protocol: "https", hostname: process.env.PATTERN }],
    },
    env: {
        API: process.env.API_URL,
    },
};

export default nextConfig;
