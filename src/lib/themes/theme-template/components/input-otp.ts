export const inputOtpConfig = {
  slots: {
    /**
     * root: OTP 输入根容器
     */
    root: [],

    /**
     * container: 输入容器
     */
    container: [],

    /**
     * group: 输入组
     */
    group: [],

    /**
     * slot: 单个输入槽
     */
    slot: [],

    /**
     * separator: 分隔符
     */
    separator: [],

    /**
     * caret: 光标
     */
    caret: [],

    /**
     * caretLine: 光标线
     */
    caretLine: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认 OTP 输入
       */
      default: {
        root: [],
        container: [],
        group: [],
        slot: [],
        separator: [],
        caret: [],
        caretLine: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
