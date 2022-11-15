window.theme = {};
window.funs = {};

/**
* 获取操作系统 'windows' 或 'darwin' (MacOS) 或 'android'
*/
window.theme.OS = window.siyuan.config.system.os;

window.funs.loadStyle = function (href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
};
window.funs.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
      style.setAttribute("href", href);
  } else {
      window.funs.loadStyle(href, id);
  }
};
window.funs.loadScript = function (src, type = "module", async = false, defer = false) {
  const script = document.createElement("script");
  if (type) script.type = type;
  if (async) script.async = true;
  if (defer) script.defer = true;
  script.src = src;
  document.head.appendChild(script);
};
window.funs.addURLParam = function (url,
  param = {
    v: window.siyuan.config.appearance.themeVer,
  }
) {
  let new_url;
  switch (true) {
    case url.startsWith("//"):
      new_url = new URL(`https:${url}`); break;
    case url.startsWith("http://"):
    case url.startsWith("https://"):
      new_url = new URL(url); break;
    case url.startsWith("/"):
      new_url = new URL(url, window.location.origin); break;
    default:
      new_url = new URL(url, window.location.origin + window.location.pathname); break;
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
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/fun.min.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/config.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/CPUI.min.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/module/CustomBoot.min.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/module/SSS.min.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/module/DTL.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/module/ChangeFontSize.js"), undefined, true);
window.funs.loadScript(window.funs.addURLParam("/appearance/themes/Sofill-/script/module/dev.js"), undefined, true);
