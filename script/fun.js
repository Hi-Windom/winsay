
window.funs.loadStyle = function (href, id = null) {
  let style = document.createElement("link");
  if (id) style.id = id;
  style.type = "text/css";
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
};
window.funs.updateStyle = function (id, href) {
  let style = document.getElementById(id);
  if (style) {
      style.setAttribute("href", href);
  } else {
      window.funs.loadStyle(href, id);
  }
};

window.funs.getThemeMode = (() => {
  /* 根据配置选项判断主题 */
  switch (window.siyuan.config.appearance.mode) {
      case 0:
          return "light";
      case 1:
          return "dark";
      default:
          return null;
  }
})();

// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
window.funs.compareVersion = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const length1 = arr1.length;
  const length2 = arr2.length;
  const minlength = Math.min(length1, length2);
  let i = 0;
  for (i; i < minlength; i++) {
      let a = parseInt(arr1[i]);
      let b = parseInt(arr2[i]);
      if (a > b) {
          return 1;
      } else if (a < b) {
          return -1;
      }
  }
  if (length1 > length2) {
      for (let j = i; j < length1; j++) {
          if (parseInt(arr1[j]) != 0) {
              return 1;
          }
      }
      return 0;
  } else if (length1 < length2) {
      for (let j = i; j < length2; j++) {
          if (parseInt(arr2[j]) != 0) {
              return -1;
          }
      }
      return 0;
  }
  return 0;
}