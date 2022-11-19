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

* [X] 部分文档资源链接显示icon
* [ ] 持续扩大跟随主题形态的样式范围
* [X] 支持通过主题设置界面修改文档宽度模式
* [ ] 持续完善主题设置面板

### 中期计划⛳

* [ ] S2形态组明亮模式计划增加太空银，新增S3形态组
* [ ] 右侧面板悬浮
* [ ] Ctrl + 鼠标滚轮缩放显示效果优化
* [ ] [提供接口 · Issue #425](https://github.com/Hi-Windom/winsay/issues/425)
* [ ] 支持导入导出主题设置数据

~~每日更新之我不是肝帝~~

**作者被期末缠上了，最近的版本更新会很水，希望大家谅解**

---

## ✨ 部分文件链接显示 icon，支持通过主题设置界面配置是否显示链接 icon ，支持初始化主题设置

> 版本更新详细内容请下滑至【集市更新版本日志】部分查看

### 你可能错过的重要更新

块滚动条模式和位置、文档宽度模式在主题设置界面现已可用

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

### v0.136 ~ v0.142 聚合说明

> 2022-11-19 released

<p><a href="https://github.com/Hi-Windom/winsay/issues/399">
<img src="https://img.shields.io/badge/SiYuan-2.5.0-green"/></a>
<a href="https://github.com/Hi-Windom/winsay/issues/409">
<img src="https://img.shields.io/badge/%E4%B8%8D%E5%85%BC%E5%AE%B9-2.4.5---red"/></a>
<img src="https://img.shields.io/badge/-%E6%9E%84%E5%BB%BA-yellow"/></p></p>

引入特性：

1. [支持通过主题设置界面修改文档宽度模式 · Issue #363 · v0.136](https://github.com/Hi-Windom/winsay/issues/363)
2. [支持通过主题设置配置块滚动条模式和位置 · Issue #444 · v0.136](https://github.com/Hi-Windom/winsay/issues/444)
3. [部分文件链接显示icon · Issue #250 · v0.140](https://github.com/Hi-Windom/winsay/issues/250)
4. [支持通过主题设置界面配置是否显示链接icon · Issue #456 · v0.142](https://github.com/Hi-Windom/winsay/issues/456)
5. [支持初始化主题设置 · Issue #457 · v0.142](https://github.com/Hi-Windom/winsay/issues/457)

改进优化：

1. [移除主题设置面板无效项 · Issue #448 · 0.138](https://github.com/Hi-Windom/winsay/issues/448)
2. [行内页签样式调整 · Issue #449 · 0.138](https://github.com/Hi-Windom/winsay/issues/449)
3. [细节优化 · Issue #451 · v0.138](https://github.com/Hi-Windom/winsay/issues/451)

缺陷修复：

1. [修改文档宽度模式时文档题目未生效 · Issue #453 · v0.140](https://github.com/Hi-Windom/winsay/issues/453)

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

### 资源

字体：（排名不分先后）

* [得意黑 Smiley Sans：一款在人文观感和几何特征中寻找平衡的中文黑体](https://github.com/atelier-anchor/smiley-sans)

图片：（排名不分先后）

* [icon-icons.com](https://icon-icons.com/zh/)
* [iconfont](https://www.iconfont.cn/)

## 💎 特别鸣谢

* [OriginOS](https://www.vivo.com.cn/originos)
* [搜狗输入法手机版](https://shouji.sogou.com/?r=ime)

---

<p style="text-align:center">- The End -</p>
