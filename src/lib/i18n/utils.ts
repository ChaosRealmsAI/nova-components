import { MessageKey } from './messages';
import { PropMeta } from '@/registry/components';

/**
 * 根据当前语言解析属性值
 *
 * 逻辑：
 * 如果当前值等于组件定义的默认值 (defaultValue)，
 * 且该属性配置了 defaultValueKey，
 * 则返回翻译后的默认值。
 * 否则返回原值（用户已修改的值）。
 *
 * @param value 当前属性值
 * @param propMeta 属性元数据
 * @param t 翻译函数
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLocalizedPropValue(value: any, propMeta: PropMeta | undefined, t: (key: MessageKey) => string): any {
  if (!propMeta) return value;

  // 如果值与默认值严格相等（通常是英文原始值），且配置了翻译键
  if (value === propMeta.defaultValue && propMeta.defaultValueKey) {
    return t(propMeta.defaultValueKey);
  }

  return value;
}
