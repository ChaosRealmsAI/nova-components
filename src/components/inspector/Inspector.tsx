'use client';

/**
 * Inspector - 右侧检查器面板
 *
 * 功能说明：
 * - 当 inspectorMode === 'theme_config' 时，显示主题配置面板
 * - 当选中组件时，显示组件信息 + 特效配置
 * - 未选中时显示提示
 *
 * i18n 说明：
 * - 使用「变量化多语言」方案
 * - 通过 t('keyName') 获取翻译文本
 * - messages.ts 定义: key: { en: '...', zh: '...' }
 */

import { useCanvasStore } from '@/stores/canvas-store';
import { InspectorHeader } from './InspectorHeader';
import { ThemeConfigPanel } from './ThemeConfigPanel';
import { PropsPanel } from './PropsPanel';
import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';

export function Inspector() {
  const { t } = useI18n();
  const { components, selectedId, inspectorMode } = useCanvasStore();

  // Theme Config Mode - 主题配置模式
  if (inspectorMode === 'theme_config') {
    return <ThemeConfigPanel />;
  }

  // 查找选中的组件
  const selectedComponent = components.find((c) => c.id === selectedId);

  // 未选中状态 - 显示提示
  if (!selectedComponent) {
    return (
      <aside
        role="complementary"
        aria-label="Inspector Panel - No component selected"
        data-testid="inspector-empty"
        className="h-full flex items-center justify-center p-4"
      >
        <div className="text-center">
          <div className="playground-panel-label text-4xl mb-2 opacity-30">👆</div>
          <span className="playground-panel-label text-[length:var(--text-sm)]">{t('inspectorSelectComponent')}</span>
          <p className="sr-only">{t('inspectorSelectHint')}</p>
        </div>
      </aside>
    );
  }

  // 组件类型显示名称映射 (使用翻译键)
  const componentTypeKeys: Record<string, MessageKey> = {
    button: 'componentTypeButton',
    input: 'componentTypeInput',
  };

  const displayType = componentTypeKeys[selectedComponent.type]
    ? t(componentTypeKeys[selectedComponent.type])
    : selectedComponent.type;

  return (
    <aside
      role="complementary"
      aria-label={`Inspector Panel - Configuring ${displayType}: ${selectedComponent.label}`}
      aria-description={`Configure properties for the selected ${selectedComponent.type} component.`}
      data-testid="inspector-panel"
      data-selected-component={selectedComponent.id}
      data-component-type={selectedComponent.type}
      className="h-full flex flex-col"
    >
      {/* Header & Actions - 头部信息和操作按钮 */}
      <InspectorHeader
        selectedComponent={selectedComponent}
        displayType={displayType}
      />

      {/* Scrollable Content Area - 可滚动内容区 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Props Panel - 属性配置 */}
        <section
          role="region"
          aria-label="Component Properties - Modify variant, size, and other settings"
        >
          <PropsPanel component={selectedComponent} />
        </section>
      </div>
    </aside>
  );
}