/**
 * Button Group Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Button Group"
 * - Groups buttons with proper spacing
 * - Attached variant connects buttons seamlessly
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const buttonGroupConfig = {
  slots: {
    /**
     * root: 按钮组根容器
     */
    root: [
      'inline-flex items-center gap-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认按钮组
       */
      default: {
        root: [],
      },

      /**
       * outline: 轮廓按钮组
       */
      outline: {
        root: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        root: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        root: [],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        root: [],
      },
    },
    /**
     * attached: 按钮连接样式
     */
    attached: {
      /**
       * true: 连接状态
       */
      true: {
        root: [],
      },

      /**
       * false: 分离状态
       */
      false: {
        root: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    attached: 'false',
  },
};
