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
import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';

// ============================================================================
// Atmos 组件导入
// ============================================================================

import { Button } from '@/components/nova-ui/atmos/button';
import { Badge } from '@/components/nova-ui/atmos/badge';
import { Input } from '@/components/nova-ui/atmos/input';
import { Label } from '@/components/nova-ui/atmos/label';
import { Checkbox } from '@/components/nova-ui/atmos/checkbox';
import { Switch } from '@/components/nova-ui/atmos/switch';
import { Slider } from '@/components/nova-ui/atmos/slider';
import { Progress } from '@/components/nova-ui/atmos/progress';
import { RadioGroup } from '@/components/nova-ui/atmos/radio-group';
import { Separator } from '@/components/nova-ui/atmos/separator';
import { Skeleton } from '@/components/nova-ui/atmos/skeleton';
import { Spinner } from '@/components/nova-ui/atmos/spinner';
import { Textarea } from '@/components/nova-ui/atmos/textarea';
import { Toggle } from '@/components/nova-ui/atmos/toggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/nova-ui/atmos/avatar';
import { Kbd } from '@/components/nova-ui/atmos/kbd';
import { AspectRatio } from '@/components/nova-ui/atmos/aspect-ratio';
import { ScrollArea } from '@/components/nova-ui/atmos/scroll-area';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/nova-ui/atmos/popover';
import { TooltipDemo } from '@/components/nova-ui/atmos/tooltip';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/nova-ui/atmos/card';
import { CollapsibleDemo } from '@/components/nova-ui/atmos/collapsible';

// ============================================================================
// Blocks 组件导入
// ============================================================================

import { AlertDialogDemo } from '@/components/nova-ui/blocks/alert-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent, type TabsProps, type TabItem } from '@/components/nova-ui/blocks/tabs';
import { DropdownMenuDemo } from '@/components/nova-ui/blocks/dropdown-menu';
import { PaginationDemo } from '@/components/nova-ui/blocks/pagination';
import { SelectDemo } from '@/components/nova-ui/blocks/select';
import { FormDemo } from '@/components/nova-ui/blocks/form';
import { ButtonGroupDemo } from '@/components/nova-ui/blocks/button-group';
import { AlertDemo } from '@/components/nova-ui/blocks/alert';
import { ToggleGroupDemo } from '@/components/nova-ui/blocks/toggle-group';
import { BreadcrumbDemo } from '@/components/nova-ui/blocks/breadcrumb';
import { InputGroupDemo } from '@/components/nova-ui/blocks/input-group';
import { DrawerDemo } from '@/components/nova-ui/blocks/drawer';
import { SheetDemo } from '@/components/nova-ui/blocks/sheet';
import { HoverCardDemo } from '@/components/nova-ui/blocks/hover-card';
import { ContextMenuDemo } from '@/components/nova-ui/blocks/context-menu';
import { DataTableDemo } from '@/components/nova-ui/blocks/data-table';
import { InputOTPDemo } from '@/components/nova-ui/blocks/input-otp';
import { CalendarDemo } from '@/components/nova-ui/blocks/calendar';
import { CarouselDemo } from '@/components/nova-ui/blocks/carousel';
import { DatePickerDemo } from '@/components/nova-ui/blocks/date-picker';
import { ComboboxDemo } from '@/components/nova-ui/blocks/combobox';
import { NavigationMenuDemo } from '@/components/nova-ui/blocks/navigation-menu';
import { ResizableDemo } from '@/components/nova-ui/blocks/resizable';
import { SonnerDemo } from '@/components/nova-ui/blocks/sonner';
import { AccordionDemo } from '@/components/nova-ui/blocks/accordion';
import { DialogDemo } from '@/components/nova-ui/blocks/dialog';
import { SidebarDemo } from '@/components/nova-ui/blocks/sidebar';
import { TableDemo } from '@/components/nova-ui/blocks/table';
import { CommandDemo } from '@/components/nova-ui/blocks/command';
import { MenubarDemo } from '@/components/nova-ui/blocks/menubar';

// ============================================================================
// Demo 组件（画布渲染用）
// ============================================================================

/** Card 演示组件（使用 i18n） */
const CardDemo = (props: ComponentProps<typeof Card>) => {
  const { t } = useI18n();

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{t('cardTitle' as MessageKey, 'Card Title')}</CardTitle>
        <CardDescription>{t('cardDescription' as MessageKey, 'Card description goes here.')}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{t('cardContentArea' as MessageKey, 'Card content area.')}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">{t('cardFooter' as MessageKey, 'Footer')}</p>
      </CardFooter>
    </Card>
  );
};

/** ScrollArea 演示组件（使用 i18n） */
const ScrollAreaDemo = (props: ComponentProps<typeof ScrollArea>) => {
  const { t } = useI18n();

  // 使用 i18n 构建本地化演示数据
  const items = [
    { id: '01', text: t('scrollAreaSystemInit' as MessageKey) },
    { id: '02', text: t('scrollAreaLoadingModules' as MessageKey) },
    { id: '03', text: t('scrollAreaConnecting' as MessageKey) },
    { id: '04', text: t('scrollAreaAuthenticating' as MessageKey) },
    { id: '05', text: t('scrollAreaFetchingData' as MessageKey) },
    { id: '06', text: t('scrollAreaProcessing' as MessageKey) },
    { id: '07', text: t('scrollAreaUpdatingCache' as MessageKey) },
    { id: '08', text: t('scrollAreaSyncingState' as MessageKey) },
    { id: '09', text: t('scrollAreaRendering' as MessageKey) },
    { id: '10', text: t('scrollAreaTaskCompleted' as MessageKey) },
    { id: '11', text: t('scrollAreaIdleMode' as MessageKey) },
    { id: '12', text: t('scrollAreaWaitingInput' as MessageKey) },
  ];

  const header = t('scrollAreaItems' as MessageKey);

  return <ScrollArea {...props} items={items} header={header} />;
};

// Avatar Demo
interface AvatarDemoProps extends ComponentProps<typeof Avatar> {
  src?: string;
  alt?: string;
  fallback?: string;
  classNames?: {
    base?: string;
    image?: string;
    fallback?: string;
  };
}

const AvatarDemo = (props: AvatarDemoProps) => {
  const { t } = useI18n();
  const { src, alt, fallback, classNames, ...rest } = props;
  const displayFallback = fallback || t('avatarFallbackDefault' as MessageKey, 'CN');
  
  return (
    <Avatar {...rest} classNames={{ base: classNames?.base }}>
      {src && (
        <AvatarImage
          src={src}
          alt={alt}
          classNames={{ base: classNames?.image }}
        />
      )}
      <AvatarFallback classNames={{ base: classNames?.fallback }}>
        {displayFallback}
      </AvatarFallback>
    </Avatar>
  );
};

// Popover Demo
interface PopoverDemoProps extends ComponentProps<typeof Popover> {
  content?: string;
}

const PopoverDemo = ({ content, ...props }: PopoverDemoProps) => {
  const { t } = useI18n();
  const displayContent = content || t('popoverContentDefault' as MessageKey, 'Place content for the popover here.');

  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <button className="px-3 py-1.5 border border-border rounded text-[length:var(--text-sm)] bg-background text-foreground hover:bg-muted transition-colors">
          {t('popoverOpenButton' as MessageKey, 'Open Popover')}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-[length:var(--text-sm)]">{t('popoverTitle' as MessageKey, 'Popover')}</h4>
            <p className="text-[length:var(--text-sm)] text-muted-foreground">{displayContent}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

/** Tabs 演示组件（使用 i18n） */
interface TabsDemoProps extends TabsProps {
  items?: TabItem[];
}

const TabsDemo = ({ variant = 'default', items: propItems, ...props }: TabsDemoProps) => {
  const { t } = useI18n();

  // 使用 i18n 构建本地化演示数据
  const items: TabItem[] = propItems || [
    {
      value: 'tab1',
      label: t('tabsTab1Label' as MessageKey),
      content: t('tabsTab1Content' as MessageKey),
    },
    {
      value: 'tab2',
      label: t('tabsTab2Label' as MessageKey),
      content: t('tabsTab2Content' as MessageKey),
    },
    {
      value: 'tab3',
      label: t('tabsTab3Label' as MessageKey),
      content: t('tabsTab3Content' as MessageKey),
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Tabs defaultValue={items[0]?.value} variant={variant} className="w-full max-w-md" {...props}>
        <TabsList>
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((item) => (
          <TabsContent key={item.value} value={item.value} className="p-4">
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

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
  'button': { component: Button, baseConfig: null },
  'badge': { component: Badge, baseConfig: null }, // 纯槽位模式，无 baseConfig
  'input': { component: Input, baseConfig: null },
  'label': { component: Label, baseConfig: null },
  'checkbox': { component: Checkbox, baseConfig: null },
  'switch': { component: Switch, baseConfig: null },
  'slider': { component: Slider, baseConfig: null },
  'progress': { component: Progress, baseConfig: null },
  'radio-group': { component: RadioGroup, baseConfig: null },
  'separator': { component: Separator, baseConfig: null },
  'skeleton': { component: Skeleton, baseConfig: null },
  'spinner': { component: Spinner, baseConfig: null },
  'textarea': { component: Textarea, baseConfig: null },
  'toggle': { component: Toggle, baseConfig: null },
  'avatar': { component: AvatarDemo, baseConfig: null },
  'kbd': { component: Kbd, baseConfig: null },
  'aspect-ratio': { component: AspectRatio, baseConfig: null },
  'scroll-area': { component: ScrollAreaDemo, baseConfig: null }, // 纯槽位模式，使用 i18n Demo
  'popover': { component: PopoverDemo, baseConfig: null },
  'tooltip': { component: TooltipDemo, baseConfig: null },
  'card': { component: CardDemo, baseConfig: null }, // 纯槽位模式，无 baseConfig
  'collapsible': { component: CollapsibleDemo, baseConfig: null },

  // Blocks
  'alert-dialog': { component: AlertDialogDemo, baseConfig: null },
  'tabs': { component: TabsDemo, baseConfig: null },
  'dropdown-menu': { component: DropdownMenuDemo, baseConfig: null },
  'pagination': { component: PaginationDemo, baseConfig: null },
  'select': { component: SelectDemo, baseConfig: null },
  'form': { component: FormDemo, baseConfig: null },
  'button-group': { component: ButtonGroupDemo, baseConfig: null },
  'alert': { component: AlertDemo, baseConfig: null },
  'toggle-group': { component: ToggleGroupDemo, baseConfig: null },
  'breadcrumb': { component: BreadcrumbDemo, baseConfig: null },
  'input-group': { component: InputGroupDemo, baseConfig: null },
  'drawer': { component: DrawerDemo, baseConfig: null },
  'sheet': { component: SheetDemo, baseConfig: null },
  'hover-card': { component: HoverCardDemo, baseConfig: null },
  'context-menu': { component: ContextMenuDemo, baseConfig: null },
  'data-table': { component: DataTableDemo, baseConfig: null },
  'input-otp': { component: InputOTPDemo, baseConfig: null },
  'calendar': { component: CalendarDemo, baseConfig: null },
  'carousel': { component: CarouselDemo, baseConfig: null },
  'date-picker': { component: DatePickerDemo, baseConfig: null },
  'combobox': { component: ComboboxDemo, baseConfig: null },
  'navigation-menu': { component: NavigationMenuDemo, baseConfig: null },
  'resizable': { component: ResizableDemo, baseConfig: null },
  'sonner': { component: SonnerDemo, baseConfig: null },
  'accordion': { component: AccordionDemo, baseConfig: null },
  'dialog': { component: DialogDemo, baseConfig: null },
  'sidebar': { component: SidebarDemo, baseConfig: null },
  'table': { component: TableDemo, baseConfig: null },
  'menubar': { component: MenubarDemo, baseConfig: null },
  'command': { component: CommandDemo, baseConfig: null },
};
