const themeRootDirName = "Sofill-";
// 如果你重命名了主题根文件夹，请将第一行的 "Sofill-" 替换为对应值。
// 注意：请确保正确填写，默认为 "Sofill-" 则会自动判断主题根文件夹名，因此一般无需修改此项
window.winsay = {
  cp: { awaitInitItem: 0, inited: 0, listened: 0 },
  funs: {},
  ekits: {},
  where: {
    themeRoot: `/appearance/themes/${themeRootDirName}/`,
    localThemeName: themeRootDirName,
  },
  storage: {},
};

switch (window.siyuan.config.appearance.mode) {
  case 1:
    document.body.classList.add("mode--dark");
    if (window.winsay.where.localThemeName === "Sofill-" && !window.lili) {
      window.winsay.where.localThemeName =
        window.siyuan.config.appearance.themeDark;
      window.winsay.where.themeRoot = new URL(themeStyle.href).pathname.replace(
        "theme.css",
        ""
      );
    }
    break;
  default:
    document.body.classList.add("mode--light");
    if (window.winsay.where.localThemeName === "Sofill-" && !window.lili) {
      window.winsay.where.localThemeName =
        window.siyuan.config.appearance.themeLight;
      window.winsay.where.themeRoot = new URL(themeStyle.href).pathname.replace(
        "theme.css",
        ""
      );
    }
    break;
}

const loader = document.createElement("script");
loader.type = "module";
loader.async = true;
loader.defer = true;
loader.src = `${window.winsay.where.themeRoot}theme.m.js`;
document.head.appendChild(loader);
