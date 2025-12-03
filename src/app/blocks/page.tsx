'use client';

import { PlaygroundThemeProvider } from '@/components/providers/PlaygroundThemeProvider';
import { useThemeStore } from '@/stores/theme-store';
import { THEMES } from '@/lib/themes';
import { TabsDemo } from '@/components/nova-ui/blocks/tabs';
import { AlertDemo } from '@/components/nova-ui/blocks/alert';
import { DropdownMenuDemo } from '@/components/nova-ui/blocks/dropdown-menu';
import { SelectDemo } from '@/components/nova-ui/blocks/select';
import { SheetDemo } from '@/components/nova-ui/blocks/sheet';
import { TableDemo } from '@/components/nova-ui/blocks/table';
import { BreadcrumbDemo } from '@/components/nova-ui/blocks/breadcrumb';
import { ButtonGroupDemo } from '@/components/nova-ui/blocks/button-group';
import { CommandDemo } from '@/components/nova-ui/blocks/command';
import { ContextMenuDemo } from '@/components/nova-ui/blocks/context-menu';
import { DrawerDemo } from '@/components/nova-ui/blocks/drawer';
import { FormDemo } from '@/components/nova-ui/blocks/form';
import { HoverCardDemo } from '@/components/nova-ui/blocks/hover-card';
import { InputGroupDemo } from '@/components/nova-ui/blocks/input-group';
import { MenubarDemo } from '@/components/nova-ui/blocks/menubar';
import { PaginationDemo } from '@/components/nova-ui/blocks/pagination';
import { ToggleGroupDemo } from '@/components/nova-ui/blocks/toggle-group';
import { AlertDialogDemo } from '@/components/nova-ui/blocks/alert-dialog';

interface BlockShowcaseProps {
  title: string;
  children: React.ReactNode;
}

function BlockShowcase({ title, children }: BlockShowcaseProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="px-4 py-2 border-b border-border bg-muted/50">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
      </div>
      <div className="p-4 min-h-[200px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function ThemeSwitcher() {
  const { currentThemeId, setTheme } = useThemeStore();
  const themeIds = Object.keys(THEMES);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Theme:</span>
      <div className="flex gap-1">
        {themeIds.map((id) => (
          <button
            key={id}
            onClick={() => setTheme(id)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              currentThemeId === id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {THEMES[id].name}
          </button>
        ))}
      </div>
    </div>
  );
}

function BlocksContent() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Block Components</h1>
            <ThemeSwitcher />
          </div>
          <p className="text-muted-foreground">
            Nova UI Block 组件库展示 - 复合组件，由多个 Atom 组合而成
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlockShowcase title="Tabs 标签页">
            <TabsDemo />
          </BlockShowcase>

          <BlockShowcase title="Tabs (Underline)">
            <TabsDemo variant="underline" />
          </BlockShowcase>

          <BlockShowcase title="Alert (Default)">
            <AlertDemo />
          </BlockShowcase>

          <BlockShowcase title="Alert (Destructive)">
            <AlertDemo variant="destructive" title="Error!" description="Something went wrong." />
          </BlockShowcase>

          <BlockShowcase title="Dropdown Menu">
            <DropdownMenuDemo />
          </BlockShowcase>

          <BlockShowcase title="Select">
            <SelectDemo />
          </BlockShowcase>

          <BlockShowcase title="Sheet">
            <SheetDemo />
          </BlockShowcase>

          <BlockShowcase title="Table">
            <TableDemo />
          </BlockShowcase>

          <BlockShowcase title="Breadcrumb">
            <BreadcrumbDemo />
          </BlockShowcase>

          <BlockShowcase title="Button Group">
            <ButtonGroupDemo />
          </BlockShowcase>

          <BlockShowcase title="Command">
            <CommandDemo />
          </BlockShowcase>

          <BlockShowcase title="Context Menu">
            <ContextMenuDemo />
          </BlockShowcase>

          <BlockShowcase title="Drawer">
            <DrawerDemo />
          </BlockShowcase>

          <BlockShowcase title="Form">
            <FormDemo />
          </BlockShowcase>

          <BlockShowcase title="Hover Card">
            <HoverCardDemo />
          </BlockShowcase>

          <BlockShowcase title="Input Group">
            <InputGroupDemo />
          </BlockShowcase>

          <BlockShowcase title="Menubar">
            <MenubarDemo />
          </BlockShowcase>

          <BlockShowcase title="Pagination">
            <PaginationDemo />
          </BlockShowcase>

          <BlockShowcase title="Toggle Group">
            <ToggleGroupDemo />
          </BlockShowcase>

          <BlockShowcase title="Alert Dialog">
            <AlertDialogDemo />
          </BlockShowcase>
        </div>
      </div>
    </div>
  );
}

export default function BlocksPage() {
  return (
    <PlaygroundThemeProvider>
      <BlocksContent />
    </PlaygroundThemeProvider>
  );
}
