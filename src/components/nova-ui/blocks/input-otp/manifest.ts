/**
 * InputOTP Component Manifest
 *
 * 单一数据源：导出配置 + 画布配置
 */

import type { ComponentManifest } from '@/registry/manifest-types';

export const manifest: ComponentManifest = {
  // 身份信息
  type: 'input-otp',
  name: 'InputOTP',
  category: 'blocks',
  label: 'Input OTP',
  labelKey: 'componentTypeInputOTP',

  // 导出配置
  files: {
    component: 'index.tsx',
    config: 'input-otp.config.ts',
  },

  themeConfigs: [
    { componentName: 'InputOTP', configName: 'inputOtpConfig' },
  ],

  themeFile: 'components/input-otp.ts',

  cssVars: [
    '--border',
    '--ring',
    '--foreground',
    '--input',
  ],

  dependencies: ['input'],

  exportOptions: {
    noChildren: true,
    customJsx: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    customImports: ['InputOTP', 'InputOTPGroup', 'InputOTPSlot', 'InputOTPSeparator'],
  },

  // 画布配置
  canvas: {
    size: { width: 280, height: 50 },
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
  },
};
