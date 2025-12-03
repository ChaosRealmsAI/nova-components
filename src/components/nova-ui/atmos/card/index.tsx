'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { cardBaseConfig } from './card.config';

/**
 * Nova Card
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports `cardBaseConfig` for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { cardBaseConfig };

export type CardVariants = VariantProps<ReturnType<typeof tv>>;
export type CardSlots = keyof typeof cardBaseConfig.slots;
export type CardClassNames = Partial<Record<CardSlots, string>>;

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariants {
  classNames?: CardClassNames;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Card;

    const styles = tv({
      extend: cardBaseConfig,
      ...(themeConfig || {}),
    });

    const baseClass = classNames?.base
      ? classNames.base
      : styles({ variant, size }).base();

    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(baseClass, className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

// Sub-components share the same theme context
const useCardStyles = () => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Card;
  return tv({
    extend: cardBaseConfig,
    ...(themeConfig || {}),
  });
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const headerClass = classNames?.header ? classNames.header : styles().header();

    return (
      <div
        ref={ref}
        data-slot="card-header"
        className={cn(headerClass, className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  classNames?: CardClassNames;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const titleClass = classNames?.title ? classNames.title : styles().title();

    return (
      <h3
        ref={ref}
        data-slot="card-title"
        className={cn(titleClass, className)}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  classNames?: CardClassNames;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const descClass = classNames?.description ? classNames.description : styles().description();

    return (
      <p
        ref={ref}
        data-slot="card-description"
        className={cn(descClass, className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
}

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const actionClass = classNames?.action ? classNames.action : styles().action();

    return (
      <div
        ref={ref}
        data-slot="card-action"
        className={cn(actionClass, className)}
        {...props}
      />
    );
  }
);
CardAction.displayName = 'CardAction';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const contentClass = classNames?.content ? classNames.content : styles().content();

    return (
      <div
        ref={ref}
        data-slot="card-content"
        className={cn(contentClass, className)}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: CardClassNames;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, classNames, ...props }, ref) => {
    const styles = useCardStyles();
    const footerClass = classNames?.footer ? classNames.footer : styles().footer();

    return (
      <div
        ref={ref}
        data-slot="card-footer"
        className={cn(footerClass, className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

// Demo component for canvas display
export interface CardDemoProps extends CardProps {}

const CardDemo = React.forwardRef<HTMLDivElement, CardDemoProps>(
  (props, ref) => {
    const { t } = useI18n();
    return (
      <Card ref={ref} {...props}>
        <CardHeader>
          <CardTitle>{t('cardTitle', 'Card Title')}</CardTitle>
          <CardDescription>{t('cardDescription', 'Card description goes here.')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{t('cardContentArea', 'Card content area.')}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">{t('cardFooter', 'Footer')}</p>
        </CardFooter>
      </Card>
    );
  }
);
CardDemo.displayName = 'CardDemo';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  CardDemo,
};
