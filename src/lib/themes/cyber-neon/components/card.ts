/**
 * Card Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Container"
 * - Shape: Chamfer (切角) - 10px diagonal cut
 * - Border: 1px neon glow border
 * - Background: bg-surface-1 (not primary!)
 * - Shadow: Soft neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const cardConfig = {
  slots: {
    /**
     * base: 卡片容器
     * ─────────────────────────────────────────────────────────────────────
     * 切角、surface 背景、霓虹边框、柔和发光
     */
    base: [
      // Background - 使用 surface-1，不是 primary！
      'bg-surface-1 text-card-foreground',
      
      // Shape - 切角效果 (chamfer)
      '[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]',
      
      // Border - 霓虹发光边框
      'border border-primary',
      'shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_8%,transparent),0_0_5px_color-mix(in_srgb,var(--primary)_25%,transparent)]',
      
      // Layout
      'gap-6 py-6',
      
      // Transition
      'transition-all duration-150 ease-out',
      
      // Hover - 发光增强
      'hover:shadow-[inset_0_0_12px_color-mix(in_srgb,var(--primary)_12%,transparent),0_0_8px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
    ],

    /**
     * header: 卡片头部
     */
    header: [
      'px-6 gap-2 flex flex-col space-y-1.5',
    ],

    /**
     * title: 卡片标题
     */
    title: [
      'font-semibold text-xl leading-none tracking-tight',
      'text-foreground',
    ],

    /**
     * description: 卡片描述
     */
    description: [
      'text-sm text-muted-foreground',
    ],

    /**
     * action: 卡片操作区
     */
    action: [],

    /**
     * content: 卡片内容区
     */
    content: [
      'px-6 pt-0',
      'text-foreground',
    ],

    /**
     * footer: 卡片底部
     */
    footer: [
      'px-6 pt-0 flex items-center',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认卡片
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
        header: [
          // 继承 slots.header 的所有样式
        ],
        title: [
          // 继承 slots.title 的所有样式
        ],
        description: [
          // 继承 slots.description 的所有样式
        ],
        action: [
          // 继承 slots.action 的所有样式
        ],
        content: [
          // 继承 slots.content 的所有样式
        ],
        footer: [
          // 继承 slots.footer 的所有样式
        ],
      },

      /**
       * outline: 轮廓卡片 - 透明背景
       */
      outline: {
        base: [
          'bg-transparent',
          'border-border',
          'shadow-[inset_0_0_10px_color-mix(in_srgb,var(--border)_5%,transparent),0_0_3px_color-mix(in_srgb,var(--border)_15%,transparent)]',
        ],
      },

      /**
       * ghost: 幽灵卡片 - 无边框无阴影
       */
      ghost: {
        base: [
          'bg-transparent',
          'border-transparent shadow-none',
          '[clip-path:none]', // 移除切角
        ],
      },

      /**
       * elevated: 悬浮卡片 - 更强的发光
       */
      elevated: {
        base: [
          'shadow-[inset_0_0_12px_color-mix(in_srgb,var(--primary)_12%,transparent),0_0_8px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
        ],
      },
    },
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'py-4 gap-4',
          '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
        ],
        header: ['px-4'],
        content: ['px-4'],
        footer: ['px-4'],
      },

      /**
       * default: 默认尺寸
       */
      default: {},

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'py-8 gap-8',
          '[clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]',
        ],
        header: ['px-8'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
