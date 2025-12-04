/**
 * DropdownMenu Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Menu"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface (surface-2)
 * - Shadow: Neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-2 p-1',
      'shadow-[0_0_20px_var(--primary)]',
      'text-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    item: [
      'relative flex cursor-pointer select-none items-center',
      'px-2 py-1.5 text-sm',
      'rounded-[2px]',
      'font-mono font-bold uppercase tracking-tight',
      'outline-none transition-all duration-150',
      'focus:bg-primary focus:text-primary-foreground',
      'focus:shadow-[0_0_10px_var(--primary)]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:scale-95',
    ],

    label: [
      'px-2 py-1.5 text-sm font-mono font-bold uppercase tracking-tight',
      'text-muted-foreground',
    ],

    separator: [
      '-mx-1 my-1 h-[2px] bg-primary',
    ],

    shortcut: [
      'ml-auto text-xs font-mono tracking-tight',
      'text-muted-foreground',
    ],

    checkboxItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-[2px]',
      'font-mono font-bold uppercase tracking-tight',
      'outline-none transition-all duration-150',
      'focus:bg-primary focus:text-primary-foreground',
      'focus:shadow-[0_0_10px_var(--primary)]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:scale-95',
    ],

    radioItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-[2px]',
      'font-mono font-bold uppercase tracking-tight',
      'outline-none transition-all duration-150',
      'focus:bg-primary focus:text-primary-foreground',
      'focus:shadow-[0_0_10px_var(--primary)]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:scale-95',
    ],

    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    subTrigger: [
      'flex cursor-default select-none items-center',
      'px-2 py-1.5 text-sm',
      'rounded-[2px]',
      'font-mono font-bold uppercase tracking-tight',
      'outline-none transition-all duration-150',
      'focus:bg-primary focus:text-primary-foreground',
      'focus:shadow-[0_0_10px_var(--primary)]',
      'data-[state=open]:bg-primary data-[state=open]:text-primary-foreground',
    ],

    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-2 p-1',
      'shadow-[0_0_20px_var(--primary)]',
      'text-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
  },
};
