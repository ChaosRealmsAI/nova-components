/**
 * Sunset Warm - Token 实现
 *
 * 温暖日落风格：橙红色调、温馨感、舒适氛围
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // 日落色系
  sunsetOrange: '#f97316',    // Orange-500
  sunsetRed: '#ef4444',       // Red-500
  sunsetPink: '#f472b6',      // Pink-400
  sunsetAmber: '#f59e0b',     // Amber-500
  sunsetRose: '#fb7185',      // Rose-400

  // 辅助色
  teal: '#14b8a6',            // Teal-500
  indigo: '#6366f1',          // Indigo-500

  // 暖色基底 (Stone)
  stone50: '#fafaf9',
  stone100: '#f5f5f4',
  stone200: '#e7e5e4',
  stone300: '#d6d3d1',
  stone400: '#a8a29e',
  stone500: '#78716c',
  stone600: '#57534e',
  stone700: '#44403c',
  stone800: '#292524',
  stone900: '#1c1917',

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
  '--primary': palette.sunsetOrange,
  '--primary-foreground': palette.white,
  '--primary-muted': 'color-mix(in srgb, #f97316 20%, transparent)',
  '--primary-vivid': '#fb923c',

  '--secondary': palette.indigo,
  '--secondary-foreground': palette.white,
  '--secondary-muted': 'color-mix(in srgb, #6366f1 20%, transparent)',
  '--secondary-vivid': '#818cf8',

  '--accent': palette.teal,
  '--accent-foreground': palette.white,
  '--accent-muted': 'color-mix(in srgb, #14b8a6 20%, transparent)',
  '--accent-vivid': '#2dd4bf',

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': '#22c55e',
  '--success-foreground': palette.white,
  '--success-muted': 'color-mix(in srgb, #22c55e 15%, transparent)',
  '--success-vivid': '#4ade80',

  '--warning': palette.sunsetAmber,
  '--warning-foreground': palette.black,
  '--warning-muted': 'color-mix(in srgb, #f59e0b 15%, transparent)',
  '--warning-vivid': '#fbbf24',

  '--error': palette.sunsetRed,
  '--error-foreground': palette.white,
  '--error-muted': 'color-mix(in srgb, #ef4444 15%, transparent)',
  '--error-vivid': '#f87171',

  // Destructive (alias for error)
  '--destructive': palette.sunsetRed,
  '--destructive-foreground': palette.white,

  '--info': '#3b82f6',
  '--info-foreground': palette.white,
  '--info-muted': 'color-mix(in srgb, #3b82f6 15%, transparent)',
  '--info-vivid': '#60a5fa',

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.stone50,
  '--background-alt': palette.white,

  '--surface-1': palette.white,
  '--surface-1-hover': palette.stone100,

  '--surface-2': palette.stone100,
  '--surface-2-hover': palette.stone200,

  '--surface-3': palette.stone200,
  '--surface-3-hover': palette.stone300,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.stone900,
  '--foreground-secondary': palette.stone700,
  '--muted': palette.stone200,
  '--muted-foreground': palette.stone500,
  '--subtle-foreground': palette.stone400,
  '--disabled-foreground': palette.stone300,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.stone200,
  '--border-muted': palette.stone100,
  '--border-vivid': palette.sunsetOrange,
  '--border-width': '1px',
  '--ring': palette.sunsetOrange,
  '--radius': '0.75rem', // 更圆润的边角
  '--opacity-disabled': '0.6', // 温暖主题稍高透明度
  '--spacing-base': '0.75rem', // 宽松间距

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': '"Inter", "SF Pro Display", system-ui, sans-serif',
  '--font-mono': '"Fira Code", "JetBrains Mono", monospace',
  '--font-display': '"Inter", system-ui, sans-serif',

  // 字号 (Font Size)
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 7. 阴影 (Shadow) - 温暖投影
  // ========================================
  '--shadow-sm': '0 1px 3px rgba(249, 115, 22, 0.08)',
  '--shadow-md': '0 4px 6px -1px rgba(249, 115, 22, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  '--shadow-lg': '0 10px 15px -3px rgba(249, 115, 22, 0.12), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  '--shadow-glow': '0 0 20px rgba(249, 115, 22, 0.3)',

  // ========================================
  // 8. 特效 (Effects) - 动画速度
  // ========================================
  '--effect-speed-slow': '0.4s',
  '--effect-speed-normal': '0.25s',
  '--effect-speed-fast': '0.15s',
  '--effect-glow-primary': 'rgba(249, 115, 22, 0.4)',
  '--effect-glow-secondary': 'rgba(99, 102, 241, 0.4)',

  // ========================================
  // 9. 特效 Token (ADR-005)
  // ========================================
  // BorderBeam - 日落橙边框光束
  '--effect-beam-color': palette.sunsetOrange,
  '--effect-beam-glow': 'color-mix(in srgb, #f97316, transparent 50%)',

  // Shimmer - 金色流光
  '--effect-shimmer-color': 'rgba(251, 191, 36, 0.15)',

  // CosmicBackground - 日落背景 (橙+粉 渐变)
  '--effect-cosmic-glow-1': palette.sunsetOrange,
  '--effect-cosmic-glow-2': palette.sunsetPink,

  // GridMatrix - 温暖网格
  '--effect-grid-color': 'rgba(249, 115, 22, 0.2)',

  // Spotlight - 聚光灯
  '--effect-spotlight-color': 'color-mix(in srgb, #f97316, transparent 75%)',
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: false,
  codeTheme: 'github-light' as const,
};
