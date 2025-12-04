/**
 * Tabs Component Theme Config
 *
 * Tab navigation for switching content panels.
 *
 * Slots:
 * - root: Root container
 * - list: Tab buttons container
 * - trigger: Individual tab button
 * - content: Tab content panel
 */
export const tabsConfig = {
  slots: {
    /**
     * root: Root tabs container
     *
     * Usually empty (layout handled by component)
     */
    root: '',

    /**
     * list: Container for tab buttons
     *
     * Common styles:
     * - Background (bg-surface-1, bg-muted)
     * - Border radius (rounded-lg)
     * - Padding (p-1)
     */
    list: '',

    /**
     * trigger: Individual tab button
     *
     * Common styles:
     * - Border radius (rounded-md)
     * - Active state: data-[state=active]:bg-primary
     * - Hover (hover:text-foreground)
     */
    trigger: [
      // TODO: 'rounded-md'
      // TODO: 'data-[state=active]:bg-background'
    ],

    /**
     * content: Tab content panel
     *
     * Usually empty (padding/margin adjustments only)
     */
    content: '',
  },
};
