'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes';

/**
 * Nova Popover
 *
 * Architecture Notes:
 * - L1 (Functional): Position, animations, z-index.
 * - L2 (Thematic): Colors, spacing, typography, border.
 * - L3 (Instance): User className.
 */

// ============================================================================
// Utils
// ============================================================================

const toClassString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  return value;
};

// ============================================================================
// L1: Functional Styles
// ============================================================================

const popoverBase = tv({
  slots: {
    content: [
      'z-50 w-72 outline-hidden',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
  },
});

// ============================================================================
// Types
// ============================================================================

export interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {}

export interface PopoverTriggerProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

export interface PopoverAnchorProps extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {}

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  classNames?: {
    content?: string;
  };
}

// ============================================================================
// Components
// ============================================================================

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({
  className,
  classNames,
  align = 'center',
  sideOffset = 4,
  ...props
}, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Popover;

  // L1: Functional
  const base = popoverBase();

  // L2: Theme
  const themeContent = React.useMemo(() => 
    toClassString(themeConfig?.slots?.content),
    [themeConfig]
  );

  // Merge
  const contentClass = twMerge(
    base.content(),
    themeContent,
    classNames?.content,
    className
  );

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={contentClass}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
};
