const palette = {
  // 主色系 - Midnight Lilac
  primary: '#A78BFA',      // Soft Lilac
  secondary: '#EC4899',    // Magenta
  accent: '#818CF8',       // Indigo

  // 背景色
  dark: '#1E1B2E',         // Deep Violet Black
  darker: '#151221',       // Darker Violet Black
  
  // 表面色
  surface1: '#2D2A42',     // Card bg
  surface2: '#3C3856',     // Hover bg
  surface3: '#4B4669',     // Active bg

  // 中性色
  gray900: '#111827',
  gray800: '#1F2937',
  gray700: '#374151',
  gray400: '#9CA3AF',
  gray200: '#E5E7EB',
  
  // 状态色
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',

  // 纯色
  white: '#FFFFFF',
  black: '#000000',
};

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.primary,
  '--primary-foreground': palette.black,
  '--primary-muted': 'color-mix(in srgb, #A78BFA 20%, transparent)',
  '--primary-vivid': '#8B5CF6',

  '--secondary': palette.secondary,
  '--secondary-foreground': palette.white,
  '--secondary-muted': 'color-mix(in srgb, #EC4899 20%, transparent)',
  '--secondary-vivid': '#DB2777',

  '--accent': palette.accent,
  '--accent-foreground': palette.white,
  '--accent-muted': 'color-mix(in srgb, #818CF8 20%, transparent)',
  '--accent-vivid': '#6366F1',

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.success,
  '--success-foreground': palette.black,
  '--success-muted': 'color-mix(in srgb, #34D399 20%, transparent)',
  '--success-vivid': '#10B981',

  '--warning': palette.warning,
  '--warning-foreground': palette.black,
  '--warning-muted': 'color-mix(in srgb, #FBBF24 20%, transparent)',
  '--warning-vivid': '#F59E0B',

  '--error': palette.error,
  '--error-foreground': palette.white,
  '--error-muted': 'color-mix(in srgb, #F87171 20%, transparent)',
  '--error-vivid': '#EF4444',

  '--destructive': palette.error,
  '--destructive-foreground': palette.white,

  '--info': palette.info,
  '--info-foreground': palette.white,
  '--info-muted': 'color-mix(in srgb, #60A5FA 20%, transparent)',
  '--info-vivid': '#3B82F6',

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.dark,
  '--background-alt': palette.darker,

  '--surface-1': palette.surface1,
  '--surface-1-hover': 'color-mix(in srgb, #2D2A42 90%, white)',

  '--surface-2': palette.surface2,
  '--surface-2-hover': 'color-mix(in srgb, #3C3856 90%, white)',

  '--surface-3': palette.surface3,
  '--surface-3-hover': 'color-mix(in srgb, #4B4669 90%, white)',

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': '#E2E8F0',          // Light Gray
  '--foreground-secondary': '#CBD5E1', // Lighter Gray
  '--muted': palette.surface1,
  '--muted-foreground': '#94A3B8',    // Slate 400
  '--subtle-foreground': '#64748B',   // Slate 500
  '--disabled-foreground': '#475569', // Slate 600

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.surface3,
  '--border-muted': palette.surface2,
  '--border-vivid': palette.primary,
  '--border-width': '1px',
  '--ring': 'color-mix(in srgb, #A78BFA 50%, transparent)',
  '--radius': '0.75rem',
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  '--font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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
  // 7. 阴影 (Shadow)
  // ========================================
  '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
  '--shadow-glow': '0 0 20px rgba(167, 139, 250, 0.3)', // Lilac glow

  // ========================================
  // 8. 特效 (Effects)
  // ========================================
  '--effect-speed-slow': '0.5s',
  '--effect-speed-normal': '0.3s',
  '--effect-speed-fast': '0.15s',
  '--effect-glow-primary': '0 0 15px rgba(167, 139, 250, 0.5)',
  '--effect-glow-secondary': '0 0 15px rgba(236, 72, 153, 0.5)',
  
  // ========================================
  // 9. 特效 Token (ADR-005)
  // ========================================
  // BorderBeam
  '--effect-beam-color': '#A78BFA',
  '--effect-beam-glow': '0 0 10px #A78BFA',

  // Shimmer
  '--effect-shimmer-color': 'rgba(255, 255, 255, 0.1)',

  // CosmicBackground
  '--effect-cosmic-glow-1': 'rgba(167, 139, 250, 0.4)',
  '--effect-cosmic-glow-2': 'rgba(236, 72, 153, 0.4)',

  // GridMatrix
  '--effect-grid-color': 'rgba(167, 139, 250, 0.2)',

  // Spotlight
  '--effect-spotlight-color': 'rgba(167, 139, 250, 0.2)',
};

export const meta = {
  isDark: true,
  codeTheme: 'github-dark' as const,
};