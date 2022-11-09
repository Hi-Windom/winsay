window.theme.config_UI = "/conf/appearance/themes/Sofill-/config/UI.json";
window.theme.themeStyle = document.getElementById("themeStyle"); // 当前主题引用路径
window.theme.THEME_ROOT = new URL(window.theme.themeStyle.href).pathname.replace("theme.css", "");

window.theme.ID_COLOR_STYLE = "theme-color-style";

/* DOM 节点 ID */
window.theme.IDs = {
    STYLE_COLOR: "custom-id-style-theme-color",
    BUTTON_TOOLBAR_CHANGE_COLOR: "custom-id-button-toolbar-change-color",
};

window.theme.colors = [
    "style-S2/root.css",
    "style-S2/root-L-Blue.css",
    "style-S2/root-L-Pink.css",
    "style-S2/root-L-Green.css",
    "style-S2/root-L-Yellow.css",
];

window.theme.colors2 = [
    "style-S2/root-D-BlackGoldBlue.css",
    "style-S2/root-D-InkGreenPurple.css",
];

window.theme.latest_LC_href = "SC-winsay-LC-href";
window.theme.latest_DC_href = "SC-winsay-DC-href";
/* 循环迭代器 */
window.theme.Iterator = function* (items) { for (let i = 0; true; i = (i + 1) % items.length) { yield items[i]; } };
window.theme.Iterator2 = function* (items) { for (let i = 0; true; i = (i + 1) % items.length) { yield items[i]; } };

// 安卓手机：android + body--mobile
// 安卓平板：android + body--desktop
/**
* 获取操作系统 'windows' 或 'darwin' (MacOS) 或 'android'
*/
window.theme.OS = window.siyuan.config.system.os;
//  alert( window.theme.OS);
/**
* 获取客户端模式
* @return {string} 'app' 或 'desktop' 或 'mobile'
*/
window.theme.clientMode = (() => {
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
document.body.classList.add(window.theme.clientMode);
document.body.classList.add(window.theme.OS);

window.theme.kernelVersion = window.siyuan.config.system.kernelVersion;
window.theme.cv = window.funs.compareVersion(window.theme.kernelVersion, "2.4.2");
console.log(window.theme.cv);
