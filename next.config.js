/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'lgwrsvcupzyfdneimicg.supabase.co',
        
        },
    ],
    },
}

module.exports = nextConfig
