'use client';

import { createElement } from 'react';
import { useGalleryStore, type GalleryComponent } from '@/stores/gallery-store';
import { getComponentEntry } from '@/registry/component-registry';
import { useI18n } from '@/lib/i18n/use-i18n';
import { getLocalizedPropValue } from '@/lib/i18n/utils';
import type { MessageKey } from '@/lib/i18n/messages';
import { Code } from 'lucide-react';

interface ComponentCardProps {
  component: GalleryComponent;
}

export function ComponentCard({ component }: ComponentCardProps) {
  const { openDetailModal } = useGalleryStore();
  const { t } = useI18n();

  const entry = getComponentEntry(component.type);
  const label = component.labelKey ? t(component.labelKey as MessageKey, component.label) : component.label;

  const renderComponent = () => {
    if (!entry) {
      return (
        <div className="px-4 py-2 rounded border text-sm font-medium bg-muted text-muted-foreground">
          {component.label}
        </div>
      );
    }

    const props: Record<string, any> = {
      ...entry.defaultProps,
      ...component.props,
    };

    // Localize props
    entry.props.forEach((propMeta) => {
      props[propMeta.name] = getLocalizedPropValue(props[propMeta.name], propMeta, t);
    });

    // Localize options
    if (props.options && Array.isArray(props.options)) {
      props.options = props.options.map((opt: { label: string; value: string; labelKey?: string }) => ({
        ...opt,
        label: opt.labelKey ? t(opt.labelKey as MessageKey) : opt.label,
      }));
    }

    // Localize items
    if (props.items && Array.isArray(props.items)) {
      props.items = props.items.map((item: { label: string; content: string; labelKey?: string; contentKey?: string }) => ({
        ...item,
        label: item.labelKey ? t(item.labelKey as MessageKey) : item.label,
        content: item.contentKey ? t(item.contentKey as MessageKey) : item.content,
      }));
    }

    return createElement(entry.component, props);
  };

  return (
    <div
      onClick={() => openDetailModal(component.id)}
      className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Preview Area */}
      <div className="relative flex items-center justify-center min-h-[180px] p-6 bg-muted/30">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Component */}
        <div className="relative z-10 flex items-center justify-center">
          {renderComponent()}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-card">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground capitalize">{component.category}</span>
        </div>

        {/* Code Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openDetailModal(component.id);
          }}
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title="View Code"
        >
          <Code className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
