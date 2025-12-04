export const datePickerConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-md border-2 border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    ],
    content: 'w-auto p-0',
    icon: 'mr-2 h-4 w-4',
  },
};
