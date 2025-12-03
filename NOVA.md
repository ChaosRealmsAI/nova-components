# Nova Components

> 组件可视化配置工具：配置 → 预览 → 导出代码

---

## 一、产品定位

**一句话**：在界面上配置组件，实时预览，导出可直接使用的代码。

**核心价值**：
- **所见即所得** — 画布预览 = 导出效果
- **代码是你的** — 导出源码，无运行时依赖
- **导出体验 = shadcn** — 复制即用，可自由修改

**与 shadcn 的关系**：

> 除了**多主题**和**多 Slot 覆盖**以外，跟 shadcn 没什么区别。

| 特性 | shadcn | Nova |
|------|--------|------|
| 组件质量 | ✅ 高质量 | ✅ 同等质量 |
| 复制即用 | ✅ | ✅ |
| 可修改源码 | ✅ | ✅ |
| 多主题切换 | ❌ 手动改 | ✅ 可视化配置 |
| Slot 级样式覆盖 | ❌ 只有 className | ✅ classNames 按插槽覆盖 |
| 可视化预览 | ❌ | ✅ |

Nova 不是要替代 shadcn，而是在 shadcn 基础上增加**主题系统**和**可视化配置**能力。

---

## 二、核心原则

### 1. 导出体验 = shadcn
导出的组件像 shadcn 一样使用：复制到项目即可用，无需 ThemeProvider、useTheme 等运行时机制。

### 2. 所见即所得
Canvas 预览与导出代码视觉效果一致。但两者代码路径不同：
- **Canvas**：运行时动态计算（useTheme + zustand）
- **导出**：编译时烘焙样式（静态代码）

### 3. 主题 = 两层控制
| 层级 | 控制内容 | 切换方式 |
|------|----------|----------|
| **Token 层** | 颜色、阴影、圆角值 | CSS 变量，运行时可切换 |
| **Slot 层** | Tailwind 类组合 | 主题配置，导出时确定 |

### 4. 标准优于任意
使用标准 Tailwind 语义类，不用任意值：
- ✅ `bg-primary` / `text-foreground` / `border-border`
- ❌ `bg-[var(--primary)]` / `bg-blue-500`

### 5. 扩展优于重写
主题只定义差异，使用 `tv extend` 继承基础配置，不重复定义完整样式。

---

## 三、架构全景

### 模块图

```
┌─────────────────────────────────────────────────────────────┐
│  Canvas ─── Inspector ─── Generator ─── CodeViewer ─── Export │
│      │         │              │             │            │    │
│      └─────────┴──────┬───────┴─────────────┴────────────┘    │
│                       │                                        │
│                    Store                                       │
│                       │                                        │
│             ┌─────────┴─────────┐                             │
│        Components            Themes                            │
└─────────────────────────────────────────────────────────────┘
```

### 模块职责

| 模块 | 职责 | 关键文件 |
|------|------|----------|
| **Components** | 可配置的 UI 组件 | `src/components/nova-ui/` |
| **Themes** | 视觉风格、组件样式覆盖 | `src/lib/themes/` |
| **Store** | 全局配置状态（zustand） | `src/stores/` |
| **Canvas** | 可视化展示和交互 | `src/components/canvas/` |
| **Inspector** | 属性配置面板 | `src/components/inspector/` |
| **Generator** | 配置 → 代码 | `src/generator/` |
| **Registry** | 组件元数据索引 | `src/registry/` |

### 数据流

```
用户操作 → Store 更新 → Canvas 重渲染
                    ↓
              Generator 生成代码
                    ↓
              CodeViewer 展示
                    ↓
                  导出
```

### 依赖规则

1. 上层依赖下层，下层不依赖上层
2. Components 是叶子节点（无依赖）
3. Store 是中心节点（被多模块读写）

---

## 四、技术选型

| 层级 | 技术 | 版本 | 选择理由 |
|------|------|------|----------|
| 框架 | Next.js | 15.x | App Router, RSC |
| 语言 | TypeScript | 5.x | 类型安全 |
| 样式 | Tailwind CSS | 4.x | 原子化 CSS |
| 变体 | tailwind-variants | 0.3.x | slots + extend（cva 不支持） |
| 状态 | Zustand | 5.x | 轻量、简单 |

### 为什么用 tv 不用 cva

| 特性 | cva | tv |
|------|-----|-----|
| Slots 支持 | ❌ | ✅ 原生 |
| 继承/扩展 | ❌ | ✅ extend API |
| tailwind-merge | 需手动 | ✅ 内置 |

---

## 五、组件规范

### 组件层级

| 层级 | 位置 | 可依赖 | 示例 |
|------|------|--------|------|
| Atoms | `nova-ui/atmos/` | 无 | Button, Input, Badge |
| Blocks | `nova-ui/blocks/` | Atoms | Card, FormField, Tabs |
| Sections | `nova-ui/sections/` | Atoms, Blocks | Hero, Pricing |
| Templates | `nova-ui/templates/` | 全部 | LandingPage |

### 文件结构

```
button/
├── index.tsx           # 组件实现
└── button.config.ts    # baseConfig 定义
```

### 组件写法（完整示例）

**button.config.ts**：
```typescript
export const buttonBaseConfig = {
  slots: {
    base: [
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'font-medium',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
    ],
  },
  variants: {
    variant: {
      default: { base: 'bg-primary text-primary-foreground hover:bg-primary/90' },
      outline: { base: 'border border-input bg-background hover:bg-accent' },
      ghost: { base: 'hover:bg-accent hover:text-accent-foreground' },
    },
    size: {
      sm: { base: 'h-9 px-3 text-sm' },
      md: { base: 'h-10 px-4' },
      lg: { base: 'h-11 px-8 text-lg' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
} as const;
```

**index.tsx**：
```typescript
'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useTheme } from '@/lib/themes';
import { buttonBaseConfig } from './button.config';

// 导出 baseConfig 供主题 extend
export { buttonBaseConfig };

// Props 类型
type ButtonVariants = VariantProps<ReturnType<typeof tv<typeof buttonBaseConfig>>>;
type SlotClassNames = Partial<Record<keyof typeof buttonBaseConfig.slots, string>>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  classNames?: SlotClassNames;
}

// 组件实现
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, classNames, variant, size, ...props }, ref) => {
    // 从主题获取配置
    const { currentTheme } = useTheme();
    const themeConfig = currentTheme?.components?.Button;

    // 合并基础配置和主题配置
    const styles = tv({
      extend: themeConfig?.extend ?? buttonBaseConfig,
      ...(themeConfig || {}),
    })({ variant, size });

    return (
      <button
        ref={ref}
        data-slot="button"
        className={classNames?.base ?? styles.base({ className })}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
```

### 关键要点

1. **导出 baseConfig** — 供主题 extend 使用
2. **useTheme()** — 运行时获取主题配置
3. **tv extend** — 合并基础和主题配置
4. **classNames prop** — 允许插槽级样式覆盖
5. **data-slot** — 便于调试和 CSS 选择

---

## 六、主题规范

### 主题结构

```typescript
interface ThemeDefinition {
  id: string;                              // 唯一标识
  name: string;                            // 显示名称
  cssVars: Record<string, string>;         // CSS 变量（Token 层）
  components: Record<string, TVConfig>;    // 组件覆盖（Slot 层）
}
```

### 主题写法（完整示例）

```typescript
// themes/cyberpunk-dark/index.ts
import type { ThemeDefinition } from '@/types';
import { buttonThemeConfig } from './components/button';

export const cyberpunkDarkTheme: ThemeDefinition = {
  id: 'cyberpunk-dark',
  name: 'Cyberpunk Dark',

  // Token 层：CSS 变量
  cssVars: {
    '--primary': '#D946EF',
    '--primary-foreground': '#000000',
    '--background': '#09090B',
    '--foreground': '#FAFAFA',
    '--card': '#1A1A2E',
    '--border': '#27272A',
    '--radius': '0',
  },

  // Slot 层：组件样式覆盖
  components: {
    Button: buttonThemeConfig,
    // Card: cardThemeConfig,
  },
};
```

```typescript
// themes/cyberpunk-dark/components/button.ts

// 主题只写差异，不写完整配置
export const buttonThemeConfig = {
  slots: {
    base: 'rounded-none font-mono uppercase tracking-wider',
  },
  variants: {
    variant: {
      // 重新诠释 outline 变体的赛博朋克风格
      outline: {
        base: 'border-2 border-primary shadow-[0_0_10px_var(--primary)] hover:bg-primary hover:text-black',
      },
    },
  },
};
```

### 主题规则

1. **只写差异** — 未定义的使用 baseConfig
2. **不新增变体** — 保持 variant 接口兼容
3. **cssVars 用标准名** — `--primary` 不是 `--cyberpunk-primary`

---

## 七、目录结构

```
src/
├── app/                      # Next.js App Router
│
├── components/
│   ├── canvas/               # 画布渲染
│   ├── inspector/            # 属性检查器
│   ├── devmode/              # 开发者面板
│   ├── preview/              # 设备预览
│   ├── layout/               # 页面布局
│   ├── providers/            # Context Providers
│   └── nova-ui/              # ⭐ Nova 可导出组件库
│       ├── atmos/            # 原子组件
│       ├── blocks/           # 区块组件
│       ├── sections/         # 区段组件
│       └── templates/        # 模板组件
│
├── generator/                # 代码生成器
│   └── codegen.ts
│
├── lib/
│   ├── i18n/                 # 国际化（16 种语言）
│   │   └── messages/
│   │       └── components/   # 组件翻译（分目录）
│   │           ├── _types.ts # 组件类型名
│   │           ├── _props.ts # 通用属性名
│   │           ├── _values.ts# 通用属性值
│   │           ├── atmos/    # 原子组件翻译
│   │           └── blocks/   # 区块组件翻译
│   ├── themes/               # 主题定义
│   │   ├── index.ts          # 主题注册
│   │   ├── cyberpunk-dark/
│   │   ├── ocean-blue/
│   │   └── sunset-warm/
│   └── utils.ts              # 工具函数（cn 等）
│
├── registry/
│   └── components.ts         # 组件元数据
│
├── shadcn_ui/                # shadcn 组件（仅内部使用，不导出）
│
├── stores/
│   └── canvas-store.ts       # 画布状态
│
└── types/
    └── index.ts              # 类型定义
```

### 新增组件流程

1. 在 `nova-ui/atmos/{name}/` 或 `nova-ui/blocks/{name}/` 创建组件
2. **创建主题配置文件**（3 个主题都要）:
   - `themes/cyberpunk-dark/components/{name}.ts`
   - `themes/ocean-blue/components/{name}.ts`
   - `themes/sunset-warm/components/{name}.ts`
3. **更新主题 index.ts**（3 个主题都要）:
   - 在 `themes/{theme}/components/index.ts` 添加 export
4. **创建 manifest.ts**:
   - 必须配置 `themeFile` 和 `themeConfigs`
   - Block 组件有依赖时必须配置 `exportOptions`
5. 在 `registry/manifests.ts` 注册 manifest
6. 在 `registry/component-map.ts` 注册组件映射

> 详细流程参考: `docs/dev-sop/atom-component-dev.ts` 或 `docs/dev-sop/block-component-dev.ts`

### 新增主题流程

1. 在 `lib/themes/{name}/` 创建主题目录
2. 定义 `cssVars` 和 `components`
3. 在 `lib/themes/index.ts` 注册

---

## 八、代码生成

### 生成逻辑

```
用户配置（Store）
      ↓
Generator 读取配置 + 当前主题
      ↓
烘焙样式到代码（编译时确定）
      ↓
输出自包含代码（无 Nova 依赖）
```

### 导出包结构

```
export/
├── lib/
│   └── utils.ts              # cn 工具函数
│
├── components/
│   └── button.tsx            # 生成的组件代码（样式已烘焙）
│
└── MyButton.tsx              # 用户实例代码
```

### 导出原则

1. **自包含** — 无外部依赖，复制即用
2. **确定性** — 同配置 → 同代码，无随机
3. **样式烘焙** — 主题样式编译时写入，无运行时切换

### 复杂组件导出配置

有依赖的组件（如 ButtonGroup 依赖 Button）需要在 manifest.ts 中配置 `exportOptions`：

```typescript
// manifest.ts
exportOptions: {
  noChildren: true,
  // 自定义用户实例的 JSX（否则默认生成 <ButtonGroup>Click me</ButtonGroup>）
  customJsx: `<ButtonGroup>
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
  </ButtonGroup>`,
  // 需要导入的组件列表
  customImports: ['ButtonGroup', 'Button'],
  // 第三方库导入（可选，如 lucide-react 图标）
  extraImports: `import { Bold, Italic } from 'lucide-react';`,
}
```

**exportOptions 字段说明**：

| 字段 | 作用 | 何时需要 |
|------|------|----------|
| `noChildren` | 不使用默认 children | 复合组件 |
| `customJsx` | 自定义 JSX 模板 | 有依赖的组件 |
| `customImports` | 导入列表 | customJsx 中使用的组件 |
| `extraImports` | 第三方导入语句 | 需要图标等外部库 |

---

## 九、ADR 索引

| ADR | 标题 | 状态 |
|-----|------|------|
| [001](docs/decisions/001-adopt-standard-tailwind-classes.md) | 使用标准 Tailwind 类 | ✅ 有效 |
| [002](docs/decisions/002-physical-source-of-truth.md) | 物理同源性 | ❌ 废弃 |
| [003](docs/decisions/003-component-hierarchy-and-dependencies.md) | 组件层级与依赖 | ✅ 有效 |
| [005](docs/decisions/005-token-driven-theming.md) | Token 驱动主题 | ✅ 有效 |
| [006](docs/decisions/006-multi-theme-export-architecture.md) | 源码即导出 | ❌ 废弃 |
| [007](docs/decisions/007-abandon-source-sharing-architecture.md) | 废弃源码共享架构 | ✅ 有效 |

---

## 十、废弃记录

### ❌ 物理同源性（ADR-002）

**曾经的方案**：Canvas 和导出共用同一代码路径

**废弃原因**：两套运行时（zustand vs 无状态）差异无法弥合

### ❌ 源码即导出（ADR-006）

**曾经的方案**：源码原样复制，只做路径转换

**废弃原因**：依赖链破裂、CSS 变量注入时机问题

### ❌ 特效系统（V1 移除）

**曾经的方案**：背景特效组件（Aurora、BlackHole 等）

**废弃原因**：天花板太低，V2 重新设计对标 Framer Motion

---

## 十一、深入阅读

| 文档 | 职责 | 何时看 |
|------|------|--------|
| [architecture-charter](docs/charter/architecture-charter.md) | 模块边界细节 | 新增模块时 |
| [tech-design](docs/charter/tech-design.md) | 完整技术规范 | 深入实现时 |
| [product-design](docs/charter/product-design.md) | 功能定义、用例 | 规划功能时 |
| [code-organization](docs/charter/code-organization.md) | 完整目录规范 | 新建文件时 |

---

## 版本

| 版本 | 变更 |
|------|------|
| v1.0 | 初始版本，整合核心文档 |
