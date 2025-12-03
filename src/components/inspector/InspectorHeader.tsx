'use client';

/**
 * InspectorHeader - 检查器头部组件
 *
 * i18n 说明：
 * - 本项目使用「变量化多语言」方案
 * - 所有文本通过 t('keyName') 或 resolveLabel(label, labelKey) 获取
 * - messages.ts 中以 key: { en: '...', zh: '...' } 格式定义
 */

import { Smartphone, Code2 } from 'lucide-react';
import type { ComponentInstance } from '@/types';
import { useLayoutStore } from '@/stores/layout-store';
import { useCanvasStore } from '@/stores/canvas-store';
import { useI18n } from '@/lib/i18n/use-i18n';
import { capitalize } from '@/lib/utils';
import type { MessageKey } from '@/lib/i18n/messages';

interface InspectorHeaderProps {
  selectedComponent: ComponentInstance;
  displayType: string;
}

export function InspectorHeader({
  selectedComponent,
  displayType,
}: InspectorHeaderProps) {
  const { showBottomPanel, toggleBottomPanel } = useLayoutStore();
  const { togglePreviewModal } = useCanvasStore();
  const { t, resolveLabel } = useI18n();

  const categoryKey = ('category' + capitalize(selectedComponent.category)) as MessageKey;

  return (
    <>
      {/* Header - 组件名称和基础信息 */}
      <div className="playground-inspector-section min-h-[4.5rem] pt-4 pb-2 border-b border-border/40 flex items-center px-5 bg-transparent shrink-0">
        <div className="flex flex-col min-w-0">
          <div
            className="playground-inspector-title text-[length:var(--text-lg)] font-semibold leading-tight truncate mb-1"
            title={resolveLabel(selectedComponent.label, selectedComponent.labelKey)}
          >
            {resolveLabel(selectedComponent.label, selectedComponent.labelKey)}
          </div>
          <div className="text-[length:var(--text-xs)] text-muted-foreground font-mono uppercase tracking-wider flex items-center gap-2 opacity-80">
            <span>{selectedComponent.id.slice(-6)}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{t(categoryKey, selectedComponent.category)}</span>
          </div>
        </div>
      </div>

      {/* Actions Row - 操作按钮行 */}
      <div className="playground-inspector-section px-4 py-3 border-b border-border/40 shrink-0">
        <div className="grid grid-cols-2 gap-2">
          {/* Dev Mode Button - 开发者模式按钮 */}
          <button
            onClick={() => toggleBottomPanel()}
            className={`flex items-center justify-center gap-2 h-8 rounded-md text-[length:var(--text-xs)] font-medium transition-all border ${
              showBottomPanel
                ? 'bg-primary/20 border-primary/50 text-primary'
                : 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t('devMode') || 'Dev Mode'}</span>
          </button>

          {/* Preview Button - 预览按钮 */}
          <button
            onClick={togglePreviewModal}
            className="flex items-center justify-center gap-2 h-8 rounded-md text-[length:var(--text-xs)] font-medium transition-all border bg-[var(--surface-2)] border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-3)]"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t('previewButton') || 'Preview'}</span>
          </button>
        </div>
      </div>
    </>
  );
}