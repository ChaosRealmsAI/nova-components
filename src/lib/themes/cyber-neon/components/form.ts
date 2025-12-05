/**
 * Form Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Form"
 * - Simple form layout with proper spacing
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const formConfig = {
  slots: {
    /**
     * root: 表单根容器
     */
    root: [
      'space-y-4',
    ],

    /**
     * item: 表单项
     */
    item: [
      'space-y-2',
    ],

    /**
     * label: 字段标签
     */
    label: [
      'text-sm font-medium',
      'text-foreground',
    ],

    /**
     * control: 控件容器
     */
    control: [],

    /**
     * description: 字段描述
     */
    description: [
      'text-sm text-muted-foreground',
    ],

    /**
     * message: 错误信息
     */
    message: [
      'text-sm font-medium',
      'text-destructive',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认表单
       */
      default: {
        root: [],
        item: [],
        label: [],
        control: [],
        description: [],
        message: [],
      },

      /**
       * inline: 行内表单
       */
      inline: {
        root: [
          'flex flex-row items-end gap-4',
        ],
        item: [
          'flex-1',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        item: [],
        label: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        item: ['space-y-1'],
        label: ['text-xs'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        item: ['space-y-3'],
        label: ['text-base'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
