import type { MessageModule } from '../../../types';
import { alertMessages } from './alert';
import { alertdialogMessages } from './alert-dialog';
import { breadcrumbMessages } from './breadcrumb';
import { buttongroupMessages } from './button-group';
import { calendarMessages } from './calendar';
import { carouselMessages } from './carousel';
import { chartMessages } from './chart';
import { comboboxMessages } from './combobox';
import { commandMessages } from './command';
import { contextmenuMessages } from './context-menu';
import { dataTableMessages } from './data-table';
import { datePickerMessages } from './date-picker';
import { drawerMessages } from './drawer';
import { dropdownmenuMessages } from './dropdown-menu';
import { formMessages } from './form';
import { hovercardMessages } from './hover-card';
import { inputgroupMessages } from './input-group';
import { inputotpMessages } from './input-otp';
import { legacyMessages } from './legacy';
import { loginMessages } from './login';
import { menubarMessages } from './menubar';
import { navigationmenuMessages } from './navigation-menu';
import { paginationMessages } from './pagination';
import { resizableMessages } from './resizable';
import { selectMessages } from './select';
import { sheetMessages } from './sheet';
import { sonnerMessages } from './sonner';
import { tableMessages } from './table';
import { tabsMessages } from './tabs';
import { togglegroupMessages } from './toggle-group';
import { accordionMessages } from './accordion';
import { dialogMessages } from './dialog';
import { sidebarMessages } from './sidebar';

export const blocksMessages: MessageModule = {
  ...alertMessages,
  ...alertdialogMessages,
  ...breadcrumbMessages,
  ...buttongroupMessages,
  ...calendarMessages,
  ...carouselMessages,
  ...chartMessages,
  ...comboboxMessages,
  ...commandMessages,
  ...contextmenuMessages,
  ...dataTableMessages,
  ...datePickerMessages,
  ...drawerMessages,
  ...dropdownmenuMessages,
  ...formMessages,
  ...hovercardMessages,
  ...inputgroupMessages,
  ...inputotpMessages,
  ...legacyMessages,
  ...loginMessages,
  ...menubarMessages,
  ...navigationmenuMessages,
  ...paginationMessages,
  ...resizableMessages,
  ...selectMessages,
  ...sheetMessages,
  ...sonnerMessages,
  ...tableMessages,
  ...tabsMessages,
  ...togglegroupMessages,
  ...accordionMessages,
  ...dialogMessages,
  ...sidebarMessages,
};
