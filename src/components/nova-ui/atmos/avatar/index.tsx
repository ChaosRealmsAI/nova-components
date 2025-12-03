'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { tv } from 'tailwind-variants';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import {
  avatarBaseConfig,
  avatarImageBaseConfig,
  avatarFallbackBaseConfig,
} from './avatar.config';

/**
 * Nova Avatar
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports base configs for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { avatarBaseConfig, avatarImageBaseConfig, avatarFallbackBaseConfig };

// ============================================================================
// Avatar Root
// ============================================================================

type AvatarVariantProps = {
  size?: keyof typeof avatarBaseConfig.variants.size;
};

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    AvatarVariantProps {
  classNames?: { base?: string };
}

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, classNames, size, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 Avatar 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Avatar;

  const styles = tv({
    extend: avatarBaseConfig,
    ...(themeConfig || {}),
  })({ size });

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={classNames?.base ?? styles.base({ className })}
      {...props}
    />
  );
});
Avatar.displayName = 'Avatar';

// ============================================================================
// Avatar Image
// ============================================================================

const avatarImageStyles = tv(avatarImageBaseConfig);

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  classNames?: { base?: string };
}

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, classNames, ...props }, ref) => {
  const styles = avatarImageStyles();

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={classNames?.base ?? styles.base({ className })}
      {...props}
    />
  );
});
AvatarImage.displayName = 'AvatarImage';

// ============================================================================
// Avatar Fallback
// ============================================================================

const avatarFallbackStyles = tv(avatarFallbackBaseConfig);

type AvatarFallbackVariantProps = {
  size?: keyof typeof avatarFallbackBaseConfig.variants.size;
};

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    AvatarFallbackVariantProps {
  classNames?: { base?: string };
}

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, classNames, size, ...props }, ref) => {
  const styles = avatarFallbackStyles({ size });

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={classNames?.base ?? styles.base({ className })}
      {...props}
    />
  );
});
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };

// ============================================================================
// Avatar Demo (for canvas/registry use)
// ============================================================================

export interface AvatarDemoProps extends AvatarVariantProps {
  src?: string;
  alt?: string;
  fallback?: string;
  classNames?: {
    base?: string;
    image?: string;
    fallback?: string;
  };
}

/**
 * AvatarDemo - 组合版 Avatar，用于 Canvas 和注册表展示
 */
const AvatarDemo = React.forwardRef<HTMLSpanElement, AvatarDemoProps>(
  ({ size, src, alt, fallback, classNames, ...props }, ref) => {
    const { t } = useI18n();
    const displayFallback = fallback || t('avatarFallbackDefault', 'CN');
    return (
      <Avatar ref={ref} size={size} classNames={{ base: classNames?.base }} {...props}>
        {src && (
          <AvatarImage
            src={src}
            alt={alt}
            classNames={{ base: classNames?.image }}
          />
        )}
        <AvatarFallback size={size} classNames={{ base: classNames?.fallback }}>
          {displayFallback}
        </AvatarFallback>
      </Avatar>
    );
  }
);
AvatarDemo.displayName = 'AvatarDemo';

export { AvatarDemo };
