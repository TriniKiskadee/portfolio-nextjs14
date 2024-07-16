/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'fonts.gstatic.com',
                protocol: "https"
            },
        ]
    }
};

export default nextConfig;
