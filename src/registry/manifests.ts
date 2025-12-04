/**
 * Component Manifests Registry
 *
 * 所有组件的 manifest 集中注册
 * 新组件只需在这里添加 import 和注册
 */

import type { ComponentManifest, ManifestRegistry } from './manifest-types';

// ============================================================================
// Manifest Imports（按组件添加）
// ============================================================================

// Atmos components
import { manifest as aspectRatioManifest } from '@/components/nova-ui/atmos/aspect-ratio/manifest';
import { manifest as avatarManifest } from '@/components/nova-ui/atmos/avatar/manifest';
import { manifest as badgeManifest } from '@/components/nova-ui/atmos/badge/manifest';
import { manifest as buttonManifest } from '@/components/nova-ui/atmos/button/manifest';
import { manifest as checkboxManifest } from '@/components/nova-ui/atmos/checkbox/manifest';
import { manifest as inputManifest } from '@/components/nova-ui/atmos/input/manifest';
import { manifest as kbdManifest } from '@/components/nova-ui/atmos/kbd/manifest';
import { manifest as labelManifest } from '@/components/nova-ui/atmos/label/manifest';
import { manifest as popoverManifest } from '@/components/nova-ui/atmos/popover/manifest';
import { manifest as progressManifest } from '@/components/nova-ui/atmos/progress/manifest';
import { manifest as radioGroupManifest } from '@/components/nova-ui/atmos/radio-group/manifest';
import { manifest as scrollAreaManifest } from '@/components/nova-ui/atmos/scroll-area/manifest';
import { manifest as separatorManifest } from '@/components/nova-ui/atmos/separator/manifest';
import { manifest as skeletonManifest } from '@/components/nova-ui/atmos/skeleton/manifest';
import { manifest as sliderManifest } from '@/components/nova-ui/atmos/slider/manifest';
import { manifest as spinnerManifest } from '@/components/nova-ui/atmos/spinner/manifest';
import { manifest as switchManifest } from '@/components/nova-ui/atmos/switch/manifest';
import { manifest as textareaManifest } from '@/components/nova-ui/atmos/textarea/manifest';
import { manifest as toggleManifest } from '@/components/nova-ui/atmos/toggle/manifest';
import { manifest as tooltipManifest } from '@/components/nova-ui/atmos/tooltip/manifest';
import { manifest as cardManifest } from '@/components/nova-ui/atmos/card/manifest';
import { manifest as collapsibleManifest } from '@/components/nova-ui/atmos/collapsible/manifest';

// Blocks components
import { manifest as alertManifest } from '@/components/nova-ui/blocks/alert/manifest';
import { manifest as alertDialogManifest } from '@/components/nova-ui/blocks/alert-dialog/manifest';
import { manifest as breadcrumbManifest } from '@/components/nova-ui/blocks/breadcrumb/manifest';
import { manifest as buttonGroupManifest } from '@/components/nova-ui/blocks/button-group/manifest';
import { manifest as commandManifest } from '@/components/nova-ui/blocks/command/manifest';
import { manifest as contextMenuManifest } from '@/components/nova-ui/blocks/context-menu/manifest';
import { manifest as dataTableManifest } from '@/components/nova-ui/blocks/data-table/manifest';
import { manifest as drawerManifest } from '@/components/nova-ui/blocks/drawer/manifest';
import { manifest as dropdownMenuManifest } from '@/components/nova-ui/blocks/dropdown-menu/manifest';
import { manifest as formManifest } from '@/components/nova-ui/blocks/form/manifest';
import { manifest as hoverCardManifest } from '@/components/nova-ui/blocks/hover-card/manifest';
import { manifest as inputGroupManifest } from '@/components/nova-ui/blocks/input-group/manifest';
import { manifest as menubarManifest } from '@/components/nova-ui/blocks/menubar/manifest';
import { manifest as paginationManifest } from '@/components/nova-ui/blocks/pagination/manifest';
import { manifest as selectManifest } from '@/components/nova-ui/blocks/select/manifest';
import { manifest as sheetManifest } from '@/components/nova-ui/blocks/sheet/manifest';
import { manifest as tableManifest } from '@/components/nova-ui/blocks/table/manifest';
import { manifest as tabsManifest } from '@/components/nova-ui/blocks/tabs/manifest';
import { manifest as inputOtpManifest } from '@/components/nova-ui/blocks/input-otp/manifest';
import { manifest as toggleGroupManifest } from '@/components/nova-ui/blocks/toggle-group/manifest';
import { manifest as calendarManifest } from '@/components/nova-ui/blocks/calendar/manifest';
import { manifest as carouselManifest } from '@/components/nova-ui/blocks/carousel/manifest';
import { manifest as comboboxManifest } from '@/components/nova-ui/blocks/combobox/manifest';
import { manifest as datePickerManifest } from '@/components/nova-ui/blocks/date-picker/manifest';
import { manifest as navigationMenuManifest } from '@/components/nova-ui/blocks/navigation-menu/manifest';
import { manifest as resizableManifest } from '@/components/nova-ui/blocks/resizable/manifest';
import { manifest as sonnerManifest } from '@/components/nova-ui/blocks/sonner/manifest';
import { manifest as accordionManifest } from '@/components/nova-ui/blocks/accordion/manifest';
import { manifest as dialogManifest } from '@/components/nova-ui/blocks/dialog/manifest';
import { manifest as sidebarManifest } from '@/components/nova-ui/blocks/sidebar/manifest';

// ============================================================================
// Manifest Registry
// ============================================================================

export const MANIFESTS: ManifestRegistry = {
  // Atmos
  'aspect-ratio': aspectRatioManifest,
  'avatar': avatarManifest,
  'badge': badgeManifest,
  'button': buttonManifest,
  // Atmos (Others)
  'checkbox': checkboxManifest,
  'input': inputManifest,
  'kbd': kbdManifest,
  'label': labelManifest,
  'popover': popoverManifest,
  'progress': progressManifest,
  'radio-group': radioGroupManifest,
  'scroll-area': scrollAreaManifest,
  'separator': separatorManifest,
  'skeleton': skeletonManifest,
  'slider': sliderManifest,
  'spinner': spinnerManifest,
  'switch': switchManifest,
  'textarea': textareaManifest,
  'toggle': toggleManifest,
  'tooltip': tooltipManifest,
  'card': cardManifest,
  'collapsible': collapsibleManifest,
  // Blocks
  'alert': alertManifest,
  'alert-dialog': alertDialogManifest,
  'breadcrumb': breadcrumbManifest,
  'button-group': buttonGroupManifest,
  'command': commandManifest,
  'context-menu': contextMenuManifest,
  'data-table': dataTableManifest,
  'drawer': drawerManifest,
  'dropdown-menu': dropdownMenuManifest,
  'form': formManifest,
  'hover-card': hoverCardManifest,
  'input-group': inputGroupManifest,
  'input-otp': inputOtpManifest,
  'menubar': menubarManifest,
  'pagination': paginationManifest,
  'select': selectManifest,
  'sheet': sheetManifest,
  'table': tableManifest,
  'tabs': tabsManifest,
  'toggle-group': toggleGroupManifest,
  'calendar': calendarManifest,
  'carousel': carouselManifest,
  'combobox': comboboxManifest,
  'date-picker': datePickerManifest,
  'navigation-menu': navigationMenuManifest,
  'resizable': resizableManifest,
  'sonner': sonnerManifest,
  'accordion': accordionManifest,
  'dialog': dialogManifest,
  'sidebar': sidebarManifest,
};

/**
 * 获取组件的 manifest
 */
export function getManifest(componentType: string): ComponentManifest | undefined {
  return MANIFESTS[componentType];
}

/**
 * 检查组件是否有 manifest
 */
export function hasManifest(componentType: string): boolean {
  return componentType in MANIFESTS;
}
