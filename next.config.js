const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        IMG_PREFIX : isProd ? 'youlin.github.io' : ''
    }
}

module.exports = nextConfig
