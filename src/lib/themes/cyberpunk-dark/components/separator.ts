// ADR-008: 纯数据配置，无组件依赖

export const separatorConfig = {
  slots: {
    base: ['shadow-[0_0_8px_var(--primary)]'],
  },
  variants: {
    orientation: {
      horizontal: { base: 'h-[2px] w-full' },
      vertical: { base: 'w-[2px] min-h-[60px] self-stretch' },
    },
  },
};
