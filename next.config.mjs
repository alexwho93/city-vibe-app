/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
    ],
  },
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: [
  //       "localhost:3000",
  //       "bookish-space-trout-gx7vjw4xvrxfppwr-3000.app.github.dev",
  //     ],
  //   },
  // },
};

export default nextConfig;
