/**
 * Select Component Theme Config
 *
 * Dropdown select input.
 *
 * Slots:
 * - trigger: Select button
 * - content: Dropdown panel
 * - viewport: Scrollable area
 * - item: Option item
 * - label, separator: Grouping elements
 * - indicator: Selected check icon
 * - scrollButton: Scroll arrows
 * - icon: Dropdown arrow icon
 */
export const selectConfig = {
  slots: {
    trigger: [
      // TODO: 'rounded-md', 'border', 'bg-background'
    ],
    content: [
      // TODO: 'rounded-md', 'border', 'bg-background', 'shadow-lg'
    ],
    viewport: '',
    item: [
      // TODO: 'rounded-sm', 'focus:bg-accent'
    ],
    label: '',
    separator: '',
    indicator: '',
    scrollButton: '',
    icon: '',
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {},
      sm: {},
    },
  },
};
