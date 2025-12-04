/**
 * Menubar 组件样式 - shadcn-default 主题
 */
export const menubarConfig = {
  slots: {
    root: [
      'bg-background',
      'text-foreground',
      'shadow-xs',
    ],
    trigger: [
      'focus:bg-accent',
      'focus:text-accent-foreground',
      'data-[state=open]:bg-accent',
      'data-[state=open]:text-accent-foreground',
    ],
    content: [
      'bg-popover',
      'text-popover-foreground',
      'shadow-md',
    ],
    item: [
      'focus:bg-accent',
      'focus:text-accent-foreground',
      '[&_svg:not([class*="text-"])]:text-muted-foreground',
    ],
    label: '',
    separator: 'bg-border',
    shortcut: 'text-muted-foreground',
    checkboxItem: [
      'focus:bg-accent',
      'focus:text-accent-foreground',
    ],
    radioItem: [
      'focus:bg-accent',
      'focus:text-accent-foreground',
    ],
    indicator: '',
    subTrigger: [
      'focus:bg-accent',
      'focus:text-accent-foreground',
      'data-[state=open]:bg-accent',
      'data-[state=open]:text-accent-foreground',
    ],
    subContent: [
      'bg-popover',
      'text-popover-foreground',
      'shadow-lg',
    ],
  },
};
