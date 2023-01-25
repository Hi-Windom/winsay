const themeStyle = document.getElementById("themeStyle");
const winsay_ROOT_ABS =
  `${window.siyuan.config.system.confDir}/appearance/themes/` +
  window.winsay.where.localThemeName +
  "/";
const S2_BASE = `${window.winsay.where.themeRoot}style-S2/`;
const S2_BASE_ABS = `${winsay_ROOT_ABS}style-S2/`;
const ID_COLOR_STYLE = "theme-color-style";
var ThemeName = "Sofill";
if (window.siyuan.config.appearance.mode) {
  ThemeName = window.siyuan.config.appearance.themeDark;
} else {
  ThemeName = window.siyuan.config.appearance.themeLight;
}
var AliaName = "winsay";
switch (ThemeName) {
  case "Sofill+":
    AliaName = "lanco";
    break;
  case "Sofill=":
    AliaName = "lili";
    break;
}
/* DOM 节点 ID */
const IDs = {
  STYLE_COLOR: "custom-id-style-theme-color",
  BUTTON_TOOLBAR_CHANGE_COLOR: "custom-id-button-toolbar-change-color",
};

const colors1 = [
  "root.css",
  "root-L-Blue.css",
  "root-L-Red.css",
  "root-L-Pink.css",
  "root-L-Green.css",
  "root-L-Yellow.css",
];
const defaultLC = "root.css";
const colors2 = ["root-D-BlackGoldBlue.css", "root-D-InkGreenPurple.css"];
const defaultDC = "root-D-BlackGoldBlue.css";

const latest_LC_ID = "SC_winsay_cp_custom__LS";
const latest_DC_ID = "SC_winsay_cp_custom__DS";
/* 循环迭代器 */
var Iterator1 = function* (items) {
  for (let i = 0; true; i = (i + 1) % items.length) {
    yield items[i];
  }
};
var Iterator2 = function* (items) {
  for (let i = 0; true; i = (i + 1) % items.length) {
    yield items[i];
  }
};

// 安卓手机：android + body--mobile
// 安卓平板：android + body--desktop

/**
 * 获取客户端模式
 * @return {string} 'app' 或 'desktop' 或 'mobile'
 */
var clientMode = (() => {
  let url = new URL(window.location.href);
  switch (true) {
    case url.pathname.startsWith("/stage/build/app"):
      return "body--app";
    case url.pathname.startsWith("/stage/build/desktop"):
      return "body--desktop";
    case url.pathname.startsWith("/stage/build/mobile"):
      return "body--mobile";
    default:
      return null;
  }
})();

var apitoken = window.siyuan.config.api.token;

export {
  clientMode,
  Iterator2,
  Iterator1,
  latest_DC_ID,
  latest_LC_ID,
  colors2,
  colors1,
  defaultLC,
  defaultDC,
  IDs,
  ID_COLOR_STYLE,
  winsay_ROOT_ABS,
  S2_BASE,
  S2_BASE_ABS,
  themeStyle,
  ThemeName,
  AliaName,
  apitoken,
};
