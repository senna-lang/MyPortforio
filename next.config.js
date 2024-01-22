/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['placehold.jp'],
    disableStaticImages: true, 
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
