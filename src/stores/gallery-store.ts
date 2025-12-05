'use client';

import { create } from 'zustand';
import type { ComponentCategory, ComponentType } from '@/types';
import type { MessageKey } from '@/lib/i18n/messages';
import { COMPONENT_REGISTRY } from '@/registry/component-registry';

// ============================================================================
// Types
// ============================================================================

export interface GalleryComponent {
  id: string;
  type: ComponentType;
  category: ComponentCategory;
  label: string;
  labelKey?: MessageKey;
  props: Record<string, unknown>;
}

interface GalleryStore {
  // Components
  components: GalleryComponent[];

  // Filter
  filter: 'all' | ComponentCategory;
  setFilter: (filter: 'all' | ComponentCategory) => void;
  getFilteredComponents: () => GalleryComponent[];

  // Selection (for detail modal)
  selectedId: string | null;
  select: (id: string | null) => void;
  getSelectedComponent: () => GalleryComponent | null;

  // Modal
  showDetailModal: boolean;
  openDetailModal: (id: string) => void;
  closeDetailModal: () => void;
}

// ============================================================================
// Component Order
// ============================================================================

const COMPONENT_ORDER: string[] = [
  // Atoms - Interactive
  'button', 'toggle', 'checkbox', 'switch',
  // Atoms - Display
  'badge', 'kbd',
  // Atoms - Form
  'input', 'textarea', 'label',
  // Atoms - Range
  'slider', 'progress', 'radio-group',
  // Atoms - Status
  'spinner', 'skeleton', 'avatar',
  // Atoms - Overlay
  'popover', 'tooltip',
  // Atoms - Layout
  'separator', 'aspect-ratio', 'scroll-area', 'card', 'collapsible',
  // Blocks
  'alert-dialog', 'tabs', 'dropdown-menu', 'select', 'combobox', 'pagination',
  'form', 'table', 'data-table', 'toggle-group', 'button-group', 'alert',
  'breadcrumb', 'input-group', 'input-otp', 'drawer', 'sheet', 'hover-card',
  'context-menu', 'calendar', 'date-picker', 'carousel', 'navigation-menu',
  'resizable', 'sonner', 'accordion', 'dialog', 'sidebar',
];

// ============================================================================
// Generate Components
// ============================================================================

function generateComponents(): GalleryComponent[] {
  const components: GalleryComponent[] = [];

  for (const componentType of COMPONENT_ORDER) {
    const entry = COMPONENT_REGISTRY[componentType];
    if (!entry) continue;

    components.push({
      id: componentType,
      type: componentType as ComponentType,
      category: entry.category,
      label: entry.label,
      labelKey: entry.labelKey,
      props: { ...entry.defaultProps },
    });
  }

  return components;
}

const initialComponents = generateComponents();

// ============================================================================
// Store
// ============================================================================

export const useGalleryStore = create<GalleryStore>()((set, get) => ({
  // Components
  components: initialComponents,

  // Filter
  filter: 'all',
  setFilter: (filter) => set({ filter }),
  getFilteredComponents: () => {
    const { components, filter } = get();
    if (filter === 'all') return components;
    return components.filter((c) => c.category === filter);
  },

  // Selection
  selectedId: null,
  select: (id) => set({ selectedId: id }),
  getSelectedComponent: () => {
    const { components, selectedId } = get();
    return components.find((c) => c.id === selectedId) || null;
  },

  // Modal
  showDetailModal: false,
  openDetailModal: (id) => set({ selectedId: id, showDetailModal: true }),
  closeDetailModal: () => set({ showDetailModal: false }),
}));
