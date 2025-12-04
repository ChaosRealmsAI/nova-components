/**
 * Component Registry
 *
 * 组件注册表 - 管理所有可用组件的元数据、渲染器和配置选项
 *
 * 目录结构:
 * - types.ts      - 类型定义
 * - atoms/        - 原子组件 entries
 * - blocks/       - Block 组件 entries
 * - index.ts      - 聚合导出 + COMPONENT_REGISTRY
 */

// ============================================================================
// 类型导出
// ============================================================================

export type {
  VariantOption,
  RadioGroupOptionValue,
  TabItemValue,
  SelectOptionValue,
  BreadcrumbItemValue,
  PropMeta,
  ComponentRegistryEntry,
} from './types';

// ============================================================================
// Atom Entries
// ============================================================================

import {
  buttonEntry,
  badgeEntry,
  inputEntry,
  labelEntry,
  checkboxEntry,
  switchEntry,
  sliderEntry,
  progressEntry,
  radioGroupEntry,
  separatorEntry,
  skeletonEntry,
  spinnerEntry,
  textareaEntry,
  toggleEntry,
  avatarEntry,
  kbdEntry,
  aspectRatioEntry,
  scrollAreaEntry,
  popoverEntry,
  tooltipEntry,
  cardEntry,
  collapsibleEntry,
} from './atoms';

// ============================================================================
// Block Entries
// ============================================================================

import {
  alertDialogEntry,
  tabsEntry,
  dropdownMenuEntry,
  selectEntry,
  paginationEntry,
  formEntry,
  buttonGroupEntry,
  alertEntry,
  toggleGroupEntry,
  breadcrumbEntry,
  inputGroupEntry,
  drawerEntry,
  sheetEntry,
  hoverCardEntry,
  contextMenuEntry,
  dataTableEntry,
  inputOtpEntry,
  comboboxEntry,
  datePickerEntry,
  calendarEntry,
  carouselEntry,
  navigationMenuEntry,
  resizableEntry,
  sonnerEntry,
  accordionEntry,
  dialogEntry,
  sidebarEntry,
} from './blocks';

// ============================================================================
// Component Registry
// ============================================================================

import type { ComponentRegistryEntry } from './types';

export const COMPONENT_REGISTRY: Record<string, ComponentRegistryEntry> = {
  // Atoms
  button: buttonEntry,
  badge: badgeEntry,
  input: inputEntry,
  label: labelEntry,
  checkbox: checkboxEntry,
  switch: switchEntry,
  slider: sliderEntry,
  progress: progressEntry,
  'radio-group': radioGroupEntry,
  separator: separatorEntry,
  skeleton: skeletonEntry,
  spinner: spinnerEntry,
  textarea: textareaEntry,
  toggle: toggleEntry,
  avatar: avatarEntry,
  kbd: kbdEntry,
  'aspect-ratio': aspectRatioEntry,
  'scroll-area': scrollAreaEntry,
  popover: popoverEntry,
  tooltip: tooltipEntry,
  card: cardEntry,
  collapsible: collapsibleEntry,
  // Blocks
  'alert-dialog': alertDialogEntry,
  tabs: tabsEntry,
  'dropdown-menu': dropdownMenuEntry,
  select: selectEntry,
  pagination: paginationEntry,
  form: formEntry,
  'button-group': buttonGroupEntry,
  alert: alertEntry,
  'toggle-group': toggleGroupEntry,
  breadcrumb: breadcrumbEntry,
  'input-group': inputGroupEntry,
  drawer: drawerEntry,
  sheet: sheetEntry,
  'hover-card': hoverCardEntry,
  'context-menu': contextMenuEntry,
  'data-table': dataTableEntry,
  'input-otp': inputOtpEntry,
  combobox: comboboxEntry,
  'date-picker': datePickerEntry,
  calendar: calendarEntry,
  carousel: carouselEntry,
  'navigation-menu': navigationMenuEntry,
  resizable: resizableEntry,
  sonner: sonnerEntry,
  accordion: accordionEntry,
  dialog: dialogEntry,
  sidebar: sidebarEntry,
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * 获取组件注册信息
 */
export function getComponentEntry(type: string): ComponentRegistryEntry | undefined {
  return COMPONENT_REGISTRY[type];
}

/**
 * 获取所有已注册组件类型
 */
export function getRegisteredTypes(): string[] {
  return Object.keys(COMPONENT_REGISTRY);
}

/**
 * 检查组件是否已注册
 */
export function isComponentRegistered(type: string): boolean {
  return type in COMPONENT_REGISTRY;
}

// ============================================================================
// Props Type Exports (for external use)
// ============================================================================

// Atoms
export type { ButtonProps } from '@/components/nova-ui/atmos/button';
export type { BadgeProps } from '@/components/nova-ui/atmos/badge';
export type { InputProps } from '@/components/nova-ui/atmos/input';
export type { LabelProps } from '@/components/nova-ui/atmos/label';
export type { CheckboxProps } from '@/components/nova-ui/atmos/checkbox';
export type { SwitchProps } from '@/components/nova-ui/atmos/switch';
export type { SliderProps } from '@/components/nova-ui/atmos/slider';
export type { ProgressProps } from '@/components/nova-ui/atmos/progress';
export type { RadioGroupProps } from '@/components/nova-ui/atmos/radio-group';
export type { SeparatorProps } from '@/components/nova-ui/atmos/separator';
export type { SkeletonProps } from '@/components/nova-ui/atmos/skeleton';
export type { SpinnerProps } from '@/components/nova-ui/atmos/spinner';
export type { TextareaProps } from '@/components/nova-ui/atmos/textarea';
export type { ToggleProps } from '@/components/nova-ui/atmos/toggle';
export type { AvatarDemoProps } from '@/components/nova-ui/atmos/avatar';
export type { KbdProps } from '@/components/nova-ui/atmos/kbd';
export type { AspectRatioProps } from '@/components/nova-ui/atmos/aspect-ratio';
export type { ScrollAreaProps } from '@/components/nova-ui/atmos/scroll-area';
export type { PopoverDemoProps } from '@/components/nova-ui/atmos/popover';
export type { TooltipDemoProps } from '@/components/nova-ui/atmos/tooltip';
export type { CardProps } from '@/components/nova-ui/atmos/card';
export type { CollapsibleDemoProps } from '@/components/nova-ui/atmos/collapsible';

// Blocks
export type { AlertDialogDemoProps } from '@/components/nova-ui/blocks/alert-dialog';
export type { TabsDemoProps } from '@/components/nova-ui/blocks/tabs';
export type { DropdownMenuDemoProps } from '@/components/nova-ui/blocks/dropdown-menu';
export type { SelectDemoProps } from '@/components/nova-ui/blocks/select';
export type { PaginationDemoProps } from '@/components/nova-ui/blocks/pagination';
export type { FormDemoProps } from '@/components/nova-ui/blocks/form';
export type { ButtonGroupDemoProps } from '@/components/nova-ui/blocks/button-group';
export type { AlertDemoProps } from '@/components/nova-ui/blocks/alert';
export type { ToggleGroupDemoProps } from '@/components/nova-ui/blocks/toggle-group';
export type { InputGroupDemoProps } from '@/components/nova-ui/blocks/input-group';
export type { DrawerDemoProps } from '@/components/nova-ui/blocks/drawer';
export type { SheetDemoProps } from '@/components/nova-ui/blocks/sheet';
export type { HoverCardDemoProps } from '@/components/nova-ui/blocks/hover-card';
export type { InputOTPDemoProps } from '@/components/nova-ui/blocks/input-otp';
export type { ComboboxDemoProps } from '@/components/nova-ui/blocks/combobox';
export type { DatePickerDemoProps } from '@/components/nova-ui/blocks/date-picker';
export type { CarouselDemoProps } from '@/components/nova-ui/blocks/carousel';
export type { CalendarDemoProps } from '@/components/nova-ui/blocks/calendar';
export type { NavigationMenuDemoProps } from '@/components/nova-ui/blocks/navigation-menu';
export type { ResizableDemoProps } from '@/components/nova-ui/blocks/resizable';
export type { SonnerDemoProps } from '@/components/nova-ui/blocks/sonner';
export type { AccordionDemoProps } from '@/components/nova-ui/blocks/accordion';
export type { DialogDemoProps } from '@/components/nova-ui/blocks/dialog';
export type { SidebarDemoProps } from '@/components/nova-ui/blocks/sidebar';
