/**
 * DropdownMenu Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Menu Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * - Item: Hover with accent background, active with press effect.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white p-1',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
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
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    label: [
      'px-2 py-1.5 text-sm font-bold uppercase tracking-wide',
      'text-muted-foreground',
    ],

    separator: [
      '-mx-1 my-1 h-[2px] bg-black',
    ],

    shortcut: [
      'ml-auto text-xs font-mono tracking-wider',
      'text-muted-foreground',
    ],

    checkboxItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    radioItem: [
      'relative flex cursor-default select-none items-center',
      'py-1.5 pl-8 pr-2 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'active:translate-x-[1px] active:translate-y-[1px]',
    ],

    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    subTrigger: [
      'flex cursor-default select-none items-center',
      'px-2 py-1.5 text-sm',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'outline-none transition-all duration-75',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[state=open]:bg-accent',
    ],

    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-white p-1',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
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
