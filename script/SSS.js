import * as API from "./utils/api.min.js";
import * as config from "./config.js";
import { iterLC, iterDC } from "./module/SM.js";
var fs = null;
// const localforage = new API.LocalStorage(3);
if (API.isDesktopAppMode()) {
  fs = require("fs");
}

async function createMobileSofillToolbar() {
  if (config.clientMode != "body--mobile") {
    return;
  }
  var SofillToolbar = document.getElementById("SofillToolbar");
  if (SofillToolbar == null) {
    var toolbarEdit = document.getElementById("toolbarEdit");
    SofillToolbar = API.insertCreateBefore(toolbarEdit, "div", "SofillToolbar");
    SofillToolbar.style.position = "relative";
    SofillToolbar.style.height = "25px";
    SofillToolbar.style.overflowY = "scroll";
    SofillToolbar.style.paddingTop = "7px";
    SofillToolbar.style.marginRight = "3px";
    SofillToolbar.style.marginLeft = "10px";
  }
}

async function MobileChangeColor() {
  if (config.clientMode != "body--mobile") {
    return;
  }
  if (document.getElementById(config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR)) {
    return;
  }
  var SofillToolbar = document.getElementById("SofillToolbar");
  const addButton = API.addinsertCreateElement(SofillToolbar, "div");
  addButton.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
  addButton.style.width = "17px";
  addButton.style.height = "100%";
  addButton.style.float = "left";
  addButton.style.marginLeft = "10px";
  addButton.style.backgroundImage =
    `url(${window.winsay.where.themeRoot}src/icon/S2.svg)`;
  addButton.style.backgroundRepeat = "no-repeat";
  addButton.style.backgroundPosition = "left top";
  addButton.style.backgroundSize = "100%";
  addButton.addEventListener("click", async (e) => {
    let latest_color_href = null;
    switch (window.winsay.funs.getThemeMode) {
      case "dark":
        latest_color_href = window.winsay.storage.iterDC.next().value;
        var snode = document.getElementById("SC_winsay_cp_custom__DS");
        if (snode) {
          snode.bindIDB = latest_color_href;
          // CP 面板已经绑定，不需要重复设置存储
        }
        break;
      case "light":
      default:
        latest_color_href = window.winsay.storage.iterLC.next().value;
        var snode = document.getElementById("SC_winsay_cp_custom__LS");
        if (snode) {
          snode.bindIDB = latest_color_href;
          // CP 面板已经绑定，不需要重复设置存储
        }
        if (await localforage.getItem("SC_winsay_cp_custom__defaultS_auto")) {
          console.log(latest_color_href);
          let writeData = `@import url("preview-base-light.css"); @import url("${latest_color_href.replace(
            "root",
            "preview"
          )}?r=${Math.random()}");`;
          fs
            ? fs.writeFile(
                `${config.S2_BASE_ABS}defaultS.css`,
                writeData,
                "utf-8",
                function (err) {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log("Write successfully~~");
                  }
                }
              )
            : console.log("platform not supported");
        }
        break;
    }
    window.winsay.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
  });
}


async function DesktopChangeColor() {
  const drag = document.getElementById("drag"); // 标题栏
  if (config.themeStyle) {
    const button_change_color = document.createElement("button"); // 切换主题颜色按钮
    button_change_color.id = config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
    button_change_color.className = "toolbar__item b3-tooltips b3-tooltips__sw";
    button_change_color.ariaLabel = "形态切换（实验性）";
    button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
    button_change_color.addEventListener("click", async (e) => {
      let latest_color_href = null;
      switch (window.winsay.funs.getThemeMode) {
        case "dark":
          latest_color_href = window.winsay.storage.iterDC.next().value;
          var snode = document.getElementById("SC_winsay_cp_custom__DS");
          if (snode) {
            snode.bindIDB = latest_color_href;
            // CP 面板已经绑定，不需要重复设置存储
          }
          break;
        case "light":
        default:
          latest_color_href = window.winsay.storage.iterLC.next().value;
          var snode = document.getElementById("SC_winsay_cp_custom__LS");
          if (snode) {
            snode.bindIDB = latest_color_href;
            // CP 面板已经绑定，不需要重复设置存储
          }
          if (await localforage.getItem("SC_winsay_cp_custom__defaultS_auto")) {
            console.log(latest_color_href);
            let writeData = `@import url("preview-base-light.css"); @import url("${latest_color_href.replace(
              "root",
              "preview"
            )}?r=${Math.random()}");`;
            fs
              ? fs.writeFile(
                  `${config.S2_BASE_ABS}defaultS.css`,
                  writeData,
                  "utf-8",
                  function (err) {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("Write successfully~~");
                    }
                  }
                )
              : console.log("platform not supported");
          }
          break;
      }
      window.winsay.funs.updateStyle(
        config.IDs.STYLE_COLOR,
        `${config.S2_BASE}${latest_color_href}`
      );
    });
    if (
      document.getElementById(config.IDs.BUTTON_TOOLBAR_CHANGE_COLOR) == null
    ) {
      drag.insertAdjacentElement("afterend", button_change_color);
    }
  }
}

async function changeStyleMod() {
  switch (window.winsay.funs.getThemeMode) {
    case "dark":
      await iterDC();
      break;
    case "light":
    default:
      await iterLC();
      break;
  }
  if (config.clientMode == "body--mobile") {
    await createMobileSofillToolbar();
    await MobileChangeColor();
  } else {
    await DesktopChangeColor();
  }
}

async function changeThemeModeByApp() {
  fs
    ? fs.writeFile(
        `${config.S2_BASE_ABS}defaultS.css`,
        "",
        "utf-8",
        function (err) {
          if (err) {
            console.error(err);
          } else {
            console.log("Write successfully~~");
          }
        }
      )
    : console.log("platform not supported");
  let href_color = null;
  switch (window.winsay.funs.getThemeMode) {
    case "light":
      href_color = `${config.S2_BASE}root-base-light.css`;
      // config.colors2.forEach((color) =>
      //   API.removejscssfile(`${config.S2_BASE}${color}`, "css")
      // );
      API.removejscssfile(`${config.S2_BASE}root-base-dark.css`, "css");
      break;
    case "dark":
    default:
      href_color = `${config.S2_BASE}root-base-dark.css`;
      // config.colors.forEach((color) =>
      //   API.removejscssfile(`${config.S2_BASE}${color}`, "css")
      // );
      API.removejscssfile(`${config.S2_BASE}root-base-light.css`, "css");
      break;
  }
  setTimeout(() => {
    window.winsay.funs.updateStyle(config.ID_COLOR_STYLE, href_color);
  }, 100);
  await changeStyleMod();
}

await changeThemeModeByApp();


