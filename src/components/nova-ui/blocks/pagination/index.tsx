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
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { Button } from '@/components/nova-ui/atmos/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { paginationBaseConfig } from './pagination.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const paginationAtoms = ['button'] as const;

export { paginationBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const pagination = tv(paginationBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type PaginationVariants = VariantProps<typeof pagination>;
export type PaginationSlots = keyof typeof paginationBaseConfig.slots;
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
  const styles = pagination({ variant });

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
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
// Pagination Content
// ============================================================================

function PaginationContent({
  className,
  classNames,
  ...props
}: PaginationContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Pagination;
  const styles = pagination({ variant: 'default' });

  return (
    <ul
      data-slot="pagination-content"
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
  const styles = pagination({ variant, size });

  return (
    <Button
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
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
      className={cn('gap-1 pl-2.5', className)}
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
      className={cn('gap-1 pr-2.5', className)}
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
  const styles = pagination({ variant: 'default' });

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(classNames?.ellipsis || styles.ellipsis(), className)}
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
