import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';
import { buttonConfig } from './components/button';
import { badgeConfig } from './components/badge';
import { inputConfig } from './components/input';
import { textareaConfig } from './components/textarea';
import { labelConfig } from './components/label';
import { checkboxConfig } from './components/checkbox';
import { switchConfig } from './components/switch';
import { sliderConfig } from './components/slider';
import { progressConfig } from './components/progress';
import { radioGroupConfig, radioGroupItemConfig } from './components/radio-group';
import { separatorBaseConfig } from '@/components/nova-ui/atmos/separator/separator.config';
import { skeletonConfig } from './components/skeleton';
import { scrollAreaConfig, scrollBarConfig } from './components/scroll-area';
import { cardConfig } from './components/card';

/**
 * Shadcn Default Theme
 *
 * The classic look: clean, minimal, professional.
 * Uses standard border radius (0.5rem) and zinc colors.
 */

export const shadcnDefaultTheme: ThemeDefinition = {
  id: 'shadcn-default',
  name: 'Shadcn Default',

  isDark: meta.isDark,
  cssVars: tokens,

  components: {
    Button: buttonConfig,
    Badge: badgeConfig,
    Input: inputConfig,
    Textarea: textareaConfig,
    Label: labelConfig,
    Checkbox: checkboxConfig,
    Switch: switchConfig,
    Slider: sliderConfig,
    // Progress: {
    //   extend: progressBaseConfig,
    // },
    // RadioGroup: {
    //   extend: radioGroupBaseConfig,
    // },
    // RadioGroupItem: {
    //   extend: radioGroupItemBaseConfig,
    // },
    Separator: {
      extend: separatorBaseConfig,
    },
    // Skeleton: {
    //   extend: skeletonBaseConfig,
    // },
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,
    Card: cardConfig,
  },
};
