import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack 配置（Next.js 16+ 默认使用 Turbopack）
  turbopack: {},

  // 确保 Vercel/Serverless 环境下，源码文件被包含在执行环境中
  // 否则 fs.readFile 会因为找不到文件而报错
  // Next.js 14+ outputFileTracingIncludes 已移至顶层配置
  outputFileTracingIncludes: {
    '/': [
      './src/components/nova-ui/**/*',
      './src/effects/**/*'
    ],
  },
};

export default nextConfig;
