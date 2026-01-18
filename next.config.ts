import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.1.4", "localhost:3000",],
    images: {
        remotePatterns: [
        ],
        qualities: [75, 80, 85, 90],
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
