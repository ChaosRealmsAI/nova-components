'use client';

/**
 * NavigationMenu Block
 *
 * 导航菜单组件，用于网站导航。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: 无（不依赖其他组件）
 * - 不支持用户可配特效（Block 组件特性）
 * - 使用三层架构: L1 (功能层) + L2 (主题层) + L3 (实例层)
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const navigationMenuAtoms = [] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const navigationMenuBase = tv({
  slots: {
    root: 'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
    list: 'group flex flex-1 list-none items-center justify-center',
    item: 'relative',
    trigger: 'group inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 outline-none',
    content: 'top-0 left-0 w-full md:absolute md:w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
    viewport: 'origin-top-center relative overflow-hidden md:w-[var(--radix-navigation-menu-viewport-width)] h-[var(--radix-navigation-menu-viewport-height)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    viewportWrapper: 'absolute top-full left-0 isolate z-50 flex justify-start',
    link: 'flex flex-col rounded-md outline-none transition-all',
    contentList: 'grid',
    listItem: 'block select-none rounded-md leading-none no-underline outline-none transition-colors',
    listItemTitle: 'leading-none',
    listItemDescription: 'line-clamp-1 leading-snug',
    indicator: 'top-full z-[1] flex items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    indicatorArrow: 'relative top-[60%] rotate-45 rounded-tl-sm shadow-md',
    chevron: 'relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// Context
// ============================================================================

interface NavigationMenuContextValue {
  variant: NavigationMenuVariants['variant'];
}

const NavigationMenuContext = React.createContext<NavigationMenuContextValue>({
  variant: 'default',
});

const useNavigationMenuContext = () => React.useContext(NavigationMenuContext);

// ============================================================================
// Types
// ============================================================================

export type NavigationMenuVariants = VariantProps<typeof navigationMenuBase>;
export type NavigationMenuSlots = keyof typeof navigationMenuBase.slots;
export type NavigationMenuClassNames = Partial<Record<NavigationMenuSlots, string>>;

export interface NavigationMenuProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Root>,
    NavigationMenuVariants {
  classNames?: NavigationMenuClassNames;
  viewport?: boolean;
}

export interface NavigationMenuListProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuItemProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuContentProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuLinkProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuViewportProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuIndicatorProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Indicator> {
  classNames?: NavigationMenuClassNames;
}

export interface NavigationMenuDemoProps extends NavigationMenuVariants {
  gettingStartedLabel?: string;
  componentsLabel?: string;
  documentationLabel?: string;
  introLabel?: string;
  installLabel?: string;
  usageLabel?: string;
}

// ============================================================================
// NavigationMenu Root
// ============================================================================

function NavigationMenu({
  className,
  classNames,
  children,
  viewport = true,
  variant = 'default',
  ...props
}: NavigationMenuProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1: 功能层
  const base = navigationMenuBase({ variant });

  // L2: 主题层
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore - Theme config types might be loose
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuContext.Provider value={{ variant }}>
      <NavigationMenuPrimitive.Root
        data-slot="navigation-menu"
        data-viewport={viewport}
        className={twMerge(
          base.root(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.root,
          className
        )}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport classNames={classNames} />}
      </NavigationMenuPrimitive.Root>
    </NavigationMenuContext.Provider>
  );
}

// ============================================================================
// NavigationMenu List
// ============================================================================

function NavigationMenuList({
  className,
  classNames,
  ...props
}: NavigationMenuListProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.list);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.list);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={twMerge(
        base.list(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.list,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// NavigationMenu Item
// ============================================================================

function NavigationMenuItem({
  className,
  classNames,
  ...props
}: NavigationMenuItemProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.item);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={twMerge(
        base.item(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.item,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// NavigationMenu Trigger
// ============================================================================

function NavigationMenuTrigger({
  className,
  classNames,
  children,
  ...props
}: NavigationMenuTriggerProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.trigger);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.trigger);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  const chevronThemeStyle = React.useMemo(() => {
    return toClassString(themeConfig?.slots?.chevron);
  }, [themeConfig]);

  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={twMerge(
        base.trigger(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.trigger,
        className
      )}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className={twMerge(base.chevron(), chevronThemeStyle)}
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

// ============================================================================
// NavigationMenu Content
// ============================================================================

function NavigationMenuContent({
  className,
  classNames,
  ...props
}: NavigationMenuContentProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.content);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={twMerge(
        base.content(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.content,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// NavigationMenu Link
// ============================================================================

function NavigationMenuLink({
  className,
  classNames,
  ...props
}: NavigationMenuLinkProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.link);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.link);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={twMerge(
        base.link(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.link,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// NavigationMenu Viewport
// ============================================================================

function NavigationMenuViewport({
  className,
  classNames,
  ...props
}: NavigationMenuViewportProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const viewportWrapperStyle = toClassString(themeConfig?.slots?.viewportWrapper);
    const viewportSlotStyle = toClassString(themeConfig?.slots?.viewport);
    // @ts-ignore
    const viewportVariantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.viewport);
    return {
      viewportWrapper: viewportWrapperStyle,
      slot: viewportSlotStyle,
      variant: viewportVariantStyle
    };
  }, [themeConfig, variant]);

  return (
    <div className={twMerge(base.viewportWrapper(), themeStyles.viewportWrapper)}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={twMerge(
          base.viewport(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.viewport,
          className
        )}
        {...props}
      />
    </div>
  );
}

// ============================================================================
// NavigationMenu Indicator
// ============================================================================

function NavigationMenuIndicator({
  className,
  classNames,
  ...props
}: NavigationMenuIndicatorProps) {
  const { variant } = useNavigationMenuContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.indicator);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.indicator);
    const arrowStyle = toClassString(themeConfig?.slots?.indicatorArrow);
    return { slot: slotStyle, variant: variantStyle, arrow: arrowStyle };
  }, [themeConfig, variant]);

  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={twMerge(
        base.indicator(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.indicator,
        className
      )}
      {...props}
    >
      <div className={twMerge(base.indicatorArrow(), themeStyles.arrow)} />
    </NavigationMenuPrimitive.Indicator>
  );
}

// ============================================================================
// NavigationMenu Demo (用于画布展示)
// ============================================================================

function NavigationMenuDemo({
  variant = 'default',
  gettingStartedLabel = 'Getting Started',
  componentsLabel = 'Components',
  documentationLabel = 'Documentation',
  introLabel = 'Introduction',
  installLabel = 'Installation',
  usageLabel = 'Usage',
}: NavigationMenuDemoProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;

  // L1
  const base = navigationMenuBase({ variant });

  // L2 - 获取主题化的样式
  const themeStyles = React.useMemo(() => {
    return {
      contentList: toClassString(themeConfig?.slots?.contentList),
      listItem: toClassString(themeConfig?.slots?.listItem),
      listItemTitle: toClassString(themeConfig?.slots?.listItemTitle),
      listItemDescription: toClassString(themeConfig?.slots?.listItemDescription),
    };
  }, [themeConfig]);

  // 合并样式
  const contentListClass = twMerge(base.contentList(), themeStyles.contentList);
  const listItemClass = twMerge(base.listItem(), themeStyles.listItem);
  const listItemTitleClass = twMerge(base.listItemTitle(), themeStyles.listItemTitle);
  const listItemDescClass = twMerge(base.listItemDescription(), themeStyles.listItemDescription);

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <NavigationMenu variant={variant} viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{gettingStartedLabel}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={contentListClass}>
                <li>
                  <NavigationMenuLink asChild>
                    <a className={listItemClass}>
                      <div className={listItemTitleClass}>{introLabel}</div>
                      <p className={listItemDescClass}>
                        Re-usable components
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a className={listItemClass}>
                      <div className={listItemTitleClass}>{installLabel}</div>
                      <p className={listItemDescClass}>
                        How to install
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{componentsLabel}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={contentListClass}>
                <li>
                  <NavigationMenuLink asChild>
                    <a className={listItemClass}>
                      <div className={listItemTitleClass}>{usageLabel}</div>
                      <p className={listItemDescClass}>
                        How to use components
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a className={listItemClass}>
                {documentationLabel}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuDemo,
};
