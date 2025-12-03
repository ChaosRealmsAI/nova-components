'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { toggleGroupBaseConfig } from './toggle-group.config';
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
 */

export { toggleGroupBaseConfig };

/** Atoms this Block depends on */
export const toggleGroupAtoms = ['toggle'] as const;

const toggleGroup = tv(toggleGroupBaseConfig);

export type ToggleGroupVariants = VariantProps<typeof toggleGroup>;
export type ToggleGroupSlots = keyof typeof toggleGroupBaseConfig.slots;
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
  const styles = toggleGroup({ variant, size });

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(classNames?.root ?? styles.root(), className)}
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
  const styles = toggleGroup({ variant: finalVariant, size: finalSize });

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(classNames?.item ?? styles.item(), className)}
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
