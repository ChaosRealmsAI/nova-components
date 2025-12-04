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
  // TODO: 定义你的主题调色板
  // 示例：
  // primary: '#3B82F6',      // Blue-500
  // secondary: '#10B981',    // Emerald-500
  // accent: '#F59E0B',       // Amber-500
  //
  // 背景色
  // dark: '#0F172A',         // Slate-900
  // light: '#F8FAFC',        // Slate-50
  //
  // 中性色
  // gray900: '#1E293B',
  // gray800: '#334155',
  // gray700: '#475569',
  // gray400: '#94A3B8',
  // gray200: '#E2E8F0',
  //
  // 纯色
  // white: '#FFFFFF',
  // black: '#000000',
};

// ============================================================================
// Token 实现 (导出)
// ============================================================================

export const tokens: Record<string, string> = {
  // ========================================
  // 1. 品牌色 (Brand)
  // ========================================
  '--primary': '',            // TODO: 主色
  '--primary-foreground': '', // TODO: 主色上的文字颜色
  '--primary-muted': '',      // TODO: 主色的柔和版本
  '--primary-vivid': '',      // TODO: 主色的鲜艳版本

  '--secondary': '',            // TODO: 次要色
  '--secondary-foreground': '', // TODO: 次要色上的文字颜色
  '--secondary-muted': '',      // TODO: 次要色的柔和版本
  '--secondary-vivid': '',      // TODO: 次要色的鲜艳版本

  '--accent': '',            // TODO: 强调色
  '--accent-foreground': '', // TODO: 强调色上的文字颜色
  '--accent-muted': '',      // TODO: 强调色的柔和版本
  '--accent-vivid': '',      // TODO: 强调色的鲜艳版本

  // ========================================
  // 2. 语义色 (Semantic)
  // ========================================
  '--success': '',            // TODO: 成功色
  '--success-foreground': '', // TODO: 成功色上的文字
  '--success-muted': '',      // TODO: 成功色柔和版本
  '--success-vivid': '',      // TODO: 成功色鲜艳版本

  '--warning': '',            // TODO: 警告色
  '--warning-foreground': '', // TODO: 警告色上的文字
  '--warning-muted': '',      // TODO: 警告色柔和版本
  '--warning-vivid': '',      // TODO: 警告色鲜艳版本

  '--error': '',            // TODO: 错误色
  '--error-foreground': '', // TODO: 错误色上的文字
  '--error-muted': '',      // TODO: 错误色柔和版本
  '--error-vivid': '',      // TODO: 错误色鲜艳版本

  // Destructive (shadcn 组件使用)
  '--destructive': '',            // TODO: 危险色 (通常与 error 相同)
  '--destructive-foreground': '', // TODO: 危险色上的文字

  '--info': '',            // TODO: 信息色
  '--info-foreground': '', // TODO: 信息色上的文字
  '--info-muted': '',      // TODO: 信息色柔和版本
  '--info-vivid': '',      // TODO: 信息色鲜艳版本

  // ========================================
  // 3. 背景层级 (Surface)
  // ========================================
  '--background': '',     // TODO: 最底层背景色
  '--background-alt': '', // TODO: 替代背景色

  '--surface-1': '',       // TODO: 第一层表面 (卡片等)
  '--surface-1-hover': '', // TODO: 第一层 hover 状态

  '--surface-2': '',       // TODO: 第二层表面
  '--surface-2-hover': '', // TODO: 第二层 hover 状态

  '--surface-3': '',       // TODO: 第三层表面
  '--surface-3-hover': '', // TODO: 第三层 hover 状态

  // ========================================
  // 4. 文字颜色 (Text)
  // ========================================
  '--foreground': '',          // TODO: 主要文字颜色
  '--foreground-secondary': '', // TODO: 次要文字颜色
  '--muted': '',               // TODO: 柔和背景
  '--muted-foreground': '',    // TODO: 柔和文字
  '--subtle-foreground': '',   // TODO: 微弱文字
  '--disabled-foreground': '', // TODO: 禁用文字

  // ========================================
  // 5. 结构 (Structure)
  // ========================================
  '--border': '',         // TODO: 边框颜色
  '--border-muted': '',   // TODO: 柔和边框
  '--border-vivid': '',   // TODO: 醒目边框
  '--border-width': '',   // TODO: 边框宽度 (如 '1px' 或 '2px')
  '--ring': '',           // TODO: 聚焦环颜色
  '--radius': '',         // TODO: 默认圆角 (如 '0.5rem' 或 '0px')
  '--opacity-disabled': '', // TODO: 禁用透明度 (如 '0.5')
  '--spacing-base': '',   // TODO: 基础间距单位

  // ========================================
  // 6. 字体 (Typography)
  // ========================================
  '--font-sans': '',    // TODO: 无衬线字体
  '--font-mono': '',    // TODO: 等宽字体
  '--font-display': '', // TODO: 展示用字体

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
  '--shadow-sm': '',   // TODO: 小阴影
  '--shadow-md': '',   // TODO: 中等阴影
  '--shadow-lg': '',   // TODO: 大阴影
  '--shadow-glow': '', // TODO: 发光效果 (可选)

  // ========================================
  // 8. 特效 (Effects)
  // ========================================
  '--effect-speed-slow': '0.5s',   // 慢速动画
  '--effect-speed-normal': '0.3s', // 正常动画
  '--effect-speed-fast': '0.15s',  // 快速动画
  '--effect-glow-primary': '',     // TODO: 主色发光
  '--effect-glow-secondary': '',   // TODO: 次要色发光

  // ========================================
  // 9. 特效 Token (ADR-005) - 可选
  // ========================================
  // BorderBeam
  '--effect-beam-color': '', // TODO: 边框光束颜色
  '--effect-beam-glow': '',  // TODO: 边框光束发光

  // Shimmer
  '--effect-shimmer-color': '', // TODO: 流光颜色

  // CosmicBackground
  '--effect-cosmic-glow-1': '', // TODO: 宇宙背景发光1
  '--effect-cosmic-glow-2': '', // TODO: 宇宙背景发光2

  // GridMatrix
  '--effect-grid-color': '', // TODO: 网格颜色

  // Spotlight
  '--effect-spotlight-color': '', // TODO: 聚光灯颜色
};

// ============================================================================
// 主题元信息
// ============================================================================

export const meta = {
  isDark: true,  // TODO: 是否为深色主题
  codeTheme: 'github-dark' as const,  // TODO: 代码高亮主题
};
