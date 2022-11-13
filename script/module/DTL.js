import {
  insertCreateAfter,
  addinsertCreateElement,
  getTextWidth,
  isPhone,
} from "./../utils/api.min.js";

/** 为打开文档的标题下显示文档创建日期 */
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

/** 获得这个文档的创建时间 */
function getDocumentTime(tilteElement) {
  var tS =
    tilteElement.parentElement.previousElementSibling.getAttribute(
      "data-node-id"
    );
  if (tS == null) {
    return "";
  }
  var year = tS.substring(0, 4);
  var moon = tS.substring(4, 6);
  var day = tS.substring(6, 8);
  var hour = tS.substring(8, 10);
  var minute = tS.substring(10, 12);
  var second = tS.substring(12, 14);
  return "since " + year + "-" + moon + "-" + day;
}


/** 为文档标题创建动态下划线 */
function rundynamicUnderline() {
  setInterval(dynamicUnderline, 200);
}

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
    if (width < 58) {
      width = 58;
    } //动态下划线最小宽度
    if (width > maxWidth) {
      width = maxWidth;
    } //不超过一行
    line.style.width = width + "px";
  }
}

function createLine(TitleElement) {
  var item = TitleElement.parentElement.children;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.getAttribute("Line") != null) {
      return element;
    }
  }
  var line = insertCreateAfter(TitleElement, "div");
  line.setAttribute("Line", "true");
  line.setAttribute("class", "scc-dynamic");
  line.setAttribute("id", "doc-underline");
  line.style.opacity = "0.13";
  line.style.height = "1.3px";
  line.style.marginTop = "3.1px";
  line.style.marginBottom = "5.8px";
  line.style.backgroundImage =
    "linear-gradient(to right, #ff0000, #0070c0, #ff3399, #912997)"; //动态下划线颜色
  return line;
}

function getTileTxt(TitleElement) {
  return TitleElement.innerText;
}

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
