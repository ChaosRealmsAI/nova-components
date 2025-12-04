'use client';

/**
 * Select Block
 *
 * 选择器组件，用于从预定义选项中选择值。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: popover, button
 * - 不支持用户可配特效（通过内部 Atoms 获得）
 */

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/lib/themes/use-theme';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const selectAtoms = ['popover', 'button'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const selectBase = tv({
  slots: {
    trigger:
      'flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground',
    content:
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    viewport: 'p-1',
    item:
      'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-muted-foreground',
    label: 'px-2 py-1.5 text-xs text-muted-foreground',
    separator: '-mx-1 my-1 h-px pointer-events-none bg-border',
    indicator: 'absolute right-2 flex size-3.5 items-center justify-center',
    scrollButton: 'flex cursor-default items-center justify-center py-1',
    icon: 'size-4 opacity-50',
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {
        trigger: 'h-9',
      },
      sm: {
        trigger: 'h-8 text-xs',
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

export type SelectVariants = VariantProps<typeof selectBase>;
export type SelectSlots = keyof typeof selectBase.slots;
export type SelectClassNames = Partial<Record<SelectSlots, string>>;

export interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    SelectVariants {
  classNames?: SelectClassNames;
}

export interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content> {
  classNames?: SelectClassNames;
}

export interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  classNames?: SelectClassNames;
}

export interface SelectLabelProps
  extends React.ComponentProps<typeof SelectPrimitive.Label> {
  classNames?: SelectClassNames;
}

export interface SelectSeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {
  classNames?: SelectClassNames;
}

export interface SelectOptionValue {
  value: string;
  label: string;
  labelKey?: string;
  disabled?: boolean;
}

export interface SelectGroupValue {
  label: string;
  labelKey?: string;
  options: SelectOptionValue[];
}

export interface SelectDemoProps extends SelectVariants {
  placeholder?: string;
  options?: SelectOptionValue[];
  groups?: SelectGroupValue[];
}

// ============================================================================
// Select Root
// ============================================================================

function Select(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

// ============================================================================
// Select Group
// ============================================================================

function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

// ============================================================================
// Select Value
// ============================================================================

function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

// ============================================================================
// Select Trigger
// ============================================================================

function SelectTrigger({
  className,
  classNames,
  size = 'default',
  variant = 'default',
  children,
  ...props
}: SelectTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant, size });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.trigger);
    const iconStyle = toClassString(themeConfig?.slots?.icon);
    return { slot: slotStyle, icon: iconStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={twMerge(
        base.trigger(),
        themeStyles.slot,
        classNames?.trigger,
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className={twMerge(base.icon(), themeStyles.icon)} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

// ============================================================================
// Select Content
// ============================================================================

function SelectContent({
  className,
  classNames,
  children,
  position = 'popper',
  ...props
}: SelectContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.content);
    const viewportStyle = toClassString(themeConfig?.slots?.viewport);
    return { slot: slotStyle, viewport: viewportStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={twMerge(
          base.content(),
          themeStyles.slot,
          classNames?.content,
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton classNames={classNames} />
        <SelectPrimitive.Viewport
          className={twMerge(
            base.viewport(),
            themeStyles.viewport,
            classNames?.viewport,
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton classNames={classNames} />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

// ============================================================================
// Select Item
// ============================================================================

function SelectItem({
  className,
  classNames,
  children,
  ...props
}: SelectItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.item);
    const indicatorStyle = toClassString(themeConfig?.slots?.indicator);
    return { slot: slotStyle, indicator: indicatorStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={twMerge(
        base.item(),
        themeStyles.slot,
        classNames?.item,
        className
      )}
      {...props}
    >
      <span className={twMerge(base.indicator(), themeStyles.indicator)}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

// ============================================================================
// Select Label
// ============================================================================

function SelectLabel({
  className,
  classNames,
  ...props
}: SelectLabelProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.label);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={twMerge(
        base.label(),
        themeStyles.slot,
        classNames?.label,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Select Separator
// ============================================================================

function SelectSeparator({
  className,
  classNames,
  ...props
}: SelectSeparatorProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.separator);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={twMerge(
        base.separator(),
        themeStyles.slot,
        classNames?.separator,
        className
      )}
      {...props}
    />
  );
}

// ============================================================================
// Select Scroll Buttons
// ============================================================================

function SelectScrollUpButton({
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> & { classNames?: SelectClassNames }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.scrollButton);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={twMerge(
        base.scrollButton(),
        themeStyles.slot,
        classNames?.scrollButton,
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> & { classNames?: SelectClassNames }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Select;
  
  // L1
  const base = selectBase({ variant: 'default' });

  // L2
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.scrollButton);
    return { slot: slotStyle };
  }, [themeConfig]);

  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={twMerge(
        base.scrollButton(),
        themeStyles.slot,
        classNames?.scrollButton,
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

// ============================================================================
// Select Demo (用于画布展示)
// ============================================================================

function SelectDemo({
  variant = 'default',
  size = 'default',
  placeholder = 'Select an option',
  options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape', disabled: true },
  ],
  groups,
}: SelectDemoProps) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Select>
        <SelectTrigger variant={variant} size={size}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {groups ? (
            groups.map((group, groupIndex) => (
              <SelectGroup key={groupIndex}>
                <SelectLabel>{group.label}</SelectLabel>
                {group.options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
          ) : (
            options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectDemo,
};