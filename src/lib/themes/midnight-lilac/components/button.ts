/**
 * Button 组件 - Midnight Crystal 风格重构
 * 
 * 展示 Slot 的深度定制能力：
 * 1. 利用 box-shadow 模拟多层光照 (高光、环境光、辉光)
 * 2. 利用 background-image 实现渐变质感
 * 3. 利用 transition 和 transform 实现物理按压感
 */
export const buttonConfig = {
  slots: {
    base: [
      'relative inline-flex items-center justify-center whitespace-nowrap',
      'text-sm font-medium tracking-wide',
      'transition-all duration-300 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:scale-[0.98]', // 物理按压反馈
      // 基础圆角
      'rounded-lg',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          // 背景：深紫色渐变，模拟晶体深度
          'bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9]',
          
          // 文字：白色，带轻微文字阴影
          'text-white drop-shadow-sm',
          
          // 边框：顶部亮，底部暗，模拟厚度 (1px border via shadow)
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_0_0_1px_rgba(139,92,246,0.5)]',
          
          // 外部光晕
          'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_0_15px_rgba(139,92,246,0.5),0_0_0_1px_rgba(139,92,246,0.8)]',
          
          // Hover 时的亮度提升
          'hover:brightness-110',
        ],
      },

      destructive: {
        base: [
          'bg-gradient-to-b from-red-500 to-red-700',
          'text-white',
          // 危险红晶体效果
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_0_0_1px_rgba(239,68,68,0.5)]',
          'hover:shadow-[0_0_15px_rgba(239,68,68,0.6),0_0_0_1px_rgba(239,68,68,0.8)]',
        ],
      },

      outline: {
        base: [
          'bg-transparent',
          'text-primary-foreground',
          // 细线发光边框
          'border border-primary/30',
          'hover:border-primary/80',
          'hover:bg-primary/10',
          'hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]',
        ],
      },

      secondary: {
        base: [
          'bg-surface-2',
          'text-foreground',
          'border border-white/5',
          'hover:bg-surface-3',
          'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]',
        ],
      },

      ghost: {
        base: [
          'hover:bg-primary/10',
          'hover:text-primary',
        ],
      },

      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'hover:text-primary-vivid',
          'shadow-none active:scale-100',
        ],
      },
    },

    // 尺寸变体也可以控制圆角和间距
    size: {
      default: {
        base: 'h-10 px-4 py-2',
      },
      sm: {
        base: 'h-9 rounded-md px-3',
      },
      lg: {
        base: 'h-11 rounded-md px-8 text-base',
      },
      icon: {
        base: 'h-10 w-10',
      },
    },
  },
};
