'use client';

import { Inspector } from '../inspector/Inspector';

export function Drawer() {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Inspector - Full Height */}
      <Inspector />
    </div>
  );
}
