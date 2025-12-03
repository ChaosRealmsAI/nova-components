'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { tv } from 'tailwind-variants';
import { useTheme } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';
import { scrollAreaBaseConfig, scrollBarBaseConfig } from './scroll-area.config';

/**
 * Nova ScrollArea
 *
 * Architecture Notes:
 * - Uses `tailwind-variants` with slots for granular theme control.
 * - Exports base configs for themes to extend.
 * - Supports `classNames` prop for slot-specific overrides.
 * - ADR-006: 通过 useTheme() 获取主题配置，支持运行时主题切换
 */

export { scrollAreaBaseConfig, scrollBarBaseConfig };

// ============================================================================
// ScrollBar Component
// ============================================================================

type ScrollBarVariantProps = {
  orientation?: keyof typeof scrollBarBaseConfig.variants.orientation;
};

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    ScrollBarVariantProps {
  classNames?: { base?: string; thumb?: string };
}

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, classNames, orientation = 'vertical', ...props }, ref) => {
  // ADR-006: 从主题上下文获取 ScrollBar 的样式配置
  const { currentTheme } = useTheme();
  const themeConfig = currentTheme?.components?.ScrollBar;

  const styles = tv({
    extend: scrollBarBaseConfig,
    ...(themeConfig || {}),
  })({ orientation });

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={classNames?.base ?? styles.base({ className })}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={classNames?.thumb ?? styles.thumb()}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = 'ScrollBar';

// ============================================================================
// ScrollArea Component
// ============================================================================

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  classNames?: { base?: string; viewport?: string };
}

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, classNames, children, ...props }, ref) => {
  // ADR-006: 从主题上下文获取 ScrollArea 的样式配置
  const { currentTheme } = useTheme();
  const { t } = useI18n();
  const themeConfig = currentTheme?.components?.ScrollArea;

  const styles = tv({
    extend: scrollAreaBaseConfig,
    ...(themeConfig || {}),
  })();

  // 默认演示内容 - 通过 slots 控制样式，使用国际化
  const defaultItems = [
    { id: '01', textKey: 'scrollAreaSystemInit' as const, fallback: 'System initialization' },
    { id: '02', textKey: 'scrollAreaLoadingModules' as const, fallback: 'Loading modules' },
    { id: '03', textKey: 'scrollAreaConnecting' as const, fallback: 'Connecting to server' },
    { id: '04', textKey: 'scrollAreaAuthenticating' as const, fallback: 'Authenticating user' },
    { id: '05', textKey: 'scrollAreaFetchingData' as const, fallback: 'Fetching data' },
    { id: '06', textKey: 'scrollAreaProcessing' as const, fallback: 'Processing request' },
    { id: '07', textKey: 'scrollAreaUpdatingCache' as const, fallback: 'Updating cache' },
    { id: '08', textKey: 'scrollAreaSyncingState' as const, fallback: 'Syncing state' },
    { id: '09', textKey: 'scrollAreaRendering' as const, fallback: 'Rendering view' },
    { id: '10', textKey: 'scrollAreaTaskCompleted' as const, fallback: 'Task completed' },
    { id: '11', textKey: 'scrollAreaIdleMode' as const, fallback: 'Idle mode' },
    { id: '12', textKey: 'scrollAreaWaitingInput' as const, fallback: 'Waiting for input' },
  ];

  const defaultContent = (
    <div className={styles.content()}>
      <div className={styles.header()}>
        {t('scrollAreaItems', '// ITEMS')}
      </div>
      {defaultItems.map((item) => (
        <div key={item.id} className={styles.item()}>
          <span className={styles.itemIndex()}>{item.id}</span>
          <span className={styles.itemText()}>{t(item.textKey, item.fallback)}</span>
        </div>
      ))}
    </div>
  );

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={classNames?.base ?? styles.base({ className })}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={classNames?.viewport ?? styles.viewport()}
      >
        {children || defaultContent}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea, ScrollBar };
