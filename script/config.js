import * as API from "./utils/api.min.js";

const config_Custom = "/conf/appearance/themes/Sofill-/config/Custom.json";
const config_UI = "/conf/appearance/themes/Sofill-/config/UI.json";
const themeStyle = document.getElementById("themeStyle"); // 当前主题引用路径
const THEME_ROOT = new URL(themeStyle.href).pathname.replace("theme.css", "");

const ID_COLOR_STYLE = "theme-color-style";

/* DOM 节点 ID */
const IDs = {
  STYLE_COLOR: "custom-id-style-theme-color",
  BUTTON_TOOLBAR_CHANGE_COLOR: "custom-id-button-toolbar-change-color",
};

var colors = [
  "style-S2/root.css",
  "style-S2/root-L-Blue.css",
  "style-S2/root-L-Red.css",
  "style-S2/root-L-Pink.css",
  "style-S2/root-L-Green.css",
  "style-S2/root-L-Yellow.css",
];

var colors2 = [
  "style-S2/root-D-BlackGoldBlue.css",
  "style-S2/root-D-InkGreenPurple.css",
];

const latest_LC_href = "SC_winsay_style_LC_href";
const latest_DC_href = "SC_winsay_style_DC_href";
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

var kernelVersion = window.siyuan.config.system.kernelVersion;
var cv_result = API.compareVersion(kernelVersion, "2.4.2");


export {
  cv_result,
  clientMode,
  Iterator2,
  Iterator,
  latest_DC_href,
  latest_LC_href,
  colors2,
  colors,
  IDs,
  ID_COLOR_STYLE,
  THEME_ROOT,
  themeStyle,
  config_UI,
  config_Custom,
};
