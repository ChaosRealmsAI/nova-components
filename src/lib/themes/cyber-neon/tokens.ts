/**
 * Cyber Neon 主题 Token 定义
 *
 * 设计灵感：赛博朋克、霓虹灯、东京夜景
 * 核心特征：深色背景 + 霓虹发光效果
 */

// ============================================================================
// 调色板 (内部使用)
// ============================================================================

const palette = {
  // 霓虹色
  neonPink: '#ff2d95',
  neonPinkLight: '#ff5aaf',
  neonPinkDark: '#cc2477',
  neonPinkMuted: '#ff2d9540',

  neonCyan: '#00f0ff',
  neonCyanLight: '#66f5ff',
  neonCyanDark: '#00c0cc',
  neonCyanMuted: '#00f0ff40',

  neonPurple: '#b94fff',
  neonPurpleLight: '#cc7aff',
  neonPurpleDark: '#9933dd',
  neonPurpleMuted: '#b94fff40',

  // 语义色
  neonRed: '#ff3b3b',
  neonRedLight: '#ff6b6b',
  neonRedMuted: '#ff3b3b40',

  neonGreen: '#00ff88',
  neonGreenLight: '#66ffaa',
  neonGreenMuted: '#00ff8840',

  neonOrange: '#ffaa00',
  neonOrangeLight: '#ffcc66',
  neonOrangeMuted: '#ffaa0040',

  neonBlue: '#3b82f6',
  neonBlueLight: '#60a5fa',
  neonBlueMuted: '#3b82f640',

  // 背景层级 (由深到浅)
  bgDeep: '#0a0a0f',
  bgSurface1: '#12121a',
  bgSurface2: '#1a1a25',
  bgSurface3: '#222230',
  bgSurface1Hover: '#18182299',
  bgSurface2Hover: '#22222d',
  bgSurface3Hover: '#2a2a3a',

  // 文字色
  textPrimary: '#f0f0f5',
  textSecondary: '#a0a0b5',
  textMuted: '#8888a0',
  textSubtle: '#555566',
  textDisabled: '#444455',

  // 边框色
  borderDefault: '#2a2a3a',
  borderMuted: '#1f1f2a',
  borderVivid: '#3a3a4a',

  // 纯色
  white: '#ffffff',
  black: '#000000',
};

// ============================================================================
// Token 实现
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.neonPink,
  '--primary-foreground': palette.white,
  '--primary-muted': palette.neonPinkMuted,
  '--primary-vivid': palette.neonPinkLight,

  '--secondary': palette.neonCyan,
  '--secondary-foreground': palette.bgDeep,
  '--secondary-muted': palette.neonCyanMuted,
  '--secondary-vivid': palette.neonCyanLight,

  '--accent': palette.neonPurple,
  '--accent-foreground': palette.white,
  '--accent-muted': palette.neonPurpleMuted,
  '--accent-vivid': palette.neonPurpleLight,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.neonGreen,
  '--success-foreground': palette.bgDeep,
  '--success-muted': palette.neonGreenMuted,
  '--success-vivid': palette.neonGreenLight,

  '--warning': palette.neonOrange,
  '--warning-foreground': palette.bgDeep,
  '--warning-muted': palette.neonOrangeMuted,
  '--warning-vivid': palette.neonOrangeLight,

  '--error': palette.neonRed,
  '--error-foreground': palette.white,
  '--error-muted': palette.neonRedMuted,
  '--error-vivid': palette.neonRedLight,

  '--destructive': palette.neonRed,
  '--destructive-foreground': palette.white,

  '--info': palette.neonBlue,
  '--info-foreground': palette.white,
  '--info-muted': palette.neonBlueMuted,
  '--info-vivid': palette.neonBlueLight,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.bgDeep,
  '--background-alt': palette.bgSurface1,

  '--surface-1': palette.bgSurface1,
  '--surface-1-hover': palette.bgSurface1Hover,

  '--surface-2': palette.bgSurface2,
  '--surface-2-hover': palette.bgSurface2Hover,

  '--surface-3': palette.bgSurface3,
  '--surface-3-hover': palette.bgSurface3Hover,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.textPrimary,
  '--foreground-secondary': palette.textSecondary,
  '--muted': palette.bgSurface2,
  '--muted-foreground': palette.textMuted,
  '--subtle-foreground': palette.textSubtle,
  '--disabled-foreground': palette.textDisabled,

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.borderDefault,
  '--border-muted': palette.borderMuted,
  '--border-vivid': palette.borderVivid,
  '--border-width': '1px',
  '--ring': palette.neonPink,
  '--radius': '4px',
  '--opacity-disabled': '0.4',
  '--spacing-base': '4px',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, sans-serif',
  '--font-mono': 'ui-monospace, "SF Mono", "Cascadia Mono", monospace',
  '--font-display': 'ui-sans-serif, system-ui, sans-serif',

  // 字号
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. 阴影 - 霓虹发光效果
  // ========================================
  '--shadow-sm': `0 0 4px ${palette.neonPinkMuted}`,
  '--shadow-md': `0 0 8px ${palette.neonPinkMuted}, 0 0 16px ${palette.neonPinkMuted}`,
  '--shadow-lg': `0 0 12px ${palette.neonPink}, 0 0 24px ${palette.neonPinkMuted}, 0 0 48px ${palette.neonPinkMuted}`,
  '--shadow-glow': `0 0 8px ${palette.neonPink}, 0 0 16px ${palette.neonPink}, 0 0 32px ${palette.neonPinkMuted}`,

  // ========================================
  // 8. 扩展 Token (Cyber Neon 特有)
  // ========================================
  '--glow-primary': `0 0 5px ${palette.neonPink}, 0 0 10px ${palette.neonPinkMuted}, 0 0 20px ${palette.neonPinkMuted}`,
  '--glow-secondary': `0 0 5px ${palette.neonCyan}, 0 0 10px ${palette.neonCyanMuted}`,
  '--glow-accent': `0 0 5px ${palette.neonPurple}, 0 0 10px ${palette.neonPurpleMuted}`,
  '--glow-success': `0 0 5px ${palette.neonGreen}, 0 0 10px ${palette.neonGreenMuted}`,
  '--glow-error': `0 0 5px ${palette.neonRed}, 0 0 10px ${palette.neonRedMuted}`,
  '--glow-warning': `0 0 5px ${palette.neonOrange}, 0 0 10px ${palette.neonOrangeMuted}`,
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};
