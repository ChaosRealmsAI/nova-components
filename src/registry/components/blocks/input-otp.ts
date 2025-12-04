/**
 * InputOTP Component Entry
 */

import { InputOTPDemo, inputOtpAtoms } from '@/components/nova-ui/blocks/input-otp';
import type { ComponentRegistryEntry } from '../types';

export const inputOtpEntry: ComponentRegistryEntry = {
  type: 'input-otp',
  label: 'Input OTP',
  labelKey: 'componentTypeInputOTP',
  category: 'blocks',
  component: InputOTPDemo,
  baseConfig: null,
  atoms: inputOtpAtoms,
  props: [
    {
      name: 'maxLength',
      type: 'number',
      label: 'Max Length',
      labelKey: 'propMaxLength',
      defaultValue: 6,
    },
  ],
  defaultProps: {
    maxLength: 6,
  },
  availableEffects: [],
};
