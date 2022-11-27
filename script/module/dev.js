import * as API from "./../utils/api.min.js";
import * as config from "./../config.js";

// 初始缩放比例
let originPixelRatio = localStorage.SC_winsay_data_devicePixelRatio;
if (!originPixelRatio) {
  originPixelRatio = window.devicePixelRatio;
  // 整数才保存
  if (Number.isInteger(originPixelRatio)) {
    localStorage.SC_winsay_data_devicePixelRatio = originPixelRatio;
  }
}
// 来源：https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/
let lastPixelRatio = originPixelRatio;
window.addEventListener("resize", function () {
  let currentPixelRatio = window.devicePixelRatio;
  if (currentPixelRatio !== lastPixelRatio) {
    console.log(
      "缩放比例是：" +
        Math.round(1000 * (currentPixelRatio / originPixelRatio)) / 10 +
        "%（100%基准为软件初始缩放，并非实际缩放，仅供参考）"
    );
  }
  // 记住上一次的设备像素比
  lastPixelRatio = currentPixelRatio;
});

//夜间返回true，白天返回false，（这里夜间时间设置为23:00 -- 07:00）
function isDaylight() {
  var currdate = new Date();
  if (currdate.getHours() >= 23 || currdate.getHours() < 7) {
    return true;
  } else {
    return false;
  }
}

var setSleepNote;
new Promise(function (response) {
  var url = `http://127.0.0.1:6806/api/file/getFile`;
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Content-type", "application/json");
  var obj = { path: config.config_Custom };
  httpRequest.send(JSON.stringify(obj));
  // 响应后的回调函数
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      var json = httpRequest.responseText;
      response(JSON.parse(json));
    }
  };
}).then(function (response) {
  if (isDaylight || parseInt(response.gotoSleep) < 1) {
    clearInterval(setSleepNote);
  } else {
    setSleepNote = setInterval(() => {
      var currdate = new Date();
      let h = currdate.getHours();
      API.通知(`⏰ 现在已经 ${h} 点啦<br>劳逸结合是维持效率的秘诀 ~`);
    }, 3600000 * parseInt(response.gotoSleep));
  }
});

function ExtendProtyleToolbar() {
  setInterval(() => {
    var all_protyle_toolbar = document.querySelectorAll(".fn__flex-1.protyle .protyle-toolbar");
    all_protyle_toolbar.forEach(function (protyle_toolbar) {
      if (protyle_toolbar.querySelectorAll(".sc_protyle_toolbar_search").length == 0) {
        var divider = document.createElement("div");
        divider.className = "protyle-toolbar__divider";
        protyle_toolbar.insertAdjacentElement("beforeend", divider);
        var sbutton = document.createElement("button");
        sbutton.className =
          "protyle-toolbar__item b3-tooltips b3-tooltips__ne sc_protyle_toolbar_search";
        // sbutton.id = "sc_protyle_toolbar_search";
        sbutton.setAttribute("data-type", "search");
        sbutton.setAttribute("aria-label", "搜索选中文本");
        sbutton.innerHTML = `<svg><use xlink:href="#iconSearch"></use></svg>`;
        protyle_toolbar.insertAdjacentElement("beforeend", sbutton);
        protyle_toolbar.addEventListener(
          "click",
          (event) => {
            console.log(event.target);
            console.log(event.target.parentNode);
            if (
              event.target.classList.contains("sc_protyle_toolbar_search") ||
              event.target.parentNode.classList.contains(
                "sc_protyle_toolbar_search"
              )
            ) {
              var text = window.getSelection().toString();
              document.querySelector("#toolbar #barSearch").click();
              setTimeout(() => {
                let i = document.querySelector(".b3-dialog--open #searchInput");
                i.value = text;
                let e = new Event("input", { bubbles: true });
                let tracker = i._valueTracker;
                if (tracker) {
                  tracker.setValue("");
                }
                i.dispatchEvent(e);
              }, 500);
              event.stopPropagation();
            }
          },
          true
        );
      }
    });
  }, 2000);
}
setTimeout(() => {
  ExtendProtyleToolbar();
}, 200);
