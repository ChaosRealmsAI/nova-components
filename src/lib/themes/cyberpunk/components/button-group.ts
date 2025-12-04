/**
 * ButtonGroup 组件样式 - Cyberpunk (Control Panel)
 * 
 * Design Concept: "Physical Controls"
 * - Buttons merged together.
 * - Borders between items.
 */
export const buttonGroupConfig = {
  slots: {
    root: [
      'flex -space-x-px', // Merge borders
      'isolate', // Ensure z-index stacking works for active state
    ],
  },

  variants: {
    orientation: {
      horizontal: {
        root: ['flex-row'],
      },
      vertical: {
        root: ['flex-col -space-y-px -space-x-0'],
      },
    },
  },
};