/**
 * Tooltip Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Tooltip Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tooltipConfig = {
  slots: {
    content: [
      'z-50 overflow-hidden',
      'rounded-none border-2 border-black',
      'bg-black px-3 py-1.5',
      'text-xs text-white',
      'font-bold uppercase tracking-wide',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
    arrow: [
      'bg-black fill-black',
    ],
  },
};