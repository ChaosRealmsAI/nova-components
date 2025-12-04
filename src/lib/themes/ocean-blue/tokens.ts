/**
 * Ocean Blue - Token 实现
 *
 * 清新海洋风格：浅蓝色调、柔和边角、现代感
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // 海洋色系
  oceanDeep: '#0284c7',     // Sky-600
  oceanMid: '#0ea5e9',      // Sky-500
  oceanLight: '#38bdf8',    // Sky-400
  oceanPale: '#7dd3fc',     // Sky-300

  // 辅助色
  coral: '#f97316',         // Orange-500
  mint: '#10b981',          // Emerald-500
  lavender: '#8b5cf6',      // Violet-500

  // 浅色基底 (Slate)
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',

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
  '--primary': palette.oceanDeep,
  '--primary-foreground': palette.white,
  '--primary-muted': 'color-mix(in srgb, #0284c7 20%, transparent)',
  '--primary-vivid': palette.oceanMid,

  '--secondary': palette.lavender,
  '--secondary-foreground': palette.white,
  '--secondary-muted': 'color-mix(in srgb, #8b5cf6 20%, transparent)',
  '--secondary-vivid': '#a78bfa',

  '--accent': palette.coral,
  '--accent-foreground': palette.white,
  '--accent-muted': 'color-mix(in srgb, #f97316 20%, transparent)',
  '--accent-vivid': '#fb923c',

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.mint,
  '--success-foreground': palette.white,
  '--success-muted': 'color-mix(in srgb, #10b981 15%, transparent)',
  '--success-vivid': '#34d399',

  '--warning': '#eab308',
  '--warning-foreground': palette.black,
  '--warning-muted': 'color-mix(in srgb, #eab308 15%, transparent)',
  '--warning-vivid': '#facc15',

  '--error': '#ef4444',
  '--error-foreground': palette.white,
  '--error-muted': 'color-mix(in srgb, #ef4444 15%, transparent)',
  '--error-vivid': '#f87171',

  // Destructive (alias for error)
  '--destructive': '#ef4444',
  '--destructive-foreground': palette.white,

  '--info': palette.oceanMid,
  '--info-foreground': palette.white,
  '--info-muted': 'color-mix(in srgb, #0ea5e9 15%, transparent)',
  '--info-vivid': palette.oceanLight,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.slate50,
  '--background-alt': palette.white,

  '--surface-1': palette.white,
  '--surface-1-hover': palette.slate100,

  '--surface-2': palette.slate100,
  '--surface-2-hover': palette.slate200,

  '--surface-3': palette.slate200,
  '--surface-3-hover': palette.slate300,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.slate900,
  '--foreground-secondary': palette.slate700,
  '--muted': palette.slate200,
  '--muted-foreground': palette.slate500,
  '--subtle-foreground': palette.slate400,
  '--disabled-foreground': palette.slate300,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.slate200,
  '--border-muted': palette.slate100,
  '--border-vivid': palette.oceanDeep,
  '--border-width': '1px', // 海洋：细边框
  '--ring': palette.oceanDeep,
  '--radius': '0.5rem', // 现代圆角
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.5rem', // 标准间距

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
  // 7. 阴影 (Shadow) - 柔和投影
  // ========================================
  '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  '--shadow-glow': '0 0 20px rgba(2, 132, 199, 0.3)',

};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: false,
  codeTheme: 'github-light' as const,
};
