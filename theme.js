window.theme = {};

// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
function compareVersion(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const length1 = arr1.length
  const length2 = arr2.length
  const minlength = Math.min(length1, length2)
  let i = 0
  for (i ; i < minlength; i++) {
    let a = parseInt(arr1[i])
    let b = parseInt(arr2[i])
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
  }
  if (length1 > length2) {
    for(let j = i; j < length1; j++) {
      if (parseInt(arr1[j]) != 0) {
        return 1
      }
    }
    return 0
  } else if (length1 < length2) {
    for(let j = i; j < length2; j++) {
      if (parseInt(arr2[j]) != 0) {
        return -1
      }
    }
    return 0
  }
  return 0
}
/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
 window.theme.loadStyle = function (href, id = null) {
  let style = document.createElement('link');
  if (id) style.id = id;
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.href = href;
  document.head.appendChild(style);
}
/**
 * 更新样式文件
 * @params {string} id 样式文件 ID
 * @params {string} href 样式文件地址
 */
 window.theme.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
      style.setAttribute('href', href);
  }
  else {
      window.theme.loadStyle(href, id);
  }
}
/**
 * 获取思源版本号
 * @return {string} 思源版本号
 */
 window.theme.kernelVersion = window.siyuan.config.system.kernelVersion;
 window.theme.cv = compareVersion(window.theme.kernelVersion, "2.4.2");
 console.log(window.theme.cv);

 /* 根据版本加载样式配置文件 */
 window.theme.changeThemeMode = function () {
  switch ( window.theme.cv) {
      case -1:
        window.theme.updateStyle("MI", `/appearance/themes/Sofill-/style-old/MI.css`);
        window.theme.updateStyle("TabBar", `/appearance/themes/Sofill-/style-old/MI-TabBar.css`);
        break;
      default:
        window.theme.updateStyle("MI", `/appearance/themes/Sofill-/style/MI.css`);
        window.theme.updateStyle("TabBar", `/appearance/themes/Sofill-/style/MI-TabBar.css`);
        break;
  }
}

window.theme.changeThemeMode();

// 初始缩放比例
let originPixelRatio = localStorage.devicePixelRatio;
if (!originPixelRatio) {
  originPixelRatio = window.devicePixelRatio;
  // 整数才保存
  if (Number.isInteger(originPixelRatio)) {
    localStorage.devicePixelRatio = originPixelRatio;
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

(function (w, und) {
  Refresh();
})(window, undefined);

function Refresh() {
  if (isPhone()) {
    //手机模式执行的
    setTimeout(() => {}, 1000);
  } else {
    //pc模式执行的
    setTimeout(() => {
      rundynamicUnderline(); //为文档标题创建动态下划线
      showDocumentCreationDate(); //为打开文档标题下面显示文档创建日期
    }, 500);
  }
}

/**------------------为打开文档的标题下显示文档创建日期-----------------开始 */
function showDocumentCreationDate() {
  setInterval(DocumentCreationDate, 300);
}

function DocumentCreationDate() {
  var allDocumentTitleElement = getAllDocumentTitleElement();
  for (let index = 0; index < allDocumentTitleElement.length; index++) {
    const element = allDocumentTitleElement[index];
    var documentCreatTimeElement = creatTimeSpanElement(element.parentElement);
    var spanTxt = documentCreatTimeElement.innerText;
    if (spanTxt == "" || spanTxt == "日期获取中……") {
      var documentCreatTimeTxt = getDocumentTime(element);
      documentCreatTimeElement.innerText = documentCreatTimeTxt;
    }
  }
}

/**获取所有打开文档的标题元素 */
function getAllDocumentTitleElement() {
  return document.querySelectorAll(".protyle-title__input");
}

/**为文档标题元素下创建时间容器元素 */
function creatTimeSpanElement(tilteElement) {
  var item = tilteElement.children;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.getAttribute("documentCreatTimeElement") != null) {
      return element;
    }
  }
  var documentCreatTimeElement = addinsertCreateElement(tilteElement, "span");
  documentCreatTimeElement.setAttribute("documentCreatTimeElement", "true");
  documentCreatTimeElement.style.display = "block";
  documentCreatTimeElement.style.marginLeft = "7px";
  documentCreatTimeElement.style.marginBottom = "0px";
  documentCreatTimeElement.style.fontSize = "70%";
  documentCreatTimeElement.style.color = "#484550";
  documentCreatTimeElement.style.opacity = "0.58";
  return documentCreatTimeElement;
}

/**获得这个文档的创建时间 */
function getDocumentTime(tilteElement) {
  var tS =
    tilteElement.parentElement.previousElementSibling.getAttribute(
      "data-node-id"
    );
  if (tS == null) {
    return "日期获取中……";
  }
  var year = tS.substring(0, 4);
  var moon = tS.substring(4, 6);
  var day = tS.substring(6, 8);
  var hour = tS.substring(8, 10);
  var minute = tS.substring(10, 12);
  var second = tS.substring(12, 14);
  console.log(year, moon, day, hour, minute, second);
  return "since " + year + "-" + moon + "-" + day;
}
/**------------------为打开文档的标题下显示文档创建日期-----------------结束 */

/**------------------为文档标题创建动态下划线---------------------------开始 */
function rundynamicUnderline() {setInterval(dynamicUnderline, 200);}

function dynamicUnderline() {
  var AllDocumentTitleElement = getAllDocumentTitleElement();
  for (let index = 0; index < AllDocumentTitleElement.length; index++) {
    const element = AllDocumentTitleElement[index];
    var line = createLine(element);
    var txt = getTileTxt(element);
    var maxWidth = element.offsetWidth;
    var Style = getComputedStyle(element, null);
    var font = Style.font;
    var width = getTextWidth(txt, font) + 13;
    if (width < 58) { width = 58; }//动态下划线最小宽度
    if (width > maxWidth) { width = maxWidth; }//不超过一行
    line.style.width = width + "px";
  }
}

function createLine(TitleElement) {
  var item = TitleElement.parentElement.children;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.getAttribute("Line") != null) { return element; }
  }
  var line = insertCreateAfter(TitleElement, "div");
  line.setAttribute("Line", "true");
  line.style.height = "1.3px";
  line.style.marginTop = "3.1px";
  line.style.marginBottom = "5.8px";
  line.style.backgroundImage = "linear-gradient(to right, #ff0000, #0070c0, #ff3399, #912997)";//动态下划线颜色
  return line;
}

function getTileTxt(TitleElement) { return TitleElement.innerText; }
/**------------------为文档标题创建动态下划线---------------------------结束 */


//++++++++++++++++++++++++++++++++++++++++api区域+++++++++++++++++++++++++++++++++++++++++++++++

/**简单判断目前思源是否是手机模式 */
function isPhone() {
  return document.getElementById("toolbar") == null;
}

/**
 * 获得文本的占用的宽度
 * @param {*} text 字符串文班
 * @param {*} font 文本字体的样式
 * @returns
 */
function getTextWidth(text, font) {
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

/**
 * 向指定父级创建追加一个子元素，并可选添加ID,
 * @param {Element} fatherElement
 * @param {string} addElementTxt 要创建添加的元素标签
 * @param {string} setId
 * @returns addElementObject
 */
function addinsertCreateElement(fatherElement, addElementTxt, setId = null) {
  var element = document.createElement(addElementTxt);
  if (setId) element.id = setId;
  fatherElement.appendChild(element);
  return element;
}

/**
 * 向指定元素后创建插入一个元素，可选添加ID
 * @param {*} targetElement 目标元素
 * @param {*} addElementTxt 要创建添加的元素标签
 * @param {*} setId 为创建元素设置ID
 */
function insertCreateAfter(targetElement, addElementTxt, setId = null) {
  var element = document.createElement(addElementTxt);
  if (setId) element.id = setId;
  var parent = targetElement.parentNode; //得到父节点
  if (parent.lastChild === targetElement) {
    parent.appendChild(element);
    return element;
  } else {
    parent.insertBefore(element, targetElement.nextSibling); //否则，当前节点的下一个节点之前添加
    return element;
  }
}

/**
 * 为元素注册监听事件
 * @param {Element} element
 * @param {string} strType
 * @param {Fun} fun
 */
function AddEvent(element, strType, fun) {
  //判断浏览器有没有addEventListener方法
  if (element.addEventListener) {
    element.addEventListener(strType, fun, false);
    //判断浏览器有没 有attachEvent IE8的方法
  } else if (element.attachEvent) {
    element.attachEvent("on" + strType, fun);
    //如果都没有则使用 元素.事件属性这个基本方法
  } else {
    element["on" + strType] = fun;
  }
}

/**
 * 为元素解绑监听事件
 * @param {Element}  element ---注册事件元素对象
 * @param {String}   strType ---注册事件名(不加on 如"click")
 * @param {Function} fun	 ---回调函数
 *
 */
function myRemoveEvent(element, strType, fun) {
  //判断浏览器有没有addEventListener方法
  if (element.addEventListener) {
    // addEventListener方法专用删除方法
    element.removeEventListener(strType, fun, false);
    //判断浏览器有没有attachEvent IE8的方法
  } else if (element.attachEvent) {
    // attachEvent方法专用删除事件方法
    element.detachEvent("on" + strType, fun);
    //如果都没有则使用 元素.事件属性这个基本方法
  } else {
    //删除事件用null
    element["on" + strType] = null;
  }
}

/**
 * 递归DOM元素查找深度子级的第一个符合条件的元素
 * @param {*} element 要查找DOM元素
 * @param {*} judgeFun 查找函数 : fun(v) return true or false
 * @returns element
 */
function diguiTooONE(element, judgeFun) {
  if (element == null) return null;
  if (judgeFun == null) return null;

  return digui(element);

  function digui(elem) {
    var child = elem.children;
    if ((child.length = 0)) return null;

    for (let index = 0; index < child.length; index++) {
      const element2 = child[index];
      if (judgeFun(element2)) {
        return element2;
      } else {
        var item = digui(element2);
        if (item == null) continue;
        return item;
      }
    }
    return null;
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++思源API
async function 设置思源块属性(内容块id, 属性对象) {
  let url = "/api/attr/setBlockAttrs";
  return 解析响应体(
    向思源请求数据(url, {
      id: 内容块id,
      attrs: 属性对象,
    })
  );
}

async function 以id获取文档聚焦内容(id, then, obj = null) {
  await 向思源请求数据("/api/filetree/getDoc", {
    id: id,
    k: "",
    mode: 0,
    size: 36,
  }).then((v) => then(v.data, obj));
}

async function 向思源请求数据(url, data) {
  let resData = null;
  await fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      Authorization: `Token ''`,
    },
  }).then(function (response) {
    resData = response.json();
  });
  return resData;
}
async function 解析响应体(response) {
  let r = await response;
  return r.code === 0 ? r.data : null;
}

/**
 * 获得所选择的块对应的块 ID
 * @returns {string} 块 ID
 * @returns {
 *     id: string, // 块 ID
 *     type: string, // 块类型
 *     subtype: string, // 块子类型(若没有则为 null)
 * }
 * @returns {null} 没有找到块 ID */
function getBlockSelected() {
  let node_list = document.querySelectorAll(
    ".protyle:not(.fn__none)>.protyle-content .protyle-wysiwyg--select"
  );
  if (node_list.length === 1 && node_list[0].dataset.nodeId != null)
    return {
      id: node_list[0].dataset.nodeId,
      type: node_list[0].dataset.type,
      subtype: node_list[0].dataset.subtype,
    };
  return null;
}
//++++++++++++++++++++++++++++++++++++++++api区域+++++++++++++++++++++++++++++++++++++++++++++++
