import * as config from "../config.js";
import * as API from "../utils/api.min.js";
var fs = null;
var oncePath = `${config.winsay_ROOT_ABS}/script/module/AlertOnce.js`
if (API.isAppMode()) {
  fs = require("fs");
}
fs
  ? fs.access(
      oncePath,
      function (err) {
        if (!err) {
          window.funs.loadScript(
            window.funs.addURLParam(
              "/appearance/themes/Sofill-/script/module/AlertOnce.js"
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
        }
      }
    )
  : null;

// 初始化获取用户配置
let SC_winsay_cp_appearance__TabBarMode = localStorage.getItem(
  "SC_winsay_cp_appearance__TabBarMode"
);

async function ghostTabBar() {
  if (!API.isEmpty(SC_winsay_cp_appearance__TabBarMode)) {
    window.funs.updateStyle(
      "TabBar",
      `/appearance/themes/Sofill-/style/sweet/${SC_winsay_cp_appearance__TabBarMode}`
    );
    // console.log(SC_winsay_cp_appearance__TabBarMode);
  } else {
    new Promise(function (response) {
      var url = `http://127.0.0.1:6806/api/file/getFile`;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-type", "application/json");
      var obj = { path: config.config_UI };
      httpRequest.send(JSON.stringify(obj));
      // 响应后的回调函数
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          response(JSON.parse(json));
        }
      };
    }).then(function (response) {
      window.funs.updateStyle(
        "TabBar",
        `/appearance/themes/Sofill-/style/sweet/${response.style.TabBar}`
      );
      console.log("use default");
    });
  }
}

ghostTabBar();

window.funs.updateStyle("MI", `/appearance/themes/Sofill-/style/MI.min.css`);
/* 根据不同设备加载样式配置文件 */
switch (window.theme.OS) {
  case "android":
    window.funs.updateStyle(
      "MI-DocTree",
      `/appearance/themes/Sofill-/style/MI-DocTree.css`
    );
    window.funs.updateStyle(
      "MI-Doc&Breadcrumb",
      `/appearance/themes/Sofill-/style/MI-Doc.css`
    );
    window.funs.updateStyle(
      "Mobile",
      `/appearance/themes/Sofill-/style/android/Mobile.css`
    );
    break;
  default:
    window.funs.updateStyle(
      "MI-DocTree",
      `/appearance/themes/Sofill-/style/MI-DocTree.css`
    );
    window.funs.updateStyle(
      "MI-Doc&Breadcrumb",
      `/appearance/themes/Sofill-/style/MI-Doc.css`
    );
    break;
}

// 改善开启自定义主题的体验
window.funs.updateStyle(
  "Init",
  `/appearance/themes/Sofill-/style/Init.min.css`
);
window.funs.updateStyle("SCC", `/appearance/themes/Sofill-/style/SCC.min.css`);
window.funs.updateStyle(
  "Popup",
  `/appearance/themes/Sofill-/style/Popup.min.css`
);
window.funs.updateStyle("Patch", `/appearance/themes/Sofill-/style/Patch.css`);

window.funs.updateStyle(
  "MI-ToolBar-Auto",
  `/appearance/themes/Sofill-/style/sweet/MI-ToolBar-Auto.css`
);
window.funs.updateStyle(
  "MI-TabBar-Common",
  `/appearance/themes/Sofill-/style/MI-TabBar-Common.css`
);
window.funs.updateStyle(
  "MI-TagTree",
  `/appearance/themes/Sofill-/style/MI-TagTree.css`
);
window.funs.updateStyle(
  "MI-HDTree",
  `/appearance/themes/Sofill-/style/MI-HDTree.css`
);
window.funs.updateStyle(
  "MI-Dock",
  `/appearance/themes/Sofill-/style/MI-Dock.css`
);
window.funs.updateStyle(
  "MI-Dynamic",
  `/appearance/themes/Sofill-/style/MI-Dynamic.css`
);
window.funs.updateStyle(
  "Funs-list2",
  `/appearance/themes/Sofill-/style/Funs-list2.min.css`
);
window.funs.updateStyle(
  "Funs-ScrollView",
  `/appearance/themes/Sofill-/style/Funs-ScrollView.css`
);

// 根据主题加载
window.funs.updateStyle("CP", `/appearance/themes/Sofill-/style/CP.min.css`);
switch (config.ThemeName) {
  case "Sofill=":
    window.funs.updateStyle(
      "CP-lili",
      `/appearance/themes/Sofill=/style/CP-lili.css`
    );
    break;
  case "Sofill-":
  default:
    window.funs.updateStyle(
      "CP-winsay",
      `/appearance/themes/Sofill-/style/CP-winsay.css`
    );
    break;
}

var kernelVersion = window.siyuan.config.system.kernelVersion;
var oldVersion = "2.5.4";
var cv_result = API.compareVersion(oldVersion, kernelVersion);
var AutoCheckSilently = localStorage.getItem(
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

let inited = localStorage.getItem("SC_winsay_cp_inited");
if (inited != "true") {
  localStorage.setItem("SC_winsay_cp_system__SelfProtection", "true");
  localStorage.setItem("SC_winsay_cp_editor__LH_Adaptive", "true");
  localStorage.setItem("SC_winsay_cp_editor__ListAutoIndent", "true");
  localStorage.setItem("SC_winsay_cp_editor__HintHint-index", "true");
  localStorage.setItem("SC_winsay_cp_editor__BlockTable_FontSize", "92%");
  localStorage.setItem(
    "SC_winsay_cp_editor__Block-Inline-link__block-ref-content",
    "⁅⁅ ⁆⁆"
  );
  localStorage.setItem(
    "SC_winsay_cp_editor__block__popover--open__PinSense",
    "1"
  );
  localStorage.setItem(
    "SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor",
    "var(--b3-theme-surface-lighter)"
  );
  localStorage.setItem("SC_winsay_cp_appearance__ShowWebIcon", "true");
  localStorage.setItem("SC_winsay_cp_appearance__ShowFileIcon", "true");
  localStorage.setItem("SC_winsay_cp_appearance__status_msg_opacity", "0.9");
  localStorage.setItem(
    "SC_winsay_cp_appearance__strengthen_backlinkList_panel_border",
    "true"
  );
  localStorage.setItem("SC_winsay_cp_filetree__Adaptive_display", "true");
  localStorage.setItem("SC_winsay_cp_search__index", "true");
  localStorage.setItem("SC_winsay_cp_search__layout", "layout-Auto.css");
  //初始化完成
  localStorage.setItem("SC_winsay_cp_inited", "true");
}

if (config.clientMode == "body--mobile") {
  window.funs.loadScript(
    window.funs.addURLParam("/appearance/themes/Sofill-/script/lib/hammer.min.js"),
    "module",
    true
  );
  window.funs.loadScript(
    window.funs.addURLParam("/appearance/themes/Sofill-/script/sweet/MobileMagicBall.js"),
    undefined,
    true
  );
}