/**
 * Obsidian Shard Sidebar
 */
export const sidebarConfig = {
  slots: {
    root: "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar-1",
    header: "flex flex-col gap-2 p-2",
    content: "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
    footer: "flex flex-col gap-2 p-2",
    group: "relative flex w-full min-w-0 flex-col p-2",
    groupLabel: "duration-200 flex h-8 shrink-0 items-center rounded-none px-2 text-xs font-medium text-muted-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 uppercase tracking-wider",
    menu: "flex w-full min-w-0 flex-col gap-1",
    menuItem: "group/menu-item relative",
    menuButton: [
      "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-none text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-surface-2 hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-primary/10 data-[active=true]:font-medium data-[active=true]:text-primary data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
      "data-[active=true]:border-r-2 data-[active=true]:border-r-primary", // Right border accent for active item
    ],
    menuBadge: "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-none px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none group-data-[collapsible=icon]:hidden",
    separator: "mx-2 w-auto bg-sidebar-border",
    trigger: "",
    overlay: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  },
};