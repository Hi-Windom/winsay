window.sofill = {
  cp: { awaitInitItem: 0, inited: 0, listened: 0 },
  funs: {},
  ekits: {},
  where: {themeRoot: "/appearance/themes/Sofill-/"},
  storage: {},
};

var fs = null;
var path = null;
const bodyAC = (N) => {
  document.body.classList.add(N);
};
const bodyRC = (N) => {
  document.body.classList.remove(N);
};
const bodyCC = (N) => {
  return document.body.classList.contains(N);
};
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
bodyAC(clientMode);
bodyAC(window.siyuan.config.system.os);
if (navigator.userAgent.toLowerCase().startsWith("siyuan")) {
  bodyAC("client--siyuan");
} else {
  bodyAC("client--browser");
}
switch (window.siyuan.config.appearance.mode) {
  case 1:
    bodyAC("mode--dark");
    break;
  default:
    bodyAC("mode--light");
    break;
}
function addUC() {
  if (window.siyuan.user == null) {
    bodyRC("user--Sub");
    bodyRC("user--NonSub");
    bodyAC("user--null");
  } else if (window.siyuan.user.userSiYuanProExpireTime > Date.now()) {
    bodyRC("user--null");
    bodyRC("user--NonSub");
    bodyAC("user--Sub");
  } else {
    bodyRC("user--null");
    bodyRC("user--Sub");
    bodyAC("user--NonSub");
  }
}
addUC();
setInterval(() => {
  addUC();
}, 3100);
setTimeout(() => {
  if (!bodyCC("branch--Sillot")) {
    bodyAC("branch--SiYuan");
  }
}, 500);

var isAppMode = bodyCC("android")
  ? false
  : bodyCC("client--browser")
  ? false
  : window.siyuan.config.system.os == "windows" ||
    window.siyuan.config.system.os == "darwin"
  ? true
  : false;
if (isAppMode) {
  fs = require("fs");
  path = require("path");
}

window.sofill.OS = window.siyuan.config.system.os;

window.sofill.funs.loadStyle = function (href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
};
window.sofill.funs.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
    style.setAttribute("href", href);
  } else {
    window.sofill.funs.loadStyle(href, id);
  }
};
window.sofill.funs.loadScript = function (
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
  return script;
};
window.sofill.funs.addURLParam = function (
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

window.sofill.funs.loadScript(
  window.sofill.funs.addURLParam(
    `${window.sofill.where.themeRoot}script/lib/localforage.min.js`
  ),
  undefined,
  true,
  true
).onload = () => {
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${window.sofill.where.themeRoot}script/module/CustomBoot.js`
    ),
    undefined,
    true,
    true
  );
};

window.sofill.funs.loadScript(
  window.sofill.funs.addURLParam(
    `${window.sofill.where.themeRoot}script/fun.min.js`
  ),
  undefined,
  true
);
setTimeout(() => {
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${window.sofill.where.themeRoot}script/module/DTL.js`
    ),
    undefined,
    true
  );
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${window.sofill.where.themeRoot}script/module/ChangeFontSize.js`
    ),
    undefined,
    true
  );
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${window.sofill.where.themeRoot}script/module/dev.js?r=` + Math.random()
    ),
    undefined,
    true
  );
}, 200);
