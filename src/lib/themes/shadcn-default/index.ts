import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';
import { buttonConfig } from './components/button';
import { badgeConfig } from './components/badge';
import { inputConfig } from './components/input';
import { kbdConfig } from './components/kbd';
import { textareaConfig } from './components/textarea';
import { labelConfig } from './components/label';
import { avatarConfig, avatarFallbackConfig } from './components/avatar';
import { checkboxConfig } from './components/checkbox';
import { switchConfig } from './components/switch';
import { sliderConfig } from './components/slider';
import { progressConfig } from './components/progress';
import { radioGroupConfig, radioGroupItemConfig } from './components/radio-group';
import { separatorConfig } from './components/separator';
import { spinnerConfig } from './components/spinner';
import { skeletonConfig } from './components/skeleton';
import { scrollAreaConfig, scrollBarConfig } from './components/scroll-area';
import { aspectRatioConfig } from './components/aspect-ratio';
import { popoverConfig } from './components/popover';
import { alertConfig } from './components/alert';
import { breadcrumbConfig } from './components/breadcrumb';
import { buttonGroupConfig } from './components/button-group';
import { inputGroupConfig } from './components/input-group';
import { drawerConfig } from './components/drawer';
import { dropdownMenuConfig } from './components/dropdown-menu';
import { calendarConfig } from './components/calendar';
import { datePickerConfig } from './components/date-picker';

import { cardConfig } from './components/card';
import { hoverCardConfig } from './components/hover-card';
import { sheetConfig } from './components/sheet';
import { alertDialogConfig } from './components/alert-dialog';
import { accordionConfig } from './components/accordion';
import { contextMenuConfig } from './components/context-menu';
import { paginationConfig } from './components/pagination';
import { selectConfig } from './components/select';
import { dialogConfig } from './components/dialog';
import { tabsConfig } from './components/tabs';
import { carouselConfig } from './components/carousel';
import { inputOtpConfig } from './components/input-otp';
import { tableConfig } from './components/table';
import { resizableConfig } from './components/resizable';
import { sonnerConfig } from './components/sonner';
import { formConfig } from './components/form';
import { sidebarConfig } from './components/sidebar';
import { commandConfig } from './components/command';
import { menubarConfig } from './components/menubar';
import { navigationMenuConfig } from './components/navigation-menu';
import { dataTableConfig } from './components/data-table';
import { comboboxConfig } from './components/combobox';

/**
 * Shadcn Default Theme
 *
 * The classic look: clean, minimal, professional.
 * Uses standard border radius (0.5rem) and zinc colors.
 */

export const shadcnDefaultTheme: ThemeDefinition = {
  id: 'shadcn-default',
  name: 'shadcn',

  isDark: meta.isDark,
  cssVars: tokens,

  components: {
    Button: buttonConfig,
    Badge: badgeConfig,
    Kbd: kbdConfig,
    Input: inputConfig,
    Textarea: textareaConfig,
    Label: labelConfig,
    Avatar: avatarConfig,
    AvatarFallback: avatarFallbackConfig,
    Checkbox: checkboxConfig,
    Switch: switchConfig,
    Slider: sliderConfig,
    Progress: progressConfig,
    RadioGroup: radioGroupConfig,
    RadioGroupItem: radioGroupItemConfig,
    Separator: separatorConfig,
    Skeleton: skeletonConfig,
    Spinner: spinnerConfig,
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,
    Card: cardConfig,
    AspectRatio: aspectRatioConfig,
    Popover: popoverConfig,
    Drawer: drawerConfig,
    DropdownMenu: dropdownMenuConfig,
    Calendar: calendarConfig,
    DatePicker: datePickerConfig,
    Alert: alertConfig,
    Breadcrumb: breadcrumbConfig,
    ButtonGroup: buttonGroupConfig,
    InputGroup: inputGroupConfig,
    HoverCard: hoverCardConfig,
    Sheet: sheetConfig,
    AlertDialog: alertDialogConfig,
    Accordion: accordionConfig,
    ContextMenu: contextMenuConfig,
    Pagination: paginationConfig,
    Select: selectConfig,
    Dialog: dialogConfig,
    Tabs: tabsConfig,
    Carousel: carouselConfig,
    InputOTP: inputOtpConfig,
    Table: tableConfig,
    Resizable: resizableConfig,
    Sonner: sonnerConfig,
    Form: formConfig,
    Sidebar: sidebarConfig,
    Command: commandConfig,
    NavigationMenu: navigationMenuConfig,
    Menubar: menubarConfig,
    DataTable: dataTableConfig,
    Combobox: comboboxConfig,
  },
};
