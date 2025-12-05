'use client';

import { createElement, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/shadcn_ui/dialog';
import { useGalleryStore } from '@/stores/gallery-store';
import { getComponentEntry } from '@/registry/component-registry';
import { useI18n } from '@/lib/i18n/use-i18n';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import type { MessageKey } from '@/lib/i18n/messages';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X, Monitor, Tablet, Smartphone, Copy, Check } from 'lucide-react';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

const DEVICE_SIZES: Record<DeviceType, { width: string; label: string }> = {
  desktop: { width: '100%', label: 'Desktop' },
  tablet: { width: '768px', label: 'Tablet' },
  mobile: { width: '375px', label: 'Mobile' },
};

export function ComponentDetailModal() {
  const { showDetailModal, closeDetailModal, getSelectedComponent } = useGalleryStore();
  const { t } = useI18n();
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [copied, setCopied] = useState(false);
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});

  const selectedComponent = getSelectedComponent();
  const entry = selectedComponent ? getComponentEntry(selectedComponent.type) : null;

  // Initialize props when component changes
  useEffect(() => {
    if (entry && selectedComponent) {
      setComponentProps({
        ...entry.defaultProps,
        ...selectedComponent.props,
      });
    }
  }, [selectedComponent?.id]);

  if (!selectedComponent || !entry) return null;

  const label = selectedComponent.labelKey
    ? t(selectedComponent.labelKey as MessageKey, selectedComponent.label)
    : selectedComponent.label;

  // Prepare props with localization
  const prepareProps = () => {
    const props = { ...componentProps };

    entry.props.forEach((propMeta) => {
      props[propMeta.name] = getLocalizedPropValue(props[propMeta.name], propMeta, t);
    });

    if (props.options && Array.isArray(props.options)) {
      props.options = props.options.map((opt: any) => ({
        ...opt,
        label: opt.labelKey ? t(opt.labelKey as MessageKey) : opt.label,
      }));
    }

    if (props.items && Array.isArray(props.items)) {
      props.items = props.items.map((item: any) => ({
        ...item,
        label: item.labelKey ? t(item.labelKey as MessageKey) : item.label,
        content: item.contentKey ? t(item.contentKey as MessageKey) : item.content,
      }));
    }

    return props;
  };

  const handlePropChange = (propName: string, value: unknown) => {
    setComponentProps((prev) => ({
      ...prev,
      [propName]: value,
    }));
  };

  const generateCode = () => {
    const propsString = Object.entries(componentProps)
      .filter(([_, value]) => value !== undefined && value !== '')
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : `${key}={false}`;
        }
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        }
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(' ');

    const componentName = entry.label.replace(/\s+/g, '');
    return `<${componentName}${propsString ? ' ' + propsString : ''} />`;
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={showDetailModal} onOpenChange={(open) => !open && closeDetailModal()}>
      <DialogContent className="!max-w-[90vw] !w-[1200px] !h-[80vh] flex flex-col p-0 gap-0 overflow-hidden bg-background border-border">
        <VisuallyHidden>
          <DialogTitle>{label}</DialogTitle>
        </VisuallyHidden>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">{label}</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground capitalize">
              {selectedComponent.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              {(Object.keys(DEVICE_SIZES) as DeviceType[]).map((d) => {
                const Icon = d === 'desktop' ? Monitor : d === 'tablet' ? Tablet : Smartphone;
                return (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`p-2 rounded-md transition-colors ${
                      device === d ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    title={DEVICE_SIZES[d].label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={closeDetailModal}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Preview Area */}
          <div className="flex-1 flex flex-col overflow-hidden border-r border-border">
            <div className="flex-1 flex items-center justify-center p-8 bg-muted/30 overflow-auto">
              <div
                className="flex items-center justify-center min-h-[200px] rounded-xl border border-border bg-background p-8 transition-all"
                style={{
                  width: DEVICE_SIZES[device].width,
                  maxWidth: '100%',
                }}
              >
                {/* Grid Background */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Component */}
                <div className="relative z-10">
                  {createElement(entry.component, prepareProps())}
                </div>
              </div>
            </div>
          </div>

          {/* Props Panel */}
          <div className="w-[320px] flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-border">
              <h3 className="text-sm font-semibold">Properties</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {entry.props.map((propMeta) => (
                <div key={propMeta.name} className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    {propMeta.name}
                  </label>

                  {propMeta.type === 'boolean' ? (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={componentProps[propMeta.name] ?? false}
                        onChange={(e) => handlePropChange(propMeta.name, e.target.checked)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">
                        {componentProps[propMeta.name] ? 'true' : 'false'}
                      </span>
                    </label>
                  ) : propMeta.options ? (
                    <select
                      value={componentProps[propMeta.name] ?? ''}
                      onChange={(e) => handlePropChange(propMeta.name, e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {propMeta.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={componentProps[propMeta.name] ?? ''}
                      onChange={(e) => handlePropChange(propMeta.name, e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder={`Enter ${propMeta.name}`}
                    />
                  )}

                </div>
              ))}

              {entry.props.length === 0 && (
                <p className="text-sm text-muted-foreground">No configurable properties</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
