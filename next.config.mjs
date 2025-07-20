const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // distDir: '/build',
  assetPrefix: isProd ? "/primary-portfolio/" : "",
  basePath: isProd ? "/primary-portfolio" : "",
  output: "export",
};

export default nextConfig;
