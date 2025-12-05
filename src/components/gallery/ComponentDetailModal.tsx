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
import { X, Copy, Check, Monitor, Tablet, Smartphone, Code2 } from 'lucide-react';
import { DeviceFrame, type DeviceId, devices } from '@/components/preview/DeviceFrame';
import { FileTree } from '@/components/devmode/FileTree';
import { CodeDisplay } from '@/components/devmode/CodeDisplay';
import { generateExportPackage, copyToClipboard, type VirtualFile } from '@/generator/codegen';
import { getAllThemes } from '@/lib/themes';
import type { ComponentInstance } from '@/types';

interface GeneratedResult {
  files: VirtualFile[];
  fileMap: Record<string, string>;
  filePaths: string[];
  defaultFile: string;
}

export function ComponentDetailModal() {
  const { showDetailModal, closeDetailModal, getSelectedComponent } = useGalleryStore();
  const { theme, customTokens, getMergedCssVars } = useThemeStore();
  const { t, locale } = useI18n();

  const [copied, setCopied] = useState(false);
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});
  const [device, setDevice] = useState<DeviceId>('desktop');
  const [showCode, setShowCode] = useState(false);
  const [activeFile, setActiveFile] = useState<string>('');
  const [generatedResult, setGeneratedResult] = useState<GeneratedResult | null>(null);

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

  // Generate code when component or theme changes
  useEffect(() => {
    if (!selectedComponent || !entry) {
      setGeneratedResult(null);
      return;
    }

    let isMounted = true;

    const runGeneration = async () => {
      try {
        // Create a ComponentInstance compatible object
        const componentInstance: ComponentInstance = {
          id: selectedComponent.id,
          type: selectedComponent.type,
          category: selectedComponent.category,
          label: selectedComponent.label,
          labelKey: selectedComponent.labelKey,
          props: componentProps,
          x: 0,
          y: 0,
          width: 100,
          height: 50,
        };

        const allThemes = getAllThemes();
        const result = await generateExportPackage(
          componentInstance,
          allThemes,
          theme.id,
          t,
          customTokens
        );

        if (!isMounted) return;

        const fileMap = Object.fromEntries(
          result.files.map((f) => ['/' + f.path, f.content])
        );
        const filePaths = result.files.map((f) => '/' + f.path);
        const instanceFile = filePaths.find((f) => f.startsWith('/My')) || filePaths[0];

        setGeneratedResult({
          files: result.files,
          fileMap,
          filePaths,
          defaultFile: instanceFile,
        });
      } catch (error) {
        console.error('Failed to generate export package:', error);
      }
    };

    runGeneration();

    return () => {
      isMounted = false;
    };
  }, [selectedComponent?.id, componentProps, theme.id, customTokens, t, locale]);

  // Reset activeFile when defaultFile changes
  useEffect(() => {
    if (generatedResult?.defaultFile) {
      setActiveFile(generatedResult.defaultFile);
    }
  }, [generatedResult?.defaultFile]);

  if (!selectedComponent || !entry) return null;

  const label = selectedComponent.labelKey
    ? t(selectedComponent.labelKey as MessageKey, selectedComponent.label)
    : selectedComponent.label;

  const { files, fileMap, filePaths } = generatedResult || {
    files: [] as VirtualFile[],
    fileMap: {} as Record<string, string>,
    filePaths: [] as string[],
  };

  const currentCode = fileMap[activeFile] || (generatedResult ? t('selectFileToViewCode') : t('codeLoading'));

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

  const handleCopyAll = async () => {
    const allCode = files
      .map((file) => {
        const separator = '='.repeat(60);
        return `// ${separator}\n// ${file.path}\n// ${separator}\n\n${file.content}`;
      })
      .join('\n\n');

    const success = await copyToClipboard(allCode);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={showDetailModal} onOpenChange={(open) => !open && closeDetailModal()}>
      <DialogContent className="!max-w-[95vw] !w-[1400px] !h-[90vh] flex flex-col p-0 gap-0 overflow-hidden bg-background border-border" showCloseButton={false}>
        <VisuallyHidden>
          <DialogTitle>{label}</DialogTitle>
        </VisuallyHidden>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-border shrink-0">
          {/* Left: Title & Category */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{label}</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground capitalize">
              {selectedComponent.category === 'atoms' 
                ? t('categoryAtoms' as MessageKey, 'Atoms')
                : selectedComponent.category === 'blocks'
                ? t('categoryBlocks' as MessageKey, 'Blocks')
                : selectedComponent.category}
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
            <button
              onClick={() => setShowCode(!showCode)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                showCode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span className="font-medium">{t('codeButton')}</span>
            </button>
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="font-medium">{copied ? t('codeCopied') : t('codeCopyAll')}</span>
            </button>
            <button
              onClick={closeDetailModal}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
          {/* Top: Preview + Props */}
          <div className={`flex overflow-hidden ${showCode ? 'h-1/2' : 'flex-1'}`}>
            {/* Preview Area */}
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
            <div className="w-[280px] flex flex-col overflow-hidden shrink-0">
              <div className="px-4 py-2 border-b border-border shrink-0">
                <h3 className="text-sm font-semibold">{t('panelProperties')}</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {entry.props.filter((p) => p.type !== 'json').map((propMeta) => {
                  const propLabel = propMeta.labelKey ? t(propMeta.labelKey as MessageKey, propMeta.label) : (propMeta.label || propMeta.name);
                  return (
                  <div key={propMeta.name} className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      {propLabel}
                    </label>
                    {propMeta.type === 'boolean' ? (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={componentProps[propMeta.name] ?? false}
                          onChange={(e) => handlePropChange(propMeta.name, e.target.checked)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-xs text-muted-foreground">
                          {componentProps[propMeta.name] ? 'true' : 'false'}
                        </span>
                      </label>
                    ) : propMeta.options ? (
                      <select
                        value={componentProps[propMeta.name] ?? ''}
                        onChange={(e) => handlePropChange(propMeta.name, e.target.value)}
                        className="w-full px-2 py-1.5 text-xs rounded-md border border-border bg-background"
                      >
                        {propMeta.options.map((opt) => {
                          const optLabel = opt.labelKey ? t(opt.labelKey as MessageKey, opt.label) : opt.label;
                          return (
                            <option key={opt.value} value={opt.value}>
                              {optLabel}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={componentProps[propMeta.name] ?? ''}
                        onChange={(e) => handlePropChange(propMeta.name, e.target.value)}
                        className="w-full px-2 py-1.5 text-xs rounded-md border border-border bg-background"
                        placeholder={propLabel}
                      />
                    )}
                  </div>
                  );
                })}
                {entry.props.filter((p) => p.type !== 'json').length === 0 && (
                  <p className="text-xs text-muted-foreground">{t('noConfigurableProperties')}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom: Code Panel */}
          {showCode && (
            <div className="flex flex-col border-t border-border h-1/2">
              <div className="flex-1 flex overflow-hidden min-h-0">
                {/* File Tree */}
                <FileTree
                  files={filePaths}
                  activeFile={activeFile}
                  onSelect={setActiveFile}
                />

                {/* Code Display */}
                <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
                  <div className="h-8 border-b border-border flex items-center justify-between px-4 shrink-0 bg-muted/30">
                    <span className="text-xs font-medium text-muted-foreground">
                      {activeFile ? activeFile.split('/').pop() : t('selectFile')}
                    </span>
                    <button
                      onClick={() => setShowCode(false)}
                      className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <CodeDisplay code={currentCode} filename={activeFile} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
