/**
 * Navigation Menu Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Navigation"
 * - Simple navigation with neon accents
 * - Active: Neon glow on active item
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const navigationMenuConfig = {
  slots: {
    /**
     * root: 导航菜单根容器
     */
    root: [],

    /**
     * list: 导航列表
     */
    list: [
      'group flex flex-1 list-none items-center justify-center space-x-1',
    ],

    /**
     * item: 导航项
     */
    item: [],

    /**
     * trigger: 导航触发器
     * ─────────────────────────────────────────────────────────────────────
     * 大写字体、霓虹边框、hover发光
     */
    trigger: [
      // Layout
      'group inline-flex items-center justify-center',
      'gap-2 px-4 py-2',

      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',

      // Shape - 4px圆角
      'rounded',

      // Color
      'text-foreground',
      'bg-transparent',

      // Border - 霓虹边框
      'border border-border',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 发光边框
      'hover:border-primary',
      'hover:text-primary',
      'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',

      // Active/Open state
      'data-[state=open]:border-primary',
      'data-[state=open]:text-primary',
      'data-[state=open]:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_15%,transparent),0_0_8px_var(--primary)]',

      // Focus
      'focus:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * content: 导航内容
     * ─────────────────────────────────────────────────────────────────────
     * 悬浮菜单，霓虹边框+发光
     */
    content: [
      // Layout
      'absolute left-0 top-0 w-auto',

      // Shape
      'rounded',

      // Color
      'bg-surface-2 text-foreground',

      // Border - 霓虹边框
      'border border-primary',

      // Shadow - 强发光
      'shadow-[0_0_12px_var(--primary),0_8px_24px_color-mix(in_srgb,var(--primary)_30%,transparent)]',

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
      'relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full',
      'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full',
      'overflow-hidden rounded-[4px] border border-primary',
      'bg-surface-2',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'text-foreground',
      'transition-[width,_height] duration-300',
      'md:w-[var(--radix-navigation-menu-viewport-width)]',
    ],

    /**
     * viewportWrapper: 视口包装器
     */
    viewportWrapper: [
      'perspective-[2000px] absolute left-0 top-full flex justify-center',
    ],

    /**
     * link: 导航链接
     * ─────────────────────────────────────────────────────────────────────
     * 内容区域的链接项
     */
    link: [
      // Layout
      'block select-none',
      'rounded p-3',
      'leading-none no-underline',

      // Color
      'text-foreground',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 背景高亮+边框发光
      'hover:bg-surface-3',
      'hover:text-primary',
      'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent)]',

      // Focus
      'focus:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
    ],

    /**
     * contentList: 内容列表
     */
    contentList: [
      'grid w-full gap-3 p-4',
      'md:w-[500px] md:grid-cols-2 md:gap-4',
      'lg:w-[600px]',
    ],

    /**
     * listItem: 列表项
     */
    listItem: [],

    /**
     * listItemTitle: 列表项标题
     */
    listItemTitle: [
      'text-sm font-semibold uppercase tracking-[0.05em]',
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
      'top-full z-[1] flex h-1.5 items-end justify-center',
      'overflow-hidden transition-[width,transform_250ms_ease]',
      'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    ],

    /**
     * indicatorArrow: 指示器箭头
     */
    indicatorArrow: [
      'relative top-[70%] h-2 w-2 rotate-45',
      'rounded-tl-[2px] bg-surface-2',
      'border-l border-t border-primary',
    ],

    /**
     * chevron: 箭头图标
     */
    chevron: [
      'relative top-[1px] ml-1 h-3 w-3 transition duration-200',
      'group-data-[state=open]/trigger:rotate-180',
      'text-muted-foreground',
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
        viewportWrapper: [],
        link: [],
        contentList: [],
        listItem: [],
        listItemTitle: [],
        listItemDescription: [],
        indicator: [],
        indicatorArrow: [],
        chevron: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
