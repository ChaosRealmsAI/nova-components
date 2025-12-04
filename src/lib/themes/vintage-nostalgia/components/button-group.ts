/**
 * ButtonGroup 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式打字机按键组
 * 连续机械按钮效果
 */
export const buttonGroupConfig = {
  slots: {
    root: 'inline-flex',
  },

  variants: {
    variant: {
      default: {},
      outline: {},
    },

    size: {
      default: {},
      sm: {},
      lg: {},
    },

    attached: {
      true: {
        root: [
          // 连接按钮
          '[&>button]:rounded-none',
          '[&>button:first-child]:rounded-l-[2px]',
          '[&>button:last-child]:rounded-r-[2px]',
          // 边框处理：中间按钮左边框合并
          '[&>button:not(:first-child)]:border-l-0',
          '[&>button:not(:first-child)]:ml-[-2px]',
        ],
      },
      false: {},
    },
  },
};
