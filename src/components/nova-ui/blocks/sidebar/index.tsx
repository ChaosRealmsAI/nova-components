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
 */

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { PanelLeftIcon, HomeIcon, SettingsIcon, UsersIcon, FileTextIcon, BarChartIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/nova-ui/atmos/button';
import { Separator } from '@/components/nova-ui/atmos/separator';
import { useTheme } from '@/lib/themes/use-theme';
import { useI18n } from '@/lib/i18n/use-i18n';
import { sidebarBaseConfig } from './sidebar.config';

// ============================================================================
// 依赖声明（用于导出时收集）
// ============================================================================

export const sidebarAtoms = ['button', 'separator'] as const;

export { sidebarBaseConfig };

// ============================================================================
// Styles
// ============================================================================

const sidebar = tv(sidebarBaseConfig);

// ============================================================================
// Types
// ============================================================================

export type SidebarVariants = VariantProps<typeof sidebar>;
export type SidebarSlots = keyof typeof sidebarBaseConfig.slots;
export type SidebarClassNames = Partial<Record<SidebarSlots, string>>;

export interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
}

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
// Context
// ============================================================================

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
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

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { root } = styles({ variant, collapsible });

  return (
    <aside
      data-slot="sidebar"
      className={cn(root(), classNames?.root, className)}
      {...props}
    >
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

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { header } = styles({});

  return (
    <div
      data-slot="sidebar-header"
      className={cn(header(), classNames?.header, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Content
// ============================================================================

function SidebarContent({ className, classNames, ...props }: SidebarContentProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { content } = styles({});

  return (
    <div
      data-slot="sidebar-content"
      className={cn(content(), classNames?.content, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Footer
// ============================================================================

function SidebarFooter({ className, classNames, ...props }: SidebarFooterProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { footer } = styles({});

  return (
    <div
      data-slot="sidebar-footer"
      className={cn(footer(), classNames?.footer, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Group
// ============================================================================

function SidebarGroup({ className, classNames, ...props }: SidebarGroupProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { group } = styles({});

  return (
    <div
      data-slot="sidebar-group"
      className={cn(group(), classNames?.group, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Group Label
// ============================================================================

function SidebarGroupLabel({ className, classNames, ...props }: SidebarGroupLabelProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { groupLabel } = styles({});

  return (
    <div
      data-slot="sidebar-group-label"
      className={cn(groupLabel(), classNames?.groupLabel, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Menu
// ============================================================================

function SidebarMenu({ className, classNames, ...props }: SidebarMenuProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { menu } = styles({});

  return (
    <ul
      data-slot="sidebar-menu"
      className={cn(menu(), classNames?.menu, className)}
      {...props}
    />
  );
}

// ============================================================================
// Sidebar Menu Item
// ============================================================================

function SidebarMenuItem({ className, classNames, ...props }: SidebarMenuItemProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { menuItem } = styles({});

  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn(menuItem(), classNames?.menuItem, className)}
      {...props}
    />
  );
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

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { menuButton, menuBadge } = styles({});

  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={active}
      className={cn(menuButton(), classNames?.menuButton, className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1 truncate text-left">{children}</span>
      {badge && <span className={cn(menuBadge(), classNames?.menuBadge)}>{badge}</span>}
    </button>
  );
}

// ============================================================================
// Sidebar Trigger
// ============================================================================

function SidebarTrigger({ className, classNames, ...props }: SidebarTriggerProps) {
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.Sidebar;

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { trigger } = styles({});

  return (
    <button
      data-slot="sidebar-trigger"
      className={cn(trigger(), classNames?.trigger, className)}
      {...props}
    >
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

  const styles = tv({
    extend: sidebarBaseConfig,
    ...(themeConfig || {}),
  });

  const { separator } = styles({});

  return (
    <div
      data-slot="sidebar-separator"
      className={cn(separator(), classNames?.separator, className)}
    />
  );
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
