/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                {
                    key: 'Content-Security-Policy',
                    value: 'frame-ancestors "self" *.vice.com vicetv.com *.vicetv.com *.viceops.net'
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=65540 ; includeSubDomains'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                },
                ]
            }
        ];
    },
};

module.exports = nextConfig;