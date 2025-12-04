'use client';

import { useState } from 'react';
import { PlaygroundThemeProvider } from '@/components/providers/PlaygroundThemeProvider';
import { useThemeStore } from '@/stores/theme-store';
import { THEMES } from '@/lib/themes';

// Atmos Components
import { Button } from '@/components/nova-ui/atmos/button';
import { Input } from '@/components/nova-ui/atmos/input';
import { Textarea } from '@/components/nova-ui/atmos/textarea';
import { Checkbox } from '@/components/nova-ui/atmos/checkbox';
import { Switch } from '@/components/nova-ui/atmos/switch';
import { Slider } from '@/components/nova-ui/atmos/slider';
import { Progress } from '@/components/nova-ui/atmos/progress';
import { Badge } from '@/components/nova-ui/atmos/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/nova-ui/atmos/avatar';
import { Label } from '@/components/nova-ui/atmos/label';
import { Separator } from '@/components/nova-ui/atmos/separator';
import { Skeleton } from '@/components/nova-ui/atmos/skeleton';
import { Spinner } from '@/components/nova-ui/atmos/spinner';
import { Kbd } from '@/components/nova-ui/atmos/kbd';
import { Toggle } from '@/components/nova-ui/atmos/toggle';
import { RadioGroup, RadioGroupItem } from '@/components/nova-ui/atmos/radio-group';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/nova-ui/atmos/popover';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/nova-ui/atmos/tooltip';
import { ScrollArea } from '@/components/nova-ui/atmos/scroll-area';
import { AspectRatio } from '@/components/nova-ui/atmos/aspect-ratio';

interface AtomShowcaseProps {
  title: string;
  children: React.ReactNode;
}

// Masonry 瀑布流卡片 - 紧凑版
function AtomShowcase({ title, children }: AtomShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative break-inside-avoid mb-3 border border-border rounded-lg overflow-hidden bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover 时显示标题 */}
      <div className={`
        absolute top-0 left-0 right-0 z-10
        px-2 py-1 bg-muted/90 backdrop-blur-sm
        text-xs font-medium text-foreground
        transition-all duration-200
        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}>
        {title}
      </div>
      {/* 组件内容 - 紧凑padding */}
      <div className="p-3 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// 旧版网格卡片（保留用于对比）
function AtomShowcaseGrid({ title, children }: AtomShowcaseProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="px-4 py-2 border-b border-border bg-muted/50">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
      </div>
      <div className="p-4 min-h-[120px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// 紧凑无边框模式 - 最小空间占用
function AtomShowcaseCompact({ title, children }: AtomShowcaseProps) {
  return (
    <div className="group relative p-1.5 rounded hover:bg-muted/30 transition-colors">
      {/* 组件直接展示 */}
      <div className="flex items-center justify-center">
        {children}
      </div>
      {/* 底部小标签 */}
      <div className="text-[10px] text-muted-foreground text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {title}
      </div>
    </div>
  );
}

type LayoutMode = 'masonry' | 'grid' | 'compact';

function ThemeSwitcher({ layoutMode, onLayoutChange }: { layoutMode: LayoutMode; onLayoutChange: (mode: LayoutMode) => void }) {
  const { currentThemeId, setTheme } = useThemeStore();
  const themeIds = Object.keys(THEMES);

  return (
    <div className="flex items-center gap-4">
      {/* 布局切换 */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Layout:</span>
        <div className="flex gap-1">
          {(['compact', 'masonry', 'grid'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => onLayoutChange(mode)}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                layoutMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* 主题切换 */}
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
    </div>
  );
}

function AtmosContent() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('compact');
  const ShowcaseComponent = layoutMode === 'compact'
    ? AtomShowcaseCompact
    : layoutMode === 'masonry'
      ? AtomShowcase
      : AtomShowcaseGrid;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Atom Components</h1>
            <ThemeSwitcher layoutMode={layoutMode} onLayoutChange={setLayoutMode} />
          </div>
          <p className="text-sm text-muted-foreground">
            Nova UI Atom 组件库展示 - 基础原子组件 ({layoutMode === 'compact' ? '紧凑' : layoutMode === 'masonry' ? '瀑布流' : '网格'})
          </p>
        </header>

        {/* 布局容器 */}
        <div className={
          layoutMode === 'compact'
            ? "flex flex-wrap gap-2 justify-center"
            : layoutMode === 'masonry'
              ? "columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        }>
          {/* Button */}
          <ShowcaseComponent title="Button">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ShowcaseComponent>

          {/* Input */}
          <ShowcaseComponent title="Input">
            <Input placeholder="Enter text..." className="w-full max-w-[200px]" />
          </ShowcaseComponent>

          {/* Textarea */}
          <ShowcaseComponent title="Textarea">
            <Textarea placeholder="Enter message..." className="w-full max-w-[200px]" />
          </ShowcaseComponent>

          {/* Checkbox */}
          <ShowcaseComponent title="Checkbox">
            <div className="flex items-center gap-2">
              <Checkbox id="check1" />
              <Label htmlFor="check1">Accept terms</Label>
            </div>
          </ShowcaseComponent>

          {/* Switch */}
          <ShowcaseComponent title="Switch">
            <div className="flex items-center gap-2">
              <Switch id="switch1" />
              <Label htmlFor="switch1">Dark mode</Label>
            </div>
          </ShowcaseComponent>

          {/* Radio Group */}
          <ShowcaseComponent title="Radio Group">
            <RadioGroup defaultValue="option1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="r1" />
                <Label htmlFor="r1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="r2" />
                <Label htmlFor="r2">Option 2</Label>
              </div>
            </RadioGroup>
          </ShowcaseComponent>

          {/* Slider */}
          <ShowcaseComponent title="Slider">
            <Slider defaultValue={[50]} max={100} className="w-[180px]" />
          </ShowcaseComponent>

          {/* Progress */}
          <ShowcaseComponent title="Progress">
            <Progress value={66} className="w-[180px]" />
          </ShowcaseComponent>

          {/* Badge */}
          <ShowcaseComponent title="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </ShowcaseComponent>

          {/* Avatar */}
          <ShowcaseComponent title="Avatar">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </ShowcaseComponent>

          {/* Label */}
          <ShowcaseComponent title="Label">
            <Label>Form Label</Label>
          </ShowcaseComponent>

          {/* Separator */}
          <ShowcaseComponent title="Separator">
            <div className="w-full space-y-2">
              <p className="text-sm">Above</p>
              <Separator />
              <p className="text-sm">Below</p>
            </div>
          </ShowcaseComponent>

          {/* Skeleton */}
          <ShowcaseComponent title="Skeleton">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </ShowcaseComponent>

          {/* Spinner */}
          <ShowcaseComponent title="Spinner">
            <div className="flex gap-4">
              <Spinner size="sm" />
              <Spinner size="default" />
              <Spinner size="lg" />
            </div>
          </ShowcaseComponent>

          {/* Kbd */}
          <ShowcaseComponent title="Kbd">
            <div className="flex gap-2">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
          </ShowcaseComponent>

          {/* Toggle */}
          <ShowcaseComponent title="Toggle">
            <Toggle aria-label="Toggle bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
              </svg>
            </Toggle>
          </ShowcaseComponent>

          {/* Popover */}
          <ShowcaseComponent title="Popover">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Popover</h4>
                    <p className="text-sm text-muted-foreground">
                      Place content for the popover here.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ShowcaseComponent>

          {/* Tooltip */}
          <ShowcaseComponent title="Tooltip">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip content</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ShowcaseComponent>

          {/* Scroll Area */}
          <ShowcaseComponent title="Scroll Area">
            <ScrollArea className="h-[100px] w-[200px] rounded-md border p-2">
              <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="text-sm">Item {i + 1}</div>
                ))}
              </div>
            </ScrollArea>
          </ShowcaseComponent>

          {/* Aspect Ratio */}
          <ShowcaseComponent title="Aspect Ratio">
            <div className="w-[150px]">
              <AspectRatio ratio="16/9" className="bg-muted rounded-md flex items-center justify-center">
                <span className="text-xs text-muted-foreground">16:9</span>
              </AspectRatio>
            </div>
          </ShowcaseComponent>
        </div>
      </div>
    </div>
  );
}

export default function AtmosPage() {
  return (
    <PlaygroundThemeProvider>
      <AtmosContent />
    </PlaygroundThemeProvider>
  );
}
