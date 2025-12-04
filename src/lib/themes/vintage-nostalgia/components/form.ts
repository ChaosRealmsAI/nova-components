/**
 * Form 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式表单填写效果
 * 纸质表格质感
 */
export const formConfig = {
  slots: {
    root: 'space-y-6',

    item: 'space-y-2',

    label: 'font-serif text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',

    control: '',

    description: 'font-serif text-sm italic text-muted-foreground',

    message: 'font-serif text-sm font-medium text-destructive',
  },

  variants: {
    variant: {
      default: {},
      inline: {},
    },

    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
