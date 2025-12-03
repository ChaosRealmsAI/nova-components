'use client';

import { useEffect, useRef } from 'react';
import { useThemeStore } from '@/stores/theme-store';

/**
 * Playground 主题 Provider
 *
 * 职责：
 * 1. 动态注入主题的 CSS 变量到页面根元素
 * 2. 动态注入用户自定义 token 覆盖
 * 3. 动态注入主题的 playgroundGlobalCss 到页面
 * 4. 监听主题/自定义配置变化并更新样式
 */
export function PlaygroundThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, customTokens } = useThemeStore();
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    // Sync dark mode class
    if (theme.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 创建或获取 style 元素
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      styleRef.current.id = 'playground-theme-styles';
      document.head.appendChild(styleRef.current);
    }

    // 构建 CSS 内容
    let cssContent = '';

    // 1. 注入主题 CSS 变量到 :root
    // 2. 注入用户自定义 token 覆盖（优先级高于主题默认）
    // 将两者合并生成，确保覆盖生效
    const mergedVars = { ...theme.cssVars, ...customTokens };
    const cssVarEntries = Object.entries(mergedVars)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');
    
    // Use multiple selectors to ensure we override globals.css .dark rules
    cssContent += `:root, .dark, .light {\n${cssVarEntries}\n}\n\n`;

    // 3. 注入 playgroundGlobalCss
    // 这些样式定义了 .playground-main, .playground-right-panel 等类的样式
    // 它们会消费上面的 :root 变量 (var(--xxx))
    if (theme.playgroundGlobalCss) {
      cssContent += theme.playgroundGlobalCss;
    }

    // 更新 style 内容
    styleRef.current.textContent = cssContent;

    // 清理函数
    return () => {
      // 保留 style 元素，只在组件卸载时移除
    };
  }, [theme, customTokens]);

  // 组件卸载时移除 style 元素
  useEffect(() => {
    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}