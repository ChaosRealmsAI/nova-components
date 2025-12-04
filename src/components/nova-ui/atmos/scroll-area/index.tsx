'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova ScrollArea
 *
 * 纯净组件，只依赖外部库，不依赖项目内部文件。
 * 演示数据由调用方（画布/页面）注入。
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

// ============================================================================
// Types
// ============================================================================

/** 数据项类型 */
export interface ScrollAreaItem {
  id: string;
  text: string;
}

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

/** ScrollArea 功能层样式 */
const scrollAreaBase = tv({
  slots: {
    root: 'relative overflow-hidden',
    viewport: 'h-full w-full',
    content: '',
    header: 'sticky top-0 z-10',
    item: '',
    itemIndex: '',
    itemText: '',
  },
});

/** ScrollBar 功能层样式 */
const scrollBarBase = tv({
  slots: {
    root: 'flex touch-none select-none transition-colors',
    thumb: 'relative flex-1',
  },
  variants: {
    orientation: {
      vertical: { root: 'h-full w-2.5' },
      horizontal: { root: 'h-2.5 flex-col' },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

// ============================================================================
// ScrollBar Component
// ============================================================================

type ScrollBarVariantProps = {
  orientation?: 'vertical' | 'horizontal';
};

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    ScrollBarVariantProps {
  classNames?: { base?: string; thumb?: string };
}

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, classNames, orientation = 'vertical', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ScrollBar;

  // L1: 功能层（静态）
  const base = scrollBarBase({ orientation });

  // L2: 主题层
  const themeBase = toClassString(themeConfig?.slots?.base);
  const themeThumb = toClassString(themeConfig?.slots?.thumb);

  // 合并: L1 + L2 + L3 (功能层始终保留)
  const rootClass = twMerge(base.root(), themeBase, classNames?.base, className);
  const thumbClass = twMerge(base.thumb(), themeThumb, classNames?.thumb);

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={rootClass}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={thumbClass} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = 'ScrollBar';

// ============================================================================
// ScrollArea Component
// ============================================================================

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  classNames?: { base?: string; viewport?: string };
  items?: ScrollAreaItem[];
  header?: string;
}

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({
  className,
  classNames,
  children,
  items,
  header,
  ...props
}, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ScrollArea;

  // L1: 功能层（静态）
  const base = scrollAreaBase();

  // L2: 主题层（用 useMemo 缓存，避免每次渲染重复计算）
  const themeStyles = React.useMemo(() => ({
    root: toClassString(themeConfig?.slots?.base),
    viewport: toClassString(themeConfig?.slots?.viewport),
    content: toClassString(themeConfig?.slots?.content),
    header: toClassString(themeConfig?.slots?.header),
    item: toClassString(themeConfig?.slots?.item),
    itemIndex: toClassString(themeConfig?.slots?.itemIndex),
    itemText: toClassString(themeConfig?.slots?.itemText),
  }), [themeConfig]);

  // 合并: L1 + L2 + L3 (功能层始终保留)
  const rootClass = twMerge(base.root(), themeStyles.root, classNames?.base, className);
  const viewportClass = twMerge(base.viewport(), themeStyles.viewport, classNames?.viewport);
  const contentClass = twMerge(base.content(), themeStyles.content);
  const headerClass = twMerge(base.header(), themeStyles.header);
  const itemClass = twMerge(base.item(), themeStyles.item);
  const itemIndexClass = twMerge(base.itemIndex(), themeStyles.itemIndex);
  const itemTextClass = twMerge(base.itemText(), themeStyles.itemText);

  // 渲染内容：children 优先，否则用 items 渲染列表
  const renderContent = () => {
    if (children) return children;
    if (items && items.length > 0) {
      return (
        <div className={contentClass}>
          {header && <div className={headerClass}>{header}</div>}
          {items.map((item) => (
            <div key={item.id} className={itemClass}>
              <span className={itemIndexClass}>{item.id}</span>
              <span className={itemTextClass}>{item.text}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={rootClass}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className={viewportClass}>
        {renderContent()}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea, ScrollBar };
