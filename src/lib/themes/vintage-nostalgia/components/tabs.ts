/**
 * Tabs 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 文件夹标签页效果
 * 老式档案卡片分类
 */
export const tabsConfig = {
  slots: {
    root: '',

    list: [
      'inline-flex h-10 items-center justify-center',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-surface-2 p-1',
      'text-muted-foreground',
      // 边框
      'border-2 border-border',
      // 阴影
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1)]',
    ],

    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap',
      // 锐利边角
      'rounded-[1px] px-3 py-1.5',
      // 字体
      'text-sm font-serif font-medium uppercase tracking-wide',
      'ring-offset-background',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      // 激活状态
      'data-[state=active]:bg-surface-1',
      'data-[state=active]:text-foreground',
      'data-[state=active]:border-2 data-[state=active]:border-primary',
      'data-[state=active]:shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
      // Hover
      'hover:bg-surface-1/50',
    ],

    content: [
      'mt-2',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    ],
  },
};
