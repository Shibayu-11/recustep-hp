/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  transpilePackages: ['lucide-react'], // 任意。不要なら削除OK
  // ※ optimizeFonts / experimental.esmExternals は入れない
};

module.exports = nextConfig;
