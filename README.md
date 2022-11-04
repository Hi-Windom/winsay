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

* S2形态组暗黑模式即将上线黑金蓝形态
* 护眼提示
* 部分文档资源链接显示icon

### 中期计划⛳

* S2形态组明亮模式计划增加太空银和文中红形态，新增S3形态组
* 右侧面板悬浮
* 支持配置文档面包屑表现形式
* 智能大纲层级缩进

~~每日更新之我不是肝帝~~

---

## ✨ 首发垂直标签页，支持修改默认形态，修复已知缺陷，诸多体验优化

> 版本更新详细内容请下滑查看

垂直标签页为实验性样式，如需开启，请手动修改 Sofill- 主题文件夹路径下的 config/UI.json 文件，将 "TabBar" 键的值修改为 "sweet/MI-TabBar-V.css"

| 样式       | json键值              | 说明                 |
| ---------- | --------------------- | -------------------- |
| 默认标签页 | MI-TabBar.css         |                      |
| 垂直标签页 | sweet/MI-TabBar-V.css | 灵感来自 Dark+ 主题 |
| 水平标签页 | sweet/MI-TabBar-H.css | 尚未实现             |

---

修改默认形态为实验性功能，如需修改，请手动修改 Sofill- 主题文件夹路径下的 config/UI.json 文件，形态对应的键值参考 Sofill- 主题形态一览表 ✨

| 形态           | 模式      | 是否上线 | 开发阶段 | json键值                   | 说明     |
| -------------- | --------- | -------- | -------- | -------------------------- | -------- |
| 绝绝紫（默认） | ⬜ light | ✔️     | 维护     | root.css                   |          |
| 纯洁蓝         | ⬜ light  | ✔️     | 维护     | root-L-Blue.css            |          |
| 砰砰粉         | ⬜ light  | ✔️     | 维护     | root-L-Pink.css            |          |
| 青葱绿         | ⬜ light  | ✔️     | 维护     | root-L-Green.css           |          |
| 智慧金         | ⬜ light  | ✔️     | 首发     | root-L-Yellow.css          |          |
| 墨绿紫         | ⬛ dark   | ✔️     | 构建     | root-D-InkGreenPurple.css  |          |
| 黑金蓝         | ⬛ dark   | ✖️     | 规划     | root-D-BlackGoldPurple.css | 尚未实现 |

---

Sofill- 一直致力于“第二默认主题”，上架前已完成下表的真机测试，enjoy 💫

| 测试平台                        | 兼容性               | 高可用 | 已知问题 |
| ------------------------------- | -------------------- | ------ | -------- |
| siyuan-2.4.9-android for mobile | ❤️❤️❤️❤️💗   | ✖️   |          |
| siyuan-2.4.9-android for pad    | ❤️❤️❤️❤️❤️ | ✔️   |          |
| siyuan-2.4.9-browser            | ❤️❤️❤️❤️❤️ | ✔️   |          |
| siyuan-2.4.9-win                | ❤️❤️❤️❤️❤️ | ✔️   |          |
| siyuan-2.4.8-win                | ❤️❤️❤️❤️❤️ | ✔️   |          |
| siyuan-2.4.6-win                | ❤️❤️❤️❤️❤️ | ✔️   |          |

当然，以上只是有限的环境测试，尤其不涉及 Mac 和 Docker 端。如果遇到问题欢迎反馈问题/提建议/参与内测~

注意：目前暂不兼容自定义主题，详见[开启自定义主题后js引入样式异常](https://github.com/Hi-Windom/winsay/issues/272)

## 🏳️‍🌈 主题特色介绍

### 轻量化简洁风绛亽特色思源笔记主题

<img src="https://b3logfile.com/siyuan/1662398123089/assets/Sofill-%E9%A2%84%E8%A7%88%E5%9B%BE_01-20221031164539-cigw4p5.png"/>

多端适配，体积小巧，深度优化默认主题已知缺陷的“第二默认主题”，明亮/暗黑多种形态随心切换 🎨

如此合适，微风迎怀，永不疲劳的舒适体验 🎡

### 轻量化简洁风绛亽特色思源笔记主题

[Sofill 系列主题对比](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9)  |  [Sofill 系列主题时间线 ](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E5%AE%B6%E6%97%8F%E6%97%B6%E9%97%B4%E7%BA%BF)

Sofill- 主题根据 [绛亽标准色](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E9%80%9A%E7%94%A8%E6%A0%87%E5%87%86%E8%89%B2) 设计

Sofill- 适合哪些人：12~34岁非色弱人群；青少年请在家长指导下观看，切勿沉迷

## 🎯 Sofill- 重点目标

1. 非常重视导出PDF
2. 非常重视双链
3. 非常重视与默认主题的兼容性，弥补默认主题在移动端的不足
4. 非常重视与思源的向后兼容性，以及 Android 端适配（包括 Android Pad）
5. 非常重视主题包的轻量化，主题包大小不会超过 1 MB
6. 重视浏览器环境的使用体验
7. 重视不同窗口大小的适配（源自 [ Hellise Potter ] ）
8. 重视过渡动画
9. 重视极端使用环境

## 🧬 手机端安装指南

1. 在手机端 `关于`中开启网络伺服
2. 在另外一台电脑或 Pad 浏览器中访问手机端伺服的URL
3. 从集市下载主题，然后重启手机端，在 `外观`中选择下载的主题

## 📜 集市更新版本日志

> v0.72 ▶ v0.76

### 版本说明

* 包含【SiYuan】标签的版本，建议更新思源至适配版本后再更新主题，否则可能存在适配问题；声明为【构建】标签的版本，**建议手动删除旧版本后再下载**（更新只会替换已有文件，不会删除不再引用的文件）
* 集市更新版本推送前会专门适配 Android 端，暂无 Mac 端和 Docker 端可供适配，欢迎加我QQ参与内测
* [主题版本更新的详细信息](https://github.com/Hi-Windom/winsay/releases)  |  [关注后续版本开发动态](https://github.com/Hi-Windom/winsay/milestones)

### v0.68 ~ v0.76 聚合说明

> 2022-11-04 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/173">
<img src="https://img.shields.io/badge/SiYuan-2.4.9-green"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [面包屑文字长度自适应 · 0.68](https://github.com/Hi-Windom/winsay/issues/226)
2. [滚动条样式 · 0.68](https://github.com/Hi-Windom/winsay/issues/229)
3. [设置界面左侧栏高度自适应 · 0.68](https://github.com/Hi-Windom/winsay/issues/230)
4. [纵向排列页签 · 0.70](https://github.com/Hi-Windom/winsay/issues/233)
5. [tooltips颜色跟随主题形态 · Issue #236 · v0.72](https://github.com/Hi-Windom/winsay/issues/236)
6. [滑块slider样式 · Issue #242 · v0.72](https://github.com/Hi-Windom/winsay/issues/242)

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

缺陷修复：

1. [旧版思源中主题布局错乱 · Issue #249 · v0.72](https://github.com/Hi-Windom/winsay/issues/249)
2. [Mac 端左侧异常留白 · Issue #244 · v0.72](https://github.com/Hi-Windom/winsay/issues/244)
3. [部分区域z-index层级混乱 · Issue #246 · v0.72](https://github.com/Hi-Windom/winsay/issues/246)
4. [barHelp弹出层被遮挡 · Issue #245 · v0.72](https://github.com/Hi-Windom/winsay/issues/245)
5. [Android Pad 端页签控件缩放问题 · Issue #270 · v0.74](https://github.com/Hi-Windom/winsay/issues/270)

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

如果需要提 issue 请前往原 repo [Issues · v0.72](https://github.com/Hi-Windom/winsay/issues)

### 思源社区

[思源笔记](https://github.com/siyuan-note/siyuan)

参考主题：（排名不分先后）

* [OneNote](https://github.com/UserZYF/OneNote)
* [Dark+](https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus)
* [Zhang-Light](https://github.com/UserZYF/zhang-light)
* [Chrome-A4](https://github.com/UserZYF/Chrome-A4)
* [pink-room](https://github.com/StarDustSheep/pink-room)
* [notion-theme](https://github.com/royc01/notion-theme)
* [blue-dog](https://github.com/UserZYF/blue-dog)
* [Dark-Blue](https://github.com/Morganwan90/Darkblue-siyuan-theme)
