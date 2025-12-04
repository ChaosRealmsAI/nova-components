'use client';

/**
 * Breadcrumb Block
 *
 * 面包屑导航组件，用于显示当前页面在层级结构中的位置。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: separator
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// Styles
// ============================================================================

const breadcrumbConfig = {
  slots: {
    root: '',
    list: 'flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5 text-muted-foreground',
    item: 'inline-flex items-center gap-1.5',
    link: 'hover:text-foreground transition-colors',
    page: 'text-foreground font-normal',
    separator: '[&>svg]:size-3.5',
    ellipsis: 'flex size-9 items-center justify-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
        list: '',
        item: '',
        link: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;

const breadcrumb = tv(breadcrumbConfig);

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

interface BreadcrumbContextValue {
  variant: BreadcrumbVariants['variant'];
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({
  variant: 'default',
});

const useBreadcrumbContext = () => React.useContext(BreadcrumbContext);

// ============================================================================
// Types
// ============================================================================

export type BreadcrumbVariants = VariantProps<typeof breadcrumb>;
export type BreadcrumbSlots = keyof typeof breadcrumbConfig.slots;
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
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <BreadcrumbContext.Provider value={{ variant }}>
      <nav
        aria-label="breadcrumb"
        data-slot="breadcrumb"
        className={twMerge(
          styles.root(),
          themeStyles.slot,
          themeStyles.variant,
          classNames?.root,
          className
        )}
        {...props}
      />
    </BreadcrumbContext.Provider>
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
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.list);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.list);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <ol
      data-slot="breadcrumb-list"
      className={twMerge(
        styles.list(),
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
// Breadcrumb Item
// ============================================================================

function BreadcrumbItem({
  className,
  classNames,
  ...props
}: BreadcrumbItemProps) {
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.item);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <li
      data-slot="breadcrumb-item"
      className={twMerge(
        styles.item(),
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
// Breadcrumb Link
// ============================================================================

function BreadcrumbLink({
  asChild,
  className,
  classNames,
  ...props
}: BreadcrumbLinkProps) {
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.link);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.link);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={twMerge(
        styles.link(),
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
// Breadcrumb Page
// ============================================================================

function BreadcrumbPage({
  className,
  classNames,
  ...props
}: BreadcrumbPageProps) {
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.page);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.page);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={twMerge(
        styles.page(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.page,
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
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.separator);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.separator);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={twMerge(
        styles.separator(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.separator,
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
  const { variant } = useBreadcrumbContext();
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Breadcrumb;
  
  // L1
  const styles = breadcrumb({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.ellipsis);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.ellipsis);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={twMerge(
        styles.ellipsis(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.ellipsis,
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
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Breadcrumb variant={variant}>
        <BreadcrumbList>
          {items.map((item, index) => {
            const label = item.labelKey ? t(item.labelKey, item.label) : item.label;
            return (
              <React.Fragment key={item.label}>
                <BreadcrumbItem>
                  {item.isCurrentPage ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
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