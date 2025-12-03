// ADR-008: 纯数据配置，无组件依赖

export const skeletonConfig = {
  slots: {
    base: [
      'rounded-xl',
      'bg-gradient-to-r from-surface-2 to-surface-3',
    ],
  },
  variants: {
    variant: {
      default: { base: '' },
      circular: { base: 'rounded-full' },
      text: { base: 'h-4 rounded-lg' },
    },
  },
};
