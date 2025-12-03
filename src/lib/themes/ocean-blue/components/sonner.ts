/**
 * Ocean Blue - Sonner 主题配置
 * 使用 !important 覆盖 sonner 默认样式
 */
export const sonnerConfig = {
  slots: {
    root: '!bg-white !border-blue-200 !text-slate-950 !shadow-lg !rounded-lg',
    title: '!text-slate-900 !font-medium',
    description: '!text-slate-500',
    actionButton: '!bg-blue-500 !text-white !rounded-md !font-medium hover:!bg-blue-600',
    cancelButton: '!bg-slate-100 !text-slate-600 !rounded-md !font-medium hover:!bg-slate-200',
    closeButton: '!bg-transparent !text-slate-400 !border !border-slate-200 !rounded-md hover:!text-slate-600',
    success: '!border-emerald-200 !bg-emerald-50',
    error: '!border-red-200 !bg-red-50',
    warning: '!border-amber-200 !bg-amber-50',
    info: '!border-blue-200 !bg-blue-50',
    icon: '!text-blue-500',
  },
};
