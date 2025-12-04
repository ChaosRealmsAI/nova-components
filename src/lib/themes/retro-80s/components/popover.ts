/**
 * Popover Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Popover"
 * - Shape: Small radius (4px)
 * - Border: 2px solid neon
 * - Background: Dark surface (surface-2)
 * - Shadow: Neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const popoverConfig = {
  slots: {
    content: [
      'z-50 w-72',
      'rounded-[4px] border-2 border-primary',
      'bg-surface-2 p-4',
      'text-popover-foreground',
      'shadow-[0_0_20px_var(--primary)]',
      'text-sm font-mono',
      'outline-none',
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
