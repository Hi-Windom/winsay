import { ConfirmDialog, CPDialog } from "./module/CPM.js";
import * as CD from "./module/XML/ConfirmDialog.js";
import * as API from "./utils/api.min.js";
import * as config from "./config.js";
var fs = null;
var path = null;
var CP_dialog = null;
// const localforage = new API.LocalStorage(8);
const eSetProperty = async (p, pv) => {
  document.documentElement.style.setProperty(p, pv);
};
const eRemoveProperty = async (p) => {
  document.documentElement.style.removeProperty(p);
};

if (API.isDesktopAppMode()) {
  fs = require("fs");
  path = require("path");
}

if (document.getElementById("SC-CP") == null) {
  CP_dialog = new CPDialog({
    isCancel: true,
    dragable: false, //貌似可拖拽会有问题
    maskable: true,
  });
}

window.winsay.localVersion = {};
window.winsay.localVersion.version = "";
window.winsay.localVersion.useBazaar = "";
window.winsay.localVersion.useGithub = "";
window.winsay.localVersion.vinfoHTML = "";
window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue = "null";

// 声明计时器/定时器
window.winsay.storage.SC_winsay_cp_T__t2 = null;
window.winsay.storage.It_DocWidthMode = null;
window.winsay.storage.It_SelfProtector = null;
window.winsay.storage.It_filterTimer = null;

async function switchlocalVersion() {
  if (
    (await API.getNewValueFromDomByID("SC_winsay_cp_about__checkAPI")) ==
    "Bazaar"
  ) {
    return window.winsay.localVersion.useBazaar; // 简单省事,但是本地覆盖版本号不会生效
  } else {
    return window.winsay.localVersion.useGithub;
  }
}

async function getlocalVersion() {
  return new Promise(function (response) {
    var url = `http://127.0.0.1:6806/api/file/getFile`;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    var obj = {
      path: `/conf/appearance/themes/${config.ThemeName}/theme.json`,
    };
    httpRequest.send(JSON.stringify(obj));
    // 响应后的回调函数
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        // console.log(json);
        response(JSON.parse(json));
      }
    };
  }).then(async function (response) {
    window.winsay.localVersion.useGithub = response.version;
    window.winsay.localVersion.useBazaar =
      window.siyuan.config.appearance.themeVer;
    window.winsay.localVersion.version = await switchlocalVersion();
    window.winsay.localVersion.vinfoHTML = `当前版本 v<span>${window.winsay.localVersion.version}</span>
    <div class="b3-label__text"><a href="https://gitee.com/soltus/Sofill/blob/main/CHANGELOG/winsay.md" target="_blank">浏览更新历史</a></div>`;
    setTimeout(() => {
      document.getElementById(
        "sc-custom-container-placehold"
      ).children[0].innerHTML = `${config.ThemeName} v${window.winsay.localVersion.version} CP`;
      document.getElementById("SC_winsay_cp_version").innerHTML =
        window.winsay.localVersion.vinfoHTML;
    }, 100);
  });
}

async function checkUpdateViaGithub(v, q) {
  let themes = await API.getBazaarTheme(window.location.host, "", {});
  let localThemes = await API.getInstalledTheme(window.location.host, "", {});
  new Promise(function (response) {
    var url = `https://api.github.com/repos/Hi-Windom/${config.AliaName}/releases/latest`;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(null);
    // 响应后的回调函数
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        response(JSON.parse(json));
      }
    };
  }).then(async function (response) {
    // console.log(response);
    let version = response["tag_name"];
    let SVN = await API.getNewValueFromDomByID(
      "SC_winsay_cp_about__AutoCheckIgnoreSVN"
    );
    if (SVN == "true") {
      let x = v.split(".");
      x.splice(-1);
      v = x.join(".");
      let y = version.split(".");
      y.splice(-1);
      version = y.join(".");
    }
    if (API.compareVersion(version, v) == 1) {
      console.warn("Github 有新版本发布");
      let updating = new ConfirmDialog({
        isCancel: true,
        dragable: false,
        XML: CD.ConfirmDialog4,
        success() {
          console.log("点击了确定");
          window.open(
            `https://github.com/Hi-Windom/${config.AliaName}/releases/download/${version}/${config.ThemeName}__${version}.zip`,
            "_blank"
          );
          window.open(
            `https://github.com/Hi-Windom/${config.AliaName}/releases/tag/${version}`,
            "_blank"
          );
        },
        cancel() {
          console.log("点击了取消");
        },
        maskable: true,
      });
      await updating.open(() => {
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        var urlText = response["body"].replace(reg, "<a href='$1$2'>$1$2</a>");
        document.getElementById(
          "UpdateInfo"
        ).innerHTML = `${v} > ${version}<br><span class="fn__space"></span><div class="p" style="max-height: 250px;white-space: break-spaces;word-break: break-all;overflow: scroll;">${urlText}</div>`;
        document.getElementById(
          "CoverWarming"
        ).innerHTML = `下载链接能否访问取决于你的网络`;
      });
      await localforage.setItem("SC_winsay_latest_checked_version", version);
    } else {
      if (q == false) {
        API.通知(`真棒👍，主题已是最新版本`, 800);
      }
    }
  });
}
async function checkUpdateViaBazaar(v, q) {
  let themes = await API.getBazaarTheme(window.location.host, "", {});
  // console.log(themes.data);
  // let localThemes = await API.getInstalledTheme(window.location.host, "", {});
  // console.log(localThemes.data);

  let mytheme = {};
  themes.data.packages.forEach((p) => {
    p.name == "Sofill-" ? (mytheme = p) : null;
  });
  if (API.compareVersion(mytheme.version, v) == 1) {
    console.warn("集市有新版本发布");
    await localforage.setItem(
      "SC_winsay_latest_checked_version",
      mytheme.version
    );
    API.通知(`集市有新版本发布：<br>${v} => ${mytheme.version}<br> `);
    updateTheme("Sofill-");
  } else {
    if (q == false) {
      API.通知(`真棒👍，主题已是最新版本`, 800);
    }
  }
}

async function updateTheme(themeName) {
  if (
    document.body.classList.contains("body--mobile") &&
    !document.body.classList.contains("client--browser")
  ) {
    setTimeout(async () => {
      (await API.getNewValueFromDomByID(
        "SC_winsay_cp_about__AutoToUpdateMobile"
      )) == "true"
        ? window.open(
            `http://0.0.0.0:6806/stage/build/desktop/?action=next&name=update-winsay&args=${encodeURIComponent(
              window.siyuan.config.localIPs[0] + ":6806"
            )}`,
            "_blank"
          )
        : null;
    }, 500);
  } else {
    document.querySelector("#toolbar #barSetting").click();
    document
      .querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]')
      .click();
    setTimeout(() => {
      document
        .querySelector(
          `#configBazaarTheme [class="b3-card__actions"][data-name="${themeName}"]>[data-type="install-t"]`
        )
        .click();
    }, 1000);
  }
}

async function checkUpdate(q = false) {
  let mode = await API.getNewValueFromDomByID("SC_winsay_cp_about__checkAPI");
  let v = await switchlocalVersion();
  switch (mode) {
    case "Github":
      await checkUpdateViaGithub(v, q);
      break;
    default:
      await checkUpdateViaBazaar(v, q);
      break;
  }
}

async function insertCPintro(dom, way, inID, classList) {
  if (document.getElementById(inID) == null) {
    const CDUI_1 = document.createElement("button");
    CDUI_1.id = inID;
    CDUI_1.className = classList;
    CDUI_1.ariaLabel = "主题设置（实验性）";
    CDUI_1.style.paddingRight = "0";
    CDUI_1.innerHTML = `<svg class="b3-menu__icon Sofill-CDUI-btn__icon" "=""><use xlink:href="#iconSettings"></use></svg><span class="b3-menu__label">主题设置</span>`;
    dom.insertAdjacentElement(way, CDUI_1);
    document.getElementById(inID).onclick = async () => {
      CP_dialog.open();
      await getlocalVersion();
      document
        .getElementById("sofill_preview")
        .setAttribute("src", `${window.winsay.where.themeRoot}preview.png`);
    };
  }
}

function addCPentrance() {
  setTimeout(() => {
    let inDom1 = document.querySelector("#barDock > .b3-menu");
    insertCPintro(
      inDom1.children[0],
      "beforebegin",
      "Sofill-CDUI-2",
      "Sofill-CDUI-btn b3-menu__item",
      `<svg class="b3-menu__icon Sofill-CDUI-btn__icon" "=""><use xlink:href="#iconSettings"></use></svg><span class="b3-menu__label">主题设置</span>`
    );
  }, 500);

  if (config.clientMode == "body--mobile") {
    const leftPanel = document.getElementById("sidebar");
    const menu = document.getElementById("menu");
    if (document.getElementById("Sofill-CDUI-1") == null) {
      const CDUI_1 = document.createElement("svg");
      CDUI_1.setAttribute("data-type", "");
      CDUI_1.id = "Sofill-CDUI-1";
      CDUI_1.className = "Sofill-CDUI-btn toolbar__icon";
      CDUI_1.innerHTML = `<svg id="CP_ep1" viewBox="0 0 32 32">
      <path d="M25.143 10.667h-1.524v-3.048c0-4.206-3.413-7.619-7.619-7.619s-7.619 3.413-7.619 7.619v3.048h-1.524c-1.676 0-3.048 1.371-3.048 3.048v15.238c0 1.676 1.371 3.048 3.048 3.048h18.286c1.676 0 3.048-1.371 3.048-3.048v-15.238c0-1.676-1.371-3.048-3.048-3.048zM11.428 7.619c0-2.53 2.042-4.571 4.571-4.571s4.571 2.042 4.571 4.571v3.048h-9.143v-3.048zM25.143 28.952h-18.286v-15.238h18.286v15.238zM16 24.381c1.676 0 3.048-1.371 3.048-3.048s-1.371-3.048-3.048-3.048-3.048 1.371-3.048 3.048 1.371 3.048 3.048 3.048z"></path>
    </svg>`;
      const CDUI_2 = document.createElement("div");
      CDUI_2.id = "Sofill-CDUI-2";
      CDUI_2.className = "Sofill-CDUI-btn b3-list-item b3-list-item--big";
      CDUI_2.innerHTML = `<span class="b3-list-item__icon b3-list-item__graphic">🏳️&zwj;🌈</span><span class="b3-list-item__text">主题设置</span>`;
      leftPanel.children[0].insertAdjacentElement("beforeend", CDUI_1);
      document
        .querySelector("#Sofill-CDUI-1")
        .addEventListener("click", async (event) => {
          CP_dialog.open();
          await getlocalVersion();
          event.stopPropagation();
        });
      document.querySelector("#toolbarMore").addEventListener("click", (e) => {
        setTimeout(() => {
          menu.insertBefore(CDUI_2, menu.children[0]);
          document
            .querySelector("#Sofill-CDUI-2")
            .addEventListener("click", async (event) => {
              CP_dialog.open();
              await getlocalVersion();
              // event.stopPropagation();
            });
        }, 100);
      });
    }
  } else {
    var barhelp = document.querySelector("#barHelp");
    if (barhelp) {
      barhelp.addEventListener(
        "click",
        (event) => {
          if (
            event.target.parentNode.parentNode.id == "toolbarVIP" ||
            event.target.parentNode.parentNode.parentNode.id == "toolbarVIP"
          ) {
            document.querySelector("#toolbar #barSetting").click();
            document
              .querySelector(
                '.b3-tab-bar:not(.sc-custom-nav) [data-name="account"]'
              )
              .click();
            event.stopPropagation();
          } else if (
            event.target.parentNode.id == "barMode" ||
            event.target.parentNode.parentNode.id == "barMode"
          ) {
            document.querySelector("#toolbar #barMode").click();
            event.stopPropagation();
          } else if (
            event.target.parentNode.classList.contains("b3-menu__item") ||
            event.target.parentNode.parentNode.classList.contains(
              "b3-menu__item"
            )
          ) {
            console.log(event.target.innerHTML);
          } else if (
            event.target.id == "barTopHelp" ||
            event.target.parentNode.id == "barTopHelp"
          ) {
            event.target.id = "barHelp";
          } else {
            event.stopPropagation();
          }
        },
        true
      );

      barhelp.setAttribute("class", "toolbar__item");
      barhelp.children[0].innerHTML = `<use xlink:href="#iconMore"></use>`;
      insertCPintro(
        barhelp.children[1],
        "beforeend",
        "Sofill-CDUI-1",
        "Sofill-CDUI-btn b3-menu__item"
      );
    } else {
      setTimeout(() => {
        let inDom1 = document.querySelector("#barDock > .b3-menu");
        insertCPintro(
          inDom1.children[0],
          "beforebegin",
          "Sofill-CDUI-2",
          "Sofill-CDUI-btn b3-menu__item"
        );
      }, 100);
    }
    if (barhelp && document.getElementById("sc_drawer") == null) {
      var drawer = document.createElement("div");
      drawer.id = "sc_drawer";
      drawer.style.display = "flex";
      drawer.style.flexDirection = "row-reverse";
      drawer.style.borderBottom = "2px dashed var(--b3-theme-surface-lighter)";
      drawer.style.minHeight = "2rem";
      setTimeout(() => {
        drawer.setAttribute("data-themeInfo", `${config.AliaName}`);
      }, 1000);
      barhelp.children[1].insertAdjacentElement("afterbegin", drawer);
    }

    if (document.querySelector("body.android.body--desktop")) {
      // 为安卓pad端的主界面添加一个退出应用按钮 #758
      let icon = `<svg><use xlink:href="#iconQuit"></use></svg>`;
      let t = document.querySelector("#toolbar");
      let div = document.createElement("div");
      div.id = "barQuit";
      div.className = "toolbar__item b3-tooltips b3-tooltips__sw";
      div.setAttribute("aria-label", "退出 Quit");
      div.innerHTML = icon;
      t.insertAdjacentElement("beforeend", div);
      div.onclick = () => {
        if (document.body.classList.contains("client--browser")) {
          document.querySelector("#toolbar #barSetting").click();
          document
            .querySelector(
              '.b3-tab-bar:not(.sc-custom-nav) [data-name="about"]'
            )
            .click();
          setTimeout(() => {
            document.querySelector("#menuSafeQuit").click();
            document.elementFromPoint(1, 1).click();
          }, 500);
        } else {
          window.location.href = "siyuan://api/system/exit";
        }
      };
    }
  }
}

// 初始化选项的值
async function CP_InitAll() {
  // let selectList = document.querySelectorAll("select[id^='SC_winsay_cp']");
  // selectList?.forEach(async function (value) {
  //   await API.propInit(value.id, "change");
  // });
  // let rangeSliderList = document.querySelectorAll(
  //   "input[id^='SC_winsay_cp'][type='range']"
  // );
  // rangeSliderList?.forEach(async function (value) {
  //   await API.propInit(value.id, "change");
  // });
  // let checkboxList = document.querySelectorAll(
  //   "input[id^='SC_winsay_cp'][type='checkbox']"
  // );
  // checkboxList?.forEach(async function (value) {
  //   await API.checkedInit(value);
  // });
  let dom = document.querySelector("#SC-CP");
  dom
    ? await API.initAllPropFromIDBAsync(dom)
    : console.error("CP_dialog not found");
}

// 按钮监听事件
async function addCPAlleListener() {
  document
    .getElementById("SC_winsay_cp_system__ClearlocalStorage")
    .addEventListener("click", async () => {
      let clearAll = new ConfirmDialog({
        isCancel: true,
        dragable: false,
        XML: CD.ConfirmDialog1,
        success() {
          console.log("点击了确定");
          var counter = 0;
          for (var i = 0; i < localforage.length; i++) {
            var key = localforage.key(i);
            if (key.startsWith("winsay_") || key.startsWith("SC_winsay_")) {
              localforage.removeItem(key);
              console.log(`${key} removed`);
              counter++;
            }
          }
          // 简单粗暴的执行两次
          for (var i = 0; i < localforage.length; i++) {
            var key = localforage.key(i);
            if (key.startsWith("winsay_") || key.startsWith("SC_winsay_")) {
              localforage.removeItem(key);
              console.log(`${key} removed`);
              counter++;
            }
          }
          API.通知(`已清理 ${counter} 项<br>页面即将刷新`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        cancel() {
          console.log("点击了取消");
        },
        maskable: true,
      });

      clearAll.open();
    });

  document
    .getElementById("SC_winsay_cp_system__ResetAllSettings")
    .addEventListener("click", async () => {
      let clearAll = new ConfirmDialog({
        isCancel: true,
        dragable: false,
        XML: CD.ConfirmDialog2,
        success() {
          console.log("点击了确定");
          var counter = 0;
          for (var i = 0; i < localforage.length; i++) {
            var key = localforage.key(i);
            if (key.startsWith("SC_winsay_cp")) {
              localforage.removeItem(key);
              console.log(`${key} removed`);
              counter++;
            }
          }
          // 简单粗暴的执行两次
          for (var i = 0; i < localforage.length; i++) {
            var key = localforage.key(i);
            if (key.startsWith("SC_winsay_cp")) {
              localforage.removeItem(key);
              console.log(`${key} removed`);
              counter++;
            }
          }
          API.通知(`已重置 ${counter} 项<br>页面即将刷新`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        cancel() {
          console.log("点击了取消");
        },
        maskable: true,
      });

      clearAll.open();
    });

  document
    .getElementById("SC_winsay_cp_system__Refresh")
    .addEventListener("click", async () => {
      setTimeout(() => {
        window.location.reload();
      }, 300);
    });

  document
    .getElementById("SC_winsay_cp_system__ShowDebugInfo")
    .addEventListener("click", async () => {
      setTimeout(() => {
        let info = new ConfirmDialog({
          isCancel: true,
          dragable: false,
          XML: CD.ConfirmDialog5,
          success() {
            console.log("点击了确定");
          },
          cancel() {
            console.log("点击了取消");
          },
          maskable: false,
        });

        info.open(() => {
          document.getElementById("UpdateInfo").innerHTML = `
<div style="max-height: 58vh;overflow: auto;white-space: nowrap;">
localIPs  <br><code class="fn__code">${window.siyuan.config.localIPs}</code><br><br>
api.token  <br><code class="fn__code">${window.siyuan.config.api.token}</code><br><br>
system.homeDir  <br><code class="fn__code">${window.siyuan.config.system.homeDir}</code><br><br>
system.workspaceDir  <br><code class="fn__code">${window.siyuan.config.system.workspaceDir}</code><br><br>
system.confDir  <br><code class="fn__code">${window.siyuan.config.system.confDir}</code><br><br>
system.dataDir  <br><code class="fn__code">${window.siyuan.config.system.dataDir}</code><br><br>
appearance.darkThemes  <br><code class="fn__code">${window.siyuan.config.appearance.darkThemes}</code><br><br>
appearance.lightThemes  <br><code class="fn__code">${window.siyuan.config.appearance.lightThemes}</code><br><br>
appearance.mode  <br><code class="fn__code">${window.siyuan.config.appearance.mode}</code><br><br>
appearance.themeDark  <br><code class="fn__code">${window.siyuan.config.appearance.themeDark}</code><br><br>
appearance.themeLight  <br><code class="fn__code">${window.siyuan.config.appearance.themeLight}</code><br><br>
appearance.themeVer  <br><code class="fn__code">${window.siyuan.config.appearance.themeVer}</code><br><br>
appearance.blockRefTextLeft  <br><code class="fn__code">${window.siyuan.config.export.blockRefTextLeft}</code><br><br>
appearance.blockRefTextRight  <br><code class="fn__code">${window.siyuan.config.export.blockRefTextRight}</code><br><br>
fileTree.maxOpenTabCount（页签打开最大数量）  <br><code class="fn__code">${window.siyuan.config.fileTree.maxOpenTabCount}</code><br><br>
system.fixedPort（是否固定端口）  <br><code class="fn__code">${window.siyuan.config.system.fixedPort}</code><br><br>
appearance.hideStatusBar（修改没有效果，仅用于判断是否隐藏底部状态栏）  <br><code class="fn__code">${window.siyuan.config.appearance.hideStatusBar}</code><br><br>
appearance.customCSS（是否开启自定义主题）  <br><code class="fn__code">${window.siyuan.config.appearance.customCSS}</code>
</div>
`;
          console.warn(window.siyuan.languages);
        });
      }, 300);
    });

  document
    .getElementById("SC__exportData")
    .addEventListener("click", async () => {
      var link = document.querySelector("#SC__exportData_a"); //  选择链接
      var counter = 0;
      var ok = 0;
      var jsonData = {};
      jsonData.winsay = {};
      jsonData.sy_editor = {};
      jsonData.sy_keymap = {};
      for (var i = 0; i < localforage.length; i++) {
        var key = localforage.key(i);
        if (key.startsWith("winsay_") || key.startsWith("SC_winsay_")) {
          try {
            jsonData.winsay[key] = await localforage.getItem(key);
            ok++;
          } catch (e) {
            console.error(`${key} is not a valid value for ${e}`);
            jsonData.winsay[key] = null;
          } finally {
            counter++;
          }
        }
      }
      let sy_editor = await localforage.getItem(
        "SC_winsay_cp__exportData__EXT_sy_editor"
      );
      sy_editor == "true"
        ? (jsonData.sy_editor = window.siyuan.config.editor)
        : (jsonData.sy_editor = "禁用了附加这部分数据");
      let sy_keymap = await localforage.getItem(
        "SC_winsay_cp__exportData__EXT_sy_keymap"
      );
      sy_keymap == "true"
        ? (jsonData.sy_keymap = window.siyuan.config.keymap)
        : (jsonData.sy_keymap = "禁用了附加这部分数据");
      let sy_sync = await localforage.getItem(
        "SC_winsay_cp__exportData__EXT_sy_sync"
      );
      sy_sync == "true"
        ? (() => {
            jsonData.sy_sync = window.siyuan.config.sync;
            jsonData.sy_repo = window.siyuan.config.repo;
          })()
        : (() => {
            jsonData.sy_sync = "禁用了附加这部分数据";
            jsonData.sy_repo = "禁用了附加这部分数据";
          })();
      if (API.isPhoneAppMode()) {
        if (document.body.classList.contains("user--Sub")) {
          API.putFile(
            `/data/snippets/Sofill-ConfigData__${Date.now()}.json`,
            JSON.stringify(jsonData)
          );
          API.通知(
            `导出 ${ok}/${counter}<br>【订阅用户权益生效提示】备份已保存到同步文件夹 ${window.siyuan.config.system.dataDir}/snippets/`
          );
        } else {
          API.通知("平台受限，仅支持订阅用户导出");
        }
      } else {
        var blob = new Blob([JSON.stringify(jsonData)]);
        link.href = URL.createObjectURL(blob); //  创建一个 URL 对象并传给 a 的 href
        link.download = `Sofill-ConfigData.json`; //  设置下载的默认文件名
        link.click(); //  点击下载链接
        API.通知(`导出 ${ok}/${counter}`);
        if (fs && document.body.classList.contains("user--Sub")) {
          fs.writeFile(
            `${
              window.siyuan.config.system.dataDir
            }/snippets/Sofill-ConfigData__${Date.now()}.json`,
            JSON.stringify(jsonData),
            "utf-8",
            function (err) {
              if (err) {
                console.error(err);
              } else {
                console.log("Write successfully~~");
                API.通知(
                  `【订阅用户权益生效提示】备份已保存到同步文件夹 ${window.siyuan.config.system.dataDir}/snippets/`
                );
              }
            }
          );
        }
      }
    });

  document
    .getElementById("SC__importData")
    .addEventListener("click", async () => {
      var fileSelect = document.querySelector("#SC__importData_i"); //  选择链接
      //  文件表单的内容改变，也就是文件选择完成
      fileSelect.onchange = () => {
        if (this.value === "" || this.files.length < 1) {
          console.warn("Oops...");
          return false; //  如果没有选择文件就什么也不做
        }
        var counter = 0;
        var diff = 0;
        var diffDetail = {};
        var ok = 0;
        var reader = new FileReader(); //  创建 FileReader对象
        reader.readAsText(this.files[0]); //  把文件读取为字符串
        //  文件加载完成
        reader.onload = async function (ev) {
          var jsonStr = ev.target.result; //  把字符串传给 jsonStr
          try {
            jsonStr = JSON.parse(jsonStr); //  把 JSON 字符串转换为 JSON 对象
          } catch (e) {
            API.通知(`无效数据 ${e}`, 3000);
            return;
          }
          console.log(jsonStr); //  在控制台输出 JSON
          for (var name in jsonStr) {
            diffDetail[name] = {};
            if (name == "winsay") {
              for (var val in jsonStr[name]) {
                counter = counter + 1;
                if (jsonStr[name][val] != (await localforage.getItem(val))) {
                  diff = diff + 1;
                  diffDetail[name][val] = `${await localforage.getItem(
                    val
                  )} => ${jsonStr[name][val]}`;
                }
              }
            }
          }
          console.warn(
            "================================ Changes Preview ================================"
          );
          console.log(diffDetail);
          console.warn(
            "================================================================================"
          );

          let coverAll = new ConfirmDialog({
            isCancel: true,
            dragable: false,
            XML: CD.ConfirmDialog3,
            success() {
              console.log("点击了确定");
              for (var name in jsonStr) {
                diffDetail[name] = {};
                if (name == "winsay") {
                  for (var val in jsonStr[name]) {
                    try {
                      localforage.setItem(val, jsonStr[name][val]).then((_) => {
                        ok = ok + 1;
                        console.warn(`${val} updated`);
                      });
                    } catch (e) {
                      console.error(e);
                    }
                  }
                }
                if (name == "sy_editor") {
                }
                if (name == "sy_keymap") {
                }
                if (name == "sy_sync") {
                }
                if (name == "sy_repo") {
                }
              }
              API.通知(`导入成功 ${ok}/${counter}，覆盖 ${diff} 项`);
              // if (diff > 0) {
              //   setTimeout(() => {
              //     window.location.reload();
              //   }, 1000);
              // }
            },
            cancel() {
              console.log("点击了取消");
            },
            maskable: true,
          });
          await coverAll.open(() => {
            document.getElementById(
              "CoverWarming"
            ).innerHTML = `影响 ${diff}/${counter} 项`;
          });
        };
      };
      fileSelect.value = ""; // 避免重复导入无法取值
    });

  document
    .getElementById("SC_winsay_cp__checkUpdateBtn")
    .addEventListener("click", async () => {
      checkUpdate();
    });

  document
    .getElementById(
      "SC_winsay_cp_editor__Block-Inline-link__block-ref-content_AsyncToSY"
    )
    .addEventListener("click", async () => {
      var i = await API.getNewValueFromDomByID(
        "SC_winsay_cp_editor__Block-Inline-link__block-ref-content"
      );
      if (!API.isEmptyString(i)) {
        var before = i.split(" ")[0];
        var after = i.split(" ")[1];
        if (document.readyState == "complete") {
          window.siyuan.config.appearance.blockRefTextLeft = ` ${before}`;
          window.siyuan.config.appearance.blockRefTextRight = `${after} `;
          document.querySelector("#toolbar #barSetting").click();
          document
            .querySelector(
              '.b3-tab-bar:not(.sc-custom-nav) [data-name="export"]'
            )
            .click();
          let left = document.querySelector("#blockRefTextLeft");
          let right = document.querySelector("#blockRefTextRight");
          if (!API.isEmptyString(left) && !API.isEmptyString(right)) {
            left.value = ` ${before}`;
            right.value = `${after} `;
            let e = new Event("change", { bubbles: true });
            let tracker = left._valueTracker;
            if (tracker) {
              tracker.setValue("");
            }
            left.dispatchEvent(e);
            let e2 = new Event("change", { bubbles: true });
            let tracker2 = right._valueTracker;
            if (tracker2) {
              tracker2.setValue("");
            }
            right.dispatchEvent(e2);
            setTimeout(() => {
              document.elementFromPoint(1, 1).click();
            }, 1000);
          }
          API.通知(`同步完成`, 200);
        }
      } else {
        if (document.readyState == "complete") {
          window.siyuan.config.appearance.blockRefTextLeft = ` `;
          window.siyuan.config.appearance.blockRefTextRight = ` `;
          document.querySelector("#toolbar #barSetting").click();
          document
            .querySelector(
              '.b3-tab-bar:not(.sc-custom-nav) [data-name="export"]'
            )
            .click();
          let left = document.querySelector("#blockRefTextLeft");
          let right = document.querySelector("#blockRefTextRight");
          if (!API.isEmptyString(left) && !API.isEmptyString(right)) {
            left.value = ` `;
            right.value = ` `;
            let e = new Event("change", { bubbles: true });
            let tracker = left._valueTracker;
            if (tracker) {
              tracker.setValue("");
            }
            left.dispatchEvent(e);
            let e2 = new Event("change", { bubbles: true });
            let tracker2 = right._valueTracker;
            if (tracker2) {
              tracker2.setValue("");
            }
            right.dispatchEvent(e2);
            setTimeout(() => {
              document.elementFromPoint(1, 1).click();
            }, 1000);
          }
          API.通知(`同步完成`, 200);
        }
      }
    });
}

// ------------------ 选项改变时的业务处理 ------------------------
async function CP_EditorMonitor() {
  await API.propChange(
    "SC_winsay_cp_editor__block__popover--open__PinSense",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "2":
            eSetProperty(
              "--SCC-Variables-block__popover--open__PinSense_2",
              "var(--b3-theme-secondary) -2px -2px 5.8px 1px,var(--b3-theme-primary) 0 0 0 1px,var(--b3-theme-primary-light) 0 0 3px 1px,var(--b3-theme-primary-lighter) 0 0 13px 2px,var(--b3-theme-primary-lightest) 0 0 2px 4px"
            );
            eSetProperty(
              "--SCC-Variables-block__popover--open__PinSense_1",
              "unset"
            );
            break;
          case "1":
            eSetProperty(
              "--SCC-Variables-block__popover--open__PinSense_2",
              "var(--b3-dialog-shadow)"
            );
            eSetProperty(
              "--SCC-Variables-block__popover--open__PinSense_1",
              "var(--b3-theme-surface-lighter)"
            );
            break;
        }
      } else {
        eSetProperty(
          "--SCC-Variables-block__popover--open__PinSense_1",
          "unset"
        );
        eSetProperty(
          "--SCC-Variables-block__popover--open__PinSense_2",
          "var(--b3-dialog-shadow)"
        );
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockTable_MinWidth",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-BlockTable-minWidth", i);
      } else {
        eSetProperty("--SCC-Variables-BlockTable-minWidth", "unset");
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockTable_MaxWidth",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-BlockTable-maxWidth", i);
      } else {
        eSetProperty("--SCC-Variables-BlockTable-maxWidth", "unset");
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockTable_FontSize",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-BlockTable-fontSize", i);
      } else {
        eSetProperty("--SCC-Variables-BlockTable-fontSize", "unset");
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockTable_TextAlign",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-BlockTable-text_align", i);
      } else {
        eSetProperty("--SCC-Variables-BlockTable-text_align", "unset");
      }
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__BlockTable_Margin"),
    () => {
      eSetProperty("--SCC-Variables-BlockTable-margin", "0 auto");
    },
    () => {
      eSetProperty("--SCC-Variables-BlockTable-margin", "inherit");
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__Block-List-LightUpLineMode",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "1":
            eSetProperty(
              "--SCC-Variables-BlockList__beforeColor",
              "var(--b3-theme-background-light)"
            );
            window.winsay.funs.updateStyle("BlockListHoverALL", ``);
            break;
          case "2":
            eSetProperty(
              "--SCC-Variables-BlockList__beforeColor",
              "var(--b3-theme-background-light)"
            );
            window.winsay.funs.updateStyle(
              "BlockListHoverALL",
              `${window.winsay.where.themeRoot}style/sweet/sugar/editor/Block-List-HoverALL.css`
            );
            break;
          case "3":
            eSetProperty(
              "--SCC-Variables-BlockList__beforeColor",
              "var(--b3-scroll-color)"
            );
            break;
          case "4":
          default:
            eSetProperty(
              "--SCC-Variables-BlockList__beforeColor",
              "var(--b3-theme-surface-lighter)"
            );
            break;
        }
      } else {
        eSetProperty(
          "--SCC-Variables-BlockList__beforeColor",
          "var(--b3-theme-surface-lighter)"
        );
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__layout-center_protyle-toolbar_position",
    async function (i) {
      var j = API.isEmptyString(i) ? "" : i;
      window.winsay.funs.updateStyle(
        "layout-center_protyle-toolbar_position",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/${j}`
      );
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__protyle-attr-scale",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-protyle-attr-scale", i);
      }
    }
  );
  await API.propChange("SC_winsay_cp_editor__DocWidthMode", async function (i) {
    clearInterval(window.winsay.storage.It_DocWidthMode);
    if (!API.isEmptyString(i)) {
      window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue =
        i;
      window.winsay.storage.It_DocWidthMode = setInterval(() => {
        var node1 = document.querySelectorAll(
          "#layouts .layout__center .protyle-wysiwyg.protyle-wysiwyg--attr"
        );
        var node2 = document.querySelectorAll(
          "#layouts .layout__center .protyle-title.protyle-wysiwyg--attr"
        );
        node1.forEach(function (item) {
          item.style.setProperty("padding", i);
          item.style.setProperty("margin", "0 auto");
          if (i == "1in 0.5in") {
            item.style.setProperty("width", "800px");
          } else if (i == "0.42in") {
            item.style.setProperty("width", "1118px");
          } else if (i == "0.41in") {
            item.style.setProperty("width", "1118px");
          } else if (i == "0.40in") {
            item.style.setProperty("width", "1598px");
          } else {
            item.style.removeProperty("width");
          }
        });
        node2.forEach(function (item) {
          item.style.setProperty("margin", i);
        });
      }, 1000);
    } else if (
      window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue !=
        i &&
      i &&
      i != ""
    ) {
      window.location.reload();
    }
  });
  await API.propChange("SC_winsay_cp_editor__Doc_bgColor", async function (i) {
    clearInterval(window.winsay.storage.SC_winsay_cp_T__t2);
    if (!API.isEmptyString(i)) {
      window.winsay.storage.SC_winsay_cp_T__t2 = setInterval(() => {
        var node1 = document.querySelectorAll(
          "#layouts .layout__center .protyle-wysiwyg.protyle-wysiwyg--attr"
        );
        node1.forEach(function (item) {
          item.style.setProperty("background-color", i);
        });
      }, 1000);
    } else if (
      window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue !=
        i &&
      i &&
      i != ""
    ) {
      window.location.reload();
    }
  });
  await API.propChange(
    "SC_winsay_cp_editor__ListAutoIndent_mode",
    async function (i) {
      if (!API.isEmptyString(i) && i == "2") {
        eSetProperty(
          "--SCC-Variables-List-Item-margin",
          "max(min(18px,0.58em),8px)"
        );
        eSetProperty("--SCC-Variables-List-Item-padding", "min(16px,0.31em)");
      } else if (!API.isEmptyString(i) && i == "1") {
        eSetProperty(
          "--SCC-Variables-List-Item-margin",
          "max(min(18px,1cqw),8px)"
        );
        eSetProperty("--SCC-Variables-List-Item-padding", "min(16px,0.58cqw)");
      } else {
        eSetProperty("--SCC-Variables-List-Item-margin", "18px");
        eSetProperty("--SCC-Variables-List-Item-padding", "16px");
      }
    }
  );
  await API.propChange("SC_winsay_cp_editor__img-bg-color", async function (i) {
    if (!API.isEmptyString(i)) {
      switch (
        await localforage.getItem("SC_winsay_cp_editor__img-bg-color_always")
      ) {
        case "true":
          eSetProperty("--SCC-Variables-IMG-bg-color_hover", i);
          eSetProperty("--SCC-Variables-IMG-bg-color", i);
          break;
        default:
          eSetProperty("--SCC-Variables-IMG-bg-color_hover", i);
          eSetProperty("--SCC-Variables-IMG-bg-color", "transparent");
      }
    }
  });
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__img-bg-color_always"),
    async () => {
      var value = await API.getNewValueFromDomByID(
        "SC_winsay_cp_editor__img-bg-color"
      );
      eSetProperty("--SCC-Variables-IMG-bg-color_hover", value);
      eSetProperty("--SCC-Variables-IMG-bg-color", value);
    },
    async () => {
      var value = await API.getNewValueFromDomByID(
        "SC_winsay_cp_editor__img-bg-color"
      );
      eSetProperty("--SCC-Variables-IMG-bg-color_hover", value);
      eSetProperty("--SCC-Variables-IMG-bg-color", "transparent");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__HintHint-index"),
    () => {
      window.winsay.funs.updateStyle(
        "HintHint-index",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/HintHint-index.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/HintHint-index.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__LH_Adaptive"),
    () => {
      window.winsay.funs.updateStyle(
        "LH_Adaptive",
        `${window.winsay.where.themeRoot}style/sweet/LH-Adaptive.css`
      );
      document
        .getElementById("BP__SC_winsay_cp_editor__LH_Adaptive")
        .classList.add("fn__none");
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/LH-Adaptive.css`,
        "css"
      );
      document
        .getElementById("BP__SC_winsay_cp_editor__LH_Adaptive")
        .classList.remove("fn__none");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__BreadcrumbsMode-Adaptive"),
    () => {
      window.winsay.funs.updateStyle(
        "docBreadcrumb_Adaptive",
        `${window.winsay.where.themeRoot}style/sweet/MI-Breadcrumb-Adaptive.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/MI-Breadcrumb-Adaptive.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__AreoBg-Filter"),
    () => {
      window.winsay.funs.updateStyle(
        "AreoBg-Filter",
        `${window.winsay.where.themeRoot}style/sweet/AreoBg-Filter.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/AreoBg-Filter.css`,
        "css"
      );
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__LH_Adaptive__pIndent",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty(
          "--SCC-Variables-MI-Doc-pIndent",
          `${API.RangeLimitedInt(-2, i, 12)}rem`
        );
        document.getElementById(
          "SC_winsay_cp_editor__LH_Adaptive__pIndent"
        ).value = API.RangeLimitedInt(-2, i, 12);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__dynamicLoadBlocks",
    async function (i) {
      if (!API.isEmptyString(i)) {
        window.siyuan.config.editor.dynamicLoadBlocks = API.RangeLimitedInt(
          48,
          i,
          1024
        );
        document.getElementById(
          "SC_winsay_cp_editor__dynamicLoadBlocks"
        ).value = API.RangeLimitedInt(48, i, 1024);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__LH_Adaptive__LH",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-Doc-LH", `${i}`);
        document
          .getElementById("SC_winsay_cp_editor__LH_Adaptive__LH__label")
          .setAttribute("aria-label", `${i}`);
        await localforage.setItem(
          "SC_winsay_cp_editor__LH_Adaptive__LH__label",
          i
        );
        if (
          config.clientMode == "body--mobile" &&
          document.querySelector("#SC-CP").style.display != "none"
        ) {
          API.通知(`新值：${i}`);
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__LH_Adaptive__marginTop",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty(
          "--SCC-Variables-MI-Doc-marginTop",
          `${API.RangeLimitedInt(10, i, 500) / 100}rem`
        );
        document.getElementById(
          "SC_winsay_cp_editor__LH_Adaptive__marginTop"
        ).value = API.RangeLimitedInt(10, i, 500);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__LH_Adaptive__marginBottom",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty(
          "--SCC-Variables-MI-Doc-marginBottom",
          `${API.RangeLimitedInt(10, i, 500) / 100}rem`
        );
        document.getElementById(
          "SC_winsay_cp_editor__LH_Adaptive__marginBottom"
        ).value = API.RangeLimitedInt(10, i, 500);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__LH_Adaptive__lSpacing",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-Doc-lSpacing", `${i}rem`);
        document
          .getElementById("SC_winsay_cp_editor__LH_Adaptive__lSpacing__label")
          .setAttribute("aria-label", `${i}`);
        await localforage.setItem(
          "SC_winsay_cp_editor__LH_Adaptive__lSpacing__label",
          i
        );
        if (
          config.clientMode == "body--mobile" &&
          document.querySelector("#SC-CP").style.display != "none"
        ) {
          API.通知(`新值：${i}`);
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockScrollBar-opacity",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-BlockScrollBar-opacity-hover", i);
        let s = document.querySelector("#editor .protyle-scroll");
        eSetProperty("--SCC-Variables-MI-BlockScrollBar-display", "block");
        switch (i) {
          case "0.88":
            s
              ? window.winsay.funs.updateStyle(
                  "Android-mobile-BlockScrollBarShow",
                  `${window.winsay.where.themeRoot}style/sweet/sugar/editor/Android-mobile-BlockScrollBarFocusShow.css`
                )
              : eSetProperty("--SCC-Variables-MI-BlockScrollBar-opacity", "0");
            break;
          case "1":
            s
              ? window.winsay.funs.updateStyle(
                  "Android-mobile-BlockScrollBarShow",
                  `${window.winsay.where.themeRoot}style/sweet/sugar/editor/Android-mobile-BlockScrollBarAlwaysShow.css`
                )
              : eSetProperty(
                  "--SCC-Variables-MI-BlockScrollBar-opacity",
                  "0.58"
                );
            break;
          case "-1":
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-display", "none");
            break;
          default:
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-opacity", "0");
            let css = document.querySelector(
              "#Android-mobile-BlockScrollBarShow"
            );
            css ? css.remove() : null;
            break;
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__BlockScrollBar_Hposition",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "L31":
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-right", "unset");
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-left", "31px");
            eSetProperty(
              "--SCC-Variables-MI-BlockScrollBar-tooltips-top",
              "-100%"
            );
            break;
          case "L13":
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-right", "unset");
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-left", "13px");
            eSetProperty(
              "--SCC-Variables-MI-BlockScrollBar-tooltips-top",
              "-100%"
            );
            break;
          case "R31":
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-right", "31px");
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-left", "unset");
            eSetProperty(
              "--SCC-Variables-MI-BlockScrollBar-tooltips-top",
              "100%"
            );
            break;
          case "R13":
          default:
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-right", "13px");
            eSetProperty("--SCC-Variables-MI-BlockScrollBar-left", "unset");
            eSetProperty(
              "--SCC-Variables-MI-BlockScrollBar-tooltips-top",
              "100%"
            );
            break;
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__Block-Inline-link__block-ref-content",
    async function (i) {
      if (!API.isEmptyString(i)) {
        var before = i.split(" ")[0];
        var after = i.split(" ")[1];
        eSetProperty(
          "--SCC-Variables-Block-Inline-link__block-ref__before",
          `'${before}'`
        );
        eSetProperty(
          "--SCC-Variables-Block-Inline-link__block-ref__after",
          `'${after}'`
        );
      } else {
        eSetProperty(
          "--SCC-Variables-Block-Inline-link__block-ref__before",
          "none"
        );
        eSetProperty(
          "--SCC-Variables-Block-Inline-link__block-ref__after",
          "none"
        );
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__Block-List-Task__item-done__text-color",
    async function (i) {
      if (!API.isEmptyString(i) && i == "auto") {
        eSetProperty(
          "--SCC-Variables-Block-List-Task__item-done-color",
          "var(--b3-theme-secondary)"
        );
        eSetProperty(
          "--SCC-Variables-Block-List-Task__item-done-backdrop-filter",
          "brightness(1.58) blur(13px)"
        );
      } else {
        eSetProperty(
          "--SCC-Variables-Block-List-Task__item-done-color",
          "var(--b3-theme-on-background)"
        );
        eSetProperty(
          "--SCC-Variables-Block-List-Task__item-done-backdrop-filter",
          "none"
        );
      }
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__FocusEnhanc_inlineCode"),
    () => {
      eSetProperty(
        "--SCC-Variables-Block-Inline-span__code__before-content",
        "'<'"
      );
      eSetProperty(
        "--SCC-Variables-Block-Inline-span__code__after-content",
        "'>'"
      );
    },
    () => {
      eRemoveProperty(
        "--SCC-Variables-Block-Inline-span__code__before-content"
      );
      eRemoveProperty("--SCC-Variables-Block-Inline-span__code__after-content");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__TapAlert_docReadOnly"),
    () => {
      window.winsay.cp.TapAlert_docReadOnly = true;
    },
    () => {
      window.winsay.cp.TapAlert_docReadOnly = false;
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__FocusEnhanc_refWave"),
    () => {
      eSetProperty(
        "--SCC-Variables-span-ref-animation-icon",
        "var(--SCC-baseComponent-span-ref-animation-icon)"
      );
    },
    () => {
      eRemoveProperty("--SCC-Variables-span-ref-animation-icon");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__FocusEnhanc_NodeHeading"),
    () => {
      window.winsay.funs.updateStyle(
        "FocusEnhanc_NodeHeading",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/NodeHeading-FocusEnhanc.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/NodeHeading-FocusEnhanc.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__FocusEnhanc_DocNameArea"),
    () => {
      window.winsay.funs.updateStyle(
        "FocusEnhanc_DocNameArea",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/MI-Dynamic.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/MI-Dynamic.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_editor__FocusEnhanc_BlockHoverShadow"
    ),
    () => {
      window.winsay.funs.updateStyle(
        "FocusEnhanc_BlockHoverShadow",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/BlockHoverShadow.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/BlockHoverShadow.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_editor__FocusEnhanc_SearchInputShadow"
    ),
    () => {
      window.winsay.funs.updateStyle(
        "SearchInputShadow",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/SearchInputShadow.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/SearchInputShadow.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__NodeHeadingFoldedShadow"),
    () => {
      window.winsay.funs.updateStyle(
        "NodeHeadingFoldedShadow",
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/NodeHeading-foldedShadow.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/editor/NodeHeading-foldedShadow.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__ShowBreadcrumbAnytime"),
    () => {
      eSetProperty("--SCC-Variables-breadcrumb--hide-opacity", "1");
    },
    () => {
      eRemoveProperty("--SCC-Variables-breadcrumb--hide-opacity");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_editor__showDocCreatedDate"),
    () => {
      window.winsay.funs.loadScript(
        `${window.winsay.where.themeRoot}script/sweet/sugar/ShowDocCreatedDate.js`,
        true
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}script/sweet/sugar/ShowDocCreatedDate.js`,
        "js"
      );
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__HintHintMaxWidth",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-HintHint-MaxWidth", `${i}`);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_editor__HintHintMaxHeight",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-HintHint-MaxHeight", `${i}`);
      }
    }
  );
}

async function CP_AppearanceMonitor() {
  if (config.clientMode != "body--mobile") {
    await API.checkedChange(
      document.getElementById("SC_winsay_cp_appearance__CoolToolBar"),
      () => {
        if (
          !document.body.classList.contains("user--Sub") ||
          document.getElementById("v2_7_0")
        )
          return;
        API.MoveDOM("#barTopHelp", "#sc_drawer");
        API.MoveDOM("#toolbarVIP", "#sc_drawer");
        API.CopyDOM("#barMode", "#sc_drawer");
        document.querySelector("#toolbar #barMode").style.width = "0";
        document.querySelector("#toolbar #barMode").style.padding = "0";
      },
      () => {
        if (document.getElementById("v2_7_0")) return;
        document
          .querySelector("#barSetting")
          .insertAdjacentElement(
            "afterend",
            document.querySelector("#barTopHelp")
          );
        document
          .querySelector("#toolbar")
          .insertAdjacentElement(
            "afterbegin",
            document.querySelector("#toolbarVIP")
          );
        let old = document.querySelector("#sc_drawer #barMode");
        old ? old.remove() : null;
        document.querySelector("#toolbar #barMode").style.width = "auto";
        document.querySelector("#toolbar #barMode").style.padding = "9px";
      }
    );
    await API.checkedChange(
      document.getElementById("NoSync__SC_winsay_cp_appearance__AutoTranslate"),
      () => {
        if (window.siyuan.config.lang) {
          var head = document.getElementsByTagName("head")[0];
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.id = "AutoTranslate";
          script.src = "https://res.zvo.cn/translate/translate.js";
          script.onload = script.onreadystatechange = () => {
            translate.selectLanguageTag.show = false;
            translate.selectLanguageTag.languages =
              "zh-CN,id,ms,el,it,es,pt-PT,ja,nl,en,ru,fr,se,sv,ko,zh-TW,pt-BR,cs,th,la,da";
            translate.execute();
          };
          head.appendChild(script);
          document.getElementById("layouts").parentElement.style.visibility =
            "hidden";
          document.getElementById(
            "NoSync__SC_winsay_cp_appearance__AutoTranslate_label"
          ).style.display = "flex";
        }
      },
      () => {
        let target = document.getElementById("AutoTranslate");
        target ? translate.changeLanguage("zh-CN") : null;
        document.getElementById("layouts").parentElement.style.visibility =
          "visible";
        document.querySelectorAll(".translateSelectLanguage").forEach((se) => {
          se.remove();
        });
        document.getElementById(
          "NoSync__SC_winsay_cp_appearance__AutoTranslate_label"
        ).style.display = "none";
        target ? target.remove() : null;
      }
    );
    await API.checkedChange(
      document.getElementById("SC_winsay_cp_appearance__DockBgColorFilter"),
      () => {
        document
          .querySelector("#dockLeft")
          .style.setProperty(
            "background-image",
            "linear-gradient(to top,#cccccc16,#ffffff06)"
          );
        document
          .querySelector("#dockRight")
          .style.setProperty(
            "background-image",
            "linear-gradient(to top left,#cccccc16,#ffffff06)"
          );
        document
          .querySelector("#status")
          .style.setProperty(
            "background-image",
            "linear-gradient(to top right,#cccccc16,#ffffff06)"
          );
      },
      () => {
        document
          .querySelector("#dockLeft")
          .style.removeProperty("background-image");
        document
          .querySelector("#dockRight")
          .style.removeProperty("background-image");
        document
          .querySelector("#status")
          .style.removeProperty("background-image");
      }
    );
  }
  await API.propChange(
    "SC_winsay_cp_appearance__KeynesOpacity",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-KeynesOpacity", i);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__TabBarSize",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-TabBar-FontSize", i);
        eSetProperty("--SCC-Variables-MI-TabBar-MinHeight", parseInt(i) * 3);
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__TabBarStyleFeel",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "3":
            eSetProperty(
              "--SCC-Variables-TabBar-item__focus-box-shadow",
              "rgba(131, 131, 131, 0.4) 0px 2px 4px, rgba(131, 131, 131, 0.3) 0px 7px 3px -3px, rgba(131, 131, 131, 0.2) 0px -3px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-item-box-shadow",
              "rgba(131, 131, 131, 0.4) 0px 2px 4px, rgba(131, 131, 131, 0.3) 0px 7px 3px -3px, rgba(131, 131, 131, 0.2) 0px -3px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-V__item-box-shadow",
              "rgb(131 131 131 / 30%) 0px 1px 1px, rgb(131 131 131 / 20%) 0px 2px 2px -2px, rgb(131 131 131 / 20%) 0px -1px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-border-bottom",
              "2px ridge var(--b3-theme-primary-light)"
            );
            eSetProperty("--SCC-Variables-TabBar-margin-bottom", "3px");
            break;
          case "2":
            eSetProperty(
              "--SCC-Variables-TabBar-item__focus-box-shadow",
              "rgba(131, 131, 131, 0.4) 0px 2px 4px, rgba(131, 131, 131, 0.3) 0px 7px 3px -3px, rgba(131, 131, 131, 0.2) 0px -3px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-item-box-shadow",
              "rgba(131, 131, 131, 0.4) 0px 2px 4px, rgba(131, 131, 131, 0.3) 0px 7px 3px -3px, rgba(131, 131, 131, 0.2) 0px -3px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-V__item-box-shadow",
              "rgb(131 131 131 / 30%) 0px 1px 1px, rgb(131 131 131 / 20%) 0px 2px 2px -2px, rgb(131 131 131 / 20%) 0px -1px 0px inset"
            );
            eSetProperty("--SCC-Variables-TabBar-border-bottom", "none");
            eSetProperty("--SCC-Variables-TabBar-margin-bottom", "3px");
            break;
          case "1":
          default:
            eSetProperty(
              "--SCC-Variables-TabBar-item__focus-box-shadow",
              "rgb(131 131 131 / 1%) -1px 1px 1px, rgb(131 131 131 / 11%) -1px -2px 13px -1px, rgb(131 131 131 / 3%) 0px -1px 0px inset"
            );
            eSetProperty(
              "--SCC-Variables-TabBar-item-box-shadow",
              "rgb(131 131 131 / 1%) -1px 1px 1px, rgb(131 131 131 / 11%) -1px -2px 13px -1px, rgb(131 131 131 / 3%) 0px -1px 0px inset"
            );
            eSetProperty("--SCC-Variables-TabBar-V__item-box-shadow", "none");
            eSetProperty(
              "--SCC-Variables-TabBar-border-bottom",
              "1px solid var(--b3-theme-primary-light)"
            );
            eSetProperty("--SCC-Variables-TabBar-margin-bottom", "0px");
            break;
        }
      } else {
        eSetProperty(
          "--SCC-Variables-BlockList__beforeColor",
          "var(--b3-theme-surface-lighter)"
        );
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__TabBar_item__textShadow",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "2":
            eSetProperty(
              "--SCC-Variables-TabBar_item__textShadow",
              "-1px 1px 13px var(--SCC-Orange-Windom)"
            );
            break;
          case "1":
          default:
            eSetProperty("--SCC-Variables-TabBar_item__textShadow", "none");
            break;
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__TabBarMode",
    async function (i) {
      var j = API.isEmptyString(i) ? "MI-TabBar-D.css" : i;
      window.winsay.funs.updateStyle(
        "TabBar",
        `${window.winsay.where.themeRoot}style/sweet/${j}`
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_appearance__TabBarV_AutoFolded"),
    () => {
      eSetProperty("--SCC-Variables-MI-TabBarV_Auto-width", "2rem");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-TabBarV_Auto-width", "max(186px, 13vw)");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_appearance__ToolBarMode"),
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-height-max", "11px");
      eSetProperty("--SCC-Variables-MI-ToolBar-child-visibility", "hidden");
      eSetProperty("--SCC-Variables-MI-ToolBar-svg-height", `0px`);
      eSetProperty("--SCC-Variables-MI-ToolBar-svg-hover-height", `14px`);
      eSetProperty("--SCC-Variables-MI-ToolBar-docName-opacity", `0`);
    },
    async () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-height-max", "unset");
      eSetProperty("--SCC-Variables-MI-ToolBar-child-visibility", "visible");
      var h = await API.getNewValueFromDomByID(
        "SC_winsay_cp_appearance__ToolBarMode__height"
      );
      if (!API.isEmptyString(h)) {
        eSetProperty("--SCC-Variables-MI-ToolBar-height", h);
        eSetProperty(
          "--SCC-Variables-MI-ToolBar-svg-height",
          `${parseInt(h) / 2 + 1}px`
        );
        eSetProperty(
          "--SCC-Variables-MI-ToolBar-svg-hover-height",
          `${parseInt(h) / 2 + 1}px`
        );
      } else {
        eSetProperty("--SCC-Variables-MI-ToolBar-height", `26px`);
        eSetProperty("--SCC-Variables-MI-ToolBar-svg-height", `14px`);
        eSetProperty("--SCC-Variables-MI-ToolBar-svg-hover-height", `14px`);
      }
      eSetProperty("--SCC-Variables-MI-ToolBar-docName-opacity", `0.77`);
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__ToolBarMode__height",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-ToolBar-height", i);
        eSetProperty(
          "--SCC-Variables-MI-ToolBar-svg-height",
          `${parseInt(i) / 2 + 1}px`
        );
        eSetProperty(
          "--SCC-Variables-MI-ToolBar-svg-hover-height",
          `${parseInt(i) / 2 + 1}px`
        );
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--b3-toolbar-background", i);
      }
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__ToolBarMode__HideList__docName"
    ),
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-docName-opacity", "0");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-docName-opacity", "0.77");
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__ToolBarMode__HideList__VIP"
    ),
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-VIP-opacity", "0");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-VIP-opacity", "0.77");
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__ToolBarMode__HideList__windowX"
    ),
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-windowX-opacity", "0");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-windowX-opacity", "0.77");
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__ToolBarMode__HideList__Other"
    ),
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-Other-opacity", "0");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-ToolBar-Other-opacity", "0.77");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_appearance__ShowWebIcon"),
    () => {
      window.winsay.funs.updateStyle(
        "ShowWebIcon",
        `${window.winsay.where.themeRoot}style/link/web.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/link/web.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_appearance__ShowFileIcon"),
    () => {
      window.winsay.funs.updateStyle(
        "ShowFileIcon",
        `${window.winsay.where.themeRoot}style/link/file.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/link/file.css`,
        "css"
      );
    }
  );
  await API.propChange(
    "SC_winsay_cp_appearance__status_msg_opacity",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-status__msg_opacity", i);
      }
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__strengthen_backlinkList_panel_border"
    ),
    () => {
      eSetProperty(
        "--SCC-Variables-backlinkList_panel_box-shadow",
        "rgb(6 24 44 / 8%) -31px -13px 131px 12px, rgb(186 186 186 / 22%) 12px -23px 111px -5px inset"
      );
    },
    () => {
      eRemoveProperty("--SCC-Variables-backlinkList_panel_box-shadow");
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__strengthen_layout-tab-container"
    ),
    () => {
      eSetProperty(
        "--SCC-Variables-MI-LayoutTabContainer_bgColor",
        "linear-gradient(95deg, transparent, var(--b3-theme-surface-lighter), transparent)"
      );
    },
    () => {
      eRemoveProperty("--SCC-Variables-MI-LayoutTabContainer_bgColor");
    }
  );
  await API.checkedChange(
    document.getElementById(
      "SC_winsay_cp_appearance__SYSetting-AssetsIMG-Sticky"
    ),
    () => {
      window.winsay.funs.updateStyle(
        "SYSetting-AssetsIMG-Sticky",
        `${window.winsay.where.themeRoot}style/sweet/sugar/appearance/SYSetting-AssetsIMG-Sticky.css`
      );
    },
    () => {
      let target = document.getElementById("SYSetting-AssetsIMG-Sticky");
      target ? target.remove() : null;
    }
  );
}

async function CP_AboutMonitor() {
  await API.propChange("SC_winsay_cp_about__checkTime", async function (i) {
    if (!API.isEmptyString(i)) {
      switch (i) {
        case "Once":
          await getlocalVersion();
          if (
            document.querySelector("#SC-CP").style.display == "none" &&
            (await API.getNewValueFromDomByID(
              "SC_winsay_cp_about__AutoCheckSilently"
            )) == "true"
          ) {
            setTimeout(() => {
              checkUpdate(true);
            }, 31_000);
          } else {
            setTimeout(() => {
              checkUpdate(false);
            }, 13_000);
          }
          break;
        default:
          break;
      }
    }
  });
  await API.propChange("SC_winsay_cp_about__checkAPI", async function (i) {
    if (!API.isEmptyString(i)) {
      let vv = await switchlocalVersion();
      vv
        ? (document.querySelector("#SC_winsay_cp_version > span").innerHTML =
            vv)
        : null;
    }
  });
}

async function CP_CustomMonitor() {
  await API.propChange(
    "SC_winsay_cp_custom__EXTmaxOpenTabCount",
    async function (i) {
      if (!API.isEmptyString(i)) {
        let o = await localforage.getItem(
          "SC_winsay_cp_custom__EXTmaxOpenTabCount__origin"
        );
        if (API.isEmptyString(o)) {
          await localforage.setItem(
            "SC_winsay_cp_custom__EXTmaxOpenTabCount__origin",
            window.siyuan.config.fileTree.maxOpenTabCount
          );
        }
        window.siyuan.config.fileTree.maxOpenTabCount = parseInt(i);
      } else {
        let o = await localforage.getItem(
          "SC_winsay_cp_custom__EXTmaxOpenTabCount__origin"
        );
        if (!API.isEmptyString(o)) {
          window.siyuan.config.fileTree.maxOpenTabCount = parseInt(o);
          localforage.removeItem(
            "SC_winsay_cp_custom__EXTmaxOpenTabCount__origin"
          );
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_custom__root_filter_light",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "5":
            eSetProperty(
              "--SCC-Variables-root-filter-light",
              "brightness(0.6) opacity(0.85) grayscale(0.13) saturate(1.31) contrast(1.31)"
            );
            break;
          case "4":
            eSetProperty(
              "--SCC-Variables-root-filter-light",
              "brightness(0.7) opacity(0.88) grayscale(0.3) saturate(1.31) contrast(1.86)"
            );
            break;
          case "3":
            eSetProperty(
              "--SCC-Variables-root-filter-light",
              "brightness(0.9) grayscale(1) contrast(1.1)"
            );
            break;
          case "2":
            eSetProperty(
              "--SCC-Variables-root-filter-light",
              "saturate(1.3) brightness(0.77) contrast(1.58)"
            );
            break;
          case "1":
            eSetProperty(
              "--SCC-Variables-root-filter-light",
              "brightness(0.9) saturate(1.31) contrast(1.31)"
            );
            break;
          case "none":
          default:
            eSetProperty("--SCC-Variables-root-filter-light", "none");
            break;
        }
      }
    }
  );
  await API.propChange(
    "SC_winsay_cp_custom__root_filter_dark",
    async function (i) {
      if (!API.isEmptyString(i)) {
        switch (i) {
          case "5":
            eSetProperty(
              "--SCC-Variables-root-filter-dark",
              "invert(77%) contrast(1.13) brightness(0.99)"
            );
            break;
          case "4":
            eSetProperty(
              "--SCC-Variables-root-filter-dark",
              "brightness(0.58) opacity(0.98) saturate(1.38) contrast(0.97)"
            );
            break;
          case "3":
            eSetProperty(
              "--SCC-Variables-root-filter-dark",
              "brightness(0.9) grayscale(1) contrast(1.1)"
            );
            break;
          case "2":
            eSetProperty(
              "--SCC-Variables-root-filter-dark",
              "saturate(1.58) brightness(1.05) contrast(0.95)"
            );
            break;
          case "1":
            eSetProperty(
              "--SCC-Variables-root-filter-dark",
              "brightness(1.05) saturate(1.13) contrast(1.03)"
            );
            break;
          case "none":
          default:
            eSetProperty("--SCC-Variables-root-filter-dark", "none");
            break;
        }
      }
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_custom__filter_timer"),
    async () => {
      window.winsay.storage.It_filterTimer
        ? clearInterval(window.winsay.storage.It_filterTimer)
        : null;
      window.winsay.storage.It_filterTimer = setInterval(async () => {
        if (API.SofillDate.isDuringTime("18:00", "6:00")) {
          let Lfilter = document.documentElement.style.getPropertyValue(
            "--SCC-Variables-root-filter-light"
          );
          let Dfilter = document.documentElement.style.getPropertyValue(
            "--SCC-Variables-root-filter-dark"
          );
          await localforage.setItem(
            "SC_winsay_cp_custom__root_Lfilter_daily",
            Lfilter
          );
          await localforage.setItem(
            "SC_winsay_cp_custom__root_Dfilter_daily",
            Dfilter
          );
          eSetProperty(
            "--SCC-Variables-root-filter-light",
            await localforage.getItem("SC_winsay_cp_custom__root_Lfilter_daily")
          );
          eSetProperty(
            "--SCC-Variables-root-filter-dark",
            await localforage.getItem("SC_winsay_cp_custom__root_Dfilter_daily")
          );
        } else {
          eSetProperty("--SCC-Variables-root-filter-light", "");
          eSetProperty("--SCC-Variables-root-filter-dark", "");
        }
      }, 3000);
    },
    () => {
      window.winsay.storage.It_filterTimer
        ? clearInterval(window.winsay.storage.It_filterTimer)
        : null;
      let light = document.querySelector(
        "#SC_winsay_cp_custom__root_filter_light"
      );
      let dark = document.querySelector(
        "#SC_winsay_cp_custom__root_filter_dark"
      );
      if (!API.isEmptyString(light) && !API.isEmptyString(dark)) {
        let e = new Event("change", { bubbles: true });
        let tracker = light._valueTracker;
        if (tracker) {
          tracker.setValue("");
        }
        light.dispatchEvent(e);
        let e2 = new Event("change", { bubbles: true });
        let tracker2 = dark._valueTracker;
        if (tracker2) {
          tracker2.setValue("");
        }
        dark.dispatchEvent(e2);
      }
    }
  );
  await API.propChange("SC_winsay_cp_custom__defaultS", async function (i) {
    if (!API.isEmptyString(i)) {
      localforage.removeItem("SC_winsay_cp_custom__defaultS_auto");
      if (window.winsay.funs.getThemeMode) {
        let writeData = `@import url("preview-base-light.css"); @import url("${i}?r=${Math.random()}");`;
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
    } else {
      await localforage.setItem("SC_winsay_cp_custom__defaultS_auto", "true");
      let i = await API.getNewValueFromDomByID("SC_winsay_cp_custom__LS");
      let writeData = `@import url("preview-base-light.css"); @import url("${
        i ? i.replace("root", "preview") : ""
      }?r=${Math.random()}");`;
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
  });
  await API.propChange("SC_winsay_cp_custom__LS", async function (i) {
    if (!API.isEmptyString(i)) {
      if (window.winsay.funs.getThemeMode == "light") {
        await localforage.setItem(config.latest_LC_ID, i).then((_) => {
          import("./module/SM.js").then(async (m) => {
            await m.iterLC();
          });
        });
      } else if (
        await localforage.getItem("SC_winsay_cp_custom__defaultS_auto")
      ) {
        let writeData = `@import url("preview-base-light.css"); @import url("${
          i ? i.replace("root", "preview") : ""
        }?r=${Math.random()}");`;
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
    }
  });
  await API.propChange("SC_winsay_cp_custom__DS", async function (i) {
    if (window.winsay.funs.getThemeMode == "dark" && !API.isEmptyString(i)) {
      await localforage.setItem(config.latest_DC_ID, i).then((_) => {
        import("./module/SM.js").then(async (m) => {
          await m.iterDC();
        });
      });
    }
  });
}

async function CP_AssetsMonitor() {
  await API.propChange("SC_winsay_cp_assets__PCards", async function (i) {
    if (API.isEmptyString(i) && document.getElementById("assets__PCards")) {
      document.getElementById("assets__PCards").remove();
    } else {
      window.winsay.funs.updateStyle(
        "assets__PCards",
        `${window.winsay.where.themeRoot}style/sweet/sugar/assets/${i}`
      );
    }
  });
}

async function CP_FiletreeMonitor() {
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__Hide_untitle"),
    () => {
      eSetProperty("--SCC-Variables-MI-DocTree-Untitle-opacity", "0");
    },
    () => {
      eSetProperty("--SCC-Variables-MI-DocTree-Untitle-opacity", "1");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__Hide_item_action_more"),
    () => {
      eSetProperty(
        "--SCC-Variables-MI-DocTree-item-action-more-display",
        "none"
      );
    },
    () => {
      eRemoveProperty("--SCC-Variables-MI-DocTree-item-action-more-display");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__HideSomeIcon2SeeSee"),
    () => {
      eSetProperty("--SCC-Varibales-DocTree-icon-MaxWidth", "0");
    },
    () => {
      eRemoveProperty("--SCC-Varibales-DocTree-icon-MaxWidth");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__ChangeIconAvailability"),
    () => {
      eSetProperty("--SCC-Variables-ChangeIconAvailability", "none");
    },
    () => {
      eRemoveProperty("--SCC-Variables-ChangeIconAvailability");
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__DyeingNameAvailability"),
    () => {
      eRemoveProperty("--SCC-Variables-DyeingName-Notebook");
      eRemoveProperty("--SCC-Variables-DyeingName-Doc");
    },
    () => {
      eSetProperty(
        "--SCC-Variables-DyeingName-Notebook",
        "var(--SCC-baseComponent-text-color-2)"
      );
      eSetProperty(
        "--SCC-Variables-DyeingName-Doc",
        "var(--SCC-baseComponent-text-color-1)"
      );
    }
  );

  await API.checkedChange(
    document.getElementById("SC_winsay_cp_filetree__Adaptive_display"),
    () => {
      window.winsay.funs.updateStyle(
        "MI-DocTree-Adaptive",
        `${window.winsay.where.themeRoot}style/sweet/MI-DocTree-Adaptive.css`
      );
      document
        .getElementById("BP__SC_winsay_cp_filetree__Adaptive_display")
        .classList.add("fn__none");
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/MI-DocTree-Adaptive.css`,
        "css"
      );
      document
        .getElementById("BP__SC_winsay_cp_filetree__Adaptive_display")
        .classList.remove("fn__none");
    }
  );

  await API.propChange(
    "SC_winsay_cp_filetree__docFontsize",
    async function (i) {
      if (!API.isEmptyString(i)) {
        eSetProperty("--SCC-Variables-MI-DocTree-docFontsize", `${i}pt`);
        document
          .getElementById("SC_winsay_cp_filetree__docFontsize__label")
          .setAttribute("aria-label", `${i}`);
        await localforage.setItem(
          "SC_winsay_cp_filetree__docFontsize__label",
          i
        );
      }
    }
  );
  await API.propChange("SC_winsay_cp_filetree__nbFontsize", async () => {
    var i = await API.getNewValueFromDomByID(
      "SC_winsay_cp_filetree__nbFontsize"
    );
    if (!API.isEmptyString(i)) {
      eSetProperty("--SCC-Variables-MI-DocTree-nbFontsize", `${i}pt`);
      document
        .getElementById("SC_winsay_cp_filetree__nbFontsize__label")
        .setAttribute("aria-label", `${i}`);
      await localforage.setItem("SC_winsay_cp_filetree__nbFontsize__label", i);
    }
  });
  await API.propChange("SC_winsay_cp_filetree__nbMargin", async function (i) {
    if (!API.isEmptyString(i)) {
      eSetProperty("--SCC-Variables-MI-DocTree-nbMargin", `${i}em`);
      document
        .getElementById("SC_winsay_cp_filetree__nbMargin__label")
        .setAttribute("aria-label", `${i}`);
      await localforage.setItem("SC_winsay_cp_filetree__nbMargin__label", i);
    }
  });
}

async function CP_SearchMonitor() {
  await API.propChange("SC_winsay_cp_search__layout", async function (i) {
    if (API.isEmptyString(i) && document.getElementById("search__layout")) {
      document.getElementById("search__layout").remove();
    } else {
      window.winsay.funs.updateStyle(
        "search__layout",
        `${window.winsay.where.themeRoot}style/sweet/sugar/search/${i}`
      );
    }
  });
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_search__index"),
    () => {
      window.winsay.funs.updateStyle(
        "search__index",
        `${window.winsay.where.themeRoot}style/sweet/sugar/search/index.css`
      );
    },
    () => {
      API.removejscssfile(
        `${window.winsay.where.themeRoot}style/sweet/sugar/search/index.css`,
        "css"
      );
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_search__disable_tips"),
    () => {
      var t = document.getElementById("search__disable_tips");
      t ? t.remove() : null;
    },
    () => {
      window.winsay.funs.updateStyle(
        "search__disable_tips",
        `${window.winsay.where.themeRoot}style/sweet/sugar/search/tips.css`
      );
    }
  );
}

async function CP_SystemMonitor() {
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_system__SelfProtection"),
    () => {
      let SelfProtectionDialog = null;
      window.winsay.storage.It_SelfProtector
        ? clearInterval(window.winsay.storage.It_SelfProtector)
        : null;
      window.winsay.storage.It_SelfProtector = setInterval(async () => {
        if (window.siyuan.config.appearance.hideStatusBar) {
          if (document.getElementById("Info") == null) {
            SelfProtectionDialog = new ConfirmDialog({
              isCancel: true,
              dragable: false,
              XML: CD.ConfirmDialog6,
              success() {
                console.log("点击了确定");
                let o = false;
                if (
                  document.querySelector(
                    '.b3-tab-bar:not(.sc-custom-nav) [data-name="appearance"]'
                  ) == null
                ) {
                  o = true;
                }
                o
                  ? document.querySelector("#toolbar #barSetting").click()
                  : null;
                document
                  .querySelector(
                    '.b3-tab-bar:not(.sc-custom-nav) [data-name="appearance"]'
                  )
                  .click();
                setTimeout(() => {
                  document.querySelector(`#hideStatusBar`).click();
                }, 200);
                o
                  ? setTimeout(() => {
                      document.elementFromPoint(1, 1).click();
                    }, 200)
                  : null;
              },
              cancel() {
                console.log("点击了取消");
              },
              maskable: true,
            });
          }
          SelfProtectionDialog
            ? await SelfProtectionDialog.open(() => {
                document.getElementById(
                  "Info"
                ).innerHTML = `检测到底部状态栏被隐藏，主题设置入口不可用！是否立即开启？`;
                document.getElementById(
                  "CoverWarming"
                ).innerHTML = `若要禁用此提醒，请在主题设置中关闭【主题自我保护】`;
              })
            : null;
        }
        try {
          API.OK();
        } catch (e) {
          console.error(e);
          alert(
            `主题自我保护检测到异常：Sofill- 内核已被篡改，若重载无效请重新安装`
          );
        }
      }, 30_000);
    },
    () => {
      window.winsay.storage.It_SelfProtector
        ? clearInterval(window.winsay.storage.It_SelfProtector)
        : null;
    }
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_system__Ball"),
    () => {
      if (config.clientMode == "body--mobile") {
        let ball = document.querySelector("#Sofill-MobileBall");
        ball ? (ball.style.display = "none") : null;
      }
    },
    () => {
      if (config.clientMode == "body--mobile") {
        let ball = document.querySelector("#Sofill-MobileBall");
        ball
          ? (ball.style.display = "block")
          : API.通知("Sofill-MobileBall not found");
      }
    }
  );
}

async function CP_NoEvents() {
  // 留空但是有用，请勿删除
  // 重构后不需要了
  await API.checkedChange(
    document.getElementById("SC_winsay_cp__exportData__EXT_sy_editor"),
    () => {},
    () => {}
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp__exportData__EXT_sy_keymap"),
    () => {},
    () => {}
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp__exportData__EXT_sy_sync"),
    () => {},
    () => {}
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_about__AutoCheckSilently"),
    () => {},
    () => {}
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_about__AutoToUpdateMobile"),
    () => {},
    () => {}
  );
  await API.checkedChange(
    document.getElementById("SC_winsay_cp_about__AutoCheckIgnoreSVN"),
    () => {},
    () => {}
  );
}

async function CP_Monitors() {
  // await CP_NoEvents();
  await CP_EditorMonitor();
  await CP_AppearanceMonitor();
  await CP_AboutMonitor();
  await CP_CustomMonitor();
  await CP_AssetsMonitor();
  await CP_FiletreeMonitor();
  await CP_SearchMonitor();
  await CP_SearchMonitor();
  await CP_SystemMonitor();
}

async function CP_NavR() {
  // 支持记忆主题设置界面 #499
  let navLatest = await localforage.getItem("SC_winsay_cp_custom-nav-bind-id");
  if (!API.isEmptyString(navLatest)) {
    document.getElementById(navLatest).checked = "true";
  }
  let navList = document.querySelectorAll(
    "input[id^='sc-custom-nav-bind-id'][type='radio']"
  );
  navList.forEach(async (obj) => {
    obj.addEventListener("click", async () => {
      if (obj.checked && obj.checked === true)
        await localforage.setItem("SC_winsay_cp_custom-nav-bind-id", obj.id);
    });
  });
}

async function CP_GOGOGO() {
  addCPentrance();
  await CP_NavR();
  await CP_Monitors();
  await CP_InitAll();
  await addCPAlleListener();
}

setTimeout(async () => {
  await CP_GOGOGO();
}, 0);
