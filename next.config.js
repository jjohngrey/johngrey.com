/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '', // Leave empty if no specific port is required
          pathname: '/images*', // Allow paths starting with "/images"
        },
      ],
    },
  };
  