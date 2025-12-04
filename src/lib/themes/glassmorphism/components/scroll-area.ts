/**
 * ScrollArea 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Scroll Container"
 */
export const scrollAreaConfig = {
  slots: {
    base: 'relative overflow-hidden',

    viewport: 'h-full w-full rounded-[inherit]',

    content: 'min-w-full table',

    header: [
      'sticky top-0 z-10',
      'bg-white/[0.08] backdrop-blur-md',
      'border-b border-white/[0.1]',
    ],

    item: [
      'px-4 py-3',
      'border-b border-white/[0.05]',
      'transition-colors duration-150',
      'hover:bg-white/[0.05]',
    ],

    itemIndex: 'text-muted-foreground font-mono text-xs',

    itemText: 'text-foreground',
  },
};

export const scrollBarConfig = {
  slots: {
    base: [
      'flex touch-none select-none transition-colors',
      'p-0.5',
    ].join(' '),

    thumb: [
      'relative flex-1 rounded-full',
      'bg-white/[0.2]',
      'transition-colors duration-150',
      'hover:bg-white/[0.3]',
    ],
  },
};
