import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';
import { buttonBaseConfig } from '@/components/nova-ui/atmos/button/button.config';
import { badgeBaseConfig } from '@/components/nova-ui/atmos/badge/badge.config';
import { inputBaseConfig } from '@/components/nova-ui/atmos/input/input.config';
import { labelBaseConfig } from '@/components/nova-ui/atmos/label/label.config';
import { checkboxBaseConfig } from '@/components/nova-ui/atmos/checkbox/checkbox.config';
import { switchBaseConfig } from '@/components/nova-ui/atmos/switch/switch.config';
import { sliderBaseConfig } from '@/components/nova-ui/atmos/slider/slider.config';
import { progressBaseConfig } from '@/components/nova-ui/atmos/progress/progress.config';
import { radioGroupBaseConfig, radioGroupItemBaseConfig } from '@/components/nova-ui/atmos/radio-group/radio-group.config';
import { separatorBaseConfig } from '@/components/nova-ui/atmos/separator/separator.config';
import { skeletonBaseConfig } from '@/components/nova-ui/atmos/skeleton/skeleton.config';
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
    Button: {
      extend: buttonBaseConfig,
    },
    Badge: {
      extend: badgeBaseConfig,
    },
    Input: {
      extend: inputBaseConfig,
    },
    Label: {
      extend: labelBaseConfig,
    },
    Checkbox: {
      extend: checkboxBaseConfig,
    },
    Switch: {
      extend: switchBaseConfig,
    },
    Slider: {
      extend: sliderBaseConfig,
    },
    Progress: {
      extend: progressBaseConfig,
    },
    RadioGroup: {
      extend: radioGroupBaseConfig,
    },
    RadioGroupItem: {
      extend: radioGroupItemBaseConfig,
    },
    Separator: {
      extend: separatorBaseConfig,
    },
    Skeleton: {
      extend: skeletonBaseConfig,
    },
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,
    Card: cardConfig,
  },
};
