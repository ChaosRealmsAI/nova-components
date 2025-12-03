'use client';

import { useState, useEffect, useRef } from 'react';
import { Copy, Check, Loader2 } from 'lucide-react';
import { codeToHtml } from 'shiki';
import { useThemeStore } from '@/stores/theme-store';

interface CodeDisplayProps {
  code: string;
  filename: string;
}

function getLanguage(filename: string): string {
  if (filename.endsWith('.tsx')) return 'tsx';
  if (filename.endsWith('.ts')) return 'typescript';
  if (filename.endsWith('.css')) return 'css';
  if (filename.endsWith('.json')) return 'json';
  return 'typescript';
}

export function CodeDisplay({ code, filename }: CodeDisplayProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const codeRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeStore();

  // 获取语言
  const language = getLanguage(filename);
  
  // 根据主题深浅选择 Shiki 主题
  const shikiTheme = theme.isDark ? 'github-dark-default' : 'github-light-default';

  // Shiki 高亮
  useEffect(() => {
    if (!code || code === '// Select a file to view code') {
      setHighlightedHtml('');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    codeToHtml(code, {
      lang: language,
      theme: shikiTheme,
    })
      .then((html) => {
        setHighlightedHtml(html);
      })
      .catch((err) => {
        console.error('Shiki highlighting failed:', err);
        setHighlightedHtml('');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [code, language, shikiTheme]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className="h-full flex flex-col relative min-w-0 overflow-hidden group bg-[var(--surface-1)]">
      {/* Copy Button */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleCopy}
          className={`
            p-2 rounded-md border border-[var(--border)] transition-all shadow-lg backdrop-blur-sm
            ${isCopied
              ? 'bg-green-500/20 text-green-400 border-green-500/50'
              : 'bg-[var(--surface-2)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            }
          `}
          title="Copy file"
        >
          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-auto flex items-stretch">
          {/* 行号列 */}
          <div
            className="sticky left-0 z-10 shrink-0 text-right select-none border-r border-[var(--border)] text-[var(--muted-foreground)] bg-[var(--surface-1)]"
            style={{
              fontFamily: 'var(--font-mono, "Fira Code", "JetBrains Mono", monospace)',
              fontSize: '13px',
              lineHeight: '1.5rem',
              padding: '1rem 0.75rem 1rem 1rem',
              minHeight: '100%',
            }}
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* 代码列 */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-5 h-5 animate-spin text-[var(--muted-foreground)]" />
              </div>
            ) : highlightedHtml ? (
              <div
                ref={codeRef}
                className="shiki-code-wrapper"
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                style={{
                  padding: '1rem 1.5rem 1rem 1rem',
                }}
              />
            ) : (
              <pre
                className="text-[var(--foreground)]"
                style={{
                  fontFamily: 'var(--font-mono, "Fira Code", "JetBrains Mono", monospace)',
                  fontSize: '13px',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem 1rem 1rem',
                  margin: 0,
                  whiteSpace: 'pre',
                  wordBreak: 'normal',
                }}
              >
                <code>{code}</code>
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Shiki 样式覆盖 - 禁止换行，确保对齐 */}
      <style>{`
        .shiki-code-wrapper {
          font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
          font-size: 13px;
          line-height: 1.5rem;
          width: 100%;
        }
        .shiki-code-wrapper pre {
          margin: 0 !important;
          padding: 0 !important;
          background: transparent !important;
          white-space: pre !important;
          word-break: normal !important;
        }
        .shiki-code-wrapper code {
          display: block;
          width: 100%;
          min-width: max-content;
          background: transparent !important;
          white-space: pre !important;
        }
      `}</style>
    </div>
  );
}
