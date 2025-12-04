/**
 * Input 组件 - Midnight Crystal 风格重构
 * 
 * 设计理念：
 * 界面上的“凹槽”，用于容纳数据。
 * - 默认状态：向内凹陷，底部有微弱反光
 * - 聚焦状态：凹槽被能量（紫色光）填满/照亮
 */
export const inputConfig = {
  slots: {
    base: [
      'flex h-10 w-full',
      'rounded-lg',
      
      // 1. 背景：极深的背景，模拟凹陷
      'bg-black/20', 
      
      // 2. 边框与内阴影
      // 底部有一条白线(0.1)模拟凹槽底部的反光
      // 顶部有深色阴影，模拟凹槽顶部的遮挡
      'border-0',
      'shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3),0_1px_0_0_rgba(255,255,255,0.05)]',
      
      // 3. 文字与排版
      'px-3 py-2 text-sm',
      'text-foreground',
      'placeholder:text-muted-foreground/50', // 更淡的占位符
      
      // 4. 交互效果
      'transition-all duration-200',
      
      // 5. Focus 状态：能量注入
      // 移除默认 outline
      'focus-visible:outline-none',
      // 底部亮起紫色光条，整体背景变亮
      'focus-visible:bg-surface-1/50',
      'focus-visible:shadow-[inset_0_0_0_1px_var(--primary),0_0_15px_var(--primary-muted)]',
      
      // 6. 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    ],
  },
};
