/**
 * Command 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 打字机命令面板效果
 * 老式终端质感
 */
export const commandConfig = {
  slots: {
    root: [
      'flex h-full w-full flex-col overflow-hidden',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-surface-1',
      'text-foreground',
      // 边框
      'border-2 border-border',
      // 阴影
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
    ],

    inputWrapper: 'flex items-center border-b-2 border-border px-3',

    input: [
      'flex h-11 w-full',
      'bg-transparent py-3',
      // 打字机字体
      'font-mono text-sm',
      'placeholder:text-muted-foreground',
      'outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],

    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',

    empty: 'py-6 text-center font-serif text-sm text-muted-foreground',

    group: 'overflow-hidden p-1 text-foreground',

    separator: '-mx-1 h-[2px] bg-border',

    item: [
      'relative flex cursor-pointer select-none items-center',
      // 锐利边角
      'rounded-[1px] px-2 py-1.5',
      // 字体
      'font-serif text-sm',
      'outline-none',
      'transition-colors duration-150',
      // 选中状态
      'aria-selected:bg-surface-2 aria-selected:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    shortcut: 'ml-auto font-mono text-xs tracking-widest text-muted-foreground',
  },

  variants: {
    variant: {
      default: {},
    },
  },
};
