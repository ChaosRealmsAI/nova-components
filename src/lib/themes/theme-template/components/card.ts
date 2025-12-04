/**
 * Card 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 视觉样式维度：
 * │ 维度   │ 示例                                                              │
 * │────────│─────────────────────────────────────────────────────────────────│
 * │ 形状   │ 圆角大小、切角、不规则形状                                         │
 * │ 字体   │ 字族、字重、字距、行高                                             │
 * │ 动效   │ hover 变化、过渡时长                                              │
 * │ 阴影   │ 无阴影、柔和、硬边、发光                                           │
 * │ 边框   │ 粗细、样式、颜色                                                  │
 * │ 背景   │ 纯色、渐变、半透明                                                │
 *
 * 颜色语义：
 * - 背景：bg-card（卡片背景色）
 * - 文字：text-card-foreground
 * - 边框：border-border
 * - 描述：text-muted-foreground
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export const cardConfig = {
  slots: {
    /**
     * base: 卡片容器
     * - 背景、边框、圆角、阴影、间距
     */
    base: [
      // 背景和文字
      'bg-card',
      'text-card-foreground',
      // 边框和圆角
      'rounded-xl',
      'border',
      // 阴影
      'shadow-sm',
      // 间距
      'gap-6',
      'py-6',
    ],

    /**
     * header: 卡片头部
     * - 内边距、间距
     */
    header: [
      'px-6',
      'gap-2',
    ],

    /**
     * title: 卡片标题
     * - 字体样式
     */
    title: [
      'leading-none',
      'font-semibold',
    ],

    /**
     * description: 卡片描述
     * - 字体大小、颜色
     */
    description: [
      'text-muted-foreground',
      'text-sm',
    ],

    /**
     * action: 卡片操作区
     * - 暂无额外样式（功能样式已在 L1）
     */
    action: [],

    /**
     * content: 卡片内容区
     * - 内边距
     */
    content: [
      'px-6',
    ],

    /**
     * footer: 卡片底部
     * - 内边距
     */
    footer: [
      'px-6',
    ],
  },

  variants: {
    variant: {
      /**
       * default: 默认卡片
       * - 标准样式，有背景、边框、阴影
       */
      default: {},

      /**
       * outline: 轮廓卡片
       * - 透明背景，明显边框
       */
      outline: {
        base: [
          'border-2',
          'shadow-none',
        ],
      },

      /**
       * ghost: 幽灵卡片
       * - 无边框、无阴影、透明背景
       */
      ghost: {
        base: [
          'border-transparent',
          'shadow-none',
          'bg-transparent',
        ],
      },

      /**
       * elevated: 悬浮卡片
       * - 更大阴影，无边框
       */
      elevated: {
        base: [
          'shadow-lg',
          'border-0',
        ],
      },
    },

    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['py-4', 'gap-4'],
        header: ['px-4', 'gap-1'],
        title: ['text-sm'],
        description: ['text-xs'],
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
        base: ['py-8', 'gap-8'],
        header: ['px-8', 'gap-3'],
        title: ['text-xl'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
};
