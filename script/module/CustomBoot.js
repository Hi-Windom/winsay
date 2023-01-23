import * as config from "../config.js";
import * as API from "../utils/api.min.js";
var fs = null;
var oncePath = `${config.winsay_ROOT_ABS}/script/module/AlertOnce.js`;
const SB1 = "winsayUserData";
const updateStyle = window.sofill.funs.updateStyle;
// const localforage = new API.LocalStorage(3);

window.sofill.storage.iterLC = config.Iterator1(config.colors1)
window.sofill.storage.iterDC = config.Iterator2(config.colors2)

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
          await localforage.setItem("winsay_latest_boot_time", Date.now().toString());
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
    window.sofill.funs.loadScript(
      window.sofill.funs.addURLParam(
        `${config.winsay_ROOT}script/CP.js?r=` + Math.random()
      ),
      undefined,
      true,
      true
    ).onload = async () => {
      window.sofill.funs.loadScript(
        window.sofill.funs.addURLParam(
          `${config.winsay_ROOT}script/SSS.js?r=` + Math.random()
        ),
        undefined,
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
            "Sofill-"
          ))
        : null;
      fs
        ? fs.access(bP, (e) => {
            if (e) {
              console.error(e);
              alert(
                `主题根目录未正确命名或不存在：【致命错误】${bP} 文件夹不存在。修正错误后，需重启思源并重新选择主题。`
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
                    alert(
                      `主题自我保护检测到异常：【致命错误】${i} 文件不存在`
                    );
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
        updateStyle("v2_7_0", `${config.winsay_ROOT}VP/v2_7/v2_7_0.css`);
        window.sofill.funs.loadScript(
          window.sofill.funs.addURLParam(
            `${config.winsay_ROOT}VP/v2_7/v2_7_0.js`
          ),
          undefined,
          true
        );
        break;
      default:
        break;
    }
    resolve();
  });
});

if (API.isDesktopAppMode()) {
  fs = require("fs");
}

window.sofill.ekits.gites = {
  UPath: `/appearance/themes/Sofill=/eHiWindom/gites/`,
};
window.sofill.ekits.lnco = {};

async function ghostTabBar() {
  await localforage
    .getItem("SC_winsay_cp_appearance__TabBarMode")
    .then(async (value) => {
      if (!API.isEmptyString(value)) {
        updateStyle("TabBar", `${config.winsay_ROOT}style/sweet/${value}`);
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

updateStyle("MI", `${config.winsay_ROOT}style/MI.css`);
/* 根据不同设备加载样式配置文件 */
switch (window.sofill.OS) {
  case "android":
    updateStyle("Mobile", `${config.winsay_ROOT}style/Mobile/Android.css`);
    break;
  default:
    updateStyle("fonts", `${window.sofill.ekits.gites.UPath}style/fonts.css`);
    break;
}

// 改善开启自定义主题的体验
updateStyle("Init", `${config.winsay_ROOT}style/Init.min.css`);
updateStyle("SCC", `${config.winsay_ROOT}style/SCC.css`);
updateStyle("Popup", `${config.winsay_ROOT}style/Popup.css`);
updateStyle("Patch", `${config.winsay_ROOT}style/Patch.css`);

updateStyle(
  "MI-ToolBar-Auto",
  `${config.winsay_ROOT}style/sweet/MI-ToolBar-Auto.css`
);
updateStyle("Funs-list2", `${config.winsay_ROOT}style/Funs-list2.min.css`);
updateStyle(
  "Funs-ScrollView",
  `${config.winsay_ROOT}style/Funs-ScrollView.css`
);

// 根据主题加载
updateStyle("CP", `${config.winsay_ROOT}style/CP.css`);
switch (config.ThemeName) {
  case "Sofill=":
    updateStyle("CP-themely", `/appearance/themes/Sofill=/style/CP-lili.css`);
    break;
  case "Sofill-":
  default:
    updateStyle("CP-themely", `${config.winsay_ROOT}style/CP-winsay.css`);
    break;
}

if (config.clientMode == "body--mobile") {
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${config.winsay_ROOT}script/lib/hammer.min.js`
    ),
    "module",
    true
  );
  window.sofill.funs.loadScript(
    window.sofill.funs.addURLParam(
      `${config.winsay_ROOT}script/sweet/MobileMagicBall.js`
    ),
    undefined,
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
            window.sofill.funs.loadScript(
              window.sofill.funs.addURLParam(
                `${config.winsay_ROOT}script/module/AlertOnce.js`
              ),
              undefined,
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
