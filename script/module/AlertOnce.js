import { ConfirmDialog } from "./CPM.js";
import * as CD from "./XML/ConfirmDialog.js";

let once = new ConfirmDialog({
  isCancel: true,
  dragable: false,
  XML: CD.ConfirmDialog7,
  success() {
    console.log("点击了确定");
  },
  cancel() {
    console.log("点击了取消");
  },
  maskable: true,
});
await once.open(() => {
  document.getElementById(
    "UpdateInfo"
  ).innerHTML = `覆盖更新后如果出现问题，首先在开发者工具中停用缓存，然后刷新页面。如果问题仍然存在，可以QQ联系作者或者前往 Github 提 issue 。即使没有出现问题，同样建议在更新后停用缓存刷新一次页面再使用。`;
  document.getElementById(
    "CoverWarming"
  ).innerHTML = `关闭本消息弹窗即视为您已知悉`;
});