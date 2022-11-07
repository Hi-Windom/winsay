window.theme = {};
window.theme.loadScript = function (src,type = "module",async = false,defer = false) {
  const script = document.createElement("script");
  if (type) script.type = type;
  if (async) script.async = true;
  if (defer) script.defer = true;
  script.src = src;
  document.head.appendChild(script);
};
window.theme.addURLParam = function (url,
  param = {
    v: window.siyuan.config.appearance.themeVer,
  }
) {
  let new_url;
  switch (true) {
    case url.startsWith("//"):
      new_url = new URL(`https:${url}`);
      break;
    case url.startsWith("http://"):
    case url.startsWith("https://"):
      new_url = new URL(url);
      break;
    case url.startsWith("/"):
      new_url = new URL(url, window.location.origin);
      break;
    default:
      new_url = new URL(url, window.location.origin + window.location.pathname);
      break;
  }
  for (let [key, value] of Object.entries(param)) {
    new_url.searchParams.set(key, value);
  }
  switch (true) {
    case url.startsWith("//"):
      return new_url.href.substring(new_url.protocol.length);
    case url.startsWith("http://"):
    case url.startsWith("https://"):
      return new_url.href;
    case url.startsWith("/"):
      return new_url.href.substring(new_url.origin.length);
    default:
      return new_url.href.substring(
        (window.location.origin + window.location.pathname).length
      );
  }
};
window.theme.config_UI = "/conf/appearance/themes/Sofill-/config/UI.json";
window.theme.themeStyle = document.getElementById("themeStyle"); // 当前主题引用路径
window.theme.THEME_ROOT = new URL(window.theme.themeStyle.href).pathname.replace("theme.css", "");
window.theme.loadScript(window.theme.addURLParam("/appearance/themes/Sofill-/script/module/SSS.js"), undefined, true);
window.theme.loadScript(window.theme.addURLParam("/appearance/themes/Sofill-/script/module/DTL.js"), undefined, true);
window.theme.loadScript(window.theme.addURLParam("/appearance/themes/Sofill-/script/module/ChangeFontSize.js"), undefined, true);
window.theme.loadScript(window.theme.addURLParam("/appearance/themes/Sofill-/script/module/dev.js"), undefined, true);
