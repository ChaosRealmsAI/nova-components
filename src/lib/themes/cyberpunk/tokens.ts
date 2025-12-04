/**
 * Cyberpunk - Token Definition
 * 
 * High contrast, neon colors, dark backgrounds.
 * Sharp edges and glowing effects.
 */

// ============================================================================
// Palette (Internal)
// ============================================================================

const palette = {
  // Brand
  neonCyan: '#00e5ff',
  neonPurple: '#d600ff',
  neonYellow: '#fcee0a',
  neonGreen: '#00ff9d',
  neonRed: '#ff2a2a',
  
  // Backgrounds
  black: '#000000',
  bgDeep: '#050505',
  bgSurface1: '#0f0f13', // Deep blue-black
  bgSurface2: '#1a1a2e', // Slightly lighter
  bgSurface3: '#2a2a40', // Highlight surface

  // Text
  textMain: '#e0e0e0',
  textMuted: '#94a3b8',
  textDark: '#050505',
  
  // Borders
  borderDark: '#334155',
  borderLight: '#475569',
};

// ============================================================================
// Tokens (Exported)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.neonCyan,
  '--primary-foreground': palette.textDark,
  '--primary-muted': 'rgba(0, 229, 255, 0.2)',
  '--primary-vivid': palette.neonCyan,

  '--secondary': palette.neonPurple,
  '--secondary-foreground': palette.textMain,
  '--secondary-muted': 'rgba(214, 0, 255, 0.2)',
  '--secondary-vivid': palette.neonPurple,

  '--accent': palette.neonYellow,
  '--accent-foreground': palette.textDark,
  '--accent-muted': 'rgba(252, 238, 10, 0.2)',
  '--accent-vivid': palette.neonYellow,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.neonGreen,
  '--success-foreground': palette.textDark,
  '--success-muted': 'rgba(0, 255, 157, 0.2)',
  '--success-vivid': palette.neonGreen,

  '--warning': palette.neonYellow,
  '--warning-foreground': palette.textDark,
  '--warning-muted': 'rgba(252, 238, 10, 0.2)',
  '--warning-vivid': palette.neonYellow,

  '--error': palette.neonRed,
  '--error-foreground': palette.textMain,
  '--error-muted': 'rgba(255, 42, 42, 0.2)',
  '--error-vivid': palette.neonRed,

  // Destructive
  '--destructive': palette.neonRed,
  '--destructive-foreground': palette.textMain,

  '--info': palette.neonCyan,
  '--info-foreground': palette.textDark,
  '--info-muted': 'rgba(0, 229, 255, 0.2)',
  '--info-vivid': palette.neonCyan,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.bgDeep,
  '--background-alt': palette.black,

  '--surface-1': palette.bgSurface1,
  '--surface-1-hover': palette.bgSurface2,

  '--surface-2': palette.bgSurface2,
  '--surface-2-hover': palette.bgSurface3,

  '--surface-3': palette.bgSurface3,
  '--surface-3-hover': '#3a3a50',

  // shadcn aliases
  '--card': palette.bgSurface1,
  '--card-foreground': palette.textMain,
  '--popover': palette.bgDeep,
  '--popover-foreground': palette.textMain,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.textMain,
  '--foreground-secondary': palette.textMuted,
  '--muted': palette.bgSurface2,
  '--muted-foreground': palette.textMuted,
  '--subtle-foreground': '#64748b',
  '--disabled-foreground': '#475569',

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.borderDark,
  '--border-muted': '#1e293b',
  '--border-vivid': palette.neonCyan,
  '--border-width': '1px',
  
  '--input': palette.borderDark,
  '--ring': palette.neonCyan,
  
  '--radius': '0px', // Sharp edges for Cyberpunk
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, sans-serif',
  '--font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  '--font-display': 'ui-sans-serif, system-ui, sans-serif', // Can change if a specific font is available

  // 字号 (Font Size)
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. 阴影 (Shadow)
  // ========================================
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.5)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
  '--shadow-glow': '0 0 10px rgba(0, 229, 255, 0.5)', // Cyan glow

};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};