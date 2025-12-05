'use client';

import { useGalleryStore } from '@/stores/gallery-store';
import { ComponentCard } from './ComponentCard';

export function ComponentGrid() {
  const { getFilteredComponents } = useGalleryStore();
  const components = getFilteredComponents();

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {components.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>

      {components.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <p className="text-lg">No components found</p>
        </div>
      )}
    </div>
  );
}
