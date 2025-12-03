'use client';

/**
 * Breadcrumb Block
 *
 * 面包屑导航组件，用于显示当前页面在层级结构中的位置。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: separator
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { breadcrumbBaseConfig } from './breadcrumb.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const breadcrumbAtoms = ['separator'] as const;

export { breadcrumbBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const breadcrumb = tv(breadcrumbBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type BreadcrumbVariants = VariantProps<typeof breadcrumb>;
export type BreadcrumbSlots = keyof typeof breadcrumbBaseConfig.slots;
export type BreadcrumbClassNames = Partial<Record<BreadcrumbSlots, string>>;

export interface BreadcrumbProps
  extends React.ComponentProps<'nav'>,
    BreadcrumbVariants {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbListProps extends React.ComponentProps<'ol'> {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbItemProps extends React.ComponentProps<'li'> {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbLinkProps extends React.ComponentProps<'a'> {
  asChild?: boolean;
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbPageProps extends React.ComponentProps<'span'> {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbSeparatorProps extends React.ComponentProps<'li'> {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<'span'> {
  classNames?: BreadcrumbClassNames;
}

export interface BreadcrumbItemValue {
  label: string;
  labelKey?: string;
  href?: string;
  isCurrentPage?: boolean;
}

export interface BreadcrumbDemoProps extends BreadcrumbVariants {
  items?: BreadcrumbItemValue[];
}

// ============================================================================
// Breadcrumb Root
// ============================================================================

function Breadcrumb({
  className,
  classNames,
  variant = 'default',
  ...props
}: BreadcrumbProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant });

  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(
        classNames?.root || styles.root(),
        themeConfig?.slots?.root,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Breadcrumb List
// ============================================================================

function BreadcrumbList({
  className,
  classNames,
  ...props
}: BreadcrumbListProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  return (
    <ol
      data-slot="breadcrumb-list"
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
// Breadcrumb Item
// ============================================================================

function BreadcrumbItem({
  className,
  classNames,
  ...props
}: BreadcrumbItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  return (
    <li
      data-slot="breadcrumb-item"
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
// Breadcrumb Link
// ============================================================================

function BreadcrumbLink({
  asChild,
  className,
  classNames,
  ...props
}: BreadcrumbLinkProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
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
// Breadcrumb Page
// ============================================================================

function BreadcrumbPage({
  className,
  classNames,
  ...props
}: BreadcrumbPageProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        classNames?.page || styles.page(),
        themeConfig?.slots?.page,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Breadcrumb Separator
// ============================================================================

function BreadcrumbSeparator({
  children,
  className,
  classNames,
  ...props
}: BreadcrumbSeparatorProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(
        classNames?.separator || styles.separator(),
        themeConfig?.slots?.separator,
        className
      )}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

// ============================================================================
// Breadcrumb Ellipsis
// ============================================================================

function BreadcrumbEllipsis({
  className,
  classNames,
  ...props
}: BreadcrumbEllipsisProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  const styles = breadcrumb({ variant: 'default' });

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        classNames?.ellipsis || styles.ellipsis(),
        themeConfig?.slots?.ellipsis,
        className
      )}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

const defaultItems: BreadcrumbItemValue[] = [
  { label: 'Home', labelKey: 'breadcrumbHome', href: '#' },
  { label: 'Components', labelKey: 'breadcrumbComponents', href: '#' },
  { label: 'Breadcrumb', labelKey: 'breadcrumbCurrent', isCurrentPage: true },
];

function BreadcrumbDemo({
  variant = 'default',
  items = defaultItems,
}: BreadcrumbDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Breadcrumb variant={variant}>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbDemo,
};
