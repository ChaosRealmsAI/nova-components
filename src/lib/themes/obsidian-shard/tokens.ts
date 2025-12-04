/**
 * Obsidian Shard Token Implementation
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // Brand Colors
  cyan: '#00f0ff',
  cyanDim: 'rgba(0, 240, 255, 0.2)',
  cyanGlow: '0 0 10px rgba(0, 240, 255, 0.5)',
  
  white: '#ffffff',
  whiteDim: 'rgba(255, 255, 255, 0.1)',
  
  red: '#ff003c',
  redDim: 'rgba(255, 0, 60, 0.2)',
  
  // Backgrounds
  black: '#0a0a0a',
  gray950: '#111111',
  gray900: '#161616',
  gray850: '#1a1a1a',
  gray800: '#202020',
  gray700: '#2a2a2a',
  gray600: '#404040',
  gray400: '#a3a3a3',
  
  // Semantic
  green: '#00ff9d',
  yellow: '#ffd600',
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.cyan,
  '--primary-foreground': palette.black,
  '--primary-muted': palette.cyanDim,
  '--primary-vivid': palette.cyan,

  '--secondary': palette.white,
  '--secondary-foreground': palette.black,
  '--secondary-muted': palette.whiteDim,
  '--secondary-vivid': palette.white,

  '--accent': palette.red,
  '--accent-foreground': palette.white,
  '--accent-muted': palette.redDim,
  '--accent-vivid': palette.red,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.green,
  '--success-foreground': palette.black,
  '--success-muted': 'rgba(0, 255, 157, 0.1)',
  '--success-vivid': palette.green,

  '--warning': palette.yellow,
  '--warning-foreground': palette.black,
  '--warning-muted': 'rgba(255, 214, 0, 0.1)',
  '--warning-vivid': palette.yellow,

  '--error': palette.red,
  '--error-foreground': palette.white,
  '--error-muted': palette.redDim,
  '--error-vivid': palette.red,

  // Destructive (shadcn 组件使用)
  '--destructive': palette.red,
  '--destructive-foreground': palette.white,

  '--info': palette.cyan,
  '--info-foreground': palette.black,
  '--info-muted': palette.cyanDim,
  '--info-vivid': palette.cyan,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.black,
  '--background-alt': palette.gray950,

  '--surface-1': palette.gray900,
  '--surface-1-hover': palette.gray850,

  '--surface-2': palette.gray800,
  '--surface-2-hover': palette.gray700,

  '--surface-3': palette.gray700,
  '--surface-3-hover': palette.gray600,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.white,
  '--foreground-secondary': palette.gray400,
  '--muted': palette.gray800,
  '--muted-foreground': palette.gray400,
  '--subtle-foreground': palette.gray600,
  '--disabled-foreground': palette.gray600,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.gray600,
  '--border-muted': palette.gray800,
  '--border-vivid': palette.cyan,
  '--border-width': '1px',
  '--ring': palette.cyan,
  '--radius': '0px',
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem', // 4px

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'Inter, system-ui, sans-serif',
  '--font-mono': 'JetBrains Mono, monospace',
  '--font-display': 'Orbitron, sans-serif', // Hypothetical display font

  // 字号 (Font Size)
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 7. 阴影 (Shadow)
  // ========================================
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  '--shadow-glow': palette.cyanGlow,

};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};