// ADR-008: 纯数据配置，无组件依赖

export const scrollAreaConfig = {
  slots: {
    base: [
      'rounded-none',
      'border border-primary bg-background',
      'shadow-[0_0_15px_rgba(217,70,239,0.15)]',
      // 装饰性角落 - 通过 before/after 伪元素实现
      'relative',
      'before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t before:border-l before:border-primary before:z-10',
      'after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b after:border-r after:border-primary after:z-10',
    ],
    viewport: 'rounded-none',
    // Cyberpunk 风格内容样式
    content: 'p-4 space-y-2',
    header: [
      'text-xs text-primary font-mono mb-4 border-b border-border pb-2 opacity-70',
    ],
    item: [
      'flex items-center gap-3 py-2 px-3 rounded-none',
      'bg-muted/50 border-l-2 border-l-transparent',
      'hover:border-l-primary hover:bg-muted/80',
      'transition-all cursor-default',
    ],
    itemIndex: 'text-xs text-muted-foreground/50 font-mono',
    itemText: 'text-sm text-muted-foreground font-mono hover:text-foreground',
  },
};

export const scrollBarConfig = {
  slots: {
    base: 'rounded-none',
    thumb: [
      'bg-border rounded-none',
      'hover:bg-primary',
      'transition-colors duration-300',
    ],
  },
};
