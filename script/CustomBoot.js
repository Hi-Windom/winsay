import * as config from "./config.js";
import * as API from "./utils/api.min.js";
window.winsay.config = config;
window.winsay.API = API;
var oncePath = `${config.winsay_ROOT_ABS}/script/module/AlertOnce.js`;
const SB1 = "winsayUserData";
const updateStyle = window.winsay.funs.updateStyle;
// const localforage = new API.LocalStorage(3);

window.winsay.storage.iterLC = config.Iterator1(config.colors1);
window.winsay.storage.iterDC = config.Iterator2(config.colors2);

var fs = null;
var path = null;
if (API.isDesktopAppMode()) {
  fs = require("fs");
  path = require("path");
}

await new Promise(async function (response) {
  let ccc = true;
  while (ccc) {
    try {
      await localforage.setDriver(localforage.INDEXEDDB).then(async () => {
        localforage.config({
          storeName: SB1,
        });
        await localforage.ready().then(async () => {
          // 当 localforage 将指定驱动初始化完成时，此处代码运行
          await localforage.setItem(
            "winsay_latest_boot_time",
            Date.now().toString()
          );
          ccc = false;
          response(localforage.driver());
        });
      });
    } catch (e) {
      console.log(e);
      await API.sleep(200);
    }
  }
}).then(async function (response) {
  console.log(response); // 'asyncStorage'
  await new Promise(async (resolve) => {
    window.winsay.funs.loadScript(
      `${window.winsay.where.themeRoot}script/CP.js?r=` + Math.random(),
      true,
      true
    ).onload = async () => {
      window.winsay.funs.loadScript(
        `${window.winsay.where.themeRoot}script/SSS.js?r=` + Math.random(),
        true,
        true
      );
      await initCPwithDefault();
    };

    setTimeout(async () => {
      var SelfProtection = await localforage.getItem(
        "SC_winsay_cp_system__SelfProtection"
      );
      var P = [];
      var bP = "";
      path
        ? (bP = path.join(
            window.siyuan.config.system.confDir,
            "appearance",
            "themes",
            window.winsay.where.localThemeName
          ))
        : null;
      fs
        ? fs.access(bP, (e) => {
            if (e) {
              console.error(e);
              alert(
                `主题根目录未正确命名或不存在：【致命错误】${bP} 文件夹不存在。修正错误后，需重启思源并重新选择主题。（在主题设置中关闭主题自我保护可禁用此通知）`
              );
            }
          })
        : null;
      if (SelfProtection && SelfProtection === "true") {
        try {
          path ? P.push(path.join(bP, "script", "utils", "api.min.js")) : null;
          path ? P.push(path.join(bP, "script", "CP.js")) : null;
          path ? P.push(path.join(bP, "script", "config.js")) : null;
          path ? P.push(path.join(bP, "style", "Init.min.css")) : null;
          path ? P.push(path.join(bP, "style", "Block.css")) : null;
          P.forEach((i) => {
            fs
              ? fs.readFile(i, "utf-8", (e, data) => {
                  if (e) {
                    console.error(e);
                  }
                })
              : null;
          });
        } catch (e) {
          console.error(e);
        }
      }
    }, 1000);

    var kernelVersion = window.siyuan.config.system.kernelVersion;
    var oldVersion = "2.6.1";
    var cv_result = API.compareVersion(oldVersion, kernelVersion);
    var AutoCheckSilently = await localforage.getItem(
      "SC_winsay_cp_search__about_AutoCheckSilently"
    );
    switch (cv_result) {
      case 1:
      case 0:
        if (!(AutoCheckSilently && AutoCheckSilently == "true")) {
          setTimeout(() => {
            API.通知(
              `主题已停止支援思源 ${oldVersion} 及更早版本，建议更新思源版本<br><a href="https://github.com/Hi-Windom/winsay/issues?q=is%3Aissue+label%3AAbolishment+is%3Aclosed+label%3A%E9%80%82%E9%85%8D%E6%80%9D%E6%BA%90" target="_blank" style="color: #58c">更多信息</a>`,
              8000
            );
          }, 3000);
        }
        break;
      default:
        break;
    }

    switch (API.compareVersion("2.7.0", kernelVersion)) {
      case -1:
      case 0:
        updateStyle(
          "v2_7_0",
          `${window.winsay.where.themeRoot}VP/v2_7/v2_7_0.css`
        );
        window.winsay.funs.loadScript(
          `${window.winsay.where.themeRoot}VP/v2_7/v2_7_0.js`,
          true
        );
        break;
      default:
        break;
    }
    resolve();
  });
});

window.winsay.ekits.gites = {
  UPath: `/appearance/themes/Sofill=/eHiWindom/gites/`,
};
window.winsay.ekits.lnco = {};

async function ghostTabBar() {
  await localforage
    .getItem("SC_winsay_cp_appearance__TabBarMode")
    .then(async (value) => {
      if (!API.isEmptyString(value)) {
        updateStyle(
          "TabBar",
          `${window.winsay.where.themeRoot}style/sweet/${value}`
        );
      } else {
        console.warn(value);
      }
    });
}

async function initCPwithDefault() {
  await localforage.getItem("SC_winsay_cp_inited").then(async (inited) => {
    console.error(inited);
    if (inited != "true") {
      await localforage.setItem("SC_winsay_cp_system__SelfProtection", "true");
      await localforage.setItem("SC_winsay_cp_editor__LH_Adaptive", "true");
      await localforage.setItem("SC_winsay_cp_editor__ListAutoIndent", "true");
      await localforage.setItem("SC_winsay_cp_editor__HintHint-index", "true");
      await localforage.setItem(
        "SC_winsay_cp_editor__BlockTable_FontSize",
        "92%"
      );
      await localforage.setItem(
        "SC_winsay_cp_editor__Block-Inline-link__block-ref-content",
        "⁅⁅ ⁆⁆"
      );
      await localforage.setItem(
        "SC_winsay_cp_editor__block__popover--open__PinSense",
        "1"
      );
      await localforage.setItem(
        "SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor",
        "var(--b3-theme-surface-lighter)"
      );
      await localforage.setItem("SC_winsay_cp_appearance__ShowWebIcon", "true");
      await localforage.setItem(
        "SC_winsay_cp_appearance__ShowFileIcon",
        "true"
      );
      await localforage.setItem(
        "SC_winsay_cp_appearance__status_msg_opacity",
        "0.9"
      );
      await localforage.setItem(
        "SC_winsay_cp_appearance__strengthen_backlinkList_panel_border",
        "true"
      );
      await localforage.setItem(
        "SC_winsay_cp_filetree__Adaptive_display",
        "true"
      );
      await localforage.setItem("SC_winsay_cp_search__index", "true");
      await localforage.setItem(
        "SC_winsay_cp_search__layout",
        "layout-Auto.css"
      );
      //初始化完成
      await localforage.setItem("SC_winsay_cp_inited", "true");
    }
  });

  // ghostTabBar();
}

updateStyle("MI", `${window.winsay.where.themeRoot}style/MI.css`);
/* 根据不同设备加载样式配置文件 */
switch (window.winsay.OS) {
  case "android":
    updateStyle(
      "Mobile",
      `${window.winsay.where.themeRoot}style/Mobile/Android.css`
    );
    break;
  default:
    updateStyle("fonts", `${window.winsay.ekits.gites.UPath}style/fonts.css`);
    break;
}

// 改善开启自定义主题的体验
updateStyle("Init", `${window.winsay.where.themeRoot}style/Init.min.css`);
updateStyle("SCC", `${window.winsay.where.themeRoot}style/SCC.css`);
updateStyle("Popup", `${window.winsay.where.themeRoot}style/Popup.css`);
updateStyle("Patch", `${window.winsay.where.themeRoot}style/Patch.css`);
updateStyle("CP", `${window.winsay.where.themeRoot}style/CP.css`);
updateStyle(
  "MI-ToolBar-Auto",
  `${window.winsay.where.themeRoot}style/sweet/MI-ToolBar-Auto.css`
);
updateStyle(
  "Funs-list2",
  `${window.winsay.where.themeRoot}style/Funs-list2.min.css`
);
updateStyle(
  "Funs-ScrollView",
  `${window.winsay.where.themeRoot}style/Funs-ScrollView.css`
);


if (config.clientMode == "body--mobile") {
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/lib/hammer.min.js`,
    true
  );
  window.winsay.funs.loadScript(
    `${window.winsay.where.themeRoot}script/sweet/MobileMagicBall.js`,
    true
  );
}

let urlParam1 = API.getUrlParam(window.location.href, "action");
let urlParam2 = API.getUrlParam(window.location.href, "name");
let urlParam3 = API.getUrlParam(window.location.href, "args");
if (urlParam1 && urlParam2) {
  switch (urlParam1) {
    case "updateTheme":
      document.querySelector("#toolbar #barSetting").click();
      document
        .querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]')
        .click();
      setTimeout(() => {
        document
          .querySelector(
            `#configBazaarTheme [class="b3-card__actions"][data-name="${urlParam2}"]>[data-type="install-t"]`
          )
          .click();
      }, 500);
      break;
    case "next":
      if (urlParam2 == "update-winsay") {
        // window.location.replace(
        //   `http://${urlParam3}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`
        // );
        window.open(
          `http://${decodeURIComponent(
            urlParam3
          )}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`,
          "_self"
        );
      }
    default:
      break;
  }
}

if (!document.body.classList.contains("branch--Sillot")) {
  fs
    ? fs.access(oncePath, function (err) {
        if (!err) {
          setTimeout(() => {
            window.winsay.funs.loadScript(
              `${window.winsay.where.themeRoot}script/module/AlertOnce.js`,
              true
            );
            setTimeout(() => {
              fs.unlink(oncePath, function (err) {
                if (err) {
                  throw err;
                }
                console.log("一次性通知已销毁");
              });
            }, 3000);
            return;
          }, 2000);
        }
      })
    : null;
}
