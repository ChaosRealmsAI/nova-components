// ADR-008: 纯数据配置，无组件依赖

export const skeletonConfig = {
  slots: {
    base: [
      'rounded-lg',
      'bg-surface-2',
      'shadow-inner',
    ],
  },
  variants: {
    variant: {
      default: { base: '' },
      circular: { base: 'rounded-full' },
      text: { base: 'h-4 rounded' },
    },
  },
};
