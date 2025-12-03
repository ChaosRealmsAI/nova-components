/**
 * Cyberpunk Dark - Token 实现
 *
 * 赛博朋克风格：霓虹色彩、锐利边角、科技感
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // 霓虹色系
  neonPink: '#D946EF',      // Fuchsia-500
  neonCyan: '#22D3EE',      // Cyan-400
  neonYellow: '#FACC15',    // Yellow-400
  neonGreen: '#00ff9d',
  neonRed: '#FF0055',

  // 暗色基底 (Zinc)
  zinc950: '#09090B',
  zinc900: '#18181B',
  zinc800: '#27272A',
  zinc700: '#3F3F46',
  zinc600: '#52525B',
  zinc400: '#A1A1AA',
  zinc200: '#E4E4E7',

  // 纯色
  white: '#FFFFFF',
  black: '#000000',
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.neonPink,
  '--primary-foreground': palette.white,
  '--primary-muted': 'color-mix(in srgb, #D946EF 30%, transparent)',
  '--primary-vivid': '#F472B6',

  '--secondary': palette.neonCyan,
  '--secondary-foreground': palette.black,
  '--secondary-muted': 'color-mix(in srgb, #22D3EE 30%, transparent)',
  '--secondary-vivid': '#67E8F9',

  '--accent': palette.neonYellow,
  '--accent-foreground': palette.black,
  '--accent-muted': 'color-mix(in srgb, #FACC15 30%, transparent)',
  '--accent-vivid': '#FDE047',

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.neonGreen,
  '--success-foreground': palette.black,
  '--success-muted': 'color-mix(in srgb, #00ff9d 20%, transparent)',
  '--success-vivid': '#4ADE80',

  '--warning': palette.neonYellow,
  '--warning-foreground': palette.black,
  '--warning-muted': 'color-mix(in srgb, #FACC15 20%, transparent)',
  '--warning-vivid': '#FDE047',

  '--error': palette.neonRed,
  '--error-foreground': palette.white,
  '--error-muted': 'color-mix(in srgb, #FF0055 20%, transparent)',
  '--error-vivid': '#FB7185',

  // Destructive (alias for error, used by shadcn components)
  '--destructive': palette.neonRed,
  '--destructive-foreground': palette.white,

  '--info': palette.neonCyan,
  '--info-foreground': palette.black,
  '--info-muted': 'color-mix(in srgb, #22D3EE 20%, transparent)',
  '--info-vivid': '#67E8F9',

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.zinc950,
  '--background-alt': palette.zinc900,

  '--surface-1': palette.zinc900,
  '--surface-1-hover': palette.zinc800,

  '--surface-2': palette.zinc800,
  '--surface-2-hover': palette.zinc700,

  '--surface-3': palette.zinc700,
  '--surface-3-hover': palette.zinc600,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.zinc200,
  '--foreground-secondary': palette.zinc400,
  '--muted': palette.zinc800,
  '--muted-foreground': palette.zinc400,
  '--subtle-foreground': palette.zinc600,
  '--disabled-foreground': palette.zinc700,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.zinc700,
  '--border-muted': palette.zinc800,
  '--border-vivid': palette.neonPink,
  '--border-width': '2px', // 赛博朋克：粗边框
  '--ring': palette.neonPink,
  '--radius': '0px', // 赛博朋克：锐利边角
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem', // 紧凑间距

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': '"Inter", "SF Pro Display", system-ui, sans-serif',
  '--font-mono': '"Fira Code", "JetBrains Mono", monospace',
  '--font-display': '"Orbitron", "Inter", system-ui, sans-serif',

  // 字号 (Font Size)
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 7. 阴影 (Shadow) - 发光效果
  // ========================================
  '--shadow-sm': '0 0 8px rgba(217, 70, 239, 0.3)',
  '--shadow-md': '0 0 20px rgba(217, 70, 239, 0.4)',
  '--shadow-lg': '0 0 40px rgba(217, 70, 239, 0.5), 0 0 80px rgba(34, 211, 238, 0.2)',
  '--shadow-glow': '0 0 30px rgba(217, 70, 239, 0.6)',

  // ========================================
  // 8. 特效 (Effects) - 动画速度
  // ========================================
  '--effect-speed-slow': '0.5s',
  '--effect-speed-normal': '0.3s',
  '--effect-speed-fast': '0.15s',
  '--effect-glow-primary': 'rgba(217, 70, 239, 0.5)',
  '--effect-glow-secondary': 'rgba(34, 211, 238, 0.5)',

  // ========================================
  // 9. 特效 Token (ADR-005)
  // ========================================
  // BorderBeam - 霓虹边框光束
  '--effect-beam-color': palette.neonPink,
  '--effect-beam-glow': 'color-mix(in srgb, #D946EF, transparent 40%)',

  // Shimmer - 流光扫描
  '--effect-shimmer-color': 'rgba(217, 70, 239, 0.15)',

  // CosmicBackground - 宇宙背景 (紫+青 渐变)
  '--effect-cosmic-glow-1': palette.neonPink,
  '--effect-cosmic-glow-2': palette.neonCyan,

  // GridMatrix - 矩阵网格
  '--effect-grid-color': 'rgba(217, 70, 239, 0.3)',

  // Spotlight - 聚光灯
  '--effect-spotlight-color': 'color-mix(in srgb, #D946EF, transparent 70%)',

  // Tilt - 3D 倾斜 (无颜色，仅记录)
  // '--effect-tilt-*': N/A
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};
