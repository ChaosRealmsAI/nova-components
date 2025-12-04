/**
 * InputGroup 组件样式模板
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * 开发原则：
 *
 * 1. Token 优先
 *    - 有 Token 的地方必须使用 Token（颜色、阴影、圆角、字体等）
 *    - 开发组件样式前，先完成 tokens.ts 的定义
 *    - 语法：颜色用类名(bg-primary)，阴影用 var()(shadow-[var(--shadow-md)])
 *
 * 2. 结构固定，样式灵活
 *    - slots 和 variants 的 key 必须保持一致（系统依赖）
 *    - value 完全自由，根据主题风格发挥创意
 *
 * 3. 风格统一
 *    - 同一主题内所有组件应保持一致的设计语言
 *    - 如：圆角风格、阴影风格、动画风格等
 *
 * 4. 只需满足用途约束
 *    - 每个 variant 有其用途约束（如 destructive 必须用 destructive Token）
 *    - 只要满足约束，实现方式完全自由
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputGroupConfig = {
  slots: {
    root: 'flex w-full items-center',

    input: 'flex-1',

    button: '',

    addon: [
      'flex items-center justify-center',
      'border border-input bg-surface-2', // Surface-2 for addons
      'px-3 text-sm text-muted-foreground',
      'h-10',
    ],
  },

  variants: {
    variant: {
      default: {
        root: 'space-x-2',
        addon: 'rounded-[var(--radius)]',
      },

      attached: {
        root: 'space-x-0',
        input: [
          'rounded-none first:rounded-l-[var(--radius)] last:rounded-r-[var(--radius)]',
          'focus-visible:z-10 relative',
        ],
        addon: [
          'rounded-none first:rounded-l-[var(--radius)] last:rounded-r-[var(--radius)]',
          'border-r-0 last:border-r',
        ],
        button: [
          'rounded-none first:rounded-l-[var(--radius)] last:rounded-r-[var(--radius)]',
          'focus:z-10 relative',
        ],
      },
    },

    size: {
      default: {},
      sm: {
        addon: 'h-9 px-2.5',
      },
      lg: {
        addon: 'h-11 px-4',
      },
    },
  },
};