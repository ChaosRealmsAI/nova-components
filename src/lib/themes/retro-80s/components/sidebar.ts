export const sidebarConfig = {
  slots: {
    /**
     * root: 侧边栏根容器
     */
    root: [],

    /**
     * header: 侧边栏头部
     */
    header: [],

    /**
     * content: 侧边栏内容
     */
    content: [],

    /**
     * footer: 侧边栏底部
     */
    footer: [],

    /**
     * group: 菜单组
     */
    group: [],

    /**
     * groupLabel: 分组标签
     */
    groupLabel: [],

    /**
     * menu: 菜单
     */
    menu: [],

    /**
     * menuItem: 菜单项
     */
    menuItem: [],

    /**
     * menuButton: 菜单按钮
     */
    menuButton: [],

    /**
     * menuBadge: 菜单徽章
     */
    menuBadge: [],

    /**
     * separator: 分隔线
     */
    separator: [],

    /**
     * trigger: 触发按钮
     */
    trigger: [],

    /**
     * overlay: 遮罩层
     */
    overlay: [],

    /**
     * mobileContainer: 移动端容器
     */
    mobileContainer: [],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {},

      /**
       * inset: 内嵌样式
       */
      inset: {},
    },
    collapsible: {
      /**
       * none: 不可折叠
       */
      none: {},

      /**
       * icon: 图标折叠
       */
      icon: {},

      /**
       * offcanvas: 侧边栏折叠
       */
      offcanvas: {},
    },
  },
};
