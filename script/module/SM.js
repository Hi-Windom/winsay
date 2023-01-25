import * as config from "../config.js";
import {isEmptyString} from "../utils/api.min.js"

export async function iterDC() {
  await localforage.getItem(config.latest_DC_ID).then((latest_color_href) => {
    if (isEmptyString(latest_color_href)) {
      latest_color_href = config.defaultDC
      console.warn(latest_color_href);
    }
    // 加载配色文件
    window.winsay.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
    // 将迭代器调整为当前配色
    for (let i = 0; i < config.colors2.length; ++i) {
      if (window.winsay.storage.iterDC.next().value === latest_color_href)
        break;
    }
  });
}

export async function iterLC() {
  await localforage.getItem(config.latest_LC_ID).then((latest_color_href) => {
    if (isEmptyString(latest_color_href)) {
      latest_color_href = config.defaultLC
      console.warn(latest_color_href);
    }
    /* 加载配色文件 */
    window.winsay.funs.updateStyle(
      config.IDs.STYLE_COLOR,
      `${config.S2_BASE}${latest_color_href}`
    );
    // 将迭代器调整为当前配色
    for (let i = 0; i < config.colors1.length; ++i) {
      if (window.winsay.storage.iterLC.next().value === latest_color_href)
        break;
    }
  });
}
