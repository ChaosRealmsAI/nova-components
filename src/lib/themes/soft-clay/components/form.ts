/**
 * Form Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Form"
 * - Simple form layout with proper spacing and soft styling
 * - Labels and messages use soft, readable typography
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const formConfig = {
  slots: {
    /**
     * root: 表单根容器
     */
    root: [
      'space-y-6',
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
        root: [],
        item: [],
        label: [],
        control: [],
        description: [],
        message: [],
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
        item: [],
        label: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        item: [],
        label: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
