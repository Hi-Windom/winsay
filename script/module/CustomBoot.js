import * as config from "./../config.js";
import * as API from "./../utils/api.min.js";

// 初始化获取用户配置
let SC_winsay_cp_appearance__TabBarMode = localStorage.getItem(
  "SC_winsay_cp_appearance__TabBarMode"
);

async function ghostTabBar() {
  if (!API.isEmpty(SC_winsay_cp_appearance__TabBarMode)) {
    window.funs.updateStyle(
      "TabBar",
      `/appearance/themes/Sofill-/style/${SC_winsay_cp_appearance__TabBarMode}`
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
        `/appearance/themes/Sofill-/style/${response.style.TabBar}`
      );
      console.log("use default");
    });
  }
}


ghostTabBar();

