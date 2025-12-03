'use client';

import { useMemo, createElement } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { useCanvasStore } from '@/stores/canvas-store';
import { useI18n } from '@/lib/i18n/use-i18n';
import { DeviceFrame } from './DeviceFrame';
import { getComponentEntry } from '@/registry/components';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import { tv, type TV } from 'tailwind-variants';

// TV 配置的基础类型 - 用于 extend API
type TVConfig = Parameters<TV>[0];

interface DevicePreviewProps {
  componentId: string;
}

export function DevicePreview({ componentId }: DevicePreviewProps) {
  const { theme, getMergedCssVars } = useThemeStore();
  const { components } = useCanvasStore();
  const { t } = useI18n();

  const component = components.find(c => c.id === componentId);

  const cssVars = getMergedCssVars();

  // CSS 变量样式
  const cssVarsStyle = useMemo(() => {
    return Object.fromEntries(
      Object.entries(cssVars).map(([key, value]) => [key, value])
    );
  }, [cssVars]);

  // 渲染组件的核心逻辑 (复用自 Canvas.tsx)
  const renderComponent = () => {
    if (!component) return null;

    const entry = getComponentEntry(component.type);
    let element: React.ReactNode;

    if (entry) {
      // 动态样式注入
      let injectedClassNames: Record<string, string> | undefined;
      const componentKey = component.type.charAt(0).toUpperCase() + component.type.slice(1);
      const themeConfig = theme.components?.[componentKey];
      const baseConfig = entry.baseConfig;

      if (baseConfig && themeConfig) {
        try {
          // 动态生成 tv 实例 (模拟编译器行为)
          const extendConfig: TVConfig = {
            extend: baseConfig,
            ...themeConfig,
          };
          const dynamicTv = tv(extendConfig);

          // 生成最终样式类名
          const styles = dynamicTv(component.props);

          injectedClassNames = {};
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const stylesAny = styles as any;
          Object.keys(stylesAny).forEach((key) => {
             const styleValue = stylesAny[key];
             if (typeof styleValue === 'function') {
               injectedClassNames![key] = (styleValue as () => string)();
             }
          });
        } catch (error) {
          console.warn('Failed to generate dynamic theme styles:', error);
        }
      }

      // 合并默认 props、实例 props 和 注入的样式
      const props: Record<string, any> = {
        ...entry.defaultProps,
        ...component.props,
        classNames: injectedClassNames,
      };

      // 国际化处理：针对默认文案进行翻译
      entry.props.forEach((propMeta) => {
        props[propMeta.name] = getLocalizedPropValue(props[propMeta.name], propMeta, t);
      });
      
      return createElement(entry.component, props);
    } else {
      return (
        <div className="px-4 py-2 rounded border text-[length:var(--text-sm)] font-medium">
          {component.label} (Legacy/Unknown)
        </div>
      );
    }
  };

  return (
    <div
      style={{
        ...cssVarsStyle,
        '--background': cssVars['--background'] || '#09090b',
      } as React.CSSProperties}
      className="w-full h-full"
    >
      <DeviceFrame
        defaultDevice="desktop"
        showDeviceSwitcher={true}
        showFrame={true}
        backgroundColor="var(--background)"
      >
        {!component ? (
          <div className="w-full h-full flex items-center justify-center text-[var(--muted-foreground)]">
            {t('previewNoComponent')}
          </div>
        ) : (
          <div
            className="min-h-full flex items-center justify-center p-4"
            style={cssVarsStyle as React.CSSProperties}
          >
             {renderComponent()}
          </div>
        )}
      </DeviceFrame>
    </div>
  );
}
