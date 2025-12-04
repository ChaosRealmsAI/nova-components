/**
 * Select Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Select"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface (surface-1)
 * - Shadow: Neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const selectConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[2px] border-2 border-border',
      'bg-surface-1 px-3 py-2 text-sm',
      'font-mono text-foreground',
      'shadow-[0_0_10px_var(--primary)]',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:border-primary focus:shadow-[0_0_20px_var(--primary)]',
      'focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-all duration-150',
    ],

    content: [
      'relative z-50 min-w-[8rem] overflow-hidden',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-2 p-1',
      'shadow-[0_0_20px_var(--primary)]',
      'text-popover-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    viewport: [
      'p-1',
    ],

    item: [
      'relative flex w-full cursor-default select-none items-center',
      'rounded-[2px] px-2 py-1.5 text-sm',
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

    indicator: [
      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    scrollButton: [
      'flex items-center justify-center',
      'h-9 rounded-[2px]',
      'border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
    ],

    icon: [
      'h-4 w-4 opacity-50',
    ],
  },

  variants: {
    variant: {
      default: {},
    },

    size: {
      default: {},
      sm: {
        trigger: 'h-8 px-2 text-xs shadow-[0_0_8px_var(--primary)]',
      },
    },
  },
};
