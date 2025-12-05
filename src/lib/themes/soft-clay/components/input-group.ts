/**
 * Input Group Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Input Group"
 * - Combines input with buttons/addons using neumorphic styling
 * - Attached variant connects elements seamlessly
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputGroupConfig = {
  slots: {
    /**
     * root: 根容器
     */
    root: [
      'flex items-center gap-2',
    ],

    /**
     * input: 输入框
     */
    input: [
      'flex-1',
    ],

    /**
     * button: 按钮
     */
    button: [
      'shrink-0',
    ],

    /**
     * addon: 附加元素
     */
    addon: [
      'flex items-center',
      'rounded-[16px]',
      'bg-surface-2',
      'px-3',
      'text-sm text-muted-foreground',
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },

      /**
       * attached: 连接样式
       */
      attached: {
        root: [],
        input: [],
        button: [],
        addon: [],
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
        addon: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [],
        input: [],
        button: [],
        addon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
