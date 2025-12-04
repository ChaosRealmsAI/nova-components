/**
 * Tooltip Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tooltip"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface (surface-2)
 * - Shadow: Neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tooltipConfig = {
  slots: {
    content: [
      'z-50 overflow-hidden',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-2 px-3 py-1.5',
      'text-xs text-foreground',
      'font-mono font-bold uppercase tracking-tight',
      'shadow-[0_0_15px_var(--primary)]',
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
    arrow: [
      'bg-surface-2 fill-primary border-primary',
    ],
  },
};
