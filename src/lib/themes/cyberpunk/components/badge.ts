/**
 * Badge - Cyberpunk Theme
 *
 * 赛博朋克：霓虹灯、故障效果、科技切角、全息感
 */
export const badgeConfig = {
  slots: {
    base: [
      // 科技切角形状
      'rounded-none',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      // 边框
      'border',
      // 内边距
      'px-3',
      'py-1',
      // 字体：终端风格
      'text-xs',
      'font-bold',
      'font-mono',
      'uppercase',
      'tracking-[0.2em]',
      // 过渡
      'transition-all',
      'duration-150',
      // 焦点
      'focus:outline-none',
      'focus:ring-1',
      'focus:ring-primary',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          // 霓虹青色
          'bg-primary/10',
          'text-primary',
          'border-primary',
          // 霓虹发光
          'shadow-[0_0_10px_rgba(0,255,255,0.5),0_0_20px_rgba(0,255,255,0.3),inset_0_0_10px_rgba(0,255,255,0.1)]',
          // hover: 实心填充
          'hover:bg-primary',
          'hover:text-primary-foreground',
          'hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_30px_rgba(0,255,255,0.4)]',
        ],
      },

      secondary: {
        base: [
          // 霓虹粉/紫
          'bg-secondary/10',
          'text-secondary',
          'border-secondary',
          'shadow-[0_0_8px_rgba(255,0,255,0.3)]',
          'hover:bg-secondary',
          'hover:text-secondary-foreground',
          'hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]',
        ],
      },

      destructive: {
        base: [
          // 警报红
          'bg-destructive/10',
          'text-destructive',
          'border-destructive',
          // 脉冲发光动画
          'shadow-[0_0_10px_rgba(255,0,60,0.5)]',
          'animate-pulse',
          // hover
          'hover:bg-destructive',
          'hover:text-destructive-foreground',
          'hover:animate-none',
          'hover:shadow-[0_0_20px_rgba(255,0,60,0.8)]',
        ],
      },

      outline: {
        base: [
          // 低调线框
          'bg-transparent',
          'text-muted-foreground',
          'border-muted-foreground/50',
          // hover 激活
          'hover:text-primary',
          'hover:border-primary',
          'hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]',
        ],
      },
    },
  },
};
