'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Avatar
 *
 * Architecture Notes:
 * - L1 (Functional): Static definition, functional requirements only.
 * - L2 (Theme): Dynamic from useTheme(), visual styles.
 * - L3 (Instance): User provided className/classNames.
 */

// ============================================================================
// Types
// ============================================================================

export type AvatarClassNames = Partial<{
  base: string;
}>;

export type AvatarImageClassNames = Partial<{
  base: string;
}>;

export type AvatarFallbackClassNames = Partial<{
  base: string;
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
// L1: Static Styles (Functional Layer)
// ============================================================================

const avatarBase = tv({
  slots: {
    base: 'relative flex shrink-0 overflow-hidden',
  },
});

const avatarImageBase = tv({
  slots: {
    base: 'aspect-square size-full',
  },
});

const avatarFallbackBase = tv({
  slots: {
    base: 'flex size-full items-center justify-center',
  },
});

// ============================================================================
// Components
// ============================================================================

// --- Avatar Root ---

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  classNames?: AvatarClassNames;
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, classNames, size = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Avatar;

  // L1
  const base = avatarBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const baseStyle = toClassString(themeConfig?.slots?.base);
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.base);

    return {
      base: baseStyle,
      size: sizeStyle,
    };
  }, [themeConfig, size]);

  // Merge
  const rootClass = twMerge(
    base.base(),
    themeStyles.base,
    themeStyles.size,
    classNames?.base,
    className
  );

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={rootClass}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

// --- Avatar Image ---

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  classNames?: AvatarImageClassNames;
}

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, classNames, ...props }, ref) => {
  // L1
  const base = avatarImageBase();
  // AvatarImage usually doesn't rely on theme variants directly, 
  // but we can allow global theme override if needed.
  // For now, simple L1 is often enough, but following pattern:
  
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AvatarImage;

  const themeStyles = React.useMemo(() => {
     return {
       base: toClassString(themeConfig?.slots?.base)
     };
  }, [themeConfig]);

  const rootClass = twMerge(
    base.base(),
    themeStyles.base,
    classNames?.base,
    className
  );

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={rootClass}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// --- Avatar Fallback ---

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  classNames?: AvatarFallbackClassNames;
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, classNames, size = 'default', ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.AvatarFallback;

  // L1
  const base = avatarFallbackBase();

  // L2
  const themeStyles = React.useMemo(() => {
    const baseStyle = toClassString(themeConfig?.slots?.base);
    const sizeStyle = toClassString(themeConfig?.variants?.size?.[size]?.base);

    return {
      base: baseStyle,
      size: sizeStyle,
    };
  }, [themeConfig, size]);

  const rootClass = twMerge(
    base.base(),
    themeStyles.base,
    themeStyles.size,
    classNames?.base,
    className
  );

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={rootClass}
      {...props}
    />
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };