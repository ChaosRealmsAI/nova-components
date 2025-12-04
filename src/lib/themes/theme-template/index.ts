/**
 * 主题入口文件模板
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * 此文件将 Token、组件样式、Playground 样式组装成完整的主题定义
 *
 * 开发步骤：
 * 1. 更新 id, name, nameKey 为你的主题信息
 * 2. 确认所有组件都已导入并配置
 * 3. 根据需要调整 canvasSizes
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';
import { playgroundGlobalCss } from './styles';
import {
  buttonConfig,
  badgeConfig,
  inputConfig,
  textareaConfig,
  labelConfig,
  checkboxConfig,
  switchConfig,
  sliderConfig,
  toggleConfig,
  radioGroupConfig,
  radioGroupItemConfig,
  progressConfig,
  skeletonConfig,
  spinnerConfig,
  avatarConfig,
  avatarFallbackConfig,
  kbdConfig,
  separatorConfig,
  cardConfig,
  collapsibleConfig,
  aspectRatioConfig,
  scrollAreaConfig,
  scrollBarConfig,
  popoverConfig,
  tooltipConfig,
  tabsConfig,
  dropdownMenuConfig,
  alertConfig,
  alertDialogConfig,
  breadcrumbConfig,
  buttonGroupConfig,
  commandConfig,
  contextMenuConfig,
  drawerConfig,
  formConfig,
  hoverCardConfig,
  inputGroupConfig,
  inputOtpConfig,
  menubarConfig,
  paginationConfig,
  selectConfig,
  sheetConfig,
  tableConfig,
  toggleGroupConfig,
  calendarConfig,
  navigationMenuConfig,
  comboboxConfig,
  resizableConfig,
  datePickerConfig,
  carouselConfig,
  sonnerConfig,
  dataTableConfig,
  chartConfig,
  accordionConfig,
  dialogConfig,
  sidebarConfig,
} from './components';

/**
 * TODO: 主题定义
 *
 * 请更新以下内容：
 * - id: 主题的唯一标识符 (kebab-case，如 'forest-green')
 * - name: 主题显示名称 (如 'Forest Green')
 * - nameKey: i18n 翻译键 (如 'themeNameForestGreen')
 */
export const themeTemplateTheme: ThemeDefinition = {
  // TODO: 更新主题标识符
  id: 'theme-template',
  name: 'Theme Template',
  nameKey: 'themeNameThemeTemplate',

  isDark: meta.isDark,
  cssVars: tokens,

  components: {
    Button: buttonConfig,
    Badge: badgeConfig,
    Input: inputConfig,
    Textarea: textareaConfig,
    Label: labelConfig,
    Checkbox: checkboxConfig,
    Switch: switchConfig,
    Slider: sliderConfig,
    Toggle: toggleConfig,
    RadioGroup: radioGroupConfig,
    RadioGroupItem: radioGroupItemConfig,
    Progress: progressConfig,
    Skeleton: skeletonConfig,
    Spinner: spinnerConfig,
    Avatar: avatarConfig,
    AvatarFallback: avatarFallbackConfig,
    Kbd: kbdConfig,
    Separator: separatorConfig,
    Card: cardConfig,
    Collapsible: collapsibleConfig,
    AspectRatio: aspectRatioConfig,
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,
    Popover: popoverConfig,
    Tooltip: tooltipConfig,
    Tabs: tabsConfig,
    DropdownMenu: dropdownMenuConfig,
    Alert: alertConfig,
    AlertDialog: alertDialogConfig,
    Breadcrumb: breadcrumbConfig,
    ButtonGroup: buttonGroupConfig,
    Command: commandConfig,
    ContextMenu: contextMenuConfig,
    Drawer: drawerConfig,
    Form: formConfig,
    HoverCard: hoverCardConfig,
    InputGroup: inputGroupConfig,
    InputOtp: inputOtpConfig,
    Menubar: menubarConfig,
    Pagination: paginationConfig,
    Select: selectConfig,
    Sheet: sheetConfig,
    Table: tableConfig,
    ToggleGroup: toggleGroupConfig,
    Calendar: calendarConfig,
    NavigationMenu: navigationMenuConfig,
    Combobox: comboboxConfig,
    Resizable: resizableConfig,
    DatePicker: datePickerConfig,
    Carousel: carouselConfig,
    Sonner: sonnerConfig,
    DataTable: dataTableConfig,
    Chart: chartConfig,
    Accordion: accordionConfig,
    Dialog: dialogConfig,
    Sidebar: sidebarConfig,
  },

  playgroundGlobalCss,

  /**
   * canvasSizes: 画布组件尺寸配置
   *
   * 某些组件（如 popover、tooltip）需要指定在画布中的渲染尺寸
   */
  canvasSizes: {
    popover: { width: 200, height: 120 },
    tooltip: { width: 200, height: 120 },
  },
};
