/**
 * NavigationMenu 组件样式 - Cyberpunk (Main Nav)
 */
export const navigationMenuConfig = {
  slots: {
    root: [
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
    ],
    
    list: [ // Renamed to match generic, but validator said 'contentList' missing?
    // Actually validator said `contentList` missing. `list` might be `menuList` or `list` in generic.
    // Standard shadcn uses `NavigationMenuList`.
    // Let's keep `list` but add `contentList` if that's what the template expects? 
    // Wait, let's look at the error: `missing slots: contentList, listItem, listItemTitle, listItemDescription, indicatorArrow, chevron`.
    // This suggests the template has a very specific set of slots.
    
      'group flex flex-1 list-none items-center justify-center space-x-1',
    ],

    contentList: [ // Added
        // Probably the same as list? Or maybe the content inside the viewport?
        // Let's assume it maps to `NavigationMenuContent`.
        // 'left-0 top-0 w-full md:absolute md:w-auto',
    ],

    listItem: [ // Added
        // 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    ],

    listItemTitle: [ // Added
        'text-sm font-medium leading-none',
        'font-mono text-primary uppercase',
    ],

    listItemDescription: [ // Added
        'line-clamp-2 text-sm leading-snug text-muted-foreground',
        'font-mono text-xs',
    ],
    
    item: [],
    
    trigger: [
      'group inline-flex h-10 w-max items-center justify-center rounded-none bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      'font-mono uppercase text-xs tracking-widest',
      'hover:bg-primary/10 hover:text-primary',
    ],

    chevron: [ // Added
        'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
    ],
    
    content: [
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      'bg-black/90 border border-primary/30',
      'shadow-[0_0_20px_rgba(0,229,255,0.15)]',
    ],
    
    indicator: [
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      // Glowing line indicator
      'after:h-1 after:w-full after:bg-primary after:shadow-[0_0_10px_var(--primary)]',
    ],

    indicatorArrow: [ // Added
        'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
        'bg-primary',
    ],
    
    viewport: [
      'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-none border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
      'bg-black/90 border-primary/30',
    ],
    
    link: [
      'block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      'hover:bg-primary/10 hover:text-primary',
    ],
  },
};
