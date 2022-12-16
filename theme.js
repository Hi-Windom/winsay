var fs = null;
var path = null;
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
document.body.classList.add(window.siyuan.config.system.os);
if (navigator.userAgent.toLowerCase().startsWith("siyuan")) {
  document.body.classList.add("client--siyuan");
} else {
  document.body.classList.add("client--browser");
}

var isAppMode = document
  .getElementsByTagName("body")[0]
  .classList.contains("android")
  ? false
  : document.getElementsByTagName("body")[0].classList.contains("client--browser")
  ? false
  : window.siyuan.config.system.os == "windows" ||
    window.siyuan.config.system.os == "darwin"
  ? true
  : false;
if (isAppMode) {
  fs = require("fs");
  path = require("path");
  console.log("isAppMode");
}
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
window.funs.loadScript = function (
  src,
  type = "module",
  async = false,
  defer = false
) {
  const script = document.createElement("script");
  if (type) script.type = type;
  if (async) script.async = true;
  if (defer) script.defer = true;
  script.src = src;
  document.head.appendChild(script);
};
window.funs.addURLParam = function (
  url,
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

var SelfProtection = localStorage.getItem(
  "SC_winsay_cp_system__SelfProtection"
);
var P = [];
var bP = "";
path
  ? (bP = path.join(
      window.siyuan.config.system.confDir,
      "appearance",
      "themes",
      "Sofill-"
    ))
  : null;
fs
  ? fs.access(bP, (e) => {
      if (e) {
        console.error(e);
        alert(`主题根目录未正确命名或不存在：【致命错误】${bP} 文件夹不存在。修正错误后，需重启思源并重新选择主题。`);
      }
    })
  : null;
if (SelfProtection && SelfProtection === "true") {
  try {
    path ? P.push(path.join(bP, "script", "utils", "api.min.js")) : null;
    path ? P.push(path.join(bP, "script", "CP.js")) : null;
    path ? P.push(path.join(bP, "script", "config.js")) : null;
    path ? P.push(path.join(bP, "style", "Init.min.css")) : null;
    path ? P.push(path.join(bP, "style", "Block.min.css")) : null;
    P.forEach((i) => {
      fs
        ? fs.readFile(i, "utf-8", (e, data) => {
            if (e) {
              console.error(e);
              alert(`主题自我保护检测到异常：【致命错误】${i} 文件不存在`);
            }
          })
        : null;
    });
  } catch (e) {
    console.error(e);
  }
}

window.funs.loadScript(
  window.funs.addURLParam(
    "/appearance/themes/Sofill-/script/module/CustomBoot.min.js"
  ),
  undefined,
  true
);
window.funs.loadScript(
  window.funs.addURLParam("/appearance/themes/Sofill-/script/fun.min.js"),
  undefined,
  true
);
setTimeout(() => {
  window.funs.loadScript(
    window.funs.addURLParam(
      "/appearance/themes/Sofill-/script/module/SSS.min.js"
    ),
    undefined,
    true
  );
}, 20);
setTimeout(() => {
  window.funs.loadScript(
    window.funs.addURLParam(
      "/appearance/themes/Sofill-/script/CP.js?r=" + Math.random()
    ),
    undefined,
    true
  );
}, 200);
setTimeout(() => {
  window.funs.loadScript(
    window.funs.addURLParam("/appearance/themes/Sofill-/script/module/DTL.js"),
    undefined,
    true
  );
  window.funs.loadScript(
    window.funs.addURLParam(
      "/appearance/themes/Sofill-/script/module/ChangeFontSize.js"
    ),
    undefined,
    true
  );
  window.funs.loadScript(
    window.funs.addURLParam(
      "/appearance/themes/Sofill-/script/module/dev.js?r=" + Math.random()
    ),
    undefined,
    true
  );
}, 500);
