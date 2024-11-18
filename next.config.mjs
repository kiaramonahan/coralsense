/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/coralsense",
  assetPrefix: "/coralsense/",
};

export default nextConfig;


