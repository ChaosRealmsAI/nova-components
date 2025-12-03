import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS class name merger
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 解析组件 ID
 *
 * selectedId 格式：
 * - "id" - 普通组件
 * - "id:childKey" - 子组件
 */
export function parseSelectedId(id: string | null): {
  parentId: string | null;
  childKey: string | null;
} {
  if (!id) return { parentId: null, childKey: null };
  const parts = id.split(':');
  return { parentId: parts[0], childKey: parts[1] || null };
}

/**
 * 构建组件 ID
 */
export function buildComponentId(parentId: string, childKey?: string | null): string {
  return childKey ? `${parentId}:${childKey}` : parentId;
}

/**
 * 首字母大写
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 组件类型转为 PascalCase
 * button -> Button
 * radio-group -> RadioGroup
 * login-block -> LoginBlock
 */
export function capitalizeComponentType(type: string): string {
  return type
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}