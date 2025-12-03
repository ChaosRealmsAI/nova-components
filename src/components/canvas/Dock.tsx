'use client';

import { useState, useEffect, useRef } from 'react';
import { useCanvasStore } from '@/stores/canvas-store';
import { useLayoutStore } from '@/stores/layout-store';
import type { ComponentCategory } from '@/types';
import { useEditor } from 'tldraw';
import { 
  MousePointer2, 
  Hand, 
  BookOpen, 
  LayoutGrid, 
  Atom, 
  Box, 
  Columns, 
  LayoutPanelTop,
  type LucideIcon
} from 'lucide-react';
import { useI18n } from '@/lib/i18n/use-i18n';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// ============================================================================
// Types & Constants
// ============================================================================

type FilterOption = 'all' | ComponentCategory;

interface DockItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  mouseX: any;
  showCount?: number;
  showDot?: boolean;
}

const FILTER_ICONS: Record<FilterOption, LucideIcon> = {
  all: LayoutGrid,
  atoms: Atom,
  blocks: Box,
  sections: Columns,
  templates: LayoutPanelTop,
};

const FILTER_OPTIONS: { id: FilterOption; labelKey: 'filterAll' | 'filterAtoms' | 'filterBlocks' | 'filterSections' | 'filterTemplates' }[] = [
  { id: 'all', labelKey: 'filterAll' },
  { id: 'atoms', labelKey: 'filterAtoms' },
  { id: 'blocks', labelKey: 'filterBlocks' },
  { id: 'sections', labelKey: 'filterSections' },
  { id: 'templates', labelKey: 'filterTemplates' },
];

// ============================================================================
// Dock Item Component
// ============================================================================

function DockItem({ icon: Icon, label, isActive, isDisabled, onClick, mouseX, showCount, showDot }: DockItemProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setHovered] = useState(false);

  // Magnification Logic
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative flex flex-col items-center group">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && !isDisabled && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: -10, x: "-50%" }}
            exit={{ opacity: 0, y: 2 }}
            className="absolute -top-8 left-1/2 px-2 py-1 text-[length:var(--text-xs)] font-medium text-primary-foreground bg-primary rounded shadow-lg whitespace-nowrap pointer-events-none z-50"
          >
            {label}
            {showCount !== undefined && showCount > 0 && (
              <span className="ml-1 opacity-60">({showCount})</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Button */}
      <motion.button
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ width }}
        className={`
          aspect-square rounded-2xl flex items-center justify-center relative
          transition-colors duration-200
          ${isActive ? 'bg-primary/20 shadow-inner' : 'hover:bg-muted/50'}
          ${isDisabled ? 'opacity-30 cursor-not-allowed grayscale' : 'cursor-pointer'}
        `}
      >
        <Icon className={`w-full h-full p-2.5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} strokeWidth={1.5} />
      </motion.button>

      {/* Active Dot Indicator */}
      {showDot && (
        <div className="w-1 h-1 rounded-full bg-primary absolute -bottom-2" />
      )}
    </div>
  );
}

// ============================================================================
// Main Dock Component
// ============================================================================

export function Dock() {
  const { filter, setFilter, components, showAboutModal, toggleAboutModal } = useCanvasStore();
  const { showBottomPanel, bottomPanelHeight } = useLayoutStore();
  const editor = useEditor();
  const { t } = useI18n();
  const [activeTool, setActiveTool] = useState('select');
  const mouseX = useMotionValue(Infinity);

  // Sync active tool from editor
  useEffect(() => {
    if (!editor) return;
    const initialTool = editor.getCurrentToolId();
    
    const handleChange = () => {
      setActiveTool(editor.getCurrentToolId());
    };

    const cleanup = editor.store.listen(handleChange);
    
    queueMicrotask(() => setActiveTool(initialTool));
    return () => cleanup();
  }, [editor]);

  const getCategoryCount = (category: FilterOption) => {
    if (category === 'all') return components.length;
    return components.filter((c) => c.category === category).length;
  };

  return (
    <motion.nav
      role="navigation"
      initial={{ bottom: 32 }}
      animate={{ 
        bottom: showBottomPanel ? bottomPanelHeight + 32 : 32 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="absolute left-1/2 -translate-x-1/2 z-40 flex items-end gap-4"
    >
      <div className="h-[58px] flex items-end gap-2 px-4 pb-2 rounded-3xl border border-border/50 bg-surface-1 backdrop-blur-xl shadow-2xl">
        
        {/* Tools Group */}
        <div className="flex items-center gap-2 pb-0.5">
          <DockItem
            icon={MousePointer2}
            label={t('canvasSelectTool')}
            isActive={activeTool === 'select'}
            onClick={() => editor?.setCurrentTool('select')}
            mouseX={mouseX}
            showDot={activeTool === 'select'}
          />
          <DockItem
            icon={Hand}
            label={t('canvasHandTool')}
            isActive={activeTool === 'hand'}
            onClick={() => editor?.setCurrentTool('hand')}
            mouseX={mouseX}
            showDot={activeTool === 'hand'}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-border mx-1 mb-2.5" />

        {/* Filters Group */}
        <div className="flex items-center gap-2 pb-0.5">
          {FILTER_OPTIONS.map((option) => {
            const count = getCategoryCount(option.id);
            const isDisabled = count === 0 && option.id !== 'all';
            
            return (
              <DockItem
                key={option.id}
                icon={FILTER_ICONS[option.id]}
                label={t(option.labelKey)}
                isActive={filter === option.id}
                isDisabled={isDisabled}
                onClick={() => !isDisabled && setFilter(option.id)}
                mouseX={mouseX}
                showCount={count > 0 && option.id !== 'all' ? count : undefined}
                showDot={filter === option.id}
              />
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-border mx-1 mb-2.5" />

        {/* Extras Group */}
        <div className="flex items-center gap-2 pb-0.5">
          <DockItem
            icon={BookOpen}
            label="About & Dev Log"
            isActive={showAboutModal}
            onClick={toggleAboutModal}
            mouseX={mouseX}
            showDot={showAboutModal}
          />
        </div>
      </div>
    </motion.nav>
  );
}