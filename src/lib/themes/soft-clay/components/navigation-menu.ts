/**
 * Navigation Menu Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Navigation"
 * - Shape: 16px rounded
 * - Shadow: Raised triggers, inset on hover
 * - Typography: Normal case, medium weight
 * - Interaction: Hover = shadow intensify, Active = raised + hover background
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const navigationMenuConfig = {
  slots: {
    /**
     * root: 导航菜单根容器
     */
    root: [
      'relative z-10',
      'flex items-center justify-center',
    ],

    /**
     * list: 导航列表
     */
    list: [
      'group flex flex-1 list-none items-center justify-center',
      'gap-2',
    ],

    /**
     * item: 导航项
     */
    item: [
      'relative',
    ],

    /**
     * trigger: 导航触发器
     * ─────────────────────────────────────────────────────────────────────
     * 凸起效果，hover 增强，open 时内凹
     */
    trigger: [
      // Layout
      'group inline-flex items-center justify-center',
      'gap-2 px-4 py-2',

      // Typography - 柔和字重
      'text-sm font-medium',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Color
      'text-foreground',
      'bg-surface-1',

      // Border - 无边框
      'border-0',

      // Shadow - 凸起双阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Hover - 阴影加深 + 上移
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'hover:text-primary',

      // Active/Open state - 内凹效果
      'data-[state=open]:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'data-[state=open]:translate-y-0',
      'data-[state=open]:text-primary',

      // Focus
      'focus:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
    ],

    /**
     * content: 导航内容
     * ─────────────────────────────────────────────────────────────────────
     * 悬浮菜单，凸起阴影
     */
    content: [
      // Layout
      'absolute left-0 top-0 w-auto',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Color
      'bg-surface-2 text-foreground',

      // Border - 无边框
      'border-0',

      // Shadow - 强凸起阴影
      'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',

      // Animation
      'data-[motion^=from-]:animate-in',
      'data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in',
      'data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52',
      'data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52',
      'data-[motion=to-start]:slide-out-to-left-52',
    ],

    /**
     * viewport: 视口容器
     */
    viewport: [
      'origin-top-center relative mt-2',
      'h-[var(--radix-navigation-menu-viewport-height)]',
      'w-full overflow-hidden',
      'rounded-[16px]',
      'bg-surface-2',
      'shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],

    /**
     * viewportWrapper: 视口包装器
     */
    viewportWrapper: [
      'absolute left-0 top-full',
      'flex justify-center',
    ],

    /**
     * link: 导航链接
     * ─────────────────────────────────────────────────────────────────────
     * 内容区域的链接项
     */
    link: [
      // Layout
      'block select-none',
      'rounded-[12px] p-3',
      'leading-none no-underline',

      // Color
      'text-foreground',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Hover - 背景渐变
      'hover:bg-surface-3',
      'hover:text-primary',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',

      // Focus
      'focus:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
    ],

    /**
     * contentList: 内容列表
     */
    contentList: [
      'grid gap-2 p-4',
      'md:w-[400px] lg:w-[500px]',
      'lg:grid-cols-[.75fr_1fr]',
    ],

    /**
     * listItem: 列表项
     */
    listItem: [
      'row-span-3',
    ],

    /**
     * listItemTitle: 列表项标题
     */
    listItemTitle: [
      'text-sm font-semibold',
      'text-primary',
      'mb-1',
    ],

    /**
     * listItemDescription: 列表项描述
     */
    listItemDescription: [
      'text-xs leading-tight',
      'text-muted-foreground',
      'line-clamp-2',
    ],

    /**
     * indicator: 指示器
     */
    indicator: [
      'top-full z-[1]',
      'flex h-2 items-end justify-center overflow-hidden',
      'data-[state=visible]:animate-in',
      'data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out',
      'data-[state=visible]:fade-in',
    ],

    /**
     * indicatorArrow: 指示器箭头
     */
    indicatorArrow: [
      'relative top-[60%] h-2 w-2',
      'rotate-45',
      'rounded-tl-sm',
      'bg-surface-2',
      'shadow-[2px_2px_4px_var(--shadow-dark)]',
    ],

    /**
     * chevron: 箭头图标
     */
    chevron: [
      'relative top-[1px]',
      'ml-1 h-3 w-3',
      'text-muted-foreground',
      'transition duration-200',
      'group-data-[state=open]:rotate-180',
      'group-hover:text-primary',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        list: [],
        item: [],
        trigger: [],
        content: [],
        viewport: [],
        link: [],
        indicator: [],
        chevron: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
