'use client';

import { useEffect, useMemo, createElement, useRef, createContext, useContext, useState } from 'react';
import { useElementSize } from '@/hooks/use-element-size';
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import { useCanvasStore } from '@/stores/canvas-store';
import { useThemeStore } from '@/stores/theme-store';
import { useI18n } from '@/lib/i18n/use-i18n';
import { HUD } from './HUD';
import { Dock } from './Dock';
import { getComponentEntry } from '@/registry/component-registry';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import type { MessageKey } from '@/lib/i18n/messages';
import type { ComponentInstance } from '@/types';

// ============================================================================
// Canvas Context - 共享 transformRef 给子组件
// ============================================================================

interface CanvasContextValue {
  transformRef: React.RefObject<ReactZoomPanPinchRef | null>;
  scale: number;
}

const CanvasContext = createContext<CanvasContextValue | null>(null);

export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasContext must be used within Canvas');
  }
  return context;
};

// ============================================================================
// 工具函数
// ============================================================================

const hexToRgba = (hex: string, alpha: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  }
  return `rgba(139, 92, 246, ${alpha})`;
};

// ============================================================================
// ComponentCard - 渲染单个组件
// ============================================================================

const ComponentCard = ({ component }: { component: ComponentInstance }) => {
  const selectedId = useCanvasStore((s) => s.selectedId);
  const select = useCanvasStore((s) => s.select);
  const { theme, getMergedCssVars } = useThemeStore();
  const { t } = useI18n();
  const isSelected = component.id === selectedId;

  const componentRef = useRef<HTMLDivElement>(null);
  const { height: componentHeight } = useElementSize(componentRef);

  const cssVars = getMergedCssVars();
  const primaryColor = cssVars['--primary'] || theme.colors?.['--primary'] || '#8b5cf6';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    select(component.id);
  };

  const entry = getComponentEntry(component.type);

  const renderComponent = () => {
    if (entry) {
      const props: Record<string, any> = {
        ...entry.defaultProps,
        ...component.props,
      };

      entry.props.forEach((propMeta) => {
        props[propMeta.name] = getLocalizedPropValue(props[propMeta.name], propMeta, t);
      });

      if (props.options && Array.isArray(props.options)) {
        props.options = props.options.map((opt: { label: string; value: string; labelKey?: string }) => ({
          ...opt,
          label: opt.labelKey ? t(opt.labelKey as MessageKey) : opt.label,
        }));
      }

      if (props.items && Array.isArray(props.items)) {
        props.items = props.items.map((item: { label: string; content: string; labelKey?: string; contentKey?: string; [key: string]: unknown }) => ({
          ...item,
          label: item.labelKey ? t(item.labelKey as MessageKey) : item.label,
          content: item.contentKey ? t(item.contentKey as MessageKey) : item.content,
        }));
      }

      return createElement(entry.component, props);
    } else {
      return (
        <div
          className="px-4 py-2 rounded border text-[length:var(--text-sm)] font-medium"
          style={{
            background: 'var(--surface-1)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          {component.label}
        </div>
      );
    }
  };

  return (
    <div
      role="article"
      aria-label={`${component.type} component: ${component.label}`}
      aria-selected={isSelected}
      data-testid={`canvas-component-${component.id}`}
      data-component-type={component.type}
      data-component-id={component.id}
      className="absolute flex items-center justify-center cursor-pointer"
      style={{
        left: component.x,
        top: component.y,
        width: component.width,
        height: component.height,
      }}
      onClick={handleClick}
    >
      <div className="relative inline-flex flex-col items-center">
        <div
          ref={componentRef}
          style={{
            width: ['separator', 'progress', 'slider', 'aspect-ratio', 'scroll-area'].includes(component.type)
              ? `${component.width}px`
              : undefined,
          }}
        >
          {renderComponent()}
        </div>
        {/* 选中指示器 */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${
            isSelected ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: componentHeight > 0 ? `${componentHeight + 8}px` : undefined,
            width: isSelected ? `${Math.min(component.width * 0.6, 80)}px` : '0px',
            background: `linear-gradient(90deg, ${hexToRgba(primaryColor, 0)} 0%, ${primaryColor} 30%, ${primaryColor} 70%, ${hexToRgba(primaryColor, 0)} 100%)`,
            filter: isSelected ? `drop-shadow(0 0 6px ${hexToRgba(primaryColor, 0.8)})` : 'none',
          }}
        />
      </div>
    </div>
  );
};

// ============================================================================
// Canvas 主组件
// ============================================================================

export function Canvas() {
  const { theme, customTokens, getMergedCssVars } = useThemeStore();
  const allComponents = useCanvasStore((s) => s.components);
  const filter = useCanvasStore((s) => s.filter);
  const select = useCanvasStore((s) => s.select);

  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const [scale, setScale] = useState(1);

  const cssVars = getMergedCssVars();
  const bgColor = cssVars['--background'] || theme.colors?.['--background'] || '#030712';
  const primaryColor = cssVars['--primary'] || theme.colors?.['--primary'] || '#8b5cf6';
  const dotColor = hexToRgba(primaryColor, 0.15);

  // 过滤组件
  const components = useMemo(() => {
    if (filter === 'all') return allComponents;
    return allComponents.filter((c) => c.category === filter);
  }, [allComponents, filter]);

  // 计算画布尺寸（需要足够大以容纳所有组件）
  const canvasSize = useMemo(() => {
    if (components.length === 0) return { width: 2000, height: 2000 };
    const maxX = Math.max(...components.map((c) => c.x + c.width));
    const maxY = Math.max(...components.map((c) => c.y + c.height));
    return {
      width: Math.max(maxX + 200, 2000),
      height: Math.max(maxY + 200, 2000),
    };
  }, [components]);

  // 处理缩放变化
  const handleTransform = (e: { instance: { transformState: { scale: number } } }) => {
    setScale(e.instance.transformState.scale);
  };

  // 点击空白区域取消选中
  const handleCanvasClick = () => {
    select(null);
  };

  const contextValue = useMemo(() => ({
    transformRef,
    scale,
  }), [scale]);

  return (
    <CanvasContext.Provider value={contextValue}>
      <main
        role="main"
        aria-label="Component Design Canvas"
        data-testid="canvas-main"
        className="playground-main w-full h-full relative flex flex-col"
      >
        <section
          role="region"
          aria-label="Interactive Canvas"
          data-testid="canvas-region"
          className="flex-1 relative overflow-hidden"
          style={{ background: bgColor }}
        >
          <TransformWrapper
            ref={transformRef}
            initialScale={1}
            minScale={0.1}
            maxScale={5}
            limitToBounds={false}
            onTransformed={handleTransform}
            wheel={{ step: 0.1, smoothStep: 0.005 }}
            panning={{ velocityDisabled: true }}
            doubleClick={{ disabled: false, step: 0.5 }}
          >
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: '100%',
              }}
              contentStyle={{
                width: canvasSize.width,
                height: canvasSize.height,
              }}
            >
              {/* 画布背景（带网格） */}
              <div
                className="absolute inset-0"
                style={{
                  background: bgColor,
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
                onClick={handleCanvasClick}
              />

              {/* 组件渲染 */}
              {components.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </TransformComponent>
          </TransformWrapper>

          {/* HUD 覆盖层 */}
          <HUD />

          {/* Dock 浮动栏 */}
          <Dock />
        </section>
      </main>
    </CanvasContext.Provider>
  );
}
