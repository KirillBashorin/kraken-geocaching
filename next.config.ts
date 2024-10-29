import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: 'build',
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        config.externals.push('pino-pretty', 'lokijs', 'encoding');

        return config;
    },
};

export default nextConfig;
