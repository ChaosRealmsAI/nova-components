'use client';

import { ReactNode } from 'react';
import { useLayoutStore } from '@/stores/layout-store';
import { DevModePanel } from '@/components/devmode';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  canvas: ReactNode;
  rightPanel: ReactNode;
}

export function MainLayout({
  canvas,
  rightPanel,
}: MainLayoutProps) {
  const {
    showBottomPanel,
    bottomPanelHeight,
    toggleBottomPanel,
  } = useLayoutStore();

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Layer 0: Full Screen Canvas */}
      <div className="absolute inset-0 z-0">
        {canvas}
      </div>

      {/* Layer 1: Floating Bottom Panel (DevMode) */}
      {showBottomPanel && (
        <div
          className={cn(
            "absolute bottom-4 left-4 right-[370px] z-20",
            "rounded-[2rem] border border-border/50",
            "bg-surface-1 backdrop-blur-xl shadow-2xl",
            "overflow-hidden transition-all duration-300 ease-in-out"
          )}
          style={{ height: bottomPanelHeight }}
        >
          <DevModePanel onClose={() => toggleBottomPanel(false)} />
        </div>
      )}

      {/* Layer 2: Floating Right Panel (Inspector) */}
      <aside
        className={cn(
          "absolute top-4 right-4 bottom-4 w-[340px] z-30",
          "flex flex-col"
        )}
      >
        <div className={cn(
          "flex-1 flex flex-col",
          "rounded-[2rem] border border-border/50",
          "bg-surface-1/85 backdrop-blur-xl shadow-2xl",
          "overflow-hidden"
        )}>
          {rightPanel}
        </div>
      </aside>
    </main>
  );
}
