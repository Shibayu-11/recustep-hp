/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  optimizeFonts: false,

  // ★ 追加：ESMパッケージをNextでバンドル変換
  transpilePackages: ["lucide-react"],

  // 念のため（ESM外部依存を緩めに扱う）
  experimental: { esmExternals: "loose" },
};

module.exports = nextConfig;
