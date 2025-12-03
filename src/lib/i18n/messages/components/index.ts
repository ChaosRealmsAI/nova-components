import type { MessageModule } from '../../types';
import { typesMessages } from './_types';
import { propsMessages } from './_props';
import { valuesMessages } from './_values';
import { atomsMessages } from './atmos';
import { blocksMessages } from './blocks';

export const componentsMessages: MessageModule = {
  ...typesMessages,
  ...propsMessages,
  ...valuesMessages,
  ...atomsMessages,
  ...blocksMessages,
};
