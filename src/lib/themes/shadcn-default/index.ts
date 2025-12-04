import type { ThemeDefinition } from '@/types';
import { tokens, meta } from './tokens';
import { buttonConfig } from './components/button';
import { badgeConfig } from './components/badge';
import { inputConfig } from './components/input';
import { kbdConfig } from './components/kbd';
import { textareaConfig } from './components/textarea';
import { labelConfig } from './components/label';
import { avatarConfig, avatarFallbackConfig } from './components/avatar';
import { checkboxConfig } from './components/checkbox';
import { switchConfig } from './components/switch';
import { sliderConfig } from './components/slider';
import { progressConfig } from './components/progress';
import { radioGroupConfig, radioGroupItemConfig } from './components/radio-group';
import { separatorConfig } from './components/separator';
import { spinnerConfig } from './components/spinner';
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
    Kbd: kbdConfig,
    Input: inputConfig,
    Textarea: textareaConfig,
    Label: labelConfig,
    Avatar: avatarConfig,
    AvatarFallback: avatarFallbackConfig,
    Checkbox: checkboxConfig,
    Switch: switchConfig,
    Slider: sliderConfig,
    Progress: progressConfig,
    RadioGroup: radioGroupConfig,
    RadioGroupItem: radioGroupItemConfig,
    Separator: separatorConfig,
    Skeleton: skeletonConfig,
    Spinner: spinnerConfig,
    ScrollArea: scrollAreaConfig,
    ScrollBar: scrollBarConfig,
    Card: cardConfig,
  },
};
