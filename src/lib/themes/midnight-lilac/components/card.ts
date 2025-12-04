/**
 * Card 组件 - Midnight Crystal 风格重构
 * 
 * 设计理念：
 * 模拟一块悬浮的深色玻璃板。
 * - 背景：深色渐变 + 模糊，增加通透感
 * - 边框：利用 box-shadow 模拟玻璃边缘的高光反射
 * - 阴影：大范围的弥散阴影，增加悬浮感
 */
export const cardConfig = {
  slots: {
    base: [
      // 1. 玻璃质感背景
      'bg-gradient-to-b from-surface-1/90 to-surface-1/60', // 上实下虚
      'backdrop-blur-md', // 毛玻璃
      
      // 2. 边缘高光处理 (Rim Light)
      // 顶部亮白线(0.1透明度)，底部黑线，模拟厚度
      'border-0', // 移除默认边框，完全靠 shadow
      'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.05),0_10px_40px_-10px_rgba(0,0,0,0.5)]',
      
      // 3. 形状
      'rounded-xl', // 更大的圆角，符合晶体感
      
      // 4. 文字
      'text-card-foreground',
    ],

    header: 'flex flex-col space-y-1.5 p-6',

    title: 'text-2xl font-semibold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60', // 标题渐变

    description: 'text-sm text-muted-foreground/80',

    content: 'p-6 pt-0',

    footer: 'flex items-center p-6 pt-0',
  },

  variants: {
    variant: {
      default: {},

      // 悬浮态：更强的发光
      elevated: {
        base: [
          'bg-surface-1/80',
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(167,139,250,0.3),0_20px_50px_-12px_rgba(0,0,0,0.7)]',
          'backdrop-blur-xl',
        ],
      },

      // 幽灵态：几乎不可见，直到 hover
      ghost: {
        base: [
          'bg-transparent shadow-none backdrop-blur-none',
          'hover:bg-surface-1/30 hover:backdrop-blur-sm',
          'transition-all duration-300',
        ],
      },
    },
  },
};
