const themeRootDirName = "Sofill-";
// 如果你重命名了主题根文件夹，请将第一行的 "Sofill-" 替换为对应值。
// 注意：请确保正确填写，默认为 "Sofill-" 则会自动判断主题根文件夹名，因此一般无需修改此项

const loader = document.createElement("script");
loader.type = "module";
loader.async = true;
loader.defer = true;
loader.src = `/appearance/themes/${themeRootDirName}/____/__js__.js?r=` + Math.random();
document.head.appendChild(loader);