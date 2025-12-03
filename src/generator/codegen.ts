/**
 * Code Generator - 代码生成器 v3.1
 *
 * 遵循宪章 v3.1 Generator 契约：
 * - 生成完整可用的导出包
 * - 导出代码不依赖 Nova 运行时
 * - 与 Canvas 共用 computeThemedStyles 保证同源性
 * - 使用 Server Actions 动态读取源码保证同源性
 *
 * ADR-006 v2 源码即导出架构 (v3.1):
 * - 源码怎么用，用户拿到的就是什么样，不做多余的转化
 * - 精准导出：只导出用户选中的组件，主题完整导出
 * - 路径转换：只做必要的 @/ → ../ 路径替换
 * - CSS 变量通过 ThemeProvider 动态注入，不生成 globals.css
 */

import type { ComponentInstance, ThemeDefinition } from '@/types';
import { getComponentEntry } from '@/registry/components';
import { computeThemedStyles } from '@/lib/theme-utils';
import { getComponentSource, getThemeFilesForComponents, getThemeProvider } from './source-registry';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import { capitalizeComponentType } from '@/lib/utils';
import type { MessageKey } from '@/lib/i18n/messages';
import { getManifest } from '@/registry/manifests';

// ============================================================================ 
// 类型定义
// ============================================================================ 

export interface VirtualFile {
  path: string;
  content: string;
  language: 'tsx' | 'ts' | 'css';
  type: 'static' | 'semi-static' | 'dynamic';
}

export interface GeneratorOutput {
  files: VirtualFile[];
}

// ============================================================================ 
// 静态模板
// ============================================================================ 

const UTILS_TEMPLATE = `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

/**
 * ADR-001: Tailwind 配置片段模板
 *
 * 用户需要在 tailwind.config.ts 中添加这些颜色映射
 * 以支持标准 Tailwind 类（如 bg-primary）
 */
const TAILWIND_CONFIG_TEMPLATE = `/**
 * Tailwind CSS 配置片段 - Nova Components
 *
 * ADR-001: 标准 Tailwind 类需要配置颜色映射
 *
 * 依赖：
 * - npm install tailwindcss-animate (用于动画类)
 *
 * 使用方式：
 * 1. 如果你使用 Tailwind CSS 4（CSS-first）：
 *    将下面的 @theme 块添加到你的 globals.css
 *
 * 2. 如果你使用 Tailwind CSS 3（JS config）：
 *    将 colors 配置添加到 tailwind.config.js 的 theme.extend.colors
 */

// ============================================================================
// Tailwind CSS 4 (CSS-first) - 添加到 globals.css
// ============================================================================
/*
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
  --color-input: var(--border);
  --color-ring: var(--ring);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-popover: var(--surface-1);
  --color-popover-foreground: var(--foreground);
  --color-card: var(--surface-1);
  --color-card-foreground: var(--foreground);

  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
}
*/

// ============================================================================
// Tailwind CSS 3 (JS config) - 添加到 tailwind.config.js
// ============================================================================
export const novaColors = {
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  border: 'var(--border)',
  input: 'var(--border)',
  ring: 'var(--ring)',

  primary: {
    DEFAULT: 'var(--primary)',
    foreground: 'var(--primary-foreground)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    foreground: 'var(--secondary-foreground)',
  },
  accent: {
    DEFAULT: 'var(--accent)',
    foreground: 'var(--accent-foreground)',
  },
  muted: {
    DEFAULT: 'var(--muted)',
    foreground: 'var(--muted-foreground)',
  },
  destructive: {
    DEFAULT: 'var(--destructive)',
    foreground: 'var(--destructive-foreground)',
  },

  // Popover/Card 使用 surface-1
  popover: {
    DEFAULT: 'var(--surface-1)',
    foreground: 'var(--foreground)',
  },
  card: {
    DEFAULT: 'var(--surface-1)',
    foreground: 'var(--foreground)',
  },

  // Nova 特有
  'surface-1': 'var(--surface-1)',
  'surface-2': 'var(--surface-2)',
  'surface-3': 'var(--surface-3)',
};

// ============================================================================
// 完整的 tailwind.config.js 示例
// ============================================================================
/*
import { novaColors } from './tailwind.nova.config';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  content: ['./src/**\\/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: novaColors,
    },
  },
  plugins: [tailwindAnimate],
};
*/
`;

// ============================================================================
// 物理同源性核心函数 (ADR-002)
// ============================================================================

/**
 * 计算组件实例的 classNames（物理同源性核心）
 *
 * ADR-002: 这是 Canvas 和 Generator 共用的唯一样式计算入口
 * - Canvas 渲染时调用此函数获取 classNames
 * - Generator 生成代码时也调用此函数
 * - 保证"所见 = 所得"的物理同源性
 *
 * @param component 组件实例
 * @param theme 主题定义
 * @returns classNames 对象，各个 slot 的最终 className
 */
export function computeInstanceClassNames(
  component: ComponentInstance,
  theme: ThemeDefinition
): Record<string, string> {
  const entry = getComponentEntry(component.type);
  if (!entry || !entry.baseConfig) {
    return {};
  }

  // 使用 capitalizeComponentType 正确处理 kebab-case (如 radio-group → RadioGroup)
  const componentName = capitalizeComponentType(component.type);
  const themeConfig = theme.components?.[componentName];
  const props = component.props ?? {};

  // 调用同源性核心函数计算样式
  return computeThemedStyles(entry.baseConfig, themeConfig, {
    variant: props.variant as string,
    size: props.size as string,
    orientation: props.orientation as string,
    inputSize: props.inputSize as string,
  });
}

// ============================================================================
// ADR-006 v2: 主题文件复制（源码即导出）
// ============================================================================

/**
 * 生成主题目录文件（精准导出）
 *
 * 宪章 v5.2：只导出选中组件的主题配置
 * - tokens.ts 始终导出
 * - 只导出选中组件对应的主题配置文件
 * - 动态生成 components/index.ts 和 index.ts
 */
async function generateThemeDirectoryFiles(themeId: string, componentTypes: string[]): Promise<VirtualFile[]> {
  const themeFiles = await getThemeFilesForComponents(themeId, componentTypes);

  return themeFiles.map(file => ({
    path: `themes/${file.exportPath}`,
    content: file.content,
    language: file.exportPath.endsWith('.ts') ? 'ts' as const : 'tsx' as const,
    type: 'semi-static' as const,
  }));
}

/**
 * 生成 ThemeProvider（动态注入 CSS 变量版本）
 *
 * ADR-006 v2: 用户换主题只需改一行 import
 */
async function generateThemeProviderFile(themeId: string): Promise<VirtualFile> {
  const content = await getThemeProvider(themeId);

  return {
    path: 'themes/index.tsx',  // 包含 JSX，使用 .tsx
    content,
    language: 'tsx',
    type: 'semi-static',
  };
}

// ============================================================================
// 主入口
// ============================================================================

/**
 * 生成完整的导出包
 *
 * ADR-006 v2 源码即导出：
 * - 组件源码原样复制，只做路径转换
 * - 主题目录完整复制（tokens.ts + components/）
 * - ThemeProvider 动态注入 CSS 变量
 * - 不再生成 globals.css（CSS 变量在 theme 中，动态注入）
 */
export async function generateExportPackage(
  component: ComponentInstance,
  themes: ThemeDefinition[],
  currentThemeId: string,
  t: (key: MessageKey) => string,
  _customTokens?: Record<string, string | undefined>
): Promise<GeneratorOutput> {
  const files: VirtualFile[] = [];

  // 找到当前选中的主题
  const currentTheme = themes.find(t => t.id === currentThemeId) || themes[0];

  // 获取组件及其依赖（如 popover 需要 button）
  const allComponents = getComponentWithDependencies(component.type);

  // 1. 静态文件：lib/utils.ts
  files.push({
    path: 'lib/utils.ts',
    content: UTILS_TEMPLATE,
    language: 'ts',
    type: 'static',
  });

  // 2. 半静态文件：组件源码（包含依赖组件）
  for (const compType of allComponents) {
    const componentFile = await generateComponentSource(compType);
    if (componentFile) {
      files.push(componentFile);
    }
  }

  // 3. [宪章 v5.2] 精准导出：导出所有相关组件的主题配置
  const themeFiles = await generateThemeDirectoryFiles(currentTheme.id, allComponents);
  files.push(...themeFiles);

  // 4. [ADR-006 v2] ThemeProvider（动态注入 CSS 变量）
  const themeProviderFile = await generateThemeProviderFile(currentTheme.id);
  files.push(themeProviderFile);

  // 5. ADR-001: Tailwind 配置片段
  files.push({
    path: 'tailwind.nova.config.ts',
    content: TAILWIND_CONFIG_TEMPLATE,
    language: 'ts',
    type: 'static',
  });

  // 6. [ADR-006 v2] 用户实例（固定代码，从 context 读取样式）
  files.push(generateUserInstance(component, currentTheme, t));

  return { files };
}

// ============================================================================ 
// 组件源码生成
// ============================================================================ 

/**
 * 生成组件源码
 *
 * 宪章 v2.1：使用 Server Actions 动态获取源码
 * - 从 source-registry 获取已转换路径的源码
 */
async function generateComponentSource(componentType: string): Promise<VirtualFile | null> {
  const source = await getComponentSource(componentType);
  if (!source) return null;

  return {
    path: `components/${componentType}.tsx`,
    content: source,
    language: 'tsx',
    type: 'semi-static',
  };
}

// ============================================================================
// 复合组件依赖关系
// ============================================================================

/**
 * 获取组件及其所有依赖
 *
 * v2: 从 manifest.dependencies 读取依赖，不再使用硬编码
 * 复合组件（如 Popover、ButtonGroup）需要依赖其他组件（如 Button）
 * 导出时自动包含依赖组件的源码和主题配置
 */
function getComponentWithDependencies(componentType: string): string[] {
  const manifest = getManifest(componentType);
  const deps = manifest?.dependencies || [];
  return [componentType, ...deps];
}

// ============================================================================
// 复合组件模板
// ============================================================================

/**
 * 复合组件的代码模板
 * 这些组件需要特殊的 JSX 结构，使用 Button 组件作为触发器
 */
const COMPOSITE_COMPONENT_TEMPLATES: Record<string, {
  imports: string;
  jsx: (props: Record<string, unknown>) => string;
}> = {
  popover: {
    imports: `import { Popover, PopoverTrigger, PopoverContent } from './components/popover'
import { Button } from './components/button'`,
    jsx: (props) => `<Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>${props.content || 'Place content for the popover here.'}</p>
      </PopoverContent>
    </Popover>`,
  },
  tooltip: {
    imports: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './components/tooltip'
import { Button } from './components/button'`,
    jsx: (props) => `<TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>${props.content || 'Tooltip content'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>`,
  },
  tabs: {
    imports: `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/tabs'`,
    jsx: () => `<Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
    </Tabs>`,
  },
  'dropdown-menu': {
    imports: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/dropdown-menu'
import { Button } from './components/button'`,
    jsx: () => `<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>`,
  },
};

// ============================================================================
// 用户实例生成
// ============================================================================

/**
 * 生成用户实例文件（ADR-006 方案A: 组件内部计算样式）
 *
 * 组件源码内部已调用 useTheme()，用户实例只需正常使用组件
 */
function generateUserInstance(
  component: ComponentInstance,
  theme: ThemeDefinition,
  t: (key: MessageKey) => string
): VirtualFile {
  const entry = getComponentEntry(component.type);
  // 使用 capitalizeComponentType 正确处理 kebab-case (如 radio-group → RadioGroup)
  const componentName = capitalizeComponentType(component.type);

  if (!entry) {
    return {
      path: `My${componentName}.tsx`,
      content: '// Unknown component type',
      language: 'tsx',
      type: 'dynamic',
    };
  }
  const props = component.props ?? {};

  // 检查是否是复合组件，使用专用模板
  const compositeTemplate = COMPOSITE_COMPONENT_TEMPLATES[component.type];
  if (compositeTemplate) {
    const content = `/**
 * My${componentName} - Generated by Nova Components
 *
 * ADR-006 方案A: 组件内部通过 useTheme() 获取主题样式
 * 当前主题: ${theme.name}
 */
${compositeTemplate.imports}

export function My${componentName}() {
  return (
    ${compositeTemplate.jsx(props)}
  );
}
`;
    return {
      path: `My${componentName}.tsx`,
      content,
      language: 'tsx',
      type: 'dynamic',
    };
  }

  // 生成 imports（普通组件）
  // v3: 优先使用 manifest.customImports
  const manifest = getManifest(component.type);
  const customImports = manifest?.exportOptions?.customImports;
  const extraImports = manifest?.exportOptions?.extraImports;
  const imports: string[] = [];
  if (customImports && customImports.length > 0) {
    imports.push(`import { ${customImports.join(', ')} } from './components/${component.type}'`);
  } else {
    imports.push(`import { ${componentName} } from './components/${component.type}'`);
  }
  // 添加额外的第三方导入（如 lucide-react 图标）
  if (extraImports) {
    imports.push(extraImports);
  }

  // 生成 props 字符串
  // ADR-006 方案A: 保留 variant/size props，组件内部会使用它们计算样式
  const propsEntries = Object.entries(props).filter(([key, value]) => {
    if (key === 'children') return false;
    const propMeta = entry.props.find((p) => p.name === key);

    // 对于 options 类型的属性，始终保留（需要翻译 labelKey）
    if (key === 'options' && Array.isArray(value)) {
      return true;
    }

    // 国际化处理：如果是默认值，尝试获取翻译后的值
    const localizedValue = getLocalizedPropValue(value, propMeta, t);

    return propMeta && localizedValue !== propMeta.defaultValue;
  });

  const propsString = propsEntries
    .map(([key, value]) => {
      const propMeta = entry.props.find((p) => p.name === key);

      // 特殊处理 options 数组：翻译 labelKey
      if (key === 'options' && Array.isArray(value)) {
        const translatedOptions = value.map((opt: { label: string; value: string; labelKey?: string }) => ({
          value: opt.value,
          label: opt.labelKey ? t(opt.labelKey as MessageKey) : opt.label,
        }));
        return `${key}={${JSON.stringify(translatedOptions)}}`;
      }

      const localizedValue = getLocalizedPropValue(value, propMeta, t);

      if (typeof localizedValue === 'string') {
        return `${key}="${localizedValue}"`;
      }
      if (typeof localizedValue === 'boolean') {
        return localizedValue ? key : `${key}={false}`;
      }
      return `${key}={${JSON.stringify(localizedValue)}}`;
    })
    .join('\n      ');

  // 判断组件是否需要 children
  // v2: 优先使用 manifest，fallback 到静态列表
  // (manifest 已在上方获取)
  const noChildrenFromManifest = manifest?.exportOptions?.noChildren ?? false;
  const noChildrenFallback = ['radio-group', 'separator', 'slider', 'progress', 'input', 'switch', 'skeleton', 'spinner', 'avatar'].includes(component.type);
  const needsChildren = !(noChildrenFromManifest || noChildrenFallback);

  // v3: 优先使用 manifest.customJsx（复杂组件如 InputOTP）
  const customJsx = manifest?.exportOptions?.customJsx;

  // children
  const rawChildren = typeof props.children === 'string' ? props.children : 'Click me';
  const childrenMeta = entry.props.find(p => p.name === 'children');
  const children = getLocalizedPropValue(rawChildren, childrenMeta, t);

  // Separator 特殊处理：添加内联 style 设置背景色，因为 Tailwind CDN 无法解析 bg-[var(--xxx)] 任意值
  const separatorStyleProp = component.type === 'separator'
    ? `\n      style={{ backgroundColor: 'var(--border)' }}`
    : '';

  // ADR-006 方案A: 组件内部处理样式，不需要传 classNames
  // 生成组件 JSX
  let componentJsx: string;
  if (customJsx) {
    // v3: 使用 manifest 中的 customJsx 模板
    componentJsx = customJsx;
  } else if (needsChildren) {
    componentJsx = `<${componentName}${propsString ? '\n      ' + propsString : ''}>
      ${children}
    </${componentName}>`;
  } else {
    // 自闭合标签，用于 radio-group 等不需要 children 的组件
    componentJsx = `<${componentName}${propsString ? '\n      ' + propsString : ''}${separatorStyleProp}
    />`;
  }

  const content = `/**
 * My${componentName} - Generated by Nova Components
 *
 * ADR-006 方案A: 组件内部通过 useTheme() 获取主题样式
 * 当前主题: ${theme.name}
 */
${imports.join('\n')}

export function My${componentName}() {
  return (
    ${componentJsx}
  );
}
`;

  return {
    path: `My${componentName}.tsx`,
    content,
    language: 'tsx',
    type: 'dynamic',
  };
}

// ============================================================================ 
// 工具函数
// ============================================================================ 

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================================================ 
// 向后兼容：旧的单文件生成接口
// ============================================================================ 

/**
 * @deprecated 使用 generateExportPackage 代替
 */
export function generateComponentCode(component: ComponentInstance): { code: string; imports: string[] } {
  // 简化版本，用于复制单个代码块
  const entry = getComponentEntry(component.type);
  // 使用 capitalizeComponentType 正确处理 kebab-case (如 radio-group → RadioGroup)
  const componentName = capitalizeComponentType(component.type);

  if (!entry) {
    return { code: '// Unknown component type', imports: [] };
  }
  const props = component.props ?? {};
  const children = typeof props.children === 'string' ? props.children : 'Click me';

  const propsEntries = Object.entries(props).filter(([key, value]) => {
    if (key === 'children') return false;
    const propMeta = entry.props.find((p) => p.name === key);
    return propMeta && value !== propMeta.defaultValue;
  });

  const propsString = propsEntries
    .map(([key, value]) => {
      if (typeof value === 'string') return `${key}="${value}"`;
      if (typeof value === 'boolean') return value ? key : `${key}={false}`;
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(' ');

  const imports = [`import { ${componentName} } from './components/${component.type}'`];

  const code = `${imports.join('\n')}

export function My${componentName}() {
  return (
    <${componentName}${propsString ? ' ' + propsString : ''}>
      ${children}
    </${componentName}>
  );
}`;

  return { code, imports };
}

/**
 * 复制代码到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
