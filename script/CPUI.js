import Dialog, { InputDialog } from "./module/CPM.js";
var r = document.querySelector(":root");

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
    dragable: false, //貌似可拖拽会有问题，以后加点延时看看
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
function bindDomWithObject2(options) {
  var dom = document.getElementById(options.id); // 获取dom id
  var obj = options.obj; // 需要绑定的obj
  var prop = options.prop; // 需要绑定的obj 的属性
  var callback = options.callback; // 绑定成功后调用
  var type = options.type; // 绑定的事件类型
  var updated = options.updated; // 更新成功后调用

  Object.defineProperty(obj, prop, {
    get: function () {
      return dom.checked;
    },
    set: function (value) {
      dom.checked = value;
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

function propInit(id, type) {
  bindDomWithObject({
    id: id,
    obj: obj,
    prop: id,
    type: type,
    callback: function (options, obj, dom) {
      obj[options.prop] = localStorage.getItem(id);
    },
  });
  console.log(`${id} binded successfully`);
}

function propChange(id, changeFn) {
  bindDomWithObject({
    id: id,
    obj: obj,
    prop: id,
    type: "change",
    updated: changeFn,
  });
  changeFn();
}

function checkedInit(obj) {
  if (localStorage.getItem(obj.id) === "true") {
    obj.checked = true;
  } else {
    obj.checked = false;
  }
  console.log(`${obj.id} binded successfully`);
}

function checkedChange(obj, YesFn, NoFn) {
  if (obj.checked === true) {
    localStorage.setItem(obj.id, "true");
    YesFn();
  } else {
    localStorage.setItem(obj.id, "false");
    NoFn();
  }
  obj.addEventListener("click", function () {
    if (obj.checked === true) {
      localStorage.setItem(obj.id, "true");
      YesFn();
    } else {
      localStorage.setItem(obj.id, "false");
      NoFn();
    }
  });
}

// 初始化选项的值
let selectList = document.querySelectorAll("select[id^='winsay_cp']");
// console.log(selectList);
selectList.forEach(function (value) {
  propInit(value.id, "change");
});
let checkboxList = document.querySelectorAll(
  "input[id^='winsay_cp'][type='checkbox']"
);
// console.log(checkboxList);
checkboxList.forEach(function (value) {
  checkedInit(value);
});

// 选项改变时的业务处理
propChange("winsay_cp_appearance__TabBarMode", function () {
  window.funs.updateStyle(
    "TabBar",
    `/appearance/themes/Sofill-/style/${localStorage.getItem(
      "winsay_cp_appearance__TabBarMode"
    )}`
  );
});
checkedChange(
  document.getElementById("winsay_cp_appearance__ToolBarMode"),
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-height-max",
      "11px"
    );
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-child-visibility",
      "hidden"
    );
  },
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-height-max",
      "37px"
    );
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-child-visibility",
      "visible"
    );
  }
);
propChange("winsay_cp_appearance__ToolBarMode__height", function () {
  var h = localStorage.getItem("winsay_cp_appearance__ToolBarMode__height");
  document.documentElement.style.setProperty(
    "--SCC-Variables-MI-ToolBar-height",
    h
  );
  document.documentElement.style.setProperty(
    "--SCC-Variables-MI-ToolBar-svg-height",
    `${parseInt(h) / 2 + 1}px`
  );
});
checkedChange(
  document.getElementById("winsay_cp_appearance__ToolBarMode__HideList__docName"),
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-docName-opacity",
      "0"
    );
  },
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-docName-opacity",
      "0.77"
    );
  }
);
checkedChange(
  document.getElementById("winsay_cp_appearance__ToolBarMode__HideList__VIP"),
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-VIP-display",
      "none"
    );
  },
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-VIP-display",
      "flex"
    );
  }
);
checkedChange(
  document.getElementById("winsay_cp_appearance__ToolBarMode__HideList__windowX"),
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-windowX-opacity",
      "0"
    );
  },
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-windowX-opacity",
      "0.77"
    );
  }
);
checkedChange(
  document.getElementById("winsay_cp_appearance__ToolBarMode__HideList__Other"),
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-Other-opacity",
      "0"
    );
  },
  () => {
    document.documentElement.style.setProperty(
      "--SCC-Variables-MI-ToolBar-Other-opacity",
      "0.77"
    );
  }
);