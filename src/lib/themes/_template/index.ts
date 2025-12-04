/**
 * Theme Template - Main Entry
 *
 * This file assembles the complete ThemeDefinition object.
 * Copy this entire directory when creating a new theme.
 *
 * Steps to create a new theme:
 * 1. Copy _template/ to your-theme-name/
 * 2. Update tokens.ts with your color palette
 * 3. Update component configs in components/
 * 4. Update this file (id, name, nameKey)
 * 5. Register in src/lib/themes/index.ts
 * 6. Add i18n translation in src/lib/i18n/messages/themes.ts
 * 7. Run `pnpm validate:themes` to verify completeness
 */

import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';

// Import all component configurations
// These are organized by category for easier maintenance
import {
  // === Primitive Components ===
  buttonConfig,
  badgeConfig,
  inputConfig,
  textareaConfig,
  labelConfig,

  // === Form Controls ===
  checkboxConfig,
  switchConfig,
  sliderConfig,
  toggleConfig,
  radioGroupConfig,
  radioGroupItemConfig,

  // === Feedback ===
  progressConfig,
  skeletonConfig,
  spinnerConfig,

  // === Display ===
  avatarConfig,
  avatarFallbackConfig,
  kbdConfig,
  separatorConfig,

  // === Layout ===
  cardConfig,
  collapsibleConfig,
  aspectRatioConfig,
  scrollAreaConfig,
  scrollBarConfig,

  // === Overlay ===
  popoverConfig,
  tooltipConfig,
  tabsConfig,
  dropdownMenuConfig,

  // === Blocks (Complex Components) ===
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
 * Template Theme Definition
 *
 * This is NOT a real theme - it's a documented template.
 * Do not register this in THEMES.
 */
export const templateTheme: ThemeDefinition = {
  /**
   * id: Unique identifier for the theme
   *
   * Guidelines:
   * - Use kebab-case (lowercase with hyphens)
   * - Should match the directory name
   * - Examples: 'ocean-blue', 'sunset-warm', 'cyberpunk-dark'
   */
  id: '_template',

  /**
   * name: Display name (fallback when i18n unavailable)
   *
   * Guidelines:
   * - Human-readable name
   * - Title case
   */
  name: 'Template Theme',

  /**
   * nameKey: i18n message key for the theme name
   *
   * Guidelines:
   * - Must be added to src/lib/i18n/messages/themes.ts
   * - Format: themeNameYourThemeName
   */
  nameKey: 'themeNameTemplate',

  /**
   * isDark: Theme mode from metadata
   *
   * Determines:
   * - Default code syntax highlighting
   * - System preference matching
   */
  isDark: meta.isDark,

  /**
   * cssVars: CSS custom properties (tokens)
   *
   * These are injected as :root CSS variables
   * and can be used in Tailwind via var(--token-name)
   */
  cssVars: tokens,

  /**
   * components: Per-component style configurations
   *
   * Structure:
   * {
   *   ComponentName: {
   *     slots: { ... },      // Named style regions
   *     variants: { ... },   // Conditional styles
   *   }
   * }
   */
  components: {
    // === Primitive Components ===
    Button: buttonConfig,
    Badge: badgeConfig,
    Input: inputConfig,
    Textarea: textareaConfig,
    Label: labelConfig,

    // === Form Controls ===
    Checkbox: checkboxConfig,
    Switch: switchConfig,
    Slider: sliderConfig,
    Toggle: toggleConfig,
    RadioGroup: radioGroupConfig,
    RadioGroupItem: radioGroupItemConfig,

    // === Feedback ===
    Progress: progressConfig,
    Skeleton: skeletonConfig,
    Spinner: spinnerConfig,

    // === Display ===
    Avatar: avatarConfig,
    AvatarFallback: avatarFallbackConfig,
    Kbd: kbdConfig,
    Separator: separatorConfig,

    // === Layout ===
    Card: cardConfig,
    Collapsible: collapsibleConfig,
    AspectRatio: aspectRatioConfig,
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,

    // === Overlay ===
    Popover: popoverConfig,
    Tooltip: tooltipConfig,
    Tabs: tabsConfig,
    DropdownMenu: dropdownMenuConfig,

    // === Blocks ===
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

  /**
   * playgroundGlobalCss: (Optional) Global CSS for playground
   *
   * Used to style the playground UI itself (panels, sliders, etc.)
   * Not required for basic themes.
   *
   * Example:
   * playgroundGlobalCss: `
   *   :root {
   *     --pg-panel-bg: var(--surface-1);
   *     --pg-radius-md: 0;
   *   }
   * `,
   */
  // playgroundGlobalCss: undefined,

  /**
   * canvasSizes: (Optional) Custom component preview sizes
   *
   * Override default canvas sizes for specific components.
   * Useful when components need more/less space than default.
   */
  canvasSizes: {
    popover: { width: 200, height: 120 },
    tooltip: { width: 200, height: 120 },
  },
};
