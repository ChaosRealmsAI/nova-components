'use client';

import { useCallback, useEffect, useState } from 'react';

interface ResizeHandleProps {
  direction: 'horizontal' | 'vertical'; // horizontal = 左右拖, vertical = 上下拖
  onResize: (delta: number) => void;
  onResizeEnd?: () => void;
  className?: string;
}

export function ResizeHandle({
  direction,
  onResize,
  onResizeEnd,
  className = ''
}: ResizeHandleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos(direction === 'horizontal' ? e.clientX : e.clientY);
  }, [direction]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const currentPos = direction === 'horizontal' ? e.clientX : e.clientY;
      const delta = currentPos - startPos;
      if (delta !== 0) {
        onResize(delta);
        setStartPos(currentPos);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      onResizeEnd?.();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startPos, direction, onResize, onResizeEnd]);

  const isHorizontal = direction === 'horizontal';

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`
        ${isHorizontal ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'}
        bg-white/5 hover:bg-violet-500/50 transition-colors
        ${isDragging ? 'bg-violet-500/70' : ''}
        ${isHorizontal ? 'hover:w-1' : 'hover:h-1'}
        shrink-0 relative group
        ${className}
      `}
    >
      {/* 扩大点击区域 */}
      <div
        className={`
          absolute
          ${isHorizontal
            ? 'w-3 h-full -left-1 top-0'
            : 'h-3 w-full -top-1 left-0'
          }
        `}
      />
    </div>
  );
}
