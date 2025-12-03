'use client';

/**
 * PropsPanel - 组件属性配置面板
 *
 * 根据组件在 Registry 中的 props 元数据，动态生成配置界面
 */

import { useCanvasStore } from '@/stores/canvas-store';
import { getComponentEntry, type PropMeta } from '@/registry/components';
import type { ComponentInstance } from '@/types';
import { useI18n } from '@/lib/i18n/use-i18n';
import type { MessageKey } from '@/lib/i18n/messages';
import { getLocalizedPropValue } from '@/lib/i18n/utils';

interface PropsPanelProps {
  component: ComponentInstance;
}

export function PropsPanel({ component }: PropsPanelProps) {
  const updateComponentProp = useCanvasStore((s) => s.updateComponentProp);
  const { t, resolveLabel } = useI18n();

  // 从 Registry 获取组件元数据
  const entry = getComponentEntry(component.type);

  if (!entry) {
    return (
      <div className="text-[length:var(--text-sm)] text-muted-foreground">
        {t('previewNoComponent')}
      </div>
    );
  }

  const handlePropChange = (propName: string, value: unknown) => {
    updateComponentProp(component.id, propName, value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-[length:var(--text-sm)] font-medium text-foreground">{t('panelProperties')}</h3>
      <div className="space-y-3">
        {entry.props.map((prop) => {
          const rawValue = component.props?.[prop.name] ?? prop.defaultValue;
          // 解析本地化值（针对默认文案）
          const displayValue = getLocalizedPropValue(rawValue, prop, t);

          return (
            <PropField
              key={prop.name}
              prop={prop}
              value={displayValue}
              onChange={(value) => handlePropChange(prop.name, value)}
              resolveLabel={resolveLabel}
            />
          );
        })}
      </div>
    </div>
  );
}

interface PropFieldProps {
  prop: PropMeta;
  value: unknown;
  onChange: (value: unknown) => void;
  resolveLabel: (label?: string, labelKey?: MessageKey) => string;
}

function PropField({ prop, value, onChange, resolveLabel }: PropFieldProps) {
  const label = resolveLabel(prop.label, prop.labelKey);
  const fieldId = `prop-${prop.name}`;

  switch (prop.type) {
    case 'select':
      return (
        <div className="space-y-1.5">
          <label htmlFor={fieldId} className="text-[length:var(--text-xs)] text-muted-foreground">{label}</label>
          <select
            id={fieldId}
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
            aria-label={`${label} - Select a value`}
            aria-description={`Change the ${prop.name} property of this component`}
            data-testid={`prop-select-${prop.name}`}
            className="w-full h-8 px-2 rounded-md text-[length:var(--text-sm)] bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {prop.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {resolveLabel(opt.label, opt.labelKey)}
              </option>
            ))}
          </select>
        </div>
      );

    case 'text':
      return (
        <div className="space-y-1.5">
          <label htmlFor={fieldId} className="text-[length:var(--text-xs)] text-muted-foreground">{label}</label>
          <input
            id={fieldId}
            type="text"
            value={String(value ?? '')}
            onChange={(e) => onChange(e.target.value)}
            aria-label={`${label} - Enter text`}
            aria-description={`Edit the ${prop.name} text content of this component`}
            data-testid={`prop-text-${prop.name}`}
            className="w-full h-8 px-2 rounded-md text-[length:var(--text-sm)] bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      );

    case 'boolean':
      return (
        <div className="flex items-center justify-between">
          <label htmlFor={fieldId} className="text-[length:var(--text-xs)] text-muted-foreground">{label}</label>
          <button
            id={fieldId}
            type="button"
            role="switch"
            aria-checked={Boolean(value)}
            aria-label={`${label}: ${value ? 'On' : 'Off'}`}
            aria-description={`Toggle the ${prop.name} property. Currently ${value ? 'enabled' : 'disabled'}`}
            data-testid={`prop-boolean-${prop.name}`}
            onClick={() => onChange(!value)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              value ? 'bg-primary' : 'bg-input'
            }`}
          >
            <span
              className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                value ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      );

    case 'number':
      return (
        <div className="space-y-1.5">
          <label htmlFor={fieldId} className="text-[length:var(--text-xs)] text-muted-foreground">{label}</label>
          <input
            id={fieldId}
            type="number"
            value={Number(value ?? 0)}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-label={`${label} - Enter number`}
            aria-description={`Set the numeric value for ${prop.name}`}
            data-testid={`prop-number-${prop.name}`}
            className="w-full h-8 px-2 rounded-md text-[length:var(--text-sm)] bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      );

    default:
      return null;
  }
}
