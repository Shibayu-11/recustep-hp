/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  transpilePackages: ['lucide-react'], // 任意。不要なら削除OK
};

module.exports = nextConfig;
