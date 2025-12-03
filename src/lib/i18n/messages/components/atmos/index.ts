import type { MessageModule } from '../../../types';
import { aspectratioMessages } from './aspect-ratio';
import { avatarMessages } from './avatar';
import { badgeMessages } from './badge';
import { buttonMessages } from './button';
import { cardMessages } from './card';
import { checkboxMessages } from './checkbox';
import { collapsibleMessages } from './collapsible';
import { inputMessages } from './input';
import { kbdMessages } from './kbd';
import { labelMessages } from './label';
import { popoverMessages } from './popover';
import { progressMessages } from './progress';
import { radiogroupMessages } from './radio-group';
import { scrollareaMessages } from './scroll-area';
import { separatorMessages } from './separator';
import { skeletonMessages } from './skeleton';
import { sliderMessages } from './slider';
import { spinnerMessages } from './spinner';
import { switchMessages } from './switch';
import { textareaMessages } from './textarea';
import { toggleMessages } from './toggle';
import { tooltipMessages } from './tooltip';

export const atomsMessages: MessageModule = {
  ...aspectratioMessages,
  ...avatarMessages,
  ...badgeMessages,
  ...buttonMessages,
  ...cardMessages,
  ...checkboxMessages,
  ...collapsibleMessages,
  ...inputMessages,
  ...kbdMessages,
  ...labelMessages,
  ...popoverMessages,
  ...progressMessages,
  ...radiogroupMessages,
  ...scrollareaMessages,
  ...separatorMessages,
  ...skeletonMessages,
  ...sliderMessages,
  ...spinnerMessages,
  ...switchMessages,
  ...textareaMessages,
  ...toggleMessages,
  ...tooltipMessages,
};
