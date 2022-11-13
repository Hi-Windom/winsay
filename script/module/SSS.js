import * as API from "./../utils/api.min.js";
import * as config from "./../config.js";

window.theme.changeThemeModeByEnv = function () {
  /* 根据版本加载样式配置文件 */
  switch (config.cv_result) {
    case -1:
      window.funs.updateStyle(
        "MI",
        `/appearance/themes/Sofill-/style-old/MI.css`
      );
      break;
    default:
      window.funs.updateStyle("MI", `/appearance/themes/Sofill-/style/MI.css`);
      break;
  }
  /* 根据不同设备加载样式配置文件 */
  switch (window.theme.OS) {
    case "android":
      window.funs.updateStyle(
        "MI-DocTree",
        `/appearance/themes/Sofill-/style/MI-DocTree.css`
      );
      break;
    default:
      window.funs.updateStyle(
        "MI-DocTree",
        `/appearance/themes/Sofill-/style/MI-DocTree.css`
      );
      window.funs.updateStyle(
        "MI-Doc&Breadcrumb",
        `/appearance/themes/Sofill-/style/MI-Doc&Breadcrumb.css`
      );
      break;
  }
};

window.theme.changeThemeModeByEnv();

/* ------------ 形态切换（实验性功能）---------------------- */

function createSofillToolbar() {
  var siYuanToolbar = document.getElementById("toolbar");
  var SofillToolbar = document.getElementById("SofillToolbar");
  var windowControls = document.getElementById("windowControls");

  if (SofillToolbar) siYuanToolbar.removeChild(SofillToolbar);
  SofillToolbar = API.insertCreateBefore(
    windowControls,
    "div",
    "SofillToolbar"
  );
  SofillToolbar.style.marginRight = "3px";
  SofillToolbar.style.marginTop = "1px";
  SofillToolbar.style.marginLeft = "10px";
}

function AndroidChangeColor() {
  var SofillToolbar = document.getElementById("SofillToolbar");
  if (SofillToolbar == null) {
    var toolbarEdit = document.getElementById("toolbarEdit");
    var windowControls = document.getElementById("windowControls");
    if (toolbarEdit == null && windowControls != null) {
      SofillToolbar = document.createElement("div");
      SofillToolbar.id = "SofillToolbar";
      SofillToolbar.style.marginRight = "3px";
      SofillToolbar.style.marginTop = "1px";
      SofillToolbar.style.marginLeft = "10px";
      windowControls.parentElement.insertBefore(SofillToolbar, windowControls);
    } else if (toolbarEdit != null) {
      SofillToolbar = API.insertCreateBefore(
        toolbarEdit,
        "div",
        "SofillToolbar"
      );
      SofillToolbar.style.position = "relative";
      SofillToolbar.style.height = "25px";
      SofillToolbar.style.overflowY = "scroll";
      SofillToolbar.style.paddingTop = "7px";
      SofillToolbar.style.marginRight = "9px";
      SofillToolbar.style.marginLeft = "10px";
    }
  }
  const addButton = API.addinsertCreateElement(SofillToolbar, "div");
  addButton.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
  addButton.style.width = "17px";
  addButton.style.height = "100%";
  addButton.style.float = "left";
  addButton.style.marginLeft = "10px";
  addButton.style.backgroundImage =
    "url(/appearance/themes/Sofill-/src/S2.svg)";
  addButton.style.backgroundRepeat = "no-repeat";
  addButton.style.backgroundPosition = "left top";
  addButton.style.backgroundSize = "100%";
  addButton.addEventListener("click", (e) => {
    const latest_color_href = window.theme.iter.next().value;
    switch (window.funs.getThemeMode) {
      case "dark":
        localStorage.setItem(config.latest_DC_href, latest_color_href);
        break;
      case "light":
      default:
        localStorage.setItem(config.latest_LC_href, latest_color_href);
        break;
    }
    window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
  });
}
function iterLC() {
  let colors_href = [];
  let colorList = [];
  let latest_color_href = localStorage.getItem(config.latest_LC_href);
  window.theme.iter = config.Iterator(colors_href);
  if (latest_color_href) {
    colorList = config.colors;
    colorList.forEach((color) =>
      colors_href.push(`${config.THEME_ROOT}${color}`)
    );
    /* 加载配色文件 */
    window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
    // 将迭代器调整为当前配色
    for (let i = 0; i < colorList.length; ++i) {
      if (window.theme.iter.next().value === latest_color_href) break;
    }
  } else {
    // 支持修改默认形态 #234
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = {
        path: config.config_UI,
      };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          console.log(json);
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      colorList = config.colors;
      colorList.forEach((color) =>
        colors_href.push(`${config.THEME_ROOT}${color}`)
      );
      window.theme.iter = config.Iterator(colors_href);
      latest_color_href = `/appearance/themes/Sofill-/style-S2/${response.color.light}`;
      localStorage.setItem(config.latest_LC_href, latest_color_href);
      window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
      // 将迭代器调整为当前配色
      for (let i = 0; i < colorList.length; ++i) {
        if (window.theme.iter.next().value === latest_color_href) break;
      }
    });
  }
}
function iterDC() {
  let colors_href = [];
  let colorList = [];
  let latest_color_href = localStorage.getItem(config.latest_DC_href);
  window.theme.iter = config.Iterator2(colors_href);
  if (latest_color_href) {
    colorList = config.colors2;
    colorList.forEach((color) =>
      colors_href.push(`${config.THEME_ROOT}${color}`)
    );
    /* 加载配色文件 */
    window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
    // 将迭代器调整为当前配色
    for (let i = 0; i < colorList.length; ++i) {
      if (window.theme.iter.next().value === latest_color_href) break;
    }
  } else {
    // 支持修改默认形态 #234
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = {
        path: config.config_UI,
      };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          console.log(json);
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      colorList = config.colors2;
      colorList.forEach((color) =>
        colors_href.push(`${config.THEME_ROOT}${color}`)
      );
      window.theme.iter = config.Iterator2(colors_href);
      latest_color_href = `/appearance/themes/Sofill-/style-S2/${response.color.dark}`;
      localStorage.setItem(config.latest_DC_href, latest_color_href);
      window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
      // 将迭代器调整为当前配色
      for (let i = 0; i < colorList.length; ++i) {
        if (window.theme.iter.next().value === latest_color_href) break;
      }
    });
  }
}
function DesktopChangeColor() {
  const drag = document.getElementById("drag"); // 标题栏
  if (config.themeStyle) {
    const button_change_color = document.createElement("button"); // 切换主题颜色按钮
    button_change_color.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
    button_change_color.className = "toolbar__item b3-tooltips b3-tooltips__sw";
    button_change_color.ariaLabel = "形态切换（实验性）";
    button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
    button_change_color.addEventListener("click", (e) => {
      const latest_color_href = window.theme.iter.next().value;
      switch (window.funs.getThemeMode) {
        case "dark":
          localStorage.setItem(config.latest_DC_href, latest_color_href);
          break;
        case "light":
        default:
          localStorage.setItem(config.latest_LC_href, latest_color_href);
          break;
      }
      window.funs.updateStyle(config.IDs.STYLE_COLOR, latest_color_href);
    });
    if (
      document.getElementById(config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR) == null
    ) {
      drag.insertAdjacentElement("afterend", button_change_color);
    }
  }
}

async function changeStyleMod() {
  switch (window.funs.getThemeMode) {
    case "dark":
      iterDC();
      break;
    case "light":
    default:
      iterLC();
      break;
  }
  if (API.isPhone()) {
    AndroidChangeColor();
    createSofillToolbar();
  } else {
    DesktopChangeColor();
  }
}

function changeThemeModeByApp() {
  let href_color = null;
  switch (window.funs.getThemeMode) {
    case "light":
      href_color = `/appearance/themes/Sofill-/style-S2/root-base-light.css`;
      /* 实验性功能 */
      config.colors2.forEach((color) =>
        API.removejscssfile(`${config.THEME_ROOT}${color}`, "css")
      );
      API.removejscssfile(`/appearance/themes/Sofill-/style-S2/root-base-dark.css`, "css");
      break;
    case "dark":
    default:
      href_color = `/appearance/themes/Sofill-/style-S2/root-base-dark.css`;
      /* 实验性功能 */
      config.colors.forEach((color) =>
        API.removejscssfile(`${config.THEME_ROOT}${color}`, "css")
      );
      API.removejscssfile(`/appearance/themes/Sofill-/style-S2/root-base-light.css`, "css")
      break;
  }
  window.funs.updateStyle(config.ID_COLOR_STYLE, href_color);
  changeStyleMod();
}

setTimeout(() => {
  changeThemeModeByApp();
}, 0);
