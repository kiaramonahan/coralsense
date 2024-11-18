/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/coralsense",
  assetPrefix: "/coralsense/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

