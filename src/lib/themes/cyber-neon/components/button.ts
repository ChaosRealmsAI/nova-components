/**
 * Button Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Cyberpunk"
 * - Shape: Chamfer (切角) - 8px diagonal cut
 * - Border: 1px neon glow border
 * - Shadow: Neon glow effect
 * - Typography: Uppercase, letter-spacing 0.05em
 * - Interaction: Hover = glow intensify + lift, Active = press down
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const buttonConfig = {
  slots: {
    /**
     * base: 按钮基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 切角、霓虹发光、字体样式、过渡动画
     */
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      
      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',
      
      // Shape - 切角效果 (chamfer)
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      
      // Border - 霓虹发光边框
      'border border-primary',
      'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      
      // Transition - 快速响应
      'transition-all duration-150 ease-out',
      
      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      
      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
      'disabled:shadow-none',
      
      // Hover - 发光增强 + 轻微上移
      'hover:-translate-y-[1px]',
      'hover:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_15%,transparent),0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
      
      // Active - 下压 + 发光收缩
      'active:translate-y-[1px]',
      'active:shadow-[inset_0_0_12px_color-mix(in_srgb,var(--primary)_20%,transparent),0_0_4px_var(--primary)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 主要按钮 - 霓虹粉背景
       */
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary-vivid',
        ],
      },

      /**
       * destructive: 危险按钮 - 霓虹红
       */
      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'border-destructive',
          'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--destructive)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--destructive)_30%,transparent)]',
          'hover:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--destructive)_15%,transparent),0_0_8px_var(--destructive),0_0_16px_color-mix(in_srgb,var(--destructive)_50%,transparent)]',
          'hover:bg-destructive/90',
        ],
      },

      /**
       * outline: 轮廓按钮 - 透明背景 + 霓虹边框
       */
      outline: {
        base: [
          'bg-transparent text-primary',
          'border-primary',
          'hover:bg-primary/10',
          'hover:text-primary-vivid',
        ],
      },

      /**
       * secondary: 次要按钮 - 霓虹青
       */
      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'border-secondary',
          'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--secondary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--secondary)_30%,transparent)]',
          'hover:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--secondary)_15%,transparent),0_0_8px_var(--secondary),0_0_16px_color-mix(in_srgb,var(--secondary)_50%,transparent)]',
          'hover:bg-secondary-vivid',
        ],
      },

      /**
       * ghost: 幽灵按钮 - 完全透明，hover 时显示
       */
      ghost: {
        base: [
          'bg-transparent text-foreground',
          'border-transparent shadow-none',
          'hover:bg-surface-1',
          'hover:border-border',
          'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--border)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--border)_20%,transparent)]',
        ],
      },

      /**
       * link: 链接按钮 - 无边框，仅文字
       */
      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'border-none shadow-none',
          'bg-transparent',
          'normal-case', // 链接不使用大写
          'active:translate-y-0', // 无下压效果
          'hover:-translate-y-0', // 无上移效果
          'p-0 h-auto',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-10 px-4 py-2'],
      },

      /**
       * sm: 小尺寸 - 切角也相应缩小
       */
      sm: {
        base: [
          'h-9 px-3 text-xs',
          '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
        ],
      },

      /**
       * lg: 大尺寸 - 切角也相应增大
       */
      lg: {
        base: [
          'h-12 px-8 text-base',
          '[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]',
        ],
      },

      /**
       * icon: 图标尺寸 - 正方形，切角保持
       */
      icon: {
        base: [
          'h-10 w-10',
          '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
