/**
 * Separator 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Divider"
 */
export const separatorConfig = {
  slots: {
    base: [
      // Glass divider - subtle white line
      'bg-white/[0.15]',

      // Shrink-0 to prevent collapsing
      'shrink-0',
    ].join(' '),
  },
  variants: {
    orientation: {
      horizontal: { base: 'h-[1px] w-full' },
      vertical: { base: 'h-full w-[1px]' },
    },
  },
};
