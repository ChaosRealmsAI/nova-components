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
  // Brand - 冷色调渐变系
  primary: '#8B5CF6',        // Violet-500 - 主色
  primaryLight: '#A78BFA',   // Violet-400
  secondary: '#06B6D4',      // Cyan-500 - 次要色
  secondaryLight: '#22D3EE', // Cyan-400
  accent: '#EC4899',         // Pink-500 - 强调色
  accentLight: '#F472B6',    // Pink-400

  // Semantic
  success: '#10B981',        // Emerald-500
  warning: '#F59E0B',        // Amber-500
  error: '#EF4444',          // Red-500
  info: '#3B82F6',           // Blue-500

  // Background - 深色渐变背景
  bgDeep: '#0F0A1F',         // 深紫黑
  bgBase: '#1A1333',         // 基础背景

  // Surface - 半透明毛玻璃层
  glass1: 'rgba(255, 255, 255, 0.08)',   // 卡片层
  glass2: 'rgba(255, 255, 255, 0.12)',   // 悬浮层
  glass3: 'rgba(255, 255, 255, 0.16)',   // 最高层
  glassHover: 'rgba(255, 255, 255, 0.05)', // hover 增量

  // Text
  textMain: '#F8FAFC',       // 主文字 - 接近纯白
  textMuted: '#94A3B8',      // 次要文字
  textSubtle: '#64748B',     // 微弱文字

  // Border - 半透明边框
  borderLight: 'rgba(255, 255, 255, 0.15)',
  borderMuted: 'rgba(255, 255, 255, 0.08)',
  borderVivid: 'rgba(255, 255, 255, 0.25)',

  // Pure
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
  '--primary': palette.primary,
  '--primary-foreground': palette.white,
  '--primary-muted': 'rgba(139, 92, 246, 0.2)',
  '--primary-vivid': palette.primaryLight,

  '--secondary': palette.secondary,
  '--secondary-foreground': palette.white,
  '--secondary-muted': 'rgba(6, 182, 212, 0.2)',
  '--secondary-vivid': palette.secondaryLight,

  '--accent': palette.accent,
  '--accent-foreground': palette.white,
  '--accent-muted': 'rgba(236, 72, 153, 0.2)',
  '--accent-vivid': palette.accentLight,

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': palette.success,
  '--success-foreground': palette.white,
  '--success-muted': 'rgba(16, 185, 129, 0.2)',
  '--success-vivid': '#34D399',

  '--warning': palette.warning,
  '--warning-foreground': palette.black,
  '--warning-muted': 'rgba(245, 158, 11, 0.2)',
  '--warning-vivid': '#FBBF24',

  '--error': palette.error,
  '--error-foreground': palette.white,
  '--error-muted': 'rgba(239, 68, 68, 0.2)',
  '--error-vivid': '#F87171',

  // Destructive
  '--destructive': palette.error,
  '--destructive-foreground': palette.white,

  '--info': palette.info,
  '--info-foreground': palette.white,
  '--info-muted': 'rgba(59, 130, 246, 0.2)',
  '--info-vivid': '#60A5FA',

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': palette.bgDeep,
  '--background-alt': palette.bgBase,

  '--surface-1': palette.glass1,
  '--surface-1-hover': 'rgba(255, 255, 255, 0.12)',

  '--surface-2': palette.glass2,
  '--surface-2-hover': 'rgba(255, 255, 255, 0.16)',

  '--surface-3': palette.glass3,
  '--surface-3-hover': 'rgba(255, 255, 255, 0.20)',

  // shadcn aliases
  '--card': palette.glass1,
  '--card-foreground': palette.textMain,
  '--popover': palette.glass2,
  '--popover-foreground': palette.textMain,

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': palette.textMain,
  '--foreground-secondary': palette.textMuted,
  '--muted': 'rgba(255, 255, 255, 0.06)',
  '--muted-foreground': palette.textMuted,
  '--subtle-foreground': palette.textSubtle,
  '--disabled-foreground': 'rgba(148, 163, 184, 0.5)',

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': palette.borderLight,
  '--border-muted': palette.borderMuted,
  '--border-vivid': palette.borderVivid,
  '--border-width': '1px',
  '--input': palette.borderLight,
  '--ring': palette.primary,
  '--radius': '1rem',  // 大圆角 - Glassmorphism 特征
  '--opacity-disabled': '0.4',
  '--spacing-base': '0.25rem',

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  '--font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  '--font-display': 'ui-sans-serif, system-ui, -apple-system, sans-serif',

  // 字号
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-3xl': '1.875rem',

  // ========================================
  // 7. 阴影 (Shadow) - 柔和发光效果
  // ========================================
  '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.2)',
  '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.25)',
  '--shadow-lg': '0 8px 32px rgba(0, 0, 0, 0.3)',
  '--shadow-glow': '0 0 20px rgba(139, 92, 246, 0.4)',  // 紫色发光
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,  // 深色主题 - 毛玻璃效果需要暗色背景
  codeTheme: 'github-dark' as const,
};
