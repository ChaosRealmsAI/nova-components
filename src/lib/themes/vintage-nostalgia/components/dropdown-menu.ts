/**
 * DropdownMenu 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式菜单卡片效果
 * 餐厅菜单质感
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 背景
      'bg-surface-1 p-1',
      'text-foreground',
      // 阴影效果
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
      // 动画
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],

    item: [
      'relative flex cursor-pointer select-none items-center',
      // 锐利边角
      'rounded-[1px] px-2 py-1.5',
      // 字体
      'font-serif text-sm',
      'outline-none',
      'transition-colors duration-150',
      // Focus/Hover
      'focus:bg-surface-2 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    label: 'px-2 py-1.5 font-serif text-xs font-bold uppercase tracking-wider text-muted-foreground',

    separator: '-mx-1 my-1 h-[2px] bg-border shadow-[0_1px_0_0_rgba(255,253,208,0.3)]',

    shortcut: 'ml-auto font-mono text-xs tracking-widest text-muted-foreground',
  },
};
