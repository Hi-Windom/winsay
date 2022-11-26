import * as API from "./utils/api.min.js";

const config_Custom = "/conf/appearance/themes/Sofill-/config/Custom.json";
const config_UI = "/conf/appearance/themes/Sofill-/config/UI.json";
const themeStyle = document.getElementById("themeStyle"); // 当前主题引用路径
const THEME_ROOT = new URL(themeStyle.href).pathname.replace("theme.css", "");
const S2_BASE = `${THEME_ROOT}style-S2/`;
const ID_COLOR_STYLE = "theme-color-style";

/* DOM 节点 ID */
const IDs = {
  STYLE_COLOR: "custom-id-style-theme-color",
  BUTTON_TOOLBAR_CHANGE_COLOR: "custom-id-button-toolbar-change-color",
};

var colors = [
  "root.css",
  "root-L-Blue.css",
  "root-L-Red.css",
  "root-L-Pink.css",
  "root-L-Green.css",
  "root-L-Yellow.css",
];

var colors2 = [
  "root-D-BlackGoldBlue.css",
  "root-D-InkGreenPurple.css",
];

const latest_LC_ID = "SC_winsay_cp_custom__LS";
const latest_DC_ID = "SC_winsay_cp_custom__DS";
/* 循环迭代器 */
var Iterator = function* (items) {
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
document.body.classList.add(clientMode);
document.body.classList.add(window.theme.OS);


export {
  clientMode,
  Iterator2,
  Iterator,
  latest_DC_ID,
  latest_LC_ID,
  colors2,
  colors,
  IDs,
  ID_COLOR_STYLE,
  THEME_ROOT,
  S2_BASE,
  themeStyle,
  config_UI,
  config_Custom,
};
