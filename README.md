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

* [ ] 部分文档资源链接显示icon
* [ ] 持续扩大跟随主题形态的样式范围
* [ ] 支持通过主题设置界面修改文档宽度模式
* [ ] 支持通过主题设置界面配置页签样式

### 中期计划⛳

* [ ] S2形态组明亮模式计划增加太空银，新增S3形态组
* [ ] 右侧面板悬浮
* [ ] 支持配置文档面包屑表现形式
* [ ] Ctrl + 鼠标滚轮缩放显示效果优化
* [ ] [提供接口 · Issue #425](https://github.com/Hi-Windom/winsay/issues/425)

~~每日更新之我不是肝帝~~

**作者被期末缠上了，最近的版本更新会很水，希望大家谅解**

---

## ✨ 支持通过主题设置开启题头图粘性布局，为暗黑模式弹出菜单专门设计的阴影样式

> 版本更新详细内容请下滑查看

如果你正在通过集市详情页浏览这段话，应该能够发现集市详情页也是磨砂效果背景，这是之前版本引入的特性，区别在于是否可以关闭。Sofill- 还专门优化了集市详情页头图的撑满显示效果，无论是透明头图还是不透明头图都丝般顺滑。

还有一些细节上的变化，例如我们替换了默认的集市详情页过渡效果，在主题设置面板显示当前版本号，更换了主题预览图，新的预览图较之前的体积减少了 75%

### 主题设置界面入口指南

Step 1 确保在思源软件设置里关闭了【隐藏底部状态栏】

<img src="https://b3logfile.com/siyuan/1662398123089/assets/image-20221112135324-f1qefbv.png"/>

Step 2 鼠标悬浮在【帮助（问号）】，在呼出的菜单中点击【主题设置】

<img src="https://b3logfile.com/siyuan/1662398123089/assets/image-20221112135352-1pkn6iv.png"/>

缺省值修改： Sofill- 主题文件夹路径下的 config/UI.json 文件，将 "TabBar" 键的值修改为对应json键值

| 样式       | json键值              | 说明                 |
| ---------- | --------------------- | -------------------- |
| 默认页签栏 | sweet/MI-TabBar-D.css | 经典永不过时         |
| 垂直页签栏 | sweet/MI-TabBar-V.css | 灵感来自 Dark+ 主题 |
| 水平页签栏 | sweet/MI-TabBar-H.css | 灵感来自 VS 2022     |

---

修改默认形态不会影响形态记忆功能，形态对应的键值参考 Sofill- 主题形态一览表 ✨

| 形态   | 模式      | 是否上线 | 开发阶段 | json键值                   | 说明             |
| ------ | --------- | -------- | -------- | -------------------------- | ---------------- |
| 绝绝紫 | ⬜ light | ✔️     | 维护     | root.css                   | 默认形态         |
| 纯洁蓝 | ⬜ light  | ✔️     | 维护     | root-L-Blue.css            | 缺省形态         |
| 文中红 | ⬜ light  | ✔️     | 首发     | root-L-Red.css             |                  |
| 砰砰粉 | ⬜ light  | ✔️     | 维护     | root-L-Pink.css            |                  |
| 青葱绿 | ⬜ light  | ✔️     | 维护     | root-L-Green.css           |                  |
| 智慧金 | ⬜ light  | ✔️     | 维护     | root-L-Yellow.css          |                  |
| 黑金蓝 | ⬛ dark   | ✔️     | 构建     | root-D-BlackGoldPurple.css | 暗黑模式默认形态 |
| 墨绿紫 | ⬛ dark   | ✔️     | 构建     | root-D-InkGreenPurple.css  |                  |

---

## 🏳️‍🌈 主题特色介绍

<img src="https://b3logfile.com/siyuan/1662398123089/assets/Sofill-%E9%A2%84%E8%A7%88%E5%9B%BE_01-20221031164539-cigw4p5.png"/>

### 打造思源“第二默认主题”

多端适配，体积小巧，深度优化默认主题已知缺陷，明亮/暗黑多种形态随心切换 🎨

如此合适，微风迎怀，看得到的看不到的地方都充满了 Sofill- 的优化印记，满足细节控对 ⌈润物细无声⌋ 的极致追求，永不疲劳的舒适体验 🎡

### 轻量化简洁风绛亽特色思源笔记主题

[Sofill 系列主题对比](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9)  |  [Sofill 系列主题时间线 ](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E5%AE%B6%E6%97%8F%E6%97%B6%E9%97%B4%E7%BA%BF)

Sofill- 主题颜色 [绛亽标准色](https://github.com/Hi-Windom/Sofill/wiki/Sofill-%E7%B3%BB%E5%88%97%E4%B8%BB%E9%A2%98%E9%80%9A%E7%94%A8%E6%A0%87%E5%87%86%E8%89%B2) + CNTC + SGTC 设计

Sofill- 适合哪些人：13~58岁非色弱人群；青少年请在家长指导下观看，切勿沉迷

## 🎯 Sofill- 重点目标

1. 非常重视导出PDF
2. 非常重视双链
3. 非常重视与默认主题的兼容性与思源的向后兼容性
4. 非常重视 Android 端适配（包括 Android Pad），弥补默认主题在移动端的不足
5. 非常重视主题包的轻量化，主题包大小不会超过 3 MB
6. 重视浏览器环境的使用体验
7. 重视不同窗口大小的适配（源自 [ Hellise Potter ] ）
8. 重视过渡动画（对机器性能有一定的要求）
9. 重视极端使用环境（源自 [ Hellise Potter ] ）

## 🧬 手机端安装指南

1. 在手机端 `关于`中开启网络伺服
2. 在另外一台电脑或 Pad 浏览器中访问手机端伺服的URL
3. 从集市下载主题，然后重启手机端，在 `外观`中选择下载的主题

## 📜 集市更新版本日志

### 版本说明

* 包含【SiYuan】标签的版本，建议更新思源至适配版本后再更新主题，否则可能存在适配问题；声明为【构建】标签的版本，**建议手动删除旧版本后再下载**（更新只会替换已有文件，不会删除不再引用的文件）
* [全部版本更新日志](https://gitee.com/soltus/Sofill/blob/main/CHANGELOG/winsay.md)  |  [关注后续版本开发动态](https://github.com/Hi-Windom/winsay/milestones)

### v0.102 ~ v0.134 聚合说明

> 2022-11-17 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/399">
<img src="https://img.shields.io/badge/SiYuan-2.5.0-green"/></a>
<a href="https://github.com/Hi-Windom/winsay/issues/409">
<img src="https://img.shields.io/badge/%E4%B8%8D%E5%85%BC%E5%AE%B9-2.4.5---red"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [弹出菜单通用阴影样式 · Issue #350 · v0.102](https://github.com/Hi-Windom/winsay/issues/350)
2. [不可用控件醒目提示 · Issue #351 · v0.102](https://github.com/Hi-Windom/winsay/issues/351)
3. [主题设置面板（实验性） · Issue #349 · v0.102](https://github.com/Hi-Windom/winsay/issues/349)
4. [支持通过主题设置界面修改页签栏布局模式 · Issue #356 · v0.104](https://github.com/Hi-Windom/winsay/issues/356)
5. [支持通过主题设置配置顶栏自动隐藏（仅Windows端有效） · Issue #240 · v0.106](https://github.com/Hi-Windom/winsay/issues/240)
6. [支持通过主题设置界面选择是否隐藏 Untitle 文档名 · Issue #366 · v0.108](https://github.com/Hi-Windom/winsay/issues/366)
7. [支持通过主题设置界面配置文档树自适应显示 · Issue #367 · v0.108](https://github.com/Hi-Windom/winsay/issues/367)
8. [支持通过主题设置界面清理主题本地存储空间数据 · Issue #368 · v0.108](https://github.com/Hi-Windom/winsay/issues/368)
9. [支持通过主题设置界面配置行内代码聚焦彩蛋 · Issue #382 · v0.110](https://github.com/Hi-Windom/winsay/issues/382)
10. [支持通过主题设置界面配置顶栏背景颜色 · Issue #394 · v0.112](https://github.com/Hi-Windom/winsay/issues/394)
11. [支持通过主题设置界面配置dock栏底色增强 · Issue #395 · v0.112](https://github.com/Hi-Windom/winsay/issues/395)
12. [支持通过主题设置界面调整笔记本间距 · Issue #380 · v0.112](https://github.com/Hi-Windom/winsay/issues/380)
13. [为页签弹出层设计单独的阴影 · Issue #397 · v0.112](https://github.com/Hi-Windom/winsay/issues/397)
14. [首发明亮模式【文中红】形态 · Issue #413 · v0.120](https://github.com/Hi-Windom/winsay/issues/413)
15. [Android Pad 端引入 #345特性 · Issue #417 · v0.122](https://github.com/Hi-Windom/winsay/issues/417)
16. [全新设计的正向链接弹出面板钉住态阴影 · Issue #419 · v0.124](https://github.com/Hi-Windom/winsay/issues/419)
17. [支持通过主题配置界面调整段前段后间距、行高、段首缩进、字符间距 · Issue #422 · v0.126](https://github.com/Hi-Windom/winsay/issues/422)
18. [支持通过主题设置开启题头图粘性布局 · Issue #436 · v0.132](https://github.com/Hi-Windom/winsay/issues/436)
19. [集市详情页过渡效果 · Issue #442 · v0.134](https://github.com/Hi-Windom/winsay/issues/442)

改进优化：

1. [任务列表前缀颜色跟随主题形态 · Issue #348 · v0.102](https://github.com/Hi-Windom/winsay/issues/348)
2. [垂直页签不隐藏关闭按钮 · Issue #361 · v0.106](https://github.com/Hi-Windom/winsay/issues/361)
3. [任务列表颜色跟随主题形态 · Issue #364 · v0.108](https://github.com/Hi-Windom/winsay/issues/364)
4. [删除主题本地存储空间时弹窗确认 · Issue #370 · v0.110](https://github.com/Hi-Windom/winsay/issues/370)
5. [动效优化 · Issue #347 · v0.110](https://github.com/Hi-Windom/winsay/issues/347)
6. [优化弹出菜单通用阴影在暗黑模式下的呈现效果 · Issue #371 · v0.110](https://github.com/Hi-Windom/winsay/issues/371)
7. [Android Pad 端隐藏无效的主题设置界面配置项 · Issue #374 · v0.110](https://github.com/Hi-Windom/winsay/issues/374)
8. [Android 端HintMenu样式更新 · Issue #376 · v0.110](https://github.com/Hi-Windom/winsay/issues/376)
9. [优化行内代码彩蛋触发逻辑 · Issue #381 · v0.110](https://github.com/Hi-Windom/winsay/issues/381)
10. [Android 端与桌面端统一背景磨砂效果调整优化 · Issue #388 · v0.110](https://github.com/Hi-Windom/winsay/issues/388)
11. [Android 手机端顶栏调整 · Issue #390 · v0.112](https://github.com/Hi-Windom/winsay/issues/390)
12. [Android 端主题设置界面优化 · Issue #392 · v0.112](https://github.com/Hi-Windom/winsay/issues/392)
13. [清理主题本地存储空间数据自动刷新页面 · Issue #393 · v0.112](https://github.com/Hi-Windom/winsay/issues/393)
14. [优化插入引用面板在屏幕边缘的显示效果 · Issue #396 · v0.112](https://github.com/Hi-Windom/winsay/issues/396)
15. [表头颜色跟随主题形态 · Issue #400 · v0.114](https://github.com/Hi-Windom/winsay/issues/400)
16. [优化极端宽度环境下顶栏的布局和交互 · Issue #401 · v0.114](https://github.com/Hi-Windom/winsay/issues/401)
17. [精简更新日志 · Issue #405 · v0.116](https://github.com/Hi-Windom/winsay/issues/405)
18. [主题包轻量化构建 · Issue #406 · v0.116](https://github.com/Hi-Windom/winsay/issues/406)
19. [表头样式调整 · Issue #411 · v0.118](https://github.com/Hi-Windom/winsay/issues/411)
20. [集市详情页头图以粘性布局呈现 · Issue #423 · v0.126](https://github.com/Hi-Windom/winsay/issues/423)
21. [取消强制两端对齐 · Issue #426 · v0.126](https://github.com/Hi-Windom/winsay/issues/426)
22. [改善移动端体验 · Issue #428 · v0.128](https://github.com/Hi-Windom/winsay/issues/428)
23. [完善【文中红】形态样式 · Issue #429 · v0.128](https://github.com/Hi-Windom/winsay/issues/429)
24. [停止支援思源 2.4.5 及更早版本 · Issue #432 · v0.130](https://github.com/Hi-Windom/winsay/issues/432)
25. [优化安卓端主题设置界面逻辑 · Issue #431 · v0.130](https://github.com/Hi-Windom/winsay/issues/431)
26. [处理用户输入为有效值 · Issue #433 · v0.130](https://github.com/Hi-Windom/winsay/issues/433)
27. [为暗黑模式弹出菜单专门设计的阴影样式 · Issue #435 · v0.132](https://github.com/Hi-Windom/winsay/issues/435)
28. [优化集市详情页头图的撑满显示效果 · Issue #439 · v0.134](https://github.com/Hi-Windom/winsay/issues/439)
29. [在主题设置面板显示当前版本号 · Issue #438 · v0.134](https://github.com/Hi-Windom/winsay/issues/438)

缺陷修复：

1. [云端同步目录弹窗目录项聚焦时撑开容器 · Issue #365 · v0.108](https://github.com/Hi-Windom/winsay/issues/365)
2. [明亮暗黑模式切换不完整 · Issue #384 · v0.110](https://github.com/Hi-Windom/winsay/issues/384)
3. [Mac 端左侧异常留白 · Issue #385 · v0.110](https://github.com/Hi-Windom/winsay/issues/385)
4. [引用块预览浮窗抖动 · Issue #310 · v0.110](https://github.com/Hi-Windom/winsay/issues/310)
5. [顶栏icon大小异常 · Issue #379 · v0.110](https://github.com/Hi-Windom/winsay/issues/379)
6. [集市容器异常 · Issue #391 · v0.112](https://github.com/Hi-Windom/winsay/issues/391)
7. [面板背景磨砂效果丢失 · Issue #404 · v0.116](https://github.com/Hi-Windom/winsay/issues/404)
8. [开启自定义主题后样式异常 · Issue #272 · v0.118](https://github.com/Hi-Windom/winsay/issues/272)
9. [Android Pad 端水平页签栏只读控件区显示异常 · Issue #360 · v0.122](https://github.com/Hi-Windom/winsay/issues/360)
10. [#310 问题未完全解决 · Issue #424 · v0.126](https://github.com/Hi-Windom/winsay/issues/424)

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
