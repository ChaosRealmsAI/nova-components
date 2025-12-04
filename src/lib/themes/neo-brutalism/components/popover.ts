/**
 * Popover Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Popover Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const popoverConfig = {
  slots: {
    content: [
      'z-50 w-72',
      'rounded-none border-2 border-black',
      'bg-white p-4',
      'text-popover-foreground',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'text-sm',
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