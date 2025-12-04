/**
 * Neo Brutalism - Token 实现
 *
 * 新野兽派风格：高饱和度色彩、粗黑边框、硬阴影、大胆排版
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // 高饱和度核心色
  violet: '#8b5cf6',       // Violet-500
  yellow: '#facc15',       // Yellow-400
  pink: '#fb7185',         // Rose-400
  cyan: '#22d3ee',         // Cyan-400
  green: '#4ade80',        // Green-400
  red: '#f87171',          // Red-400

  // 中性色
  white: '#ffffff',
  black: '#000000',
  zinc100: '#f4f4f5',
  zinc200: '#e4e7eb',
  zinc300: '#d4d4d8',
  zinc800: '#27272a',
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.violet,
  '--primary-foreground': palette.white,
  '--primary-muted': '#ddd6fe', // Violet-200
  '--primary-vivid': '#7c3aed', // Violet-600

  '--secondary': palette.yellow,
  '--secondary-foreground': palette.black,
  '--secondary-muted': '#fef08a', // Yellow-200
  '--secondary-vivid': '#eab308', // Yellow-500

  '--accent': palette.pink,
  '--accent-foreground': palette.black,
  '--accent-muted': '#fecdd3', // Rose-200
  '--accent-vivid': '#e11d48', // Rose-600

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.green,
  '--success-foreground': palette.black,
  '--success-muted': '#bbf7d0', // Green-200
  '--success-vivid': '#16a34a', // Green-600

  '--warning': palette.yellow,
  '--warning-foreground': palette.black,
  '--warning-muted': '#fef08a', // Yellow-200
  '--warning-vivid': '#eab308', // Yellow-500

  '--error': palette.red,
  '--error-foreground': palette.black,
  '--error-muted': '#fecaca', // Red-200
  '--error-vivid': '#dc2626', // Red-600

  // Destructive
  '--destructive': palette.red,
  '--destructive-foreground': palette.black,

  '--info': palette.cyan,
  '--info-foreground': palette.black,
  '--info-muted': '#a5f3fc', // Cyan-200
  '--info-vivid': '#0891b2', // Cyan-600

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.white,
  '--background-alt': palette.zinc100,

  '--surface-1': palette.white,
  '--surface-1-hover': palette.zinc100,

  '--surface-2': palette.zinc100,
  '--surface-2-hover': palette.zinc200,

  '--surface-3': palette.zinc200,
  '--surface-3-hover': palette.zinc300,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.black,
  '--foreground-secondary': palette.zinc800,
  '--muted': palette.zinc100,
  '--muted-foreground': palette.zinc800,
  '--subtle-foreground': palette.zinc800,
  '--disabled-foreground': palette.zinc300,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.black,
  '--border-muted': palette.zinc300,
  '--border-vivid': palette.black,
  '--border-width': '3px', // 粗边框
  '--ring': palette.black,
  '--radius': '0.5rem',    // 稍圆角
  '--opacity-disabled': '0.6',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': '"Archivo", "Inter", system-ui, sans-serif', // Archivo is good for brutalism
  '--font-mono': '"Space Mono", "Fira Code", monospace',
  '--font-display': '"Clash Display", "Archivo Black", sans-serif',

  // 字号 (Font Size)
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '2rem', // Bold headings

  // ========================================
  // 7. 阴影 (Shadow) - 硬阴影
  // ========================================
  '--shadow-sm': '2px 2px 0px 0px #000000',
  '--shadow-md': '4px 4px 0px 0px #000000',
  '--shadow-lg': '8px 8px 0px 0px #000000',
  '--shadow-glow': '4px 4px 0px 0px #8b5cf6', // Pop shadow

  // ========================================
  // 8. 特效 (Effects)
  // ========================================
  '--effect-speed-slow': '0.4s',
  '--effect-speed-normal': '0.2s', // Snappy
  '--effect-speed-fast': '0.1s',
  '--effect-glow-primary': '#8b5cf6',
  '--effect-glow-secondary': '#facc15',

  // ========================================
  // 9. 特效 Token
  // ========================================
  '--effect-beam-color': palette.black,
  '--effect-beam-glow': 'transparent', // No glow, just solid
  '--effect-shimmer-color': 'rgba(0, 0, 0, 0.1)',
  '--effect-cosmic-glow-1': palette.violet,
  '--effect-cosmic-glow-2': palette.yellow,
  '--effect-grid-color': 'rgba(0, 0, 0, 0.1)',
  '--effect-spotlight-color': 'rgba(0, 0, 0, 0.1)',
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: false,
  codeTheme: 'github-light' as const,
};