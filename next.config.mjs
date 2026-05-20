/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    // Force optimization steps to pack code compactly
    experimental: {
      optimizePackageImports: ["@morfoos/core"]
    }
  };
  
  export default nextConfig;