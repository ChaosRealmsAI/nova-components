/**
 * Soft Clay 主题 Token 定义
 *
 * 设计灵感：新拟物主义 (Neumorphism)、陶土触感、柔和光影
 * 核心特征：浅色背景 + 双向柔和阴影（凸起/内凹）
 */

// ============================================================================
// 调色板 (内部使用)
// ============================================================================

const palette = {
  // 品牌色 - 柔和低饱和度
  fogBlue: '#6B8E9F',
  fogBlueLight: '#8AAAB8',
  fogBlueDark: '#5A7A8A',
  fogBlueMuted: '#6B8E9F30',

  clayBrown: '#9F8B7B',
  clayBrownLight: '#B5A090',
  clayBrownDark: '#8A776A',
  clayBrownMuted: '#9F8B7B30',

  sandBeige: '#B5A08E',
  sandBeigeLight: '#C8B8A8',
  sandBeigeMuted: '#B5A08E30',

  // 语义色 - 柔和版本
  mintGreen: '#7BA68D',
  mintGreenLight: '#95BBA5',
  mintGreenMuted: '#7BA68D30',

  amberYellow: '#C9A66B',
  amberYellowLight: '#D9BC8A',
  amberYellowMuted: '#C9A66B30',

  roseRed: '#B87878',
  roseRedLight: '#CC9595',
  roseRedMuted: '#B8787830',

  skyBlue: '#7B9EB5',
  skyBlueLight: '#98B5C8',
  skyBlueMuted: '#7B9EB530',

  // 背景层级 - 暖灰陶土色
  bgBase: '#E8E4DF',
  bgSurface1: '#E8E4DF',  // 与背景同色，靠阴影区分
  bgSurface2: '#ECE8E3',
  bgSurface3: '#F0ECE7',
  bgSurface1Hover: '#ECEAE6',
  bgSurface2Hover: '#F0EDE8',
  bgSurface3Hover: '#F4F1EC',

  // 文字色 - 暖灰系
  textPrimary: '#4A4543',
  textSecondary: '#6B6562',
  textMuted: '#8A847F',
  textSubtle: '#A5A09B',
  textDisabled: '#B8B3AE',

  // 阴影色 - 新拟物主义核心
  shadowDark: 'rgba(163, 156, 148, 0.5)',
  shadowLight: 'rgba(255, 255, 255, 0.8)',
  shadowInsetDark: 'rgba(163, 156, 148, 0.4)',
  shadowInsetLight: 'rgba(255, 255, 255, 0.7)',

  // 纯色
  white: '#FFFFFF',
  black: '#000000',
};

// ============================================================================
// Token 实现
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.fogBlue,
  '--primary-foreground': palette.white,
  '--primary-muted': palette.fogBlueMuted,
  '--primary-vivid': palette.fogBlueLight,

  '--secondary': palette.clayBrown,
  '--secondary-foreground': palette.white,
  '--secondary-muted': palette.clayBrownMuted,
  '--secondary-vivid': palette.clayBrownLight,

  '--accent': palette.sandBeige,
  '--accent-foreground': palette.textPrimary,
  '--accent-muted': palette.sandBeigeMuted,
  '--accent-vivid': palette.sandBeigeLight,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.mintGreen,
  '--success-foreground': palette.white,
  '--success-muted': palette.mintGreenMuted,
  '--success-vivid': palette.mintGreenLight,

  '--warning': palette.amberYellow,
  '--warning-foreground': palette.textPrimary,
  '--warning-muted': palette.amberYellowMuted,
  '--warning-vivid': palette.amberYellowLight,

  '--error': palette.roseRed,
  '--error-foreground': palette.white,
  '--error-muted': palette.roseRedMuted,
  '--error-vivid': palette.roseRedLight,

  '--destructive': palette.roseRed,
  '--destructive-foreground': palette.white,

  '--info': palette.skyBlue,
  '--info-foreground': palette.white,
  '--info-muted': palette.skyBlueMuted,
  '--info-vivid': palette.skyBlueLight,

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.bgBase,
  '--background-alt': palette.bgSurface2,

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
  // 新拟物主义：无边框，依赖阴影
  '--border': 'transparent',
  '--border-muted': 'transparent',
  '--border-vivid': palette.textSubtle,
  '--border-width': '0px',
  '--ring': palette.fogBlue,
  '--radius': '16px',
  '--opacity-disabled': '0.5',
  '--spacing-base': '4px',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, -apple-system, "SF Pro Rounded", system-ui, sans-serif',
  '--font-mono': 'ui-monospace, "SF Mono", monospace',
  '--font-display': 'ui-sans-serif, -apple-system, "SF Pro Rounded", system-ui, sans-serif',

  // 字号
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. 阴影 - 新拟物主义双向阴影
  // ========================================
  // 凸起阴影 (Raised)
  '--shadow-sm': `3px 3px 6px ${palette.shadowDark}, -3px -3px 6px ${palette.shadowLight}`,
  '--shadow-md': `6px 6px 12px ${palette.shadowDark}, -6px -6px 12px ${palette.shadowLight}`,
  '--shadow-lg': `10px 10px 20px ${palette.shadowDark}, -10px -10px 20px ${palette.shadowLight}`,

  // 内凹阴影 (Inset) - 用于 Input, Switch 轨道
  '--shadow-inset': `inset 4px 4px 8px ${palette.shadowInsetDark}, inset -4px -4px 8px ${palette.shadowInsetLight}`,
  '--shadow-inset-sm': `inset 2px 2px 4px ${palette.shadowInsetDark}, inset -2px -2px 4px ${palette.shadowInsetLight}`,

  // Hover 增强阴影
  '--shadow-hover': `8px 8px 16px ${palette.shadowDark}, -8px -8px 16px ${palette.shadowLight}`,

  // 不需要发光效果
  '--shadow-glow': 'none',

  // ========================================
  // 8. 扩展 Token (Soft Clay 特有)
  // ========================================
  '--shadow-dark': palette.shadowDark,
  '--shadow-light': palette.shadowLight,
  '--radius-sm': '8px',
  '--radius-md': '16px',
  '--radius-lg': '24px',
  '--radius-pill': '9999px',
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: false,  // 浅色主题
  codeTheme: 'github-light' as const,
};
