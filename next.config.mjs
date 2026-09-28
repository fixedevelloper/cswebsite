/** @type {import('next').NextConfig} */

// Images servies par l'API Laravel (médias des articles)
const imageHosts = [new URL("http://localhost")];
if (process.env.NEXT_PUBLIC_API_URL) {
    imageHosts.push(new URL(process.env.NEXT_PUBLIC_API_URL));
}

const nextConfig = {
    images: {
        remotePatterns: imageHosts.map(({ protocol, hostname }) => ({
            protocol: protocol.replace(":", ""),
            hostname,
        })),
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    // Interdit d'afficher le site dans une iframe d'un autre domaine (clickjacking)
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Anciennes URL des services (faute de frappe / majuscules), déjà indexées
            {
                source: "/services/devellopement-applications-web-mobile",
                destination: "/services/developpement-applications-web-mobile",
                permanent: true,
            },
            {
                source: "/ui-ux-designing",
                destination: "/services/conception-graphique-ui-ux-design",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
