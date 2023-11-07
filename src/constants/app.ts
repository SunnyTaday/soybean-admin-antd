import { transformObjectToOption } from '@/utils/common';

export const loginModuleLabels: Record<UnionKey.LoginModule, App.I18n.I18nKey> = {
  'pwd-login': 'page.login.pwdLogin.title',
  'code-login': 'page.login.codeLogin.title',
  register: 'page.login.register.title',
  'reset-pwd': 'page.login.resetPwd.title',
  'bind-wechat': 'page.login.bindWeChat.title'
};

export const themeLayoutModeLabels: Record<UnionKey.ThemeLayoutMode, string> = {
  vertical: '左侧菜单模式',
  horizontal: '顶部菜单模式',
  'vertical-mix': '左侧菜单混合模式',
  'horizontal-mix': '顶部菜单混合模式'
};
export const themeLayoutModeOptions = transformObjectToOption(themeLayoutModeLabels);

export const themeScrollModeLabels: Record<UnionKey.ThemeScrollMode, string> = {
  wrapper: '外层滚动',
  content: '主体滚动'
};
export const themeScrollModeOptions = transformObjectToOption(themeScrollModeLabels);

export const themeTabModeLabels: Record<UnionKey.ThemeTabMode, string> = {
  chrome: '谷歌风格',
  button: '按钮风格'
};
export const themeTabModeOptions = transformObjectToOption(themeTabModeLabels);

export const themeHorizontalMenuPositionLabels: Record<UnionKey.ThemeHorizontalMenuPosition, string> = {
  'flex-start': '居左',
  center: '居中',
  'flex-end': '居右'
};
export const themeHorizontalMenuPositionOptions = transformObjectToOption(themeHorizontalMenuPositionLabels);

// export const themeAnimateModeLabels: Record<UnionKey.ThemeAnimateMode, string> = {
//   'zoom-fade': '渐变',
//   'zoom-out': '闪现',
//   'fade-slide': '滑动',
//   fade: '消退',
//   'fade-bottom': '底部消退',
//   'fade-scale': '缩放消退'
// };
// export const themeAnimateModeOptions = transformObjectToOption(themeAnimateModeLabels);
