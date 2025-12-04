/**
 * Combobox Component Theme Configuration
 */

export const comboboxConfig = {
  slots: {
    trigger: 'w-[200px] text-foreground',
    content: 'w-[200px] bg-popover text-popover-foreground border border-border',
    command: '',
    inputWrapper: 'border-border',
    input: 'text-foreground',
    list: '',
    empty: 'text-muted-foreground',
    group: 'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground',
    item: 'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
    searchIcon: 'text-muted-foreground',
    icon: 'text-muted-foreground',
    separator: 'bg-border',
  },
};
