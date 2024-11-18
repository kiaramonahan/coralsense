/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js image optimization for static hosting
  },
};

export default nextConfig;

