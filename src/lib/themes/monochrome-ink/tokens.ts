/**
 * Token 实现模板
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Token 是主题的基础，定义了所有颜色、间距、字体等设计变量
 *
 * 开发步骤：
 * 1. 先定义调色板 (palette) - 你的主题使用的基础颜色
 * 2. 然后将调色板映射到语义化的 Token
 * 3. 最后在组件样式中使用这些 Token
 *
 * Token 使用语法：
 * - 颜色类 Token: 使用 Tailwind 类名 (bg-primary, text-foreground)
 * - 阴影类 Token: 使用 var() (shadow-[var(--shadow-md)])
 * - 间距类 Token: 使用 var() 或直接在 Tailwind 中使用
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// 调色板 (内部使用，不导出)
// ============================================================================

const palette = {
  // 墨色
  ink: {
    950: '#09090b', // 浓墨 (Primary/Border/Text)
    900: '#18181b',
    800: '#27272a',
    600: '#52525b', // 淡墨 (Muted)
    200: '#e4e4e7', // 极淡墨 (Hover)
    100: '#f4f4f5',
  },
  
  // 纸张色
  paper: {
    white: '#ffffff',
    base: '#fafafa', // 宣纸白
    warm: '#f5f5f4', // 暖调纸张
    dark: '#e7e5e4', // 湿纸
  },

  // 印章红 (Accent)
  stamp: {
    DEFAULT: '#be123c', // 丹红
    vivid: '#e11d48',
    muted: '#9f1239',
  },

  // 功能色
  success: '#15803d', // 翠绿
  warning: '#b45309', // 赭黄
  error: '#be123c',   // 丹红 (同印章)
  info: '#1d4ed8',    // 靛蓝
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': palette.ink[950],
  '--primary-foreground': palette.paper.white,
  '--primary-muted': palette.ink[600],
  '--primary-vivid': palette.ink[900],

  '--secondary': palette.ink[100],
  '--secondary-foreground': palette.ink[900],
  '--secondary-muted': palette.ink[200],
  '--secondary-vivid': palette.ink[200],

  '--accent': palette.stamp.DEFAULT,
  '--accent-foreground': palette.paper.white,
  '--accent-muted': palette.stamp.muted,
  '--accent-vivid': palette.stamp.vivid,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.success,
  '--success-foreground': palette.paper.white,
  '--success-muted': 'color-mix(in srgb, #15803d 20%, transparent)',
  '--success-vivid': '#166534',

  '--warning': palette.warning,
  '--warning-foreground': palette.paper.white,
  '--warning-muted': 'color-mix(in srgb, #b45309 20%, transparent)',
  '--warning-vivid': '#92400e',

  '--error': palette.error,
  '--error-foreground': palette.paper.white,
  '--error-muted': 'color-mix(in srgb, #be123c 20%, transparent)',
  '--error-vivid': '#9f1239',

  // Destructive
  '--destructive': palette.error,
  '--destructive-foreground': palette.paper.white,

  '--info': palette.info,
  '--info-foreground': palette.paper.white,
  '--info-muted': 'color-mix(in srgb, #1d4ed8 20%, transparent)',
  '--info-vivid': '#1e40af',

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.paper.base,
  '--background-alt': palette.paper.warm,

  '--surface-1': palette.paper.white,
  '--surface-1-hover': palette.paper.warm,

  '--surface-2': palette.paper.warm,
  '--surface-2-hover': palette.paper.dark,

  '--surface-3': palette.paper.dark,
  '--surface-3-hover': '#d6d3d1',

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.ink[950],
  '--foreground-secondary': palette.ink[600],
  '--muted': palette.paper.warm,
  '--muted-foreground': palette.ink[600],
  '--subtle-foreground': palette.ink[600], // Alias to muted-foreground
  '--disabled-foreground': 'rgba(9, 9, 11, 0.3)',

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.ink[950],
  '--border-muted': palette.ink[200],
  '--border-vivid': palette.ink[950],
  '--border-width': '2px',
  '--ring': palette.ink[950],
  '--radius': '0.125rem', // 2px - 几乎直角
  '--opacity-disabled': '0.5',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  '--font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  '--font-display': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',

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
  // 水墨风格通常是平面的，或者用粗边框代替阴影
  // 这里我们定义一种"实心投影"风格 (Hard Shadow)
  '--shadow-sm': '1px 1px 0px var(--foreground)',
  '--shadow-md': '3px 3px 0px var(--foreground)',
  '--shadow-lg': '5px 5px 0px var(--foreground)',
  '--shadow-glow': '0 0 0 2px var(--foreground)', // 聚焦光晕改为边框

  // ========================================
  // 8. 特效 (Effects)
  // ========================================
  '--effect-speed-slow': '0.5s',
  '--effect-speed-normal': '0.2s', // 更干脆
  '--effect-speed-fast': '0.1s',
  '--effect-glow-primary': '0 0 10px rgba(0,0,0,0.2)',
  '--effect-glow-secondary': '0 0 10px rgba(0,0,0,0.1)',

  // ========================================
  // 9. 特效 Token
  // ========================================
  '--effect-beam-color': palette.ink[950],
  '--effect-beam-glow': '0 0 0 transparent', // 无光晕
  '--effect-shimmer-color': 'rgba(0,0,0,0.1)',
  '--effect-cosmic-glow-1': 'rgba(0,0,0,0.05)',
  '--effect-cosmic-glow-2': 'rgba(0,0,0,0.1)',
  '--effect-grid-color': 'rgba(0,0,0,0.1)',
  '--effect-spotlight-color': 'rgba(0,0,0,0.1)',
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: false,
  codeTheme: 'github-light' as const,
};
