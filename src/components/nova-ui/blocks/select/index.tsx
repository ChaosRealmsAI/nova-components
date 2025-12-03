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
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themes/use-theme';
import { selectBaseConfig } from './select.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const selectAtoms = ['popover', 'button'] as const;

export { selectBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const select = tv(selectBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type SelectVariants = VariantProps<typeof select>;
export type SelectSlots = keyof typeof selectBaseConfig.slots;
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
  const styles = select({ variant, size });

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        classNames?.trigger || styles.trigger(),
        themeConfig?.slots?.trigger,
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className={cn(styles.icon(), themeConfig?.slots?.icon)} />
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          classNames?.content || styles.content(),
          themeConfig?.slots?.content,
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton classNames={classNames} />
        <SelectPrimitive.Viewport
          className={cn(
            classNames?.viewport || styles.viewport(),
            themeConfig?.slots?.viewport,
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        classNames?.item || styles.item(),
        themeConfig?.slots?.item,
        className
      )}
      {...props}
    >
      <span className={cn(styles.indicator(), themeConfig?.slots?.indicator)}>
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        classNames?.label || styles.label(),
        themeConfig?.slots?.label,
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        classNames?.separator || styles.separator(),
        themeConfig?.slots?.separator,
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        classNames?.scrollButton || styles.scrollButton(),
        themeConfig?.slots?.scrollButton,
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
  const styles = select({ variant: 'default' });

  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        classNames?.scrollButton || styles.scrollButton(),
        themeConfig?.slots?.scrollButton,
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
