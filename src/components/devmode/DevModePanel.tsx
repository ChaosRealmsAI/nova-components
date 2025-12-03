'use client';

import { useState, useMemo, useEffect } from 'react';
import { X, Code2, MessageSquareText, Copy, Check } from 'lucide-react';
import { FileTree } from './FileTree';
import { CodeDisplay } from './CodeDisplay';
import { useCanvasStore } from '@/stores/canvas-store';
import { useThemeStore } from '@/stores/theme-store';
import { generateExportPackage, copyToClipboard, type VirtualFile } from '@/generator/codegen';
import { getAllThemes } from '@/lib/themes';
import { useI18n } from '@/lib/i18n/use-i18n';

interface DevModePanelProps {
  onClose?: () => void;
}

interface GeneratedResult {
  files: VirtualFile[];
  fileMap: Record<string, string>;
  filePaths: string[];
  defaultFile: string;
}

export function DevModePanel({ onClose }: DevModePanelProps) {
  const [activeTab, setActiveTab] = useState<'source' | 'prompt'>('source');
  const [activeFile, setActiveFile] = useState<string>('');
  const [isCopying, setIsCopying] = useState(false);
  
  // Async generation state
  const [generatedResult, setGeneratedResult] = useState<GeneratedResult | null>(null);

  const { t, locale } = useI18n();

  // 获取选中组件和主题
  const { selectedId, components } = useCanvasStore();
  const { theme, customTokens } = useThemeStore();

  // 获取选中组件
  const selectedComponent = useMemo(
    () => components.find((c) => c.id === selectedId),
    [components, selectedId]
  );

  // 生成代码 (Async Effect)
  useEffect(() => {
    if (!selectedComponent) {
      setGeneratedResult(null);
      return;
    }

    let isMounted = true;

    const runGeneration = async () => {
      try {
        // ADR-006: 传入所有主题和当前选中的主题 ID
        const allThemes = getAllThemes();
        const result = await generateExportPackage(
          selectedComponent,
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

        // ADR-002: 移除 sandpackKey，不再使用 Sandpack
        // Preview 现在直接渲染组件，与 Canvas 物理同源
        setGeneratedResult({
          files: result.files,
          fileMap,
          filePaths,
          defaultFile: instanceFile,
        });
      } catch (error) {
        console.error("Failed to generate export package:", error);
      }
    };

    runGeneration();

    return () => {
      isMounted = false;
    };
  }, [selectedComponent, theme, customTokens, t, locale]);

  // 重置 activeFile 当 defaultFile 变化时
  useEffect(() => {
    if (generatedResult?.defaultFile) {
      setActiveFile(generatedResult.defaultFile);
    }
  }, [generatedResult?.defaultFile]);

  // 解构 generatedResult，提供默认空值
  // ADR-002: 移除 sandpackKey，不再使用 Sandpack
  const { files, fileMap, filePaths } = generatedResult || {
    files: [] as VirtualFile[],
    fileMap: {} as Record<string, string>,
    filePaths: [] as string[],
  };

  const currentCode = fileMap[activeFile] || (generatedResult ? '// Select a file to view code' : '// Loading...');

  const handleCopyAll = async () => {
    setIsCopying(true);
    // 将所有文件合并成一个字符串
    const allCode = files
      .map((file) => {
        const separator = '='.repeat(60);
        return `// ${separator}\n// 📄 ${file.path}\n// ${separator}\n\n${file.content}`;
      })
      .join('\n\n');

    const success = await copyToClipboard(allCode);
    if (success) {
      setTimeout(() => setIsCopying(false), 2000);
    } else {
      setIsCopying(false);
    }
  };

  // 无选中组件时的空状态
  if (!selectedComponent) {
    return (
      <div className="h-full flex flex-col border-t border-[var(--border)] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] bg-[var(--surface-1)]">
        <div className="h-10 border-b border-[var(--border)] flex items-center justify-between px-4 shrink-0 bg-[var(--surface-1)]">
          <span className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest">
            {t('devMode')}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-[var(--muted-foreground)]">
            <Code2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-[length:var(--text-sm)]">{t('devModeSelectComponent')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col border-t border-[var(--border)] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] bg-[var(--surface-1)]">
      {/* Panel Header */}
      <div className="h-10 border-b border-[var(--border)] flex items-center justify-between px-4 shrink-0 bg-[var(--surface-1)]">
        <div className="flex gap-1 items-center">
          <span className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest mr-4">
            {t('devMode')}
          </span>

          {/* Tabs */}
          <button
            onClick={() => setActiveTab('source')}
            className={`
              text-[length:var(--text-xs)] font-medium h-8 px-3 rounded-t flex items-center gap-2 transition-colors
              ${activeTab === 'source'
                ? 'bg-[var(--surface-2)] text-[var(--foreground)] border-t border-x border-[var(--border)] relative top-px'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }
            `}
          >
            <Code2 className="w-3 h-3" />
            {t('devModeSource')}
          </button>
          <button
            onClick={() => setActiveTab('prompt')}
            className={`
              text-[length:var(--text-xs)] font-medium h-8 px-3 rounded-t flex items-center gap-2 transition-colors
              ${activeTab === 'prompt'
                ? 'bg-[var(--surface-2)] text-[var(--foreground)] border-t border-x border-[var(--border)] relative top-px'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }
            `}
          >
            <MessageSquareText className="w-3 h-3" />
            {t('devModePrompts')}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Code Button */}
          <button
            onClick={handleCopyAll}
            disabled={isCopying}
            className={`
              flex items-center gap-1.5 px-2 py-1.5 text-[length:var(--text-xs)] border rounded transition-all min-w-[90px] justify-center
              ${isCopying
                ? 'bg-green-500/20 text-green-400 border-green-500/50'
                : 'border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]'
              }
            `}
            title={t('codeCopyAll')}
          >
            {isCopying ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t('codeCopied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t('codeCopy')} All</span>
              </>
            )}
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 ml-2 rounded transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {activeTab === 'source' ? (
          <>
            {/* Column 1: File Explorer */}
            <FileTree
              files={filePaths}
              activeFile={activeFile}
              onSelect={setActiveFile}
            />

            {/* Column 2: Code Display - ADR-002: Preview 已移除，Canvas 即预览 */}
            <div className="flex-1 min-w-0 flex flex-col bg-[var(--surface-1)]">
              <div className="h-10 border-b border-[var(--border)] flex items-center px-4 shrink-0">
                <span className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest">
                  {activeFile ? activeFile.split('/').pop() : 'Code'}
                </span>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <CodeDisplay code={currentCode} filename={activeFile} />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Prompt Tab - Mock */}
            <div className="w-48 border-r border-[var(--border)] flex flex-col shrink-0 bg-[var(--surface-1)]">
              <div className="px-3 py-2.5 text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest border-b border-[var(--border)]">
                {t('devModePrompts')}
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {[t('promptComponentSpec'), t('promptStyleGuide'), t('promptAccessibility')].map((prompt, i) => (
                  <button
                    key={prompt}
                    className={`
                      w-full px-3 py-2 text-[length:var(--text-xs)] text-left transition-colors
                      ${i === 0
                        ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-l-2 border-[var(--primary)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--surface-2)] border-l-2 border-transparent'
                      }
                    `}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Content - ADR-002: Preview 已移除，Canvas 即预览 */}
            <div className="flex-1 min-w-0 flex flex-col bg-[var(--surface-1)]">
              <div className="flex-1 overflow-auto p-4">
                <pre className="text-[length:var(--text-xs)] text-[var(--foreground)] whitespace-pre-wrap font-mono leading-relaxed">
{`# ${selectedComponent.label} Component Specification

## Visual Design
- Theme: ${theme.name}
- Variant: ${selectedComponent.props?.variant || 'default'}
- Size: ${selectedComponent.props?.size || 'default'}

## Properties
${Object.entries(selectedComponent.props || {})
  .map(([key, value]) => `- ${key}: ${JSON.stringify(value)}`)
  .join('\n')}

## Interactions
- Hover: Theme-specific hover styles
- Active: Scale 0.98
- Focus: Ring outline`}
                </pre>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}