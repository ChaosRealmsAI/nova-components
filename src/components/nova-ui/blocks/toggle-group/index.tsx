'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';
import { Bold, Italic, Underline } from 'lucide-react';

/**
 * Nova Toggle Group (Block)
 *
 * Architecture Notes:
 * - Block component that depends on Toggle atom
 * - Uses `@radix-ui/react-toggle-group` for accessibility
 * - Uses `tailwind-variants` with slots for granular theme control
 * - Supports single or multiple selection modes
 * - ADR-003: Blocks only depend on Atoms (flat dependency)
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

/** Atoms this Block depends on */
export const toggleGroupAtoms = ['toggle'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const toggleGroupBase = tv({
  slots: {
    root: 'flex items-center gap-1 rounded-md',
    item: 'inline-flex items-center justify-center rounded-md text-[length:var(--text-sm)] font-medium text-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: 'bg-transparent',
      },
      outline: {
        root: 'border border-border rounded-md p-1',
        item: 'border-0 shadow-none hover:bg-accent hover:text-accent-foreground',
      },
    },
    size: {
      default: {
        root: '',
        item: 'h-9 px-3',
      },
      sm: {
        root: '',
        item: 'h-8 px-2',
      },
      lg: {
        root: '',
        item: 'h-10 px-4',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
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

export type ToggleGroupVariants = VariantProps<typeof toggleGroupBase>;
export type ToggleGroupSlots = keyof typeof toggleGroupBase.slots;
export type ToggleGroupClassNames = Partial<Record<ToggleGroupSlots, string>>;

// Context to share variant/size with items
const ToggleGroupContext = React.createContext<ToggleGroupVariants>({
  variant: 'default',
  size: 'default',
});

// ============================================================================
// ToggleGroup Root
// ============================================================================

export type ToggleGroupRootProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;

export interface ToggleGroupBaseProps extends ToggleGroupVariants {
  classNames?: ToggleGroupClassNames;
  className?: string;
  children?: React.ReactNode;
}

export type ToggleGroupProps = ToggleGroupRootProps & ToggleGroupBaseProps;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, classNames, variant, size, children, ...props }, ref) => {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ToggleGroup;
  
  // L1
  const styles = toggleGroupBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={twMerge(
        styles.root(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.root,
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

// ============================================================================
// ToggleGroupItem
// ============================================================================

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    ToggleGroupVariants {
  classNames?: ToggleGroupClassNames;
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, classNames, variant, size, children, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const finalVariant = variant ?? context.variant;
  const finalSize = size ?? context.size;
  
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ToggleGroup;

  // L1
  const styles = toggleGroupBase({ variant: finalVariant, size: finalSize });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    // @ts-ignore
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[finalVariant]?.item);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, finalVariant]);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={twMerge(
        styles.item(),
        themeStyles.slot,
        themeStyles.variant,
        classNames?.item,
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// ============================================================================
// Demo Component for Canvas
// ============================================================================

export interface ToggleGroupDemoProps extends ToggleGroupVariants {
  /** Demo type: single or multiple selection */
  type?: 'single' | 'multiple';
}

function ToggleGroupDemo({ variant, size, type = 'multiple' }: ToggleGroupDemoProps) {
  const items = (
    <>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </>
  );

  return type === 'single' ? (
    <ToggleGroup type="single" variant={variant} size={size}>
      {items}
    </ToggleGroup>
  ) : (
    <ToggleGroup type="multiple" variant={variant} size={size}>
      {items}
    </ToggleGroup>
  );
}

export { ToggleGroup, ToggleGroupItem, ToggleGroupDemo };