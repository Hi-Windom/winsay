window.winsay_proxy = new Proxy(window.winsay, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  },
});

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
if (!bodyCC("branch--Sillot")) {
  bodyAC("branch--SiYuan");
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

setInterval(() => {
  addUC();
}, 5800);

window.winsay.OS = window.siyuan.config.system.os;

window.winsay.funs.loadStyle = function (href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
  return style;
};
window.winsay.funs.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
    style.setAttribute("href", href);
    return style;
  } else {
    return window.winsay.funs.loadStyle(href, id);
  }
};
window.winsay.funs.addURLParam = function (
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
window.winsay.funs.loadScript = function (src, async = false, defer = false) {
  const script = document.createElement("script");
  script.type = "module";
  if (async) script.async = true;
  if (defer) script.defer = true;
  script.src = window.winsay.funs.addURLParam(src);
  document.head.appendChild(script);
  return script;
};

window.winsay.funs.loadScript(
  `${window.winsay.where.themeRoot}script/lib/localforage.min.js`,
  true,
  true
).onload = () => {
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/CustomBoot.js`,
    true,
    true
  );
};

window.winsay.funs.loadScript(
  `${window.winsay.where.themeRoot}script/fun.min.js`,
  true
);
setTimeout(() => {
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/module/DTL.js`,
    true
  );
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/module/ChangeFontSize.js`,
    true
  );
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/module/dev.js?r=` + Math.random(),
    true
  );
}, 200);
