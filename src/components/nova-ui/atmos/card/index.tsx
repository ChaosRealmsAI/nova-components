'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Card
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

export type CardClassNames = Partial<{
  base: string;
  header: string;
  title: string;
  description: string;
  action: string;
  content: string;
  footer: string;
}>;

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: 静态样式定义（功能层）- 在组件外部定义
// ============================================================================

/** Card 功能层样式 - 只保留功能必需的样式 */
const cardBase = tv({
  slots: {
    // 功能必需：flex 布局
    base: 'flex flex-col',
    // 功能必需：grid 布局实现标题+描述+操作的排列
    header: 'grid auto-rows-min grid-rows-[auto_auto] items-start',
    // 纯视觉，无功能样式
    title: '',
    description: '',
    // 功能必需：定位
    action: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
    // 纯视觉
    content: '',
    // 功能必需：flex 布局
    footer: 'flex items-center',
  },
});

// ============================================================================
// Shared Theme Hook
// ============================================================================

const useCardTheme = () => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Card;

  // L2: 主题层（用 useMemo 缓存）
  return React.useMemo(() => ({
    base: toClassString(themeConfig?.slots?.base),
    header: toClassString(themeConfig?.slots?.header),
    title: toClassString(themeConfig?.slots?.title),
    description: toClassString(themeConfig?.slots?.description),
    action: toClassString(themeConfig?.slots?.action),
    content: toClassString(themeConfig?.slots?.content),
    footer: toClassString(themeConfig?.slots?.footer),
    variants: themeConfig?.variants,
  }), [themeConfig]);
};

// ============================================================================
// Card Component
// ============================================================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
  variant?: 'default' | 'outline' | 'ghost' | 'elevated';
  size?: 'sm' | 'default' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, classNames, variant = 'default', size = 'default', ...props }, ref) => {
    // L1: 功能层（静态）
    const base = cardBase();

    // L2: 主题层
    const theme = useCardTheme();

    // 获取 variant 和 size 的主题样式
    const variantStyles = toClassString(theme.variants?.variant?.[variant]?.base);
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.base);

    // 合并: L1 + L2(base) + L2(variant) + L2(size) + L3
    const rootClass = twMerge(
      base.base(),
      theme.base,
      variantStyles,
      sizeStyles,
      classNames?.base,
      className
    );

    return (
      <div
        ref={ref}
        data-slot="card"
        className={rootClass}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

// ============================================================================
// CardHeader Component
// ============================================================================

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
  size?: 'sm' | 'default' | 'lg';
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, classNames, size = 'default', ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.header);

    const headerClass = twMerge(
      base.header(),
      theme.header,
      sizeStyles,
      classNames?.header,
      className
    );

    return (
      <div
        ref={ref}
        data-slot="card-header"
        className={headerClass}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

// ============================================================================
// CardTitle Component
// ============================================================================

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  classNames?: CardClassNames;
  size?: 'sm' | 'default' | 'lg';
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, classNames, size = 'default', ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.title);

    const titleClass = twMerge(
      base.title(),
      theme.title,
      sizeStyles,
      classNames?.title,
      className
    );

    return (
      <h3
        ref={ref}
        data-slot="card-title"
        className={titleClass}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

// ============================================================================
// CardDescription Component
// ============================================================================

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  classNames?: CardClassNames;
  size?: 'sm' | 'default' | 'lg';
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, classNames, size = 'default', ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.description);

    const descClass = twMerge(
      base.description(),
      theme.description,
      sizeStyles,
      classNames?.description,
      className
    );

    return (
      <p
        ref={ref}
        data-slot="card-description"
        className={descClass}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

// ============================================================================
// CardAction Component
// ============================================================================

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
}

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  ({ className, classNames, ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();

    const actionClass = twMerge(
      base.action(),
      theme.action,
      classNames?.action,
      className
    );

    return (
      <div
        ref={ref}
        data-slot="card-action"
        className={actionClass}
        {...props}
      />
    );
  }
);
CardAction.displayName = 'CardAction';

// ============================================================================
// CardContent Component
// ============================================================================

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
  size?: 'sm' | 'default' | 'lg';
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, classNames, size = 'default', ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.content);

    const contentClass = twMerge(
      base.content(),
      theme.content,
      sizeStyles,
      classNames?.content,
      className
    );

    return (
      <div
        ref={ref}
        data-slot="card-content"
        className={contentClass}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

// ============================================================================
// CardFooter Component
// ============================================================================

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
  size?: 'sm' | 'default' | 'lg';
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, classNames, size = 'default', ...props }, ref) => {
    const base = cardBase();
    const theme = useCardTheme();
    const sizeStyles = toClassString(theme.variants?.size?.[size]?.footer);

    const footerClass = twMerge(
      base.footer(),
      theme.footer,
      sizeStyles,
      classNames?.footer,
      className
    );

    return (
      <div
        ref={ref}
        data-slot="card-footer"
        className={footerClass}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
};
