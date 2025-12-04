'use client';

/**
 * Pagination Block
 *
 * 分页组件，用于在多页内容之间导航。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 * - 提供 default 和 outline 两种样式变体
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { Button } from '@/components/nova-ui/atmos/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const paginationAtoms = ['button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const paginationBase = tv({
  slots: {
    root: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center gap-1',
    item: '',
    link: 'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    ellipsis: 'flex size-9 items-center justify-center',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        link: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
    },
    size: {
      default: {
        link: 'h-9 px-3',
      },
      sm: {
        link: 'h-8 px-2 text-xs',
      },
      lg: {
        link: 'h-10 px-4',
      },
      icon: {
        link: 'size-9',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'icon',
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
// Types
// ============================================================================

export type PaginationVariants = VariantProps<typeof paginationBase>;
export type PaginationSlots = keyof typeof paginationBase.slots;
export type PaginationClassNames = Partial<Record<PaginationSlots, string>>;

export interface PaginationProps extends React.ComponentProps<'nav'>, PaginationVariants {
  classNames?: PaginationClassNames;
}

export interface PaginationContentProps extends React.ComponentProps<'ul'> {
  classNames?: PaginationClassNames;
}

export interface PaginationItemProps extends React.ComponentProps<'li'> {}

export interface PaginationLinkProps extends React.ComponentProps<'button'>, PaginationVariants {
  isActive?: boolean;
  classNames?: PaginationClassNames;
}

export interface PaginationPreviousProps extends PaginationLinkProps {
  label?: string;
}

export interface PaginationNextProps extends PaginationLinkProps {
  label?: string;
}

export interface PaginationEllipsisProps extends React.ComponentProps<'span'> {
  classNames?: PaginationClassNames;
}

// ============================================================================
// Pagination Root
// ============================================================================

function Pagination({
  className,
  classNames,
  variant = 'default',
  ...props
}: PaginationProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Pagination;
  
  // L1
  const base = paginationBase({ variant });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={twMerge(
        base.root(),
        themeStyles.slot,
        classNames?.root,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Pagination Content
// ============================================================================

function PaginationContent({
  className,
  classNames,
  ...props
}: PaginationContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Pagination;
  
  // L1
  const base = paginationBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <ul
      data-slot="pagination-content"
      className={twMerge(
        base.content(),
        themeStyles.slot,
        classNames?.content,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Pagination Item
// ============================================================================

function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />;
}

// ============================================================================
// Pagination Link
// ============================================================================

function PaginationLink({
  className,
  classNames,
  isActive,
  variant = 'default',
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Pagination;
  
  // L1
  const base = paginationBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.link);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <Button
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      className={twMerge(
        base.link(),
        themeStyles.slot,
        classNames?.link,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Pagination Previous
// ============================================================================

function PaginationPrevious({
  className,
  classNames,
  label = 'Previous',
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={twMerge('gap-1 pl-2.5', className)}
      classNames={classNames}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="hidden sm:block">{label}</span>
    </PaginationLink>
  );
}

// ============================================================================
// Pagination Next
// ============================================================================

function PaginationNext({
  className,
  classNames,
  label = 'Next',
  ...props
}: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={twMerge('gap-1 pr-2.5', className)}
      classNames={classNames}
      {...props}
    >
      <span className="hidden sm:block">{label}</span>
      <ChevronRight className="size-4" />
    </PaginationLink>
  );
}

// ============================================================================
// Pagination Ellipsis
// ============================================================================

function PaginationEllipsis({
  className,
  classNames,
  ...props
}: PaginationEllipsisProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Pagination;
  
  // L1
  const base = paginationBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.ellipsis);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={twMerge(
        base.ellipsis(),
        themeStyles.slot,
        classNames?.ellipsis,
        className
      )}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

// ============================================================================
// Demo Component (for Canvas display)
// ============================================================================

export interface PaginationDemoProps extends PaginationVariants {
  totalPages?: number;
  currentPage?: number;
  previousLabel?: string;
  nextLabel?: string;
}

function PaginationDemo({
  variant = 'default',
  totalPages = 5,
  currentPage = 1,
  previousLabel = 'Previous',
  nextLabel = 'Next',
}: PaginationDemoProps) {
  const [page, setPage] = React.useState(currentPage);

  // 生成页码数组
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= 5) {
      // 显示所有页
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 始终显示第一页
      pages.push(1);

      if (page > 3) {
        pages.push('ellipsis');
      }

      // 显示当前页附近
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push('ellipsis');
      }

      // 始终显示最后一页
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-2">
      <Pagination variant={variant}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              label={previousLabel}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            />
          </PaginationItem>

          {getVisiblePages().map((p, idx) => (
            <PaginationItem key={`${p}-${idx}`}>
              {p === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={page === p}
                  onClick={() => setPage(p)}
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              label={nextLabel}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationDemo,
};