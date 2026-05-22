/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    transpilePackages: ["@morfoos/core", "@morfoos/morfoos-os"],
    experimental: {
      optimizePackageImports: ["@morfoos/core"],
    },
  };
  
  export default nextConfig;
