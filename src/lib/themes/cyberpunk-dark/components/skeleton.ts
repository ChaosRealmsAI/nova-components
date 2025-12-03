// ADR-008: 纯数据配置，无组件依赖

export const skeletonConfig = {
  slots: {
    base: [
      'rounded-none',
      'bg-surface-2',
    ],
  },
  variants: {
    variant: {
      default: { base: '' },
      circular: { base: '[clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]' },
      text: { base: 'h-4' },
    },
  },
};
