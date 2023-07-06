/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papareact.com',
                port:''
            }
        // ],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'cdn.sanity.io',
        //         port:''
        //     }
        ]
    }
}


module.exports = nextConfig
