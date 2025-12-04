/**
 * Ice Glass - Token Definition
 *
 * A theme inspired by frosted glass, modern OS aesthetics, and sci-fi interfaces.
 * Features semi-transparent surfaces, heavy use of backdrop blur, and neon accents.
 */

// ============================================================================
// 调色板 (内部使用)
// ============================================================================

const palette = {
  // Primary: Cyan / Ice Blue
  cyan400: 'hsla(190, 90%, 50%, 1)', // Bright Cyan
  cyan500: 'hsla(190, 80%, 40%, 1)', // Deep Cyan
  cyan100: 'hsla(190, 70%, 90%, 1)', // Pale Cyan

  // Backgrounds: Deep Space Blue
  space900: 'hsla(220, 40%, 8%, 1)',  // Almost Black
  space800: 'hsla(220, 35%, 14%, 1)', // Dark Blue Grey

  // Glass Surfaces (White with Alpha)
  glass05: 'hsla(0, 0%, 100%, 0.05)',
  glass10: 'hsla(0, 0%, 100%, 0.10)',
  glass20: 'hsla(0, 0%, 100%, 0.20)',
  glass30: 'hsla(0, 0%, 100%, 0.30)',
  glass50: 'hsla(0, 0%, 100%, 0.50)',

  // Borders
  border10: 'hsla(0, 0%, 100%, 0.10)',
  border20: 'hsla(0, 0%, 100%, 0.20)',
  border50: 'hsla(0, 0%, 100%, 0.50)', // High contrast border

  // Text
  textWhite: 'hsla(0, 0%, 100%, 0.95)',
  textMuted: 'hsla(0, 0%, 100%, 0.60)',
  textDim: 'hsla(0, 0%, 100%, 0.30)',

  // Semantic
  red500: 'hsla(340, 80%, 60%, 1)',
  green500: 'hsla(150, 80%, 50%, 1)',
  amber500: 'hsla(40, 90%, 60%, 1)',
  purple500: 'hsla(270, 80%, 65%, 1)', // Accent
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.cyan400,
  '--primary-foreground': palette.space900, // Dark text on bright primary
  '--primary-muted': 'hsla(190, 90%, 50%, 0.15)',
  '--primary-vivid': palette.cyan100,

  '--secondary': palette.glass10,
  '--secondary-foreground': palette.textWhite,
  '--secondary-muted': palette.glass05,
  '--secondary-vivid': palette.glass20,

  '--accent': palette.purple500,
  '--accent-foreground': palette.textWhite,
  '--accent-muted': 'hsla(270, 80%, 65%, 0.2)',
  '--accent-vivid': 'hsla(270, 90%, 75%, 1)',

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.green500,
  '--success-foreground': palette.space900,
  '--success-muted': 'hsla(150, 80%, 50%, 0.1)',
  '--success-vivid': 'hsla(150, 80%, 60%, 1)',

  '--warning': palette.amber500,
  '--warning-foreground': palette.space900,
  '--warning-muted': 'hsla(40, 90%, 60%, 0.1)',
  '--warning-vivid': 'hsla(40, 90%, 70%, 1)',

  '--error': palette.red500,
  '--error-foreground': palette.textWhite,
  '--error-muted': 'hsla(340, 80%, 60%, 0.1)',
  '--error-vivid': 'hsla(340, 90%, 70%, 1)',

  // Destructive (shadcn compat)
  '--destructive': palette.red500,
  '--destructive-foreground': palette.textWhite,

  '--info': palette.cyan400,
  '--info-foreground': palette.space900,
  '--info-muted': 'hsla(190, 90%, 50%, 0.1)',
  '--info-vivid': palette.cyan100,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.space900,
  '--background-alt': palette.space800,

  // Note: Surface styles in Ice Glass rely heavily on backdrop-filter in CSS/Components
  // These colors are just the base fills
  '--surface-1': palette.glass05,
  '--surface-1-hover': palette.glass10,

  '--surface-2': palette.glass10,
  '--surface-2-hover': palette.glass20,

  '--surface-3': palette.glass20,
  '--surface-3-hover': palette.glass30,

  '--card': palette.glass05,
  '--card-foreground': palette.textWhite,
  '--popover': palette.glass20, // More opaque/blur for popups
  '--popover-foreground': palette.textWhite,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.textWhite,
  '--foreground-secondary': palette.textMuted,
  '--muted': palette.glass10,
  '--muted-foreground': palette.textMuted,
  '--subtle-foreground': palette.textDim,
  '--disabled-foreground': palette.textDim,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.border20,
  '--border-muted': palette.border10,
  '--border-vivid': palette.border50, // For high contrast edges
  '--border-width': '1px',
  '--input': palette.glass05, // Inputs are very transparent
  '--ring': palette.cyan400,

  '--radius': '0.75rem', // 12px - Medium-large rounded
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  '--font-mono': 'JetBrains Mono, monospace',
  '--font-display': 'Inter, sans-serif', // Could be Expletus Sans or similar sci-fi font

  // Font Sizes
  '--text-xs': '0.75rem',      // 12px
  '--text-sm': '0.875rem',     // 14px
  '--text-base': '1rem',       // 16px
  '--text-lg': '1.125rem',     // 18px
  '--text-xl': '1.25rem',      // 20px
  '--text-2xl': '1.5rem',      // 24px
  '--text-3xl': '1.875rem',    // 30px

  // ========================================
  // 7. 阴影 (Shadow) - Glass glows
  // ========================================
  // No drop shadows for glass usually, but "glows"
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
  '--shadow-glow': '0 0 15px rgba(34, 211, 238, 0.3)', // Cyan glow
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};