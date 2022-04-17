const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
});
