/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://demo-vegan-life.vercel.app',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,POST',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
