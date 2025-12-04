/**
 * Button 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 打字机按键风格 - 厚实的边框、内凹阴影、按压反馈
 * 凸版印刷质感 - 像是从纸上凸起的墨块
 */
export const buttonConfig = {
  slots: {
    base: [
      'relative inline-flex items-center justify-center whitespace-nowrap',
      'text-sm font-semibold tracking-wide',
      // 衬线字体，大写字母
      'font-serif uppercase',
      // 极小圆角，锐利边缘
      'rounded-[2px]',
      // 粗边框，报纸风格
      'border-2',
      // 过渡效果：较慢，有重量感
      'transition-all duration-200 ease-out',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:pointer-events-none disabled:opacity-50',
      // 按压反馈：下沉效果
      'active:translate-y-[1px]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          // 皮革棕色背景
          'bg-primary',
          'text-primary-foreground',
          'border-[#5C4033]',
          // Letterpress 内凹效果
          'shadow-[inset_0_-2px_0_0_rgba(92,64,51,0.4),inset_0_1px_0_0_rgba(255,253,208,0.2),2px_2px_0_0_rgba(44,24,16,0.3)]',
          // Hover：轻微提升
          'hover:brightness-110',
          'hover:shadow-[inset_0_-2px_0_0_rgba(92,64,51,0.3),inset_0_1px_0_0_rgba(255,253,208,0.3),3px_3px_0_0_rgba(44,24,16,0.25)]',
          // Active：按下
          'active:shadow-[inset_0_2px_4px_0_rgba(44,24,16,0.4)]',
        ],
      },

      destructive: {
        base: [
          'bg-destructive',
          'text-destructive-foreground',
          'border-[#7F1D1D]',
          // 危险红色的凸版效果
          'shadow-[inset_0_-2px_0_0_rgba(127,29,29,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15),2px_2px_0_0_rgba(44,24,16,0.3)]',
          'hover:brightness-110',
          'hover:shadow-[inset_0_-2px_0_0_rgba(127,29,29,0.3),3px_3px_0_0_rgba(44,24,16,0.25)]',
          'active:shadow-[inset_0_2px_4px_0_rgba(44,24,16,0.4)]',
        ],
      },

      outline: {
        base: [
          'bg-transparent',
          'text-foreground',
          'border-border',
          // 轮廓按钮：简单边框
          'shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
          'hover:bg-surface-1',
          'hover:border-primary',
          'hover:shadow-[2px_2px_0_0_rgba(139,69,19,0.2)]',
          'active:shadow-[inset_0_1px_2px_0_rgba(44,24,16,0.2)]',
        ],
      },

      secondary: {
        base: [
          'bg-surface-2',
          'text-foreground',
          'border-border-muted',
          'shadow-[inset_0_-1px_0_0_rgba(44,24,16,0.1),2px_2px_0_0_rgba(44,24,16,0.1)]',
          'hover:bg-surface-3',
          'hover:border-border',
          'active:shadow-[inset_0_1px_2px_0_rgba(44,24,16,0.15)]',
        ],
      },

      ghost: {
        base: [
          'bg-transparent',
          'text-foreground',
          'border-transparent',
          'shadow-none',
          'hover:bg-surface-1',
          'hover:border-border-muted',
          'active:bg-surface-2',
        ],
      },

      link: {
        base: [
          'bg-transparent',
          'text-primary',
          'border-transparent',
          'shadow-none',
          'underline underline-offset-4',
          'decoration-primary/50',
          'hover:decoration-primary',
          'hover:text-primary-vivid',
          'active:translate-y-0',
        ],
      },
    },

    size: {
      default: {
        base: 'h-10 px-4 py-2',
      },
      sm: {
        base: 'h-9 px-3 text-xs',
      },
      lg: {
        base: 'h-11 px-8 text-base',
      },
      icon: {
        base: 'h-10 w-10',
      },
    },
  },
};
