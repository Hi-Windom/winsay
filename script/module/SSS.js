import { addinsertCreateElement, isPhone, removejscssfile } from "./../utils/api.js";
window.theme.config_UI = "/conf/appearance/themes/Sofill-/config/UI.json";
window.theme.themeStyle = document.getElementById("themeStyle"); // 当前主题引用路径
window.theme.THEME_ROOT = new URL(
    window.theme.themeStyle.href
).pathname.replace("theme.css", "");

window.theme.ID_COLOR_STYLE = "theme-color-style";

/* DOM 节点 ID */
window.theme.IDs = {
    STYLE_COLOR: "custom-id-style-theme-color",
    BUTTON_TOOLBAR_CHANGE_COLOR: "custom-id-button-toolbar-change-color",
    LOCAL_STORAGE_COLOR_HREF: "winsay-color-href",
};

window.theme.colors = [
    "style-S2/root.css",
    "style-S2/root-L-Blue.css",
    "style-S2/root-L-Pink.css",
    "style-S2/root-L-Green.css",
    "style-S2/root-L-Yellow.css",
];

window.theme.colors2 = [
    "style-S2/root-D-InkGreenPurple.css",
    "style-S2/root-D-BlackGoldBlue.css",
];

/* 循环迭代器 */
window.theme.Iterator = function* (items) {
    // REF [ES6中的迭代器(Iterator)和生成器(Generator) - 小火柴的蓝色理想 - 博客园](https://www.cnblogs.com/xiaohuochai/p/7253466.html)
    for (let i = 0; true; i = (i + 1) % items.length) {
        yield items[i];
    }
};
window.theme.Iterator2 = function* (items) {
    // REF [ES6中的迭代器(Iterator)和生成器(Generator) - 小火柴的蓝色理想 - 博客园](https://www.cnblogs.com/xiaohuochai/p/7253466.html)
    for (let i = 0; true; i = (i + 1) % items.length) {
        yield items[i];
    }
};

/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
window.theme.loadStyle = function (href, id = null) {
    let style = document.createElement("link");
    if (id) style.id = id;
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = href;
    document.head.appendChild(style);
};
/**
 * 更新样式文件
 * @params {string} id 样式文件 ID
 * @params {string} href 样式文件地址
 */
window.theme.updateStyle = function (id, href) {
    let style = document.getElementById(id);
    if (style) {
        style.setAttribute("href", href);
    } else {
        window.theme.loadStyle(href, id);
    }
};

/**
 * 获取主题模式
 * @return {string} light 或 dark
 */
window.theme.themeMode = (() => {
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
function compareVersion(version1, version2) {
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

// 安卓手机：android + body--mobile
// 安卓平板：android + body--desktop
/**
 * 获取操作系统 'windows' 或 'darwin' (MacOS) 或 'android'
 */
window.theme.OS = window.siyuan.config.system.os;
//  alert( window.theme.OS);
/**
 * 获取客户端模式
 * @return {string} 'app' 或 'desktop' 或 'mobile'
 */
window.theme.clientMode = (() => {
    let url = new URL(window.location.href);
    switch (true) {
        case url.pathname.startsWith("/stage/build/app"):
            return "body--app";
        case url.pathname.startsWith("/stage/build/desktop"):
            return "body--desktop";
        case url.pathname.startsWith("/stage/build/mobile"):
            return "body--mobile";
        default:
            return null;
    }
})();
document.body.classList.add(window.theme.clientMode);
document.body.classList.add(window.theme.OS);
// alert(window.theme.clientMode);

/**
 * 获取思源版本号
 * @return {string} 思源版本号
 */
window.theme.kernelVersion = window.siyuan.config.system.kernelVersion;
window.theme.cv = compareVersion(window.theme.kernelVersion, "2.4.2");
console.log(window.theme.cv);

window.theme.changeThemeModeByEnv = function () {
    /* 根据版本加载样式配置文件 */
    switch (window.theme.cv) {
        case -1:
            window.theme.updateStyle(
                "MI",
                `/appearance/themes/Sofill-/style-old/MI.css`
            );
            window.theme.updateStyle(
                "TabBar",
                `/appearance/themes/Sofill-/style-old/MI-TabBar.css`
            );
            break;
        default:
            window.theme.updateStyle("MI", `/appearance/themes/Sofill-/style/MI.css`);
            // window.theme.updateStyle(
            //   "TabBar",
            //   `/appearance/themes/Sofill-/style/MI-TabBar.css`
            // );
            new Promise(function (response) {
                var url = `http://127.0.0.1:6806/api/file/getFile`;
                var httpRequest = new XMLHttpRequest();
                httpRequest.open("POST", url, true);
                httpRequest.setRequestHeader("Content-type", "application/json");
                var obj = {
                    path: window.theme.config_UI,
                };
                httpRequest.send(JSON.stringify(obj));
                // 响应后的回调函数
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                        var json = httpRequest.responseText;
                        console.log(json);
                        response(JSON.parse(json));
                    }
                };
            }).then(function (response) {
                window.theme.updateStyle(
                    "TabBar",
                    `/appearance/themes/Sofill-/style/${response.style.TabBar}`
                );
            });
            break;
    }
    /* 根据不同设备加载样式配置文件 */
    switch (window.theme.OS) {
        case "android":
            break;
        default:
            window.theme.updateStyle(
                "MI-DocTree",
                `/appearance/themes/Sofill-/style/MI-DocTree.css`
            );
            window.theme.updateStyle(
                "MI-Doc&Breadcrumb",
                `/appearance/themes/Sofill-/style/MI-Doc&Breadcrumb.css`
            );
            break;
    }
};

window.theme.changeThemeModeByEnv();

// 支持修改默认形态 #234
new Promise(function (response) {
    var url = `http://127.0.0.1:6806/api/file/getFile`;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    var obj = {
        path: window.theme.config_UI,
    };
    httpRequest.send(JSON.stringify(obj));
    // 响应后的回调函数
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            console.log(json);
            response(JSON.parse(json));
        }
    };
}).then(function (response) {
    switch (window.theme.themeMode) {
        case "dark":
            window.theme.updateStyle(
                window.theme.IDs.STYLE_COLOR,
                `/appearance/themes/Sofill-/style-S2/${response.color.dark}`
            );
            break;
        case "light":
        default:
            window.theme.updateStyle(
                window.theme.IDs.STYLE_COLOR,
                `/appearance/themes/Sofill-/style-S2/${response.color.light}`
            );
            break;
    }
});

/* ------------ 形态切换（实验性功能）---------------------- */

function createSofillToolbar() {
    var siYuanToolbar = document.getElementById("toolbar");
    var SofillToolbar = document.getElementById("SofillToolbar");
    var windowControls = document.getElementById("windowControls");

    if (SofillToolbar) siYuanToolbar.removeChild(SofillToolbar);
    SofillToolbar = insertCreateBefore(windowControls, "div", "SofillToolbar");
    SofillToolbar.style.marginRight = "3px";
    SofillToolbar.style.marginTop = "1px";
    SofillToolbar.style.marginLeft = "10px";
}

/**
 * 向指定元素前创建插入一个元素，可选添加ID
 * @param {*} targetElement 目标元素
 * @param {*} addElementTxt 要创建添加的元素标签
 * @param {*} setId 为创建元素设置ID
 */
function insertCreateBefore(targetElement, addElementTxt, setId = null) {
    if (!targetElement) console.error("指定元素对象不存在！");
    if (!addElementTxt) console.error("未指定字符串！");

    var element = document.createElement(addElementTxt);

    if (setId) element.id = setId;

    targetElement.parentElement.insertBefore(element, targetElement);

    return element;
}

function AndroidChangeColor() {
    var SofillToolbar = document.getElementById("SofillToolbar");
    if (SofillToolbar == null) {
        var toolbarEdit = document.getElementById("toolbarEdit");
        var windowControls = document.getElementById("windowControls");
        if (toolbarEdit == null && windowControls != null) {
            SofillToolbar = document.createElement("div");
            SofillToolbar.id = "SofillToolbar";
            SofillToolbar.style.marginRight = "3px";
            SofillToolbar.style.marginTop = "1px";
            SofillToolbar.style.marginLeft = "10px";
            windowControls.parentElement.insertBefore(SofillToolbar, windowControls);
        } else if (toolbarEdit != null) {
            SofillToolbar = insertCreateBefore(toolbarEdit, "div", "SofillToolbar");
            SofillToolbar.style.position = "relative";
            SofillToolbar.style.height = "25px";
            SofillToolbar.style.overflowY = "scroll";
            SofillToolbar.style.paddingTop = "7px";
            SofillToolbar.style.marginRight = "9px";
            SofillToolbar.style.marginLeft = "10px";
        }
    }
    const addButton = addinsertCreateElement(SofillToolbar, "div");
    addButton.id = window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
    addButton.style.width = "17px";
    addButton.style.height = "100%";
    addButton.style.float = "left";
    addButton.style.marginLeft = "10px";
    addButton.style.backgroundImage =
        "url(/appearance/themes/Sofill-/src/S2.svg)";
    addButton.style.backgroundRepeat = "no-repeat";
    addButton.style.backgroundPosition = "left top";
    addButton.style.backgroundSize = "100%";
    addButton.addEventListener("click", (e) => {
        color_href = window.theme.iter.next().value;
        localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
        window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
    });
}

function iterChangeColor() {
    /* 通过颜色配置文件列表生成完整 URL 路径 */
    let colors_href = [];
    let colorList =[];
    switch (window.theme.themeMode) {
        case "light":
            colorList = window.theme.colors;
            colorList.forEach((color) =>
                colors_href.push(`${window.theme.THEME_ROOT}${color}`)
            );
            window.theme.iter = window.theme.Iterator(colors_href);
            var color_href = localStorage.getItem(
                window.theme.IDs.LOCAL_STORAGE_COLOR_HREF
            );
            if (color_href) {
                // 将迭代器调整为当前配色
                for (let i = 0; i < colorList.length; ++i) {
                    if (window.theme.iter.next().value === color_href) break;
                }
            } else {
                // 迭代器第一个为当前配色
                color_href = window.theme.iter.next().value;
                localStorage.setItem(
                    window.theme.IDs.LOCAL_STORAGE_COLOR_HREF,
                    color_href
                );
            }
            break;
        case "dark":
        default:
            colorList = window.theme.colors2;
            colorList.forEach((color) =>
                colors_href.push(`${window.theme.THEME_ROOT}${color}`)
            );
            window.theme.iter = window.theme.Iterator2(colors_href);
            var color_href = localStorage.getItem(
                window.theme.IDs.LOCAL_STORAGE_COLOR_HREF
            );
            if (color_href) {
                // 将迭代器调整为当前配色
                for (let i = 0; i < colorList.length; ++i) {
                    if (window.theme.iter.next().value === color_href) break;
                }
            } else {
                // 迭代器第一个为当前配色
                color_href = window.theme.iter.next().value;
                localStorage.setItem(
                    window.theme.IDs.LOCAL_STORAGE_COLOR_HREF,
                    color_href
                );
            }
            break;
    }

    /* 加载配色文件 */
    window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
}
function DesktopChangeColor() {
    const drag = document.getElementById("drag"); // 标题栏
    if (window.theme.themeStyle) {
        const button_change_color = document.createElement("button"); // 切换主题颜色按钮
        button_change_color.id = window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
        button_change_color.className = "toolbar__item b3-tooltips b3-tooltips__sw";
        button_change_color.ariaLabel = "形态切换（实验性）";
        button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
        button_change_color.addEventListener("click", (e) => {
            const color_href = window.theme.iter.next().value;
            localStorage.setItem(
                window.theme.IDs.LOCAL_STORAGE_COLOR_HREF,
                color_href
            );
            window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
        });
        if (
            document.getElementById(window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR) ==
            null
        ) {
            drag.insertAdjacentElement("afterend", button_change_color);
        }
    }
}

function changeStyleMod() {
    iterChangeColor();
    if (isPhone()) {
        AndroidChangeColor();
        createSofillToolbar();
    } else {
        DesktopChangeColor();
        // REF [JS DOM 编程复习笔记 -- insertAdjacentHTML（九） - 知乎](https://zhuanlan.zhihu.com/p/425616377)
        // drag.insertAdjacentHTML('afterend', `<div class="protyle-toolbar__divider"></div>`);
    }
}

/**
 * 更换主题模式
 * @params {string} lightStyle 浅色主题配置文件路径
 * @params {string} darkStyle 深色主题配置文件路径
 * @params {string} customLightStyle 浅色主题自定义配置文件路径
 * @params {string} customDarkStyle 深色主题自定义配置文件路径
 */

function changeThemeModeByApp() {
    let href_color = null;
    switch (window.theme.themeMode) {
        case "light":
            href_color = `/appearance/themes/Sofill-/style-S2/root-base-light.css`;
            /* 实验性功能 */
            window.theme.colors2.forEach((color) =>
                removejscssfile(`${window.theme.THEME_ROOT}${color}`, "css")
            );
            break;
        case "dark":
        default:
            href_color = `/appearance/themes/Sofill-/style-S2/root-base-dark.css`;
            /* 实验性功能 */
            window.theme.colors.forEach((color) =>
                removejscssfile(`${window.theme.THEME_ROOT}${color}`, "css")
            );
            break;
    }
    window.theme.updateStyle(window.theme.ID_COLOR_STYLE, href_color);
    localStorage.removeItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF);
    changeStyleMod();
}
/* 支持暗黑模式 */
changeThemeModeByApp();
setTimeout(() => {
    changeStyleMod();
}, 0);
