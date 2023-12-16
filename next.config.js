const isProd = process.env.NODE_ENV === 'production';
console.log(`isProd: ${isProd}`);

/** @type {import('next').NextConfig} */
const nextConfig = {
 /* config options here */ 
 typescript: {
    ignoreBuildErrors: true,
  },
  basePath: isProd ? '/youlin.github.io' : '',
  assetPrefix: isProd ? '/youlin.github.io/' : '',
};

module.exports = nextConfig
