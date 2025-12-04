/**
 * DropdownMenu 组件样式 - Glassmorphism
 *
 * Design Concept: "Floating Glass Menu"
 * - Glass panel with strong blur
 * - Subtle hover states
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden p-1.5',

      // Glass background
      'bg-white/[0.12] backdrop-blur-2xl',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Shadow
      'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',

      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    item: [
      'relative flex cursor-default select-none items-center gap-2',
      'rounded-lg',
      'px-3 py-2',
      'text-sm text-foreground',
      'outline-none',
      'transition-colors duration-150',

      // Focus/hover state
      'focus:bg-white/[0.1]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],

    label: 'px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider',

    separator: '-mx-1.5 my-1.5 h-px bg-white/[0.1]',

    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground/70',

    checkboxItem: [
      'relative flex cursor-default select-none items-center gap-2',
      'rounded-lg',
      'py-2 pl-8 pr-3',
      'text-sm text-foreground',
      'outline-none',
      'transition-colors duration-150',
      'focus:bg-white/[0.1]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ].join(' '),

    radioItem: [
      'relative flex cursor-default select-none items-center gap-2',
      'rounded-lg',
      'py-2 pl-8 pr-3',
      'text-sm text-foreground',
      'outline-none',
      'transition-colors duration-150',
      'focus:bg-white/[0.1]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ].join(' '),

    indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-primary',

    subTrigger: [
      'flex cursor-default select-none items-center gap-2',
      'rounded-lg',
      'px-3 py-2',
      'text-sm text-foreground',
      'outline-none',
      'transition-colors duration-150',
      'focus:bg-white/[0.1]',
      'data-[state=open]:bg-white/[0.1]',
    ].join(' '),

    subContent: [
      'z-50 min-w-[8rem] overflow-hidden p-1.5',
      'bg-white/[0.12] backdrop-blur-2xl',
      'border border-white/[0.15]',
      'rounded-xl',
      'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ].join(' '),
  },
};
