/**
 * Input Group Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Input Group"
 * - Connected input and button
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputGroupConfig = {
  slots: {
    /**
     * root: 根容器
     */
    root: [
      'flex',
    ],

    /**
     * input: 输入框
     */
    input: [],

    /**
     * button: 按钮
     */
    button: [],

    /**
     * addon: 附加元素
     */
    addon: [
      'inline-flex items-center',
      'rounded-[4px] border border-border',
      'bg-surface-2 px-3',
      'text-sm text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [
          'gap-2',
        ],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * attached: 连接样式
       */
      attached: {
        root: [],
        input: [
          'rounded-r-none border-r-0',
        ],
        button: [
          'rounded-l-none',
        ],
        addon: [
          'rounded-r-none border-r-0',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [],
        input: [],
        button: [],
        addon: [
          'px-2 text-xs',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [],
        input: [],
        button: [],
        addon: [
          'px-4 text-base',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
