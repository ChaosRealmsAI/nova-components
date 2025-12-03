import { useState, useLayoutEffect, RefObject } from 'react';

export interface ElementSize {
  width: number;
  height: number;
}

/**
 * 监听元素尺寸变化的 Hook
 * 使用 ResizeObserver 实时响应尺寸变化
 */
export function useElementSize<T extends HTMLElement>(
  ref: RefObject<T | null>
): ElementSize {
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 初始测量
    setSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });

    // 监听尺寸变化
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
