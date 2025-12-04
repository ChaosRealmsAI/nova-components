'use client';

/**
 * Sidebar Block
 *
 * 侧边栏导航组件，用于应用导航。
 *
 * Architecture Notes:
 * - Block 组件，依赖 Atoms: button, separator
 * - 支持折叠/展开
 * - 支持分组菜单
 *
 * 架构：
 * - L1 (功能层): 静态定义，保证组件功能正常
 * - L2 (主题层): 从 useTheme 获取，控制视觉风格
 * - L3 (实例层): 用户传入的 className/classNames
 *
 * 优先级: L3 > L2 > L1 (通过 twMerge 解决冲突)
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { PanelLeftIcon, HomeIcon, SettingsIcon, UsersIcon, FileTextIcon, BarChartIcon } from 'lucide-react';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const sidebarAtoms = ['button', 'separator'] as const;

// ============================================================================
// L1: 静态样式定义（功能层）
// ============================================================================

const sidebarBase = tv({
  slots: {
    root: [
      'flex flex-col h-full',
      'w-[var(--sidebar-width,280px)]',
      'transition-[width,transform] duration-200 ease-in-out',
    ].join(' '),
    header: 'flex flex-col gap-2 px-4 py-4',
    content: 'flex-1 overflow-auto px-2 py-2',
    footer: 'flex flex-col gap-2 px-4 py-4',
    group: 'flex flex-col gap-1 py-2',
    groupLabel: 'px-2 py-1.5 text-xs font-medium uppercase tracking-wider',
    menu: 'flex flex-col gap-0.5',
    menuItem: 'relative',
    menuButton: [
      'flex w-full items-center gap-2 px-2 py-1.5 rounded-md',
      'text-sm font-medium',
      'outline-none transition-colors',
      'disabled:pointer-events-none disabled:opacity-50',
    ].join(' '),
    menuBadge: 'ml-auto text-xs',
    separator: 'my-2 h-px',
    trigger: [
      'fixed top-4 left-4 z-50 inline-flex items-center justify-center',
      'w-10 h-10 rounded-md',
      'lg:hidden',
    ].join(' '),
    overlay: [
      'fixed inset-0 z-40',
      'lg:hidden',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ].join(' '),
    mobileContainer: [
      'fixed inset-y-0 left-0 z-50',
      'lg:relative lg:z-0',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
    ].join(' '),
  },
  variants: {
    variant: {
      default: {},
      inset: {
        root: 'rounded-lg m-2 border shadow-sm',
      },
    },
    collapsible: {
      none: {},
      icon: {
        root: 'data-[collapsed=true]:w-[var(--sidebar-width-icon,48px)]',
      },
      offcanvas: {
        root: 'data-[collapsed=true]:-translate-x-full lg:translate-x-0',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    collapsible: 'none',
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
// Context
// ============================================================================

export interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

// ============================================================================
// Types
// ============================================================================

export type SidebarVariants = VariantProps<typeof sidebarBase>;
export type SidebarSlots = keyof (typeof sidebarBase)['slots'];
export type SidebarClassNames = Partial<Record<SidebarSlots, string>>;

export interface SidebarProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, SidebarVariants {
  classNames?: SidebarClassNames;
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: SidebarClassNames;
  active?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: SidebarClassNames;
}

export interface SidebarMenuItem {
  label: string;
  labelKey?: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
  onClick?: () => void;
}

export interface SidebarMenuGroup {
  label?: string;
  labelKey?: string;
  items: SidebarMenuItem[];
}

export interface SidebarDemoProps extends SidebarVariants {
  title?: string;
  groups?: SidebarMenuGroup[];
}

// ============================================================================
// Sidebar Provider
// ============================================================================

function SidebarProvider({ children, defaultCollapsed = false }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, isMobile }}>
      {children}
    </SidebarContext.Provider>
  );
}

// ============================================================================
// Sidebar Root
// ============================================================================

function Sidebar({
  className,
  classNames,
  variant = 'default',
  collapsible = 'none',
  children,
  ...props
}: SidebarProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  // L1: 功能层
  const base = sidebarBase({ variant, collapsible });

  // L2: 主题层
  const themeStyles = React.useMemo(() => {
    const slotStyle = toClassString(themeConfig?.slots?.root);
    // @ts-ignore - Theme config types might be loose
    const variantStyle = toClassString(themeConfig?.variants?.variant?.[variant]?.root);
    return { slot: slotStyle, variant: variantStyle };
  }, [themeConfig, variant]);

  // L1 + L2 + L3
  const rootClass = twMerge(
    base.root(),
    themeStyles.slot,
    themeStyles.variant,
    classNames?.root,
    className
  );

  return (
    <aside data-slot="sidebar" className={rootClass} {...props}>
      {children}
    </aside>
  );
}

// ============================================================================
// Sidebar Header
// ============================================================================

function SidebarHeader({ className, classNames, ...props }: SidebarHeaderProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.header),
    [themeConfig]
  );

  const headerClass = twMerge(base.header(), themeStyles, classNames?.header, className);

  return <div data-slot="sidebar-header" className={headerClass} {...props} />;
}

// ============================================================================
// Sidebar Content
// ============================================================================

function SidebarContent({ className, classNames, ...props }: SidebarContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.content),
    [themeConfig]
  );

  const contentClass = twMerge(base.content(), themeStyles, classNames?.content, className);

  return <div data-slot="sidebar-content" className={contentClass} {...props} />;
}

// ============================================================================
// Sidebar Footer
// ============================================================================

function SidebarFooter({ className, classNames, ...props }: SidebarFooterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.footer),
    [themeConfig]
  );

  const footerClass = twMerge(base.footer(), themeStyles, classNames?.footer, className);

  return <div data-slot="sidebar-footer" className={footerClass} {...props} />;
}

// ============================================================================
// Sidebar Group
// ============================================================================

function SidebarGroup({ className, classNames, ...props }: SidebarGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.group),
    [themeConfig]
  );

  const groupClass = twMerge(base.group(), themeStyles, classNames?.group, className);

  return <div data-slot="sidebar-group" className={groupClass} {...props} />;
}

// ============================================================================
// Sidebar Group Label
// ============================================================================

function SidebarGroupLabel({ className, classNames, ...props }: SidebarGroupLabelProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.groupLabel),
    [themeConfig]
  );

  const groupLabelClass = twMerge(base.groupLabel(), themeStyles, classNames?.groupLabel, className);

  return <div data-slot="sidebar-group-label" className={groupLabelClass} {...props} />;
}

// ============================================================================
// Sidebar Menu
// ============================================================================

function SidebarMenu({ className, classNames, ...props }: SidebarMenuProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.menu),
    [themeConfig]
  );

  const menuClass = twMerge(base.menu(), themeStyles, classNames?.menu, className);

  return <ul data-slot="sidebar-menu" className={menuClass} {...props} />;
}

// ============================================================================
// Sidebar Menu Item
// ============================================================================

function SidebarMenuItem({ className, classNames, ...props }: SidebarMenuItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.menuItem),
    [themeConfig]
  );

  const menuItemClass = twMerge(base.menuItem(), themeStyles, classNames?.menuItem, className);

  return <li data-slot="sidebar-menu-item" className={menuItemClass} {...props} />;
}

// ============================================================================
// Sidebar Menu Button
// ============================================================================

function SidebarMenuButton({
  className,
  classNames,
  active = false,
  icon,
  badge,
  children,
  ...props
}: SidebarMenuButtonProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.menuButton),
    [themeConfig]
  );

  const menuButtonClass = twMerge(base.menuButton(), themeStyles, classNames?.menuButton, className);
  const menuBadgeClass = twMerge(base.menuBadge(), toClassString(themeConfig?.slots?.menuBadge), classNames?.menuBadge);

  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={active}
      className={menuButtonClass}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1 truncate text-left">{children}</span>
      {badge && <span className={menuBadgeClass}>{badge}</span>}
    </button>
  );
}

// ============================================================================
// Sidebar Trigger
// ============================================================================

function SidebarTrigger({ className, classNames, ...props }: SidebarTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.trigger),
    [themeConfig]
  );

  const triggerClass = twMerge(base.trigger(), themeStyles, classNames?.trigger, className);

  return (
    <button data-slot="sidebar-trigger" className={triggerClass} {...props}>
      <PanelLeftIcon className="h-5 w-5" />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}

// ============================================================================
// Sidebar Separator
// ============================================================================

function SidebarSeparator({ className, classNames }: { className?: string; classNames?: SidebarClassNames }) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const base = sidebarBase({});
  const themeStyles = React.useMemo(
    () => toClassString(themeConfig?.slots?.separator),
    [themeConfig]
  );

  const separatorClass = twMerge(base.separator(), themeStyles, classNames?.separator, className);

  return <div data-slot="sidebar-separator" className={separatorClass} />;
}

// ============================================================================
// Sidebar Demo (用于画布展示)
// ============================================================================

const defaultGroups: SidebarMenuGroup[] = [
  {
    label: 'Main',
    labelKey: 'sidebarMainLabel',
    items: [
      { label: 'Dashboard', labelKey: 'sidebarDashboard', icon: <HomeIcon className="h-4 w-4" />, active: true },
      { label: 'Analytics', labelKey: 'sidebarAnalytics', icon: <BarChartIcon className="h-4 w-4" />, badge: 'New' },
      { label: 'Documents', labelKey: 'sidebarDocuments', icon: <FileTextIcon className="h-4 w-4" /> },
    ],
  },
  {
    label: 'Settings',
    labelKey: 'sidebarSettingsLabel',
    items: [
      { label: 'Team', labelKey: 'sidebarTeam', icon: <UsersIcon className="h-4 w-4" /> },
      { label: 'Settings', labelKey: 'sidebarSettings', icon: <SettingsIcon className="h-4 w-4" /> },
    ],
  },
];

function SidebarDemo({
  variant = 'default',
  collapsible = 'none',
  title,
  groups = defaultGroups,
}: SidebarDemoProps) {
  const { t } = useI18n();

  const displayTitle = title || t('sidebarAppTitle', 'My App');

  return (
    <div className="flex h-full w-full bg-background">
      <Sidebar variant={variant} collapsible={collapsible} className="shrink-0">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
              M
            </div>
            <span className="font-semibold">{displayTitle}</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {groups.map((group, groupIndex) => (
            <SidebarGroup key={groupIndex}>
              {group.label && (
                <SidebarGroupLabel>
                  {group.labelKey ? t(group.labelKey, group.label) : group.label}
                </SidebarGroupLabel>
              )}
              <SidebarMenu>
                {group.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    <SidebarMenuButton
                      active={item.active}
                      icon={item.icon}
                      badge={item.badge}
                      onClick={item.onClick}
                    >
                      {item.labelKey ? t(item.labelKey, item.label) : item.label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{t('sidebarUserName', 'John Doe')}</span>
              <span className="text-xs text-muted-foreground">{t('sidebarUserEmail', 'john@example.com')}</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4">
        <div className="h-full rounded-lg border border-dashed border-muted-foreground/25 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{t('sidebarMainContent', 'Main Content')}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
  SidebarDemo,
  useSidebar,
};
