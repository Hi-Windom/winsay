import Dialog, { InputDialog } from "./module/CPM.js";

const barHelp = document.getElementById("barHelp");
if (document.getElementById("Sofill-CDUI-1") == null) {
  const CDUI_1 = document.createElement("button");
  CDUI_1.id = "Sofill-CDUI-1";
  CDUI_1.className = "Sofill-CDUI-btn1 b3-menu__item";
  CDUI_1.ariaLabel = "主题设置（实验性）";
  CDUI_1.innerHTML = `<svg class="b3-menu__icon" "=""><use xlink:href="#iconSettings"></use></svg><span class="b3-menu__label">主题设置</span>`;
  barHelp.children[1].insertAdjacentElement("afterbegin", CDUI_1);
  let dialog = new Dialog({
    isCancel: true,
    dragable: true,
    success() {
      console.log("点击了确定");
    },
    cancel() {
      console.log("点击了取消");
    },
    maskable: true,
  });
  document.querySelector(".Sofill-CDUI-btn1").onclick = function () {
    dialog.open();
  };
}

var obj = {};
let winsay_custom_fontFamily = localStorage.getItem("winsay_custom_fontFamil");
let winsay_custom_fontSize = localStorage.getItem("winsay_custom_fontSize");
let winsay_custom_virtualBlockRefInclude = localStorage.getItem("winsay_custom_virtualBlockRefInclude");
bindDomWithObject({
  id: "fontFamily",
  obj: obj,
  prop: "winsay_custom_fontFamily",
  type: "change",
  updated: function (obj, prop, dom) {},
  callback: function (options, obj, dom) {
    obj[options.prop] = winsay_custom_fontFamily; // 可以在这里给dom添加默认值
  },
});

bindDomWithObject({
  id: "fontSize",
  obj: obj,
  prop: "winsay_custom_fontSize",
  type: "change",
  updated: function (obj, prop, dom) {},
  callback: function (options, obj, dom) {
    obj[options.prop] = winsay_custom_fontSize; // 可以在这里给dom添加默认值
  },
});


bindDomWithObject({
  id: "virtualBlockRefInclude",
  obj: obj,
  prop: "winsay_custom_virtualBlockRefInclude",
  type: "input",
  updated: function (obj) {},
  callback: function (options) {
    obj[options.prop] = winsay_custom_virtualBlockRefInclude;
  },
});

/**
 *
 * @param {object} options
 *
 */
function bindDomWithObject(options) {
  var dom = document.getElementById(options.id); // 获取dom id
  var obj = options.obj; // 需要绑定的obj
  var prop = options.prop; // 需要绑定的obj 的属性
  var callback = options.callback; // 绑定成功后调用
  var type = options.type; // 绑定的事件类型
  var updated = options.updated; // 更新成功后调用

  Object.defineProperty(obj, prop, {
    get: function () {
      return dom.value;
    },
    set: function (value) {
      dom.value = value;
      console.log(value);
      localStorage.setItem(prop, value);
    },
    configurable: true,
  });

  dom.addEventListener(type, function () {
    obj[prop] = obj[prop];
    if (typeof updated === "function") {
      updated(obj, prop, dom); // 传入对象， 修改的属性， 以及dom节点
    }
  });

  if (typeof callback === "function") {
    callback(options, obj, dom);
  }
}
