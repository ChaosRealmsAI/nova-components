'use client';

import { createElement, useState, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/shadcn_ui/dialog';
import { useGalleryStore } from '@/stores/gallery-store';
import { useThemeStore } from '@/stores/theme-store';
import { getComponentEntry } from '@/registry/component-registry';
import { useI18n } from '@/lib/i18n/use-i18n';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import type { MessageKey } from '@/lib/i18n/messages';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X, Copy, Check, Monitor, Tablet, Smartphone } from 'lucide-react';
import { DeviceFrame, type DeviceId, devices } from '@/components/preview/DeviceFrame';

export function ComponentDetailModal() {
  const { showDetailModal, closeDetailModal, getSelectedComponent } = useGalleryStore();
  const { getMergedCssVars } = useThemeStore();
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});
  const [device, setDevice] = useState<DeviceId>('desktop');

  const cssVars = getMergedCssVars();
  const cssVarsStyle = useMemo(() => {
    return Object.fromEntries(
      Object.entries(cssVars).map(([key, value]) => [key, value])
    );
  }, [cssVars]);

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
        <div className="flex items-center justify-between px-6 py-3 border-b border-border">
          {/* Left: Title & Category */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{label}</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground capitalize">
              {selectedComponent.category}
            </span>
          </div>

          {/* Center: Device Switcher */}
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {(Object.keys(devices) as DeviceId[]).map((deviceId) => {
              const d = devices[deviceId];
              const Icon = deviceId === 'desktop' ? Monitor : deviceId === 'tablet' ? Tablet : Smartphone;
              const isActive = device === deviceId;
              return (
                <button
                  key={deviceId}
                  onClick={() => setDevice(deviceId)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title={d.name}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{d.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="font-medium">{copied ? 'Copied!' : 'Copy'}</span>
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
          {/* Preview Area with DeviceFrame */}
          <div
            className="flex-1 flex flex-col overflow-hidden border-r border-border"
            style={{
              ...cssVarsStyle,
              '--background': cssVars['--background'] || '#09090b',
            } as React.CSSProperties}
          >
            <DeviceFrame
              device={device}
              showDeviceSwitcher={false}
              showFrame={true}
              backgroundColor="var(--background)"
            >
              <div
                className="min-h-full flex items-center justify-center p-8"
                style={cssVarsStyle as React.CSSProperties}
              >
                {createElement(entry.component, prepareProps())}
              </div>
            </DeviceFrame>
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
