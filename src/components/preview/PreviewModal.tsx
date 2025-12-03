'use client';

import { Dialog, DialogContent, DialogTitle } from '@/shadcn_ui/dialog';
import { useCanvasStore } from '@/stores/canvas-store';
import { DevicePreview } from './DevicePreview';
import { useI18n } from '@/lib/i18n/use-i18n';
import { useEffect, useState } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function PreviewModal() {
  const { showPreviewModal, togglePreviewModal, selectedId, components } = useCanvasStore();
  const { t } = useI18n();
  
  const selectedComponent = components.find(c => c.id === selectedId);
  const [isOpen, setIsOpen] = useState(showPreviewModal);

  // Sync internal state with store
  useEffect(() => {
    setIsOpen(showPreviewModal);
  }, [showPreviewModal]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      togglePreviewModal();
    }
  };

  if (!selectedComponent) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="!max-w-[calc(100vw-4rem)] !w-[calc(100vw-4rem)] !h-[calc(100vh-4rem)] flex flex-col p-0 gap-0 overflow-hidden bg-[var(--surface-2)] border-none text-[var(--foreground)] shadow-2xl outline-none" showCloseButton={true}>
        <VisuallyHidden>
          <DialogTitle>{t('previewButton')} - {selectedComponent.label}</DialogTitle>
        </VisuallyHidden>
        <div className="flex-1 overflow-hidden w-full h-full relative">
          <DevicePreview componentId={selectedComponent.id} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
