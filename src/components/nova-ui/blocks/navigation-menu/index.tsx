'use client';

/**
 * NavigationMenu Block
 *
 * 导航菜单组件，用于网站导航。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 */

import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { navigationMenuBaseConfig } from './navigation-menu.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const navigationMenuAtoms = ['popover', 'button'] as const;

export { navigationMenuBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const navigationMenu = tv(navigationMenuBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type NavigationMenuVariants = VariantProps<typeof navigationMenu>;
export type NavigationMenuSlots = keyof typeof navigationMenuBaseConfig.slots;
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
  const styles = navigationMenu({ variant });

  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport classNames={classNames} />}
    </NavigationMenuPrimitive.Root>
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        classNames?.list || styles.list(),
        themeConfig?.slots?.list,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn(
        classNames?.item || styles.item(),
        themeConfig?.slots?.item,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        classNames?.trigger || styles.trigger(),
        themeConfig?.slots?.trigger,
        'group',
        className
      )}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className={cn(styles.chevron(), themeConfig?.slots?.chevron)}
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        classNames?.content || styles.content(),
        themeConfig?.slots?.content,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        classNames?.link || styles.link(),
        themeConfig?.slots?.link,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <div className={cn(styles.viewportWrapper(), themeConfig?.slots?.viewportWrapper)}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          classNames?.viewport || styles.viewport(),
          themeConfig?.slots?.viewport,
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
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.NavigationMenu;
  const styles = navigationMenu({ variant: 'default' });

  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        classNames?.indicator || styles.indicator(),
        themeConfig?.slots?.indicator,
        className
      )}
      {...props}
    >
      <div className={cn(styles.indicatorArrow(), themeConfig?.slots?.indicatorArrow)} />
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
  const styles = navigationMenu({ variant });

  // 获取主题化的 slot 样式
  const getSlotClass = (slot: string, fallback: string) => {
    const themeSlot = themeConfig?.slots?.[slot as keyof typeof themeConfig.slots];
    if (themeSlot) {
      return cn(Array.isArray(themeSlot) ? themeSlot.join(' ') : themeSlot);
    }
    const stylesFn = styles[slot as keyof typeof styles];
    if (typeof stylesFn === 'function') {
      return stylesFn();
    }
    return fallback;
  };

  const contentListClass = getSlotClass('contentList', 'grid gap-3 p-4 w-[220px]');
  const listItemClass = getSlotClass('listItem', 'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground');
  const listItemTitleClass = getSlotClass('listItemTitle', 'text-sm font-medium leading-none text-foreground');
  const listItemDescClass = getSlotClass('listItemDescription', 'line-clamp-2 text-sm leading-snug text-muted-foreground mt-1');
  const triggerAsLinkClass = cn(
    getSlotClass('trigger', ''),
    'no-underline'
  );

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
              <a className={triggerAsLinkClass}>
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
