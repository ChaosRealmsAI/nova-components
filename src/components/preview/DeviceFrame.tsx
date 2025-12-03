'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { useI18n } from '@/lib/i18n/use-i18n';

// ============================================================================
// 设备配置
// ============================================================================

type Orientation = 'portrait' | 'landscape';

export const devices = {
  desktop: {
    id: 'desktop',
    name: 'Desktop',
    icon: Monitor,
    width: 1280,
    height: 800,
    hasNotch: false,
    hasFrame: true,
    hasBrowserChrome: true,  // 浏览器窗口风格
    radius: 12,
    supportsOrientation: false,
  },
  tablet: {
    id: 'tablet',
    name: 'iPad',
    icon: Tablet,
    width: 768,
    height: 1024,
    hasNotch: false,
    hasFrame: true,
    radius: 18,
    supportsOrientation: true,
  },
  mobile: {
    id: 'mobile',
    name: 'iPhone 14',
    icon: Smartphone,
    width: 390,
    height: 844,
    hasNotch: true,
    hasFrame: true,
    radius: 47,
    supportsOrientation: false,
  },
} as const;

export type DeviceId = keyof typeof devices;

// ============================================================================
// DeviceFrame Props
// ============================================================================

interface DeviceFrameProps {
  children: ReactNode;
  /** 初始设备，默认 desktop */
  defaultDevice?: DeviceId;
  /** 是否显示设备切换器 */
  showDeviceSwitcher?: boolean;
  /** 是否显示设备外框（手机/平板壳） */
  showFrame?: boolean;
  /** 容器样式 */
  className?: string;
  /** 背景色（用于预览区域） */
  backgroundColor?: string;
  /** 当设备改变时的回调，传递当前设备宽高 */
  onDeviceChange?: (device: DeviceId, width: number, height: number) => void;
}

export function DeviceFrame({
  children,
  defaultDevice = 'desktop',
  showDeviceSwitcher = true,
  showFrame = true,
  className = '',
  backgroundColor = 'var(--background)',
  onDeviceChange,
}: DeviceFrameProps) {
  const [activeDevice, setActiveDevice] = useState<DeviceId>(defaultDevice);
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const { t } = useI18n();

  const baseDevice = devices[activeDevice];

  // 根据方向计算实际设备尺寸
  const device = {
    ...baseDevice,
    width: orientation === 'landscape' && baseDevice.supportsOrientation
      ? baseDevice.height
      : baseDevice.width,
    height: orientation === 'landscape' && baseDevice.supportsOrientation
      ? baseDevice.width
      : baseDevice.height,
  };

  // 计算缩放比例
  const getScale = () => {
    if (typeof window === 'undefined') return 0.85;
    const availableHeight = window.innerHeight * 0.75;
    const availableWidth = window.innerWidth * 0.9;

    // Desktop 有 42px title bar，Mobile/Tablet 有 32px frame padding
    const hasBrowser = 'hasBrowserChrome' in baseDevice && baseDevice.hasBrowserChrome;
    const extraHeight = hasBrowser ? 42 : (device.hasFrame ? 32 : 0);
    const extraWidth = hasBrowser ? 2 : (device.hasFrame ? 32 : 0);

    const deviceTotalHeight = device.height + extraHeight;
    const deviceTotalWidth = device.width + extraWidth;

    const scaleH = availableHeight / deviceTotalHeight;
    const scaleW = availableWidth / deviceTotalWidth;

    return Math.min(Math.max(Math.min(scaleH, scaleW), 0.2), 1);
  };

  const [scale, setScale] = useState(0.85);

  useEffect(() => {
    const updateScale = () => setScale(getScale());
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [activeDevice, orientation]);

  // 通知设备变化
  useEffect(() => {
    onDeviceChange?.(activeDevice, device.width, device.height);
  }, [activeDevice, device.width, device.height, onDeviceChange]);

  const handleDeviceChange = (deviceId: DeviceId) => {
    setActiveDevice(deviceId);
  };

  const shouldShowFrame = showFrame && device.hasFrame;
  const hasBrowserChrome = 'hasBrowserChrome' in baseDevice && baseDevice.hasBrowserChrome;

  return (
    <div className={`w-full h-full flex flex-col overflow-hidden ${className}`}>
      {/* Header with Device Switcher */}
      {showDeviceSwitcher && (
        <header className="h-12 border-b border-[var(--border)] bg-[var(--surface-1)] flex items-center px-4 shrink-0">
          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="inline-flex bg-[var(--surface-2)] rounded-lg p-1 gap-1">
              {(Object.keys(devices) as DeviceId[]).map((deviceId) => {
                const d = devices[deviceId];
                const Icon = d.icon;
                const isActive = activeDevice === deviceId;

                return (
                  <button
                    key={deviceId}
                    onClick={() => handleDeviceChange(deviceId)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[length:var(--text-xs)] font-medium transition-all ${
                      isActive
                        ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                        : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)]'
                    }`}
                    title={d.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{d.name}</span>
                    {isActive && (
                      <span className="hidden sm:inline ml-1 opacity-80 font-normal">
                        {device.width} × {device.height}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 方向切换 - 仅 iPad */}
            {baseDevice.supportsOrientation && (
              <div className="inline-flex bg-[var(--surface-2)] rounded-lg p-1 gap-1">
                <button
                  onClick={() => setOrientation('portrait')}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[length:var(--text-xs)] font-medium transition-all ${
                    orientation === 'portrait'
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)]'
                  }`}
                  title={t('orientationPortrait')}
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setOrientation('landscape')}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[length:var(--text-xs)] font-medium transition-all ${
                    orientation === 'landscape'
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)]'
                  }`}
                  title={t('orientationLandscape')}
                >
                  <Tablet className="w-3.5 h-3.5 rotate-90" />
                </button>
              </div>
            )}
          </div>


        </header>
      )}

      {/* Preview Area */}
      <main
        className={`flex-1 flex items-center justify-center overflow-hidden select-none bg-[var(--surface-2)] ${shouldShowFrame ? 'p-4' : 'p-0'}`}
      >
        {shouldShowFrame && hasBrowserChrome ? (
          // Desktop: 浏览器窗口外框
          <div className="flex flex-col items-center">
            <div
              style={{
                width: `${(device.width + 2) * scale}px`,
                height: `${(device.height + 42) * scale}px`, // 40px title bar + 2px border
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${device.width + 2}px`,
                  height: `${device.height + 42}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* Browser Window Shell */}
                <div
                  className="shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: `${device.radius}px`,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)',
                  }}
                >
                  {/* Browser Title Bar */}
                  <div
                    className="h-10 flex items-center px-4 gap-2"
                    style={{
                      background: 'linear-gradient(180deg, #3d3d3d 0%, #2d2d2d 100%)',
                      borderBottom: '1px solid rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Traffic Lights */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-inner" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-inner" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-inner" />
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 flex justify-center">
                      <div
                        className="h-6 px-4 flex items-center gap-2 rounded-md text-[length:var(--text-xs)] text-[#999]"
                        style={{
                          background: 'rgba(0,0,0,0.3)',
                          minWidth: '300px',
                          maxWidth: '500px',
                        }}
                      >
                        <svg className="w-3 h-3 text-[#666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>localhost:3000</span>
                      </div>
                    </div>

                    {/* Spacer for symmetry */}
                    <div className="w-14" />
                  </div>

                  {/* Browser Content */}
                  <div
                    className="overflow-hidden"
                    style={{
                      width: `${device.width}px`,
                      height: `${device.height}px`,
                      backgroundColor,
                    }}
                  >
                    <div className="w-full h-full overflow-auto">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : shouldShowFrame ? (
          // Mobile / Tablet: 带设备外框
          <div className="flex flex-col items-center">
            <div
              style={{
                width: `${(device.width + 32) * scale}px`,
                height: `${(device.height + 32) * scale}px`,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${device.width + 32}px`,
                  height: `${device.height + 32}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* Device Shell */}
                <div
                  className="bg-[#1a1a1a] p-4 shadow-2xl"
                  style={{
                    borderRadius: `${device.radius + 12}px`,
                    width: 'fit-content',
                  }}
                >
                  {/* Screen */}
                  <div
                    className="overflow-hidden relative"
                    style={{
                      width: `${device.width}px`,
                      height: `${device.height}px`,
                      borderRadius: `${device.radius}px`,
                      backgroundColor,
                    }}
                  >
                    {/* Notch */}
                    {device.hasNotch && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
                        style={{
                          width: '126px',
                          height: '34px',
                          backgroundColor: '#1a1a1a',
                          borderBottomLeftRadius: '20px',
                          borderBottomRightRadius: '20px',
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="w-full h-full overflow-auto">
                      {children}
                    </div>

                    {/* Home Indicator */}
                    {device.hasNotch && (
                      <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50"
                        style={{
                          width: '134px',
                          height: '5px',
                          backgroundColor: 'rgba(255,255,255,0.3)',
                          borderRadius: '3px',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // 无外框: 全宽内容
          <div
            className="w-full h-full overflow-auto"
            style={{ backgroundColor }}
          >
            {children}
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================================
// 导出设备工具函数
// ============================================================================

export function getDeviceConfig(deviceId: DeviceId) {
  return devices[deviceId];
}
