/**
 * Sunset Warm - Sonner 主题配置
 * 使用 !important 覆盖 sonner 默认样式
 */
export const sonnerConfig = {
  slots: {
    root: [
      '!bg-gradient-to-br !from-white !to-orange-50/50',
      '!border-orange-200 !text-stone-950 !shadow-lg !rounded-xl',
    ],
    title: '!text-stone-900 !font-medium',
    description: '!text-stone-500',
    actionButton: [
      '!bg-gradient-to-r !from-orange-500 !to-amber-500',
      '!text-white !rounded-lg !font-medium !shadow-sm hover:!from-orange-600 hover:!to-amber-600',
    ],
    cancelButton: '!bg-stone-100 !text-stone-600 !rounded-lg !font-medium hover:!bg-stone-200',
    closeButton: '!bg-transparent !text-stone-400 !border !border-stone-200 !rounded-lg hover:!text-stone-600',
    success: '!border-emerald-300 !bg-gradient-to-br !from-emerald-50 !to-emerald-100/50',
    error: '!border-red-300 !bg-gradient-to-br !from-red-50 !to-red-100/50',
    warning: '!border-amber-300 !bg-gradient-to-br !from-amber-50 !to-amber-100/50',
    info: '!border-sky-300 !bg-gradient-to-br !from-sky-50 !to-sky-100/50',
    icon: '!text-orange-500',
  },
};
