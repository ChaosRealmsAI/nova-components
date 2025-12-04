export const sonnerConfig = {
  slots: {
    root: 'toaster group',
    toast: [
      'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
      'group-[.toaster]:rounded-lg group-[.toaster]:border-2 group-[.toaster]:border-black group-[.toaster]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],
    description: 'group-[.toast]:text-muted-foreground',
    actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:border-2 group-[.toast]:border-black',
    cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-2 group-[.toast]:border-black',
    title: 'group-[.toast]:font-bold',
    closeButton: 'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-black group-[.toast]:hover:bg-muted',
    success: 'group-[.toast]:text-success-foreground',
    error: 'group-[.toast]:text-error-foreground',
    warning: 'group-[.toast]:text-warning-foreground',
    info: 'group-[.toast]:text-info-foreground',
    icon: 'group-[.toast]:mr-2',
  },
};
