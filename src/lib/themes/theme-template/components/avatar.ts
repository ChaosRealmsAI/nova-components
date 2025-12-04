/**
 * Avatar 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制，不是简单换色
 * ═══════════════════════════════════════════════════════════════════════════════
 */
export const avatarConfig = {
  slots: {
    /**
     * base: 头像容器基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 包裹头像图片/回退文字的容器
     */
    base: 'rounded-full',
  },
  variants: {
    size: {
      default: { base: 'size-10' },
      sm: { base: 'size-8' },
      lg: { base: 'size-14' },
      xl: { base: 'size-20' },
    },
  },
} as const;

export const avatarFallbackConfig = {
  slots: {
    /**
     * base: 头像回退基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 当图片无法加载时显示的回退内容样式
     */
    base: 'rounded-full bg-muted text-muted-foreground',
  },
  variants: {
    size: {
      default: { base: 'text-[length:var(--text-sm)]' },
      sm: { base: 'text-[length:var(--text-xs)]' },
      lg: { base: 'text-[length:var(--text-lg)]' },
      xl: { base: 'text-[length:var(--text-xl)]' },
    },
  },
} as const;