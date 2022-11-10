# 🪁 Sofill-主题：内部代号 [ winsay ]（风颂）

<p align="center">
    <img src="https://img.shields.io/pypi/l/color-theme-analyse.svg" alt="License">
    <a href="https://github.com/Hi-Windom/winsay/releases">
    <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/Hi-Windom/winsay?include_prereleases">
    <img alt="GitHub (Pre-)Release Date" src="https://img.shields.io/github/release-date-pre/Hi-Windom/winsay">
    </a><a href="https://github.com/Hi-Windom/winsay/issues?q=is%3Aopen+is%3Aissue">
    <img alt="GitHub open issues" src="https://img.shields.io/github/issues-raw/Hi-Windom/winsay"/>
    </a><a href="https://github.com/Hi-Windom/winsay/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/Hi-Windom/winsay">
    </a><a href="https://github.com/Hi-Windom/winsay/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Hi-Windom/winsay"></a>
    <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=694357845&website=www.oicqzone.com"><img src="https://img.shields.io/badge/QQ-694357845-orange"></a>
</p>

## 🔭 更新预告

### 短期计划💥

* [X] ~~护眼提示~~
* [ ] 部分文档资源链接显示icon
* [ ] 持续扩大跟随主题形态的样式范围
* [X] ~~主题形态记忆~~

### 中期计划⛳

* [ ] S2形态组明亮模式计划增加太空银和文中红形态，新增S3形态组
* [ ] 右侧面板悬浮
* [ ] 支持配置文档面包屑表现形式

~~每日更新之我不是肝帝~~

---

## ✨ 搜索面板和插入 [[ 引用 ]] 提示面板全面升级，持续改善体验

> 版本更新详细内容请下滑查看

没有收录你心仪的网站？[第一批公开征集投稿](https://www.kdocs.cn/wo/app/view/form/6ti8iIaonhSjVieKzb6L26) 正在进行中，快来参加吧

夜间护眼提示默认开启且在夜间时段每小时提醒一次，可手动修改 Sofill- 主题文件夹路径下的 config/Custom.json 文件，将 "gotoSleep" 键的值修改为一个整数，为 0 则关闭提示

标签栏模式仍处于实验性阶段，如需修改，请手动修改 Sofill- 主题文件夹路径下的 config/UI.json 文件，将 "TabBar" 键的值修改为对应json键值

| 样式       | json键值              | 说明                 |
| ---------- | --------------------- | -------------------- |
| 默认标签栏 | MI-TabBar.css         |                      |
| 垂直标签栏 | sweet/MI-TabBar-V.css | 灵感来自 Dark+ 主题 |
| 水平标签栏 | sweet/MI-TabBar-H.css | 灵感来自 VS 2022     |

---

修改默认形态不会影响形态记忆功能，形态对应的键值参考 Sofill- 主题形态一览表 ✨

| 形态   | 模式      | 是否上线 | 开发阶段 | json键值                   | 说明             |
| ------ | --------- | -------- | -------- | -------------------------- | ---------------- |
| 绝绝紫 | ⬜ light | ✔️     | 维护     | root.css                   | 默认形态         |
| 纯洁蓝 | ⬜ light  | ✔️     | 维护     | root-L-Blue.css            | 缺省形态         |
| 砰砰粉 | ⬜ light  | ✔️     | 维护     | root-L-Pink.css            |                  |
| 青葱绿 | ⬜ light  | ✔️     | 维护     | root-L-Green.css           |                  |
| 智慧金 | ⬜ light  | ✔️     | 维护     | root-L-Yellow.css          |                  |
| 黑金蓝 | ⬛ dark   | ✔️     | 构建     | root-D-BlackGoldPurple.css | 暗黑模式默认形态 |
| 墨绿紫 | ⬛ dark   | ✔️     | 构建     | root-D-InkGreenPurple.css  |                  |

---

注意：Sofill- 0.92+ 版本停止支援思源 2.4.5 及更早版本，以下是 Sofill- 最新版本的真机测试表，enjoy 💫

| 测试平台                         | 兼容性               | LTS  | 已知问题 |
| -------------------------------- | -------------------- | ---- | -------- |
| siyuan-2.4.12-android for mobile | ❤️❤️❤️❤️❤️ | ✔️ |          |
| siyuan-2.4.12-android for pad    | ❤️❤️❤️❤️❤️ | ✔️ |          |
| siyuan-2.4.12-win                | ❤️❤️❤️❤️❤️ | ✔️ |          |
| siyuan-2.4.11-win                | ❤️❤️❤️❤️❤️ | ✔️ |          |
| siyuan-2.4.6-win                 | ❤️❤️❤️❤️❤️ | ✖️ |          |

Mac 、iPad 和 Docker 端目前无真机测试

注意：目前暂不兼容自定义主题，详见[开启自定义主题后js引入样式异常](https://github.com/Hi-Windom/winsay/issues/272)

## 🏳️‍🌈 主题特色介绍

<img src="https://b3logfile.com/siyuan/1662398123089/assets/Sofill-%E9%A2%84%E8%A7%88%E5%9B%BE_01-20221031164539-cigw4p5.png"/>

### 打造思源“第二默认主题”

多端适配，体积小巧，深度优化默认主题已知缺陷，明亮/暗黑多种形态随心切换 🎨

如此合适，微风迎怀，永不疲劳的舒适体验 🎡

### 轻量化简洁风绛亽特色思源笔记主题

[Sofill 系列主题对比](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9)  |  [Sofill 系列主题时间线 ](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E5%AE%B6%E6%97%8F%E6%97%B6%E9%97%B4%E7%BA%BF)

Sofill- 主题颜色 [绛亽标准色](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E9%80%9A%E7%94%A8%E6%A0%87%E5%87%86%E8%89%B2) + CNTC + SGTC 设计

Sofill- 适合哪些人：13~58岁非色弱人群；青少年请在家长指导下观看，切勿沉迷

## 🎯 Sofill- 重点目标

1. 非常重视导出PDF
2. 非常重视双链
3. 非常重视与默认主题的兼容性，弥补默认主题在移动端的不足
4. 非常重视与思源的向后兼容性，以及 Android 端适配（包括 Android Pad）
5. 非常重视主题包的轻量化，主题包大小不会超过 3 MB
6. 重视浏览器环境的使用体验
7. 重视不同窗口大小的适配（源自 [ Hellise Potter ] ）
8. 重视过渡动画
9. 重视极端使用环境

## 🧬 手机端安装指南

1. 在手机端 `关于`中开启网络伺服
2. 在另外一台电脑或 Pad 浏览器中访问手机端伺服的URL
3. 从集市下载主题，然后重启手机端，在 `外观`中选择下载的主题

## 📜 集市更新版本日志

> v0.96 ▶ v0.100

### 版本说明

* 包含【SiYuan】标签的版本，建议更新思源至适配版本后再更新主题，否则可能存在适配问题；声明为【构建】标签的版本，**建议手动删除旧版本后再下载**（更新只会替换已有文件，不会删除不再引用的文件）
* [主题版本更新的详细信息](https://github.com/Hi-Windom/winsay/releases)  |  [关注后续版本开发动态](https://github.com/Hi-Windom/winsay/milestones)

### v0.90 ~ v0.100 聚合说明

> 2022-11-11 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/94">
<img src="https://img.shields.io/badge/SiYuan-2.4.12-green"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [主题形态记忆 · Issue #268 · v0.90](https://github.com/Hi-Windom/winsay/issues/268)
2. [横向排列多行紧凑布局页签 · Issue #321 · v0.90](https://github.com/Hi-Windom/winsay/issues/321)
3. [页签【更多】和搜索界面支持计数 · Issue #328 · v0.94](https://github.com/Hi-Windom/winsay/issues/328)
4. [列表视图转换功能（实验性） · Issue #333 · v0.94](https://github.com/Hi-Windom/winsay/issues/333)
5. [护眼提示 · Issue #30 · v0.94](https://github.com/Hi-Windom/winsay/issues/30)
6. [搜索界面转替换提示 · Issue #332 · v0.96](https://github.com/Hi-Windom/winsay/issues/332)
7. [对话框样式 · Issue #256 · v0.96](https://github.com/Hi-Windom/winsay/issues/256)
8. [文档树面板宽度不足时五层以上节点控件布局优化 · Issue #345 · v0.100](https://github.com/Hi-Windom/winsay/issues/345)

改进优化：

1. [涉及账号界面的一些细节优化 · Issue #316 · v0.90](https://github.com/Hi-Windom/winsay/issues/316)
2. [暗黑模式默认形态调整为【黑金蓝】 · Issue #318 · v0.90](https://github.com/Hi-Windom/winsay/issues/318)
3. [禁用.protyle-toolbar过渡效果 · Issue #319 · v0.90](https://github.com/Hi-Windom/winsay/issues/319)
4. [文档内字体颜色与背景色样式部分跟随主题样式 · Issue #260 · v0.90](https://github.com/Hi-Windom/winsay/issues/260)
5. [一些细节优化 · Issue #317 · v0.90](https://github.com/Hi-Windom/winsay/issues/317)
6. [多行横向紧凑页签优化 · Issue #323 · v0.92](https://github.com/Hi-Windom/winsay/issues/323)
7. [页签【更多】界面布局调整 · Issue #324 · v0.92](https://github.com/Hi-Windom/winsay/issues/324)
8. [搜索高亮优化显示效果 · Issue #325 · v0.92](https://github.com/Hi-Windom/winsay/issues/325)
9. [一些细节优化 · Issue #326 · v0.92](https://github.com/Hi-Windom/winsay/issues/326)
10. [文档树展开按钮触发区域优化 · Issue #330 · v0.94](https://github.com/Hi-Windom/winsay/issues/330)
11. [默认页签布局调整 · Issue #331 · v0.94](https://github.com/Hi-Windom/winsay/issues/331)
12. [列表间距自适应 · Issue #176 · v0.94](https://github.com/Hi-Windom/winsay/issues/176)
13. [设置缺省形态为【纯洁蓝】 · Issue #338 · v0.96](https://github.com/Hi-Windom/winsay/issues/338)
14. [插入引用提示面板优化 · Issue #340 · v0.98](https://github.com/Hi-Windom/winsay/issues/340)
15. [搜索面板优化 · Issue #341 · v0.98](https://github.com/Hi-Windom/winsay/issues/341)
16. [标签底色跟随主题形态 · Issue #275 · v0.98](https://github.com/Hi-Windom/winsay/issues/275)
17. [文档树字号自适应面板宽度 · Issue #343 · v0.100](https://github.com/Hi-Windom/winsay/issues/343)

缺陷修复：

1. [暗黑模式option背景色丢失 · Issue #335 · v0.94](https://github.com/Hi-Windom/winsay/issues/335)
2. [主题详情页头图无法正常放大查看 · Issue #344 · v0.100](https://github.com/Hi-Windom/winsay/issues/344)

### v0.68 ~ v0.88 聚合说明

> 2022-11-07 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/94">
<img src="https://img.shields.io/badge/SiYuan-2.4.10-green"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [面包屑文字长度自适应 · 0.68](https://github.com/Hi-Windom/winsay/issues/226)
2. [滚动条样式 · 0.68](https://github.com/Hi-Windom/winsay/issues/229)
3. [设置界面左侧栏高度自适应 · 0.68](https://github.com/Hi-Windom/winsay/issues/230)
4. [纵向排列页签 · 0.70](https://github.com/Hi-Windom/winsay/issues/233)
5. [tooltips颜色跟随主题形态 · Issue #236 · v0.72](https://github.com/Hi-Windom/winsay/issues/236)
6. [滑块slider样式 · Issue #242 · v0.72](https://github.com/Hi-Windom/winsay/issues/242)
7. [文档树笔记本高度自适应 · Issue #288 · v0.80](https://github.com/Hi-Windom/winsay/issues/288)
8. [部分网站超链接显示icon（第一批） · Issue #254 · v0.80](https://github.com/Hi-Windom/winsay/issues/254)
9. [首发黑金蓝形态 · Issue #292 · v0.82](https://github.com/Hi-Windom/winsay/issues/292)
10. [代码片段文本框调整 · Issue #301 · v0.86](https://github.com/Hi-Windom/winsay/issues/301)
11. [空文档提醒样式 · Issue #304 · v0.86](https://github.com/Hi-Windom/winsay/issues/304)
12. [超级块空段落子块提示 · Issue #306 · v0.86](https://github.com/Hi-Windom/winsay/issues/306)
13. [嵌入块面包屑文字长度自适应 · Issue #263 · v0.88](https://github.com/Hi-Windom/winsay/issues/263)

改进优化：

1. [文档树失去焦点时隐藏已关闭笔记本 · 0.68](https://github.com/Hi-Windom/winsay/issues/221)
2. [行内公式增加左右边距 · 0.68](https://github.com/Hi-Windom/winsay/issues/222)
3. [宽度不足时显示更多文档文字 · 0.68](https://github.com/Hi-Windom/winsay/issues/223)
4. [去掉代码块语言前缀 · 0.68](https://github.com/Hi-Windom/winsay/issues/224)
5. [输入框样式适用范围调整 · 0.68](https://github.com/Hi-Windom/winsay/issues/227)
6. [默认字色跟随主题形态变化 · 0.68](https://github.com/Hi-Windom/winsay/issues/228)
7. [明亮模式不再隐藏块滚动条，代价是取消面包屑毛玻璃效果 · 0.68](https://github.com/Hi-Windom/winsay/issues/225)
8. [设置界面右侧区域边距自适应 · 0.70](https://github.com/Hi-Windom/winsay/issues/232)
9. [文档标题默认透明度调整 · 0.70](https://github.com/Hi-Windom/winsay/issues/235)
10. [支持修改默认形态 · 0.70](https://github.com/Hi-Windom/winsay/issues/234)
11. [页签聚焦底色跟随主题形态 · Issue #251 · v0.72](https://github.com/Hi-Windom/winsay/issues/251)
12. [输入框阴影跟随主题形态 · Issue #247 · v0.72](https://github.com/Hi-Windom/winsay/issues/247)
13. [屏蔽输入框聚焦样式 · Issue #248 · v0.72](https://github.com/Hi-Windom/winsay/issues/248)
14. [图片资源protyle-action__drag控件美化 · Issue #241 · v0.72](https://github.com/Hi-Windom/winsay/issues/241)
15. [代码片段textarea禁用水平拉伸 · Issue #243 · v0.72](https://github.com/Hi-Windom/winsay/issues/243)
16. [安卓端隐藏开发者工具菜单项 · Issue #253 · v0.74](https://github.com/Hi-Windom/winsay/issues/253)
17. [集市selector去除底色 · Issue #271 · v0.74](https://github.com/Hi-Windom/winsay/issues/271)
18. [遮罩颜色跟随主题形态 · Issue #255 · v0.74](https://github.com/Hi-Windom/winsay/issues/255)
19. [分割线颜色跟随主题形态 · Issue #257 · v0.74](https://github.com/Hi-Windom/winsay/issues/257)
20. [虚拟引用颜色跟随主题形态 · Issue #258 · v0.74](https://github.com/Hi-Windom/winsay/issues/258)
21. [嵌入块底色跟随主题形态 · Issue #262 · v0.74](https://github.com/Hi-Windom/winsay/issues/262)
22. [调整一二级标题字重 · Issue #278 · v0.76](https://github.com/Hi-Windom/winsay/issues/278)
23. [引用弹出层宽高限制逻辑调整 · Issue #279 · v0.76](https://github.com/Hi-Windom/winsay/issues/279)
24. [表格底色跟随主题形态 · Issue #274 · v0.76](https://github.com/Hi-Windom/winsay/issues/274)
25. [#258 的持续改进 · Issue #280 · v0.76](https://github.com/Hi-Windom/winsay/issues/280)
26. [页签栏显示效果优化 · Issue #281 · v0.76](https://github.com/Hi-Windom/winsay/issues/281)
27. [Android 手机端model元素禁用过渡 · Issue #283 · v0.78](https://github.com/Hi-Windom/winsay/issues/283)
28. [Android 手机端左右面板宽度调整 · Issue #284 · v0.78](https://github.com/Hi-Windom/winsay/issues/284)
29. [代码块颜色跟随主题形态 · Issue #273 · v0.78](https://github.com/Hi-Windom/winsay/issues/273)
30. [通知确认按钮颜色跟随主题形态 · Issue #277 · v0.78](https://github.com/Hi-Windom/winsay/issues/277)
31. [备注颜色跟随主题形态 · Issue #259 · v0.78](https://github.com/Hi-Windom/winsay/issues/259)
32. [引用计数样式跟随主题形态 · Issue #265 · v0.78](https://github.com/Hi-Windom/winsay/issues/265)
33. [侧边栏展开列表项较多时的动画效果优化 · Issue #287 · v0.80](https://github.com/Hi-Windom/winsay/issues/287)
34. [protyle-gutters颜色跟随主题形态 · Issue #291 · v0.82](https://github.com/Hi-Windom/winsay/issues/291)
35. [页签关闭按钮SVG颜色跟随主题形态 · Issue #294 · v0.82](https://github.com/Hi-Windom/winsay/issues/294)
36. [引用快颜色跟随主题形态 · Issue #295 · v0.82](https://github.com/Hi-Windom/winsay/issues/295)
37. [淡化暗黑模式设置界面左栏列表项聚焦底色 · Issue #297 · v0.84](https://github.com/Hi-Windom/winsay/issues/297)
38. [暗黑模式设置界面大搜索框阴影调和 · Issue #298 · v0.84](https://github.com/Hi-Windom/winsay/issues/298)
39. [超级菜单颜色跟随主题形态 · Issue #267 · v0.84](https://github.com/Hi-Windom/winsay/issues/267)
40. [标题折叠阴影跟随主题形态 · Issue #293 · v0.84](https://github.com/Hi-Windom/winsay/issues/293)
41. [加粗文本颜色继承逻辑优化 · Issue #305 · v0.86](https://github.com/Hi-Windom/winsay/issues/305)
42. [搜索界面调和 · Issue #308 · v0.86](https://github.com/Hi-Windom/winsay/issues/308)
43. [行内代码前后缀装饰改为隐藏彩蛋形式触发 · Issue #302 · v0.88](https://github.com/Hi-Windom/winsay/issues/302)
44. [KBD样式跟随主题形态 · Issue #303 · v0.88](https://github.com/Hi-Windom/winsay/issues/303)
45. [.dock__item--activefocus 颜色在明亮模式下不受 --b3-theme-primary 控制 · Issue #311 · v0.88](https://github.com/Hi-Windom/winsay/issues/311)
46. [查询嵌入块内如果有至少三个块则增加适当间距 · Issue #312 · v0.88](https://github.com/Hi-Windom/winsay/issues/312)
47. [暗黑模式卡片背景调和 · Issue #313 · v0.88](https://github.com/Hi-Windom/winsay/issues/313)
48. [一些细节改进 · Issue #314 · v0.88](https://github.com/Hi-Windom/winsay/issues/314)

缺陷修复：

1. [旧版思源中主题布局错乱 · Issue #249 · v0.72](https://github.com/Hi-Windom/winsay/issues/249)
2. [Mac 端左侧异常留白 · Issue #244 · v0.72](https://github.com/Hi-Windom/winsay/issues/244)
3. [部分区域z-index层级混乱 · Issue #246 · v0.72](https://github.com/Hi-Windom/winsay/issues/246)
4. [barHelp弹出层被遮挡 · Issue #245 · v0.72](https://github.com/Hi-Windom/winsay/issues/245)
5. [Android Pad 端页签控件缩放问题 · Issue #270 · v0.74](https://github.com/Hi-Windom/winsay/issues/270)
6. [文档树定位需要两次定位操作 · Issue #290 · v0.82](https://github.com/Hi-Windom/winsay/issues/290)
7. [只读模式下protyle-gutters显示错位 · Issue #307 · v0.86](https://github.com/Hi-Windom/winsay/issues/307)

### v0.50 ~ v0.66 聚合说明

> 2022-10-31 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/173">
<img src="https://img.shields.io/badge/SiYuan-2.4.8-green"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [选择器底色样式 · 0.50](https://github.com/Hi-Windom/winsay/issues/150)
2. [分割线样式 · 0.50](https://github.com/Hi-Windom/winsay/issues/163)
3. [滚动文档树时，笔记本项悬停在顶部 · 0.50](https://github.com/Hi-Windom/winsay/issues/146)
4. [形态切换（实验性） · 0.50](https://github.com/Hi-Windom/winsay/issues/160)
5. [文档树样式 · 0.50](https://github.com/Hi-Windom/winsay/issues/39)
6. [代码块语言选择弹出层分列显示 · 0.52](https://github.com/Hi-Windom/winsay/issues/175)
7. [虚拟引用样式 · 0.56](https://github.com/Hi-Windom/winsay/issues/184)
8. [标签侧栏样式 · 0.56](https://github.com/Hi-Windom/winsay/issues/171)
9. [支持暗黑模式（实验性） · 0.56](https://github.com/Hi-Windom/winsay/issues/172)
10. [明亮模式【智慧金】形态首发 · 0.58](https://github.com/Hi-Windom/winsay/issues/190)
11. [大纲样式 · 0.60](https://github.com/Hi-Windom/winsay/issues/167)
12. [宽度允许时，搜索界面改为左右栏显示 · 0.62](https://github.com/Hi-Windom/winsay/issues/203)
13. [只读模式提示 · 0.64](https://github.com/Hi-Windom/winsay/issues/214)

改进优化：

1. [滚动条恢复默认样式 · 0.50](https://github.com/Hi-Windom/winsay/issues/152)
2. [#113 的细节调整 · 0.50](https://github.com/Hi-Windom/winsay/issues/153)
3. [#124 的持续改进1 · 0.50](https://github.com/Hi-Windom/winsay/issues/156)
4. [去除影响过渡动效的背景色 · 0.50](https://github.com/Hi-Windom/winsay/issues/155)
5. [列表辅助线优化 · 0.50](https://github.com/Hi-Windom/winsay/issues/157)
6. [引用计数样式优化 · 0.50](https://github.com/Hi-Windom/winsay/issues/158)
7. [【设置】界面视觉效果升级 · 0.50](https://github.com/Hi-Windom/winsay/issues/159)
8. [优化文档树展开面板动效 · 0.50](https://github.com/Hi-Windom/winsay/issues/151)
9. [中文双引号使用宋体样式 · 0.50](https://github.com/Hi-Windom/winsay/issues/162)
10. [动效调优 · 0.50](https://github.com/Hi-Windom/winsay/issues/165)
11. [页签栏【更多】弹出层体验改善 · 0.52](https://github.com/Hi-Windom/winsay/issues/174)
12. [代码块样式优化 · 0.52](https://github.com/Hi-Windom/winsay/issues/129)
13. [Android 手机端屏蔽消息区 · 0.52](https://github.com/Hi-Windom/winsay/issues/177)
14. [#21 的持续改进 · 0.54](https://github.com/Hi-Windom/winsay/issues/179)
15. [.block__logo淡化处理 · 0.54](https://github.com/Hi-Windom/winsay/issues/180)
16. [动效调优 · 0.58](https://github.com/Hi-Windom/winsay/issues/189)
17. [选择器开关样式调整 · 0.58](https://github.com/Hi-Windom/winsay/issues/188)
18. [暗黑模式【墨绿紫】形态进化 · 0.58](https://github.com/Hi-Windom/winsay/issues/187)
19. [双链建议面板视觉效果调整，显示更多建议项 · 0.58](https://github.com/Hi-Windom/winsay/issues/186)
20. [暗黑模式取消隐藏块进度条 · 0.60](https://github.com/Hi-Windom/winsay/issues/197)
21. [选择器样式调整 · 0.60](https://github.com/Hi-Windom/winsay/issues/199)
22. [页签栏调整 · 0.60](https://github.com/Hi-Windom/winsay/issues/200)
23. [宽度过小时隐藏右上角layout-tab-bar逻辑改进 · 0.62](https://github.com/Hi-Windom/winsay/issues/206)
24. [【已关闭的笔记本】融入文档树样式 · 0.62](https://github.com/Hi-Windom/winsay/issues/202)
25. [右上角layout-tab-bar恢复为默认布局 · 0.64](https://github.com/Hi-Windom/winsay/issues/213)
26. [聚焦模式不隐藏面包屑 · 0.64](https://github.com/Hi-Windom/winsay/issues/164)
27. [优化暗黑模式下右上角layout-tab-bar显示效果 · 0.64](https://github.com/Hi-Windom/winsay/issues/204)
28. [暗黑模式顶栏标题文字显示增强 · 0.66](https://github.com/Hi-Windom/winsay/issues/218)
29. [暗黑模式搜索框视觉效果优化 · 0.66](https://github.com/Hi-Windom/winsay/issues/219)
30. [文档树和大纲视觉效果优化，显示更多信息 · 0.66](https://github.com/Hi-Windom/winsay/issues/210)

缺陷修复：

1. [文档页面横向滚动条异常 · 0.52](https://github.com/Hi-Windom/winsay/issues/169)
2. [#174 引发的表格通用弹出层异常 · 0.56](https://github.com/Hi-Windom/winsay/issues/183)
3. [未提升页签栏Z轴层级 · 0.58](https://github.com/Hi-Windom/winsay/issues/191)
4. [暗黑模式搜索框Z轴层级 · 0.58](https://github.com/Hi-Windom/winsay/issues/194)
5. [弹出菜单子菜单过渡抽搐 · 0.62](https://github.com/Hi-Windom/winsay/issues/207)
6. [右侧dock栏被遮挡 · 0.62](https://github.com/Hi-Windom/winsay/issues/208)
7. [暗黑模式下选择明亮模式显示PDF异常 · 0.62](https://github.com/Hi-Windom/winsay/issues/205)
8. [右上角layout-tab-bar固定位置无法避免遮挡 · 0.64](https://github.com/Hi-Windom/winsay/issues/212)
9. [switch开关动画未生效 · 0.66](https://github.com/Hi-Windom/winsay/issues/217)
10. [页面间距不足时，文字标题icon显示不全 · 0.66](https://github.com/Hi-Windom/winsay/issues/216)

## 🎈 鸣谢

Sofill 系列主题的诞生与成长离不开下列开源项目的贡献，以及热心网友的反馈和建议。

### 思源社区

[思源笔记](https://github.com/siyuan-note/siyuan)

参考主题：（排名不分先后）

* [OneNote](https://github.com/UserZYF/OneNote)
* [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)
* [Zhang-Light](https://github.com/UserZYF/zhang-light)
* [Chrome-A4](https://github.com/UserZYF/Chrome-A4)
* [pink-room](https://github.com/StarDustSheep/pink-room)
* [Savor](https://github.com/royc01/notion-theme)
* [blue-dog](https://github.com/UserZYF/blue-dog)
* [Dark-Blue](https://github.com/Morganwan90/Darkblue-siyuan-theme)

## 💎 特别鸣谢

* [OriginOS](https://www.vivo.com.cn/originos)
* [搜狗输入法手机版](https://shouji.sogou.com/?r=ime)

---

<p style="text-align:center">- The End -</p>
