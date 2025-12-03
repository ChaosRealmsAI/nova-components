export const comboboxBaseConfig = {
  slots: {
    trigger: 'w-[200px] justify-between',
    content: 'w-[200px] p-0',
    command: 'flex h-full w-full flex-col overflow-hidden rounded-[inherit] [&_[cmdk-input-wrapper]]:border-none [&_[cmdk-input]]:ring-0 [&_[cmdk-input]]:outline-none',
    inputWrapper: 'flex items-center px-3',
    input: 'flex h-10 w-full bg-transparent py-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ring-0 outline-none shadow-none focus:ring-0 focus:outline-none focus:shadow-none focus:border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none focus-visible:border-none [&]:ring-0 [&]:outline-none',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
    item: 'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    separator: '-mx-1 h-px bg-border',
    icon: 'ml-2 h-4 w-4 shrink-0 opacity-50',
    searchIcon: 'mr-2 h-4 w-4 shrink-0 opacity-50',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
