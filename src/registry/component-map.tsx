/**
 * Component Map - 组件引用映射
 *
 * 这是唯一需要手动维护的地方：
 * 将组件类型映射到实际的 React 组件和 baseConfig
 *
 * 新增组件时：
 * 1. 创建 manifest.ts（包含所有配置）
 * 2. 在这里添加一行映射
 */

import type { ComponentType as ReactComponentType, ComponentProps } from 'react';

// ============================================================================
// Atmos 组件导入
// ============================================================================

import { Button, buttonBaseConfig } from '@/components/nova-ui/atmos/button';
import { Badge, badgeBaseConfig } from '@/components/nova-ui/atmos/badge';
import { Input, inputBaseConfig } from '@/components/nova-ui/atmos/input';
import { Label, labelBaseConfig } from '@/components/nova-ui/atmos/label';
import { Checkbox, checkboxBaseConfig } from '@/components/nova-ui/atmos/checkbox';
import { Switch, switchBaseConfig } from '@/components/nova-ui/atmos/switch';
import { Slider, sliderBaseConfig } from '@/components/nova-ui/atmos/slider';
import { Progress, progressBaseConfig } from '@/components/nova-ui/atmos/progress';
import { RadioGroup, radioGroupBaseConfig } from '@/components/nova-ui/atmos/radio-group';
import { Separator, separatorBaseConfig } from '@/components/nova-ui/atmos/separator';
import { Skeleton, skeletonBaseConfig } from '@/components/nova-ui/atmos/skeleton';
import { Spinner, spinnerBaseConfig } from '@/components/nova-ui/atmos/spinner';
import { Textarea, textareaBaseConfig } from '@/components/nova-ui/atmos/textarea';
import { Toggle, toggleBaseConfig } from '@/components/nova-ui/atmos/toggle';
import { AvatarDemo, avatarBaseConfig } from '@/components/nova-ui/atmos/avatar';
import { Kbd, kbdBaseConfig } from '@/components/nova-ui/atmos/kbd';
import { AspectRatio, aspectRatioBaseConfig } from '@/components/nova-ui/atmos/aspect-ratio';
import { ScrollArea } from '@/components/nova-ui/atmos/scroll-area';
import { PopoverDemo, popoverBaseConfig } from '@/components/nova-ui/atmos/popover';
import { TooltipDemo, tooltipBaseConfig } from '@/components/nova-ui/atmos/tooltip';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/nova-ui/atmos/card';
import { CollapsibleDemo, collapsibleBaseConfig } from '@/components/nova-ui/atmos/collapsible';

// ============================================================================
// Blocks 组件导入
// ============================================================================

import { AlertDialogDemo, alertDialogBaseConfig } from '@/components/nova-ui/blocks/alert-dialog';
import { TabsDemo, tabsBaseConfig } from '@/components/nova-ui/blocks/tabs';
import { DropdownMenuDemo, dropdownMenuBaseConfig } from '@/components/nova-ui/blocks/dropdown-menu';
import { PaginationDemo, paginationBaseConfig } from '@/components/nova-ui/blocks/pagination';
import { SelectDemo, selectBaseConfig } from '@/components/nova-ui/blocks/select';
import { FormDemo, formBaseConfig } from '@/components/nova-ui/blocks/form';
import { ButtonGroupDemo, buttonGroupBaseConfig } from '@/components/nova-ui/blocks/button-group';
import { AlertDemo, alertBaseConfig } from '@/components/nova-ui/blocks/alert';
import { ToggleGroupDemo, toggleGroupBaseConfig } from '@/components/nova-ui/blocks/toggle-group';
import { BreadcrumbDemo, breadcrumbBaseConfig } from '@/components/nova-ui/blocks/breadcrumb';
import { InputGroupDemo, inputGroupBaseConfig } from '@/components/nova-ui/blocks/input-group';
import { DrawerDemo, drawerBaseConfig } from '@/components/nova-ui/blocks/drawer';
import { SheetDemo, sheetBaseConfig } from '@/components/nova-ui/blocks/sheet';
import { HoverCardDemo, hoverCardBaseConfig } from '@/components/nova-ui/blocks/hover-card';
import { ContextMenuDemo, contextMenuBaseConfig } from '@/components/nova-ui/blocks/context-menu';
import { DataTableDemo, dataTableBaseConfig } from '@/components/nova-ui/blocks/data-table';
import { InputOTPDemo, inputOtpBaseConfig } from '@/components/nova-ui/blocks/input-otp';
import { CalendarDemo, calendarBaseConfig } from '@/components/nova-ui/blocks/calendar';
import { CarouselDemo, carouselBaseConfig } from '@/components/nova-ui/blocks/carousel';
import { DatePickerDemo, datePickerBaseConfig } from '@/components/nova-ui/blocks/date-picker';
import { ComboboxDemo, comboboxBaseConfig } from '@/components/nova-ui/blocks/combobox';
import { NavigationMenuDemo, navigationMenuBaseConfig } from '@/components/nova-ui/blocks/navigation-menu';
import { ResizableDemo, resizableBaseConfig } from '@/components/nova-ui/blocks/resizable';
import { SonnerDemo, sonnerBaseConfig } from '@/components/nova-ui/blocks/sonner';
import { AccordionDemo, accordionBaseConfig } from '@/components/nova-ui/blocks/accordion';
import { DialogDemo, dialogBaseConfig } from '@/components/nova-ui/blocks/dialog';
import { SidebarDemo, sidebarBaseConfig } from '@/components/nova-ui/blocks/sidebar';

// ============================================================================
// Demo 组件（画布渲染用）
// ============================================================================

/** Card 演示组件 */
const CardDemo = (props: ComponentProps<typeof Card>) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">Card content area.</p>
    </CardContent>
    <CardFooter>
      <p className="text-xs text-muted-foreground">Footer</p>
    </CardFooter>
  </Card>
);

// ============================================================================
// 组件映射
// ============================================================================

export interface ComponentMapEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseConfig: any;
}

/**
 * 组件类型 -> React 组件 + baseConfig 的映射
 *
 * 这是唯一需要手动维护组件引用的地方
 */
export const COMPONENT_MAP: Record<string, ComponentMapEntry> = {
  // Atmos
  'button': { component: Button, baseConfig: buttonBaseConfig },
  'badge': { component: Badge, baseConfig: badgeBaseConfig },
  'input': { component: Input, baseConfig: inputBaseConfig },
  'label': { component: Label, baseConfig: labelBaseConfig },
  'checkbox': { component: Checkbox, baseConfig: checkboxBaseConfig },
  'switch': { component: Switch, baseConfig: switchBaseConfig },
  'slider': { component: Slider, baseConfig: sliderBaseConfig },
  'progress': { component: Progress, baseConfig: progressBaseConfig },
  'radio-group': { component: RadioGroup, baseConfig: radioGroupBaseConfig },
  'separator': { component: Separator, baseConfig: separatorBaseConfig },
  'skeleton': { component: Skeleton, baseConfig: skeletonBaseConfig },
  'spinner': { component: Spinner, baseConfig: spinnerBaseConfig },
  'textarea': { component: Textarea, baseConfig: textareaBaseConfig },
  'toggle': { component: Toggle, baseConfig: toggleBaseConfig },
  'avatar': { component: AvatarDemo, baseConfig: avatarBaseConfig },
  'kbd': { component: Kbd, baseConfig: kbdBaseConfig },
  'aspect-ratio': { component: AspectRatio, baseConfig: aspectRatioBaseConfig },
  'scroll-area': { component: ScrollArea, baseConfig: null }, // 纯槽位模式，无 baseConfig
  'popover': { component: PopoverDemo, baseConfig: popoverBaseConfig },
  'tooltip': { component: TooltipDemo, baseConfig: tooltipBaseConfig },
  'card': { component: CardDemo, baseConfig: null }, // 纯槽位模式，无 baseConfig
  'collapsible': { component: CollapsibleDemo, baseConfig: collapsibleBaseConfig },

  // Blocks
  'alert-dialog': { component: AlertDialogDemo, baseConfig: alertDialogBaseConfig },
  'tabs': { component: TabsDemo, baseConfig: tabsBaseConfig },
  'dropdown-menu': { component: DropdownMenuDemo, baseConfig: dropdownMenuBaseConfig },
  'pagination': { component: PaginationDemo, baseConfig: paginationBaseConfig },
  'select': { component: SelectDemo, baseConfig: selectBaseConfig },
  'form': { component: FormDemo, baseConfig: formBaseConfig },
  'button-group': { component: ButtonGroupDemo, baseConfig: buttonGroupBaseConfig },
  'alert': { component: AlertDemo, baseConfig: alertBaseConfig },
  'toggle-group': { component: ToggleGroupDemo, baseConfig: toggleGroupBaseConfig },
  'breadcrumb': { component: BreadcrumbDemo, baseConfig: breadcrumbBaseConfig },
  'input-group': { component: InputGroupDemo, baseConfig: inputGroupBaseConfig },
  'drawer': { component: DrawerDemo, baseConfig: drawerBaseConfig },
  'sheet': { component: SheetDemo, baseConfig: sheetBaseConfig },
  'hover-card': { component: HoverCardDemo, baseConfig: hoverCardBaseConfig },
  'context-menu': { component: ContextMenuDemo, baseConfig: contextMenuBaseConfig },
  'data-table': { component: DataTableDemo, baseConfig: dataTableBaseConfig },
  'input-otp': { component: InputOTPDemo, baseConfig: inputOtpBaseConfig },
  'calendar': { component: CalendarDemo, baseConfig: calendarBaseConfig },
  'carousel': { component: CarouselDemo, baseConfig: carouselBaseConfig },
  'date-picker': { component: DatePickerDemo, baseConfig: datePickerBaseConfig },
  'combobox': { component: ComboboxDemo, baseConfig: comboboxBaseConfig },
  'navigation-menu': { component: NavigationMenuDemo, baseConfig: navigationMenuBaseConfig },
  'resizable': { component: ResizableDemo, baseConfig: resizableBaseConfig },
  'sonner': { component: SonnerDemo, baseConfig: sonnerBaseConfig },
  'accordion': { component: AccordionDemo, baseConfig: accordionBaseConfig },
  'dialog': { component: DialogDemo, baseConfig: dialogBaseConfig },
  'sidebar': { component: SidebarDemo, baseConfig: sidebarBaseConfig },
};
