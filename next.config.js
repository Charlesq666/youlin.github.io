const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
 /* config options here */ 
 typescript: {
    basePath: isProd ? '/youlin.github.io' : '',
    assetPrefix: isProd ? '/youlin.github.io/' : '',
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig
