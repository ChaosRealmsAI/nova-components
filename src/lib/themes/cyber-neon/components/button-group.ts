/**
 * Button Group Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Button Group"
 * - Connected buttons with shared borders
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const buttonGroupConfig = {
  slots: {
    /**
     * root: 按钮组根容器
     */
    root: [
      'inline-flex',
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
        root: [
          '[&>*:not(:first-child)]:ml-[-1px]',
          '[&>*:not(:first-child)]:rounded-l-none',
          '[&>*:not(:last-child)]:rounded-r-none',
        ],
      },

      /**
       * false: 分离状态
       */
      false: {
        root: [
          'gap-2',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    attached: 'false',
  },
};
