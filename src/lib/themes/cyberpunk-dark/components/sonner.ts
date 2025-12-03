/**
 * Cyberpunk Dark - Sonner 主题配置
 * 使用 !important 覆盖 sonner 默认样式
 */
export const sonnerConfig = {
  slots: {
    root: [
      '!bg-background/90 !backdrop-blur-md !border-2 !border-primary/50 !text-foreground',
      '!shadow-[0_0_20px_-5px_var(--primary)] !rounded-none',
      '[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]',
    ],
    title: '!text-foreground !font-mono !uppercase !tracking-wider',
    description: '!text-muted-foreground !font-mono',
    actionButton: [
      '!bg-primary !text-primary-foreground !rounded-none !font-mono !uppercase',
      '!shadow-[0_0_10px_var(--primary)] hover:!bg-primary/90',
    ],
    cancelButton: '!bg-muted !text-muted-foreground !rounded-none !font-mono',
    closeButton: '!bg-transparent !text-primary !border !border-primary/50 !rounded-none hover:!bg-primary/20',
    success: '!border-green-500 !shadow-[0_0_20px_-5px_rgb(34,197,94)]',
    error: '!border-red-500 !shadow-[0_0_20px_-5px_rgb(239,68,68)]',
    warning: '!border-yellow-500 !shadow-[0_0_20px_-5px_rgb(234,179,8)]',
    info: '!border-blue-500 !shadow-[0_0_20px_-5px_rgb(59,130,246)]',
    icon: '!text-primary',
  },
};
