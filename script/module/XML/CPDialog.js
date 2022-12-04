export {CP};
var CP = `
<div class="SCC-wrapper"></div><div class="b3-dialog--open"><div class="SCC-dialog b3-dialog"><div class="b3-dialog__scrim"></div><div class="b3-dialog__container"><div style="height:auto"><div class="fn__flex-column" style="border-radius: 4px;overflow: hidden;position: relative"><div class="fn__flex-1 fn__flex sc-custom-container-p"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-editor" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-appearance" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-assets" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-export" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-search" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-system" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-custom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-extension" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-filetree" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-eHiWindom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-about" type="radio" name="nav"><ul class="b3-tab-bar b3-list b3-list--background sc-custom-nav"><li data-name="editor" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-editor"><svg class="b3-list-item__graphic"><use xlink:href="#iconEdit"></use></svg><span>编辑器</span></label></li><li data-name="appearance" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-appearance"><svg class="b3-list-item__graphic"><use xlink:href="#iconTheme"></use></svg><span>外观</span></label></li><li data-name="assets" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-assets"><svg class="b3-list-item__graphic"><use xlink:href="#iconImage"></use></svg><span>资源</span></label></li><li data-name="export" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-export"><svg class="b3-list-item__graphic"><use xlink:href="#iconUpload"></use></svg><span>导出</span></label></li><li data-name="search" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-search"><svg class="b3-list-item__graphic"><use xlink:href="#iconSearch"></use></svg><span>搜索</span></label></li><li data-name="system" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-system"><svg class="b3-list-item__graphic"><use xlink:href="#iconKeymap"></use></svg><span>系统</span></label></li><li data-name="custom" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-custom"><svg class="b3-list-item__graphic"><use xlink:href="#iconAccount"></use></svg><span>个性化</span></label></li><li data-name="extension" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-extension"><svg class="b3-list-item__graphic"><use xlink:href="#iconBazaar"></use></svg><span>扩展</span></label></li><li data-name="filetree" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-filetree"><svg class="b3-list-item__graphic"><use xlink:href="#iconFiles"></use></svg><span>文档树</span></label></li><li data-name="eHiWindom" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-eHiWindom"><svg class="b3-list-item__graphic"><use xlink:href="#iconCloud"></use></svg><span>海文东互联</span></label></li><li data-name="about" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-about"><svg class="b3-list-item__graphic"><use xlink:href="#iconInfo"></use></svg><span>关于</span></label></li></ul><div id="sc-custom-container-placehold" class="sc-tab-container"><div class="sc-custom-placeholder">Sofill- v0 CP</div></div><div id="sc-custom-container-editor" class="sc-tab-container" data-name="editor"><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">行距自适应 <div class="b3-label__text">注意：开启后隐藏一些选项。</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive" type="checkbox" checked></label><div class="SC_cp_BP SC_ableC__Android_mobile" id="BP__SC_winsay_cp_editor__LH_Adaptive"><label class="fn__flex b3-label"><div class="fn__flex-1">段首缩进 <div class="b3-label__text">仅影响顶级的段落，单位：rem，范围（-2，12）</div></div><span class="fn__space"></span><input class="b3-text-field fn__flex-center fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__pIndent" type="number" min="-2" max="12" value="0"></label><label class="fn__flex b3-label"><div class="fn__flex-1">行高 <div class="b3-label__text">仅影响顶级的段落，单位：100%，范围（1.1，3）</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="1.5" id="SC_winsay_cp_editor__LH_Adaptive__LH__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__LH" max="3" min="1.1" step="0.01" type="range" value="1.5"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">段前段后间距 <div class="b3-label__text">仅影响顶级的段落，前后分别为段前间距和段后间距，单位：1/100pt，范围（10,500）</div></div><span class="fn__space"></span><input class="b3-text-field fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive__marginTop" style="width: 96px" type="number" step="1" min="10" max="500"><span class="fn__space"></span><input class="b3-text-field fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive__marginBottom" style="width: 96px" type="number" step="1" min="10" max="500"></label><label class="fn__flex b3-label"><div class="fn__flex-1">字符间距 <div class="b3-label__text">仅影响顶级的段落，单位：px，范围（-0.1,0.58）</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="0" id="SC_winsay_cp_editor__LH_Adaptive__lSpacing__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__lSpacing" max="0.58" min="-0.1" step="0.01" type="range" value="0"></div></label></div><label class="fn__flex b3-label"><div class="fn__flex-1">大型文档结尾提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">在文档名下方显示创建日期 <div class="b3-label__text">关闭后需重载生效</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__showDocCreatedDate" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">列表视图转换功能 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><div class="b3-label SC_ableC__Android_mobile">状态提示增强 <div class="b3-label__text">包括各种块的聚焦阴影、标题动画、行内代码聚焦彩蛋、引用聚焦波浪线、只读模式聚焦阴影等，不涉及编辑器外的页签聚焦、文档树聚焦等</div><div class="config-query-3cols"><label class="fn__flex"><div class="fn__flex-1 b3-label__text">各种块的悬停阴影 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_BlockHoverShadow" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">标题悬停彩蛋 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_NodeHeading" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">行内代码焦点彩蛋 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_inlineCode" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">引用悬停波浪线 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_refWave" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">只读模式悬停阴影 </div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_docReadOnly" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">搜索框焦点阴影 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_SearchInputShadow" type="checkbox"></label></div></div><label class="fn__flex b3-label"><div class="fn__flex-1">标题折叠阴影 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__NodeHeadingFoldedShadow" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">任何时候都不隐藏面包屑 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__ShowBreadcrumbAnytime" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">块滚动条模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockScrollBar-opacity" class="b3-select fn__flex-center fn__size200"><option value="0.58">常显</option><option value="0.88">聚焦显示</option><option value="0">完全隐藏</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">块滚动条位置 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockScrollBar_Hposition" class="b3-select fn__flex-center fn__size200"><option value="R13">右侧贴边</option><option value="R31">右侧离岸</option><option value="L13">左侧贴边</option><option value="L31">左侧离岸</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">HintHint 面板标号 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__HintHint-index" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">HintHint 面板限高 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__HintHintMaxHeight" class="b3-select fn__flex-center fn__size200"><option value="402px">默认</option><option value="min(88vh, 888px)">推荐</option><option value="min(58vh, 580px)">略高</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">HintHint 面板限宽 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__HintHintMaxWidth" class="b3-select fn__flex-center fn__size200"><option value="min-content">默认</option><option value="min(88%,58em)">推荐</option><option value="min(77%,31em)">略宽</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档宽度模式 <div class="b3-label__text">满足不同尺寸屏幕需要</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__DocWidthMode" class="b3-select fn__flex-center fn__size200"><option value="null">默认</option><option value="16px 31px 0px 31px">全宽</option><option value="16px 3.1cqw 0px">超宽</option><option value="16px 5.8cqw 2rem">很宽</option><option value="16px 8cqw 2rem">中宽</option><option value="16px 13cqw 2rem 10cqw">较窄</option><option value="16px 18.6cqw 2rem 14cqw">很窄</option><option value="16px 25cqw 2rem 22cq">超窄</option><option value="16px 31cqw 2rem 31cqw">极窄</option><option value="1in 0.5in">A4 default（固定宽度）</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档背景色 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__Doc_bgColor" class="b3-select fn__flex-center fn__size200"><option value="transparent">沉鱼落雁</option><option value="#fefef158">闭月羞花</option><option value="#fff">绝尘纯白</option><option value="#fefefa">商务纸白</option><option value="rgb(242 234 217 / 58%)">异域传说</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">引用锚文本样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__Block-Inline-link__block-ref-content" class="b3-select fn__flex-center fn__size200"><option value="">无样式</option><option value="⁅⁅ ⁆⁆">绛亽标准</option><option value="[[ ]]">经典通用</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">同步引用锚文本样式至思源导出配置 <div class="b3-label__text">影响导出效果，请注意：同步期间不要进行操作</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_editor__Block-Inline-link__block-ref-content_AsyncToSY">同步 </button></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">任务列表已完成项文字颜色 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__Block-List-Task__item-done__text-color" class="b3-select fn__flex-center fn__size200"><option value="default">默认</option><option value="auto">自动</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">题头图粘性布局 <div class="b3-label__text">开启后文章背景会呈现磨砂效果，具体表现因不同图片和形态而异，文档标题将不受文档宽度模式影响</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__AreoBg-Filter" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">列表缩进自适应模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__ListAutoIndent_mode" class="b3-select fn__flex-center fn__size200"><option value="">禁用</option><option value="1">适应容器</option><option value="2">适应字号</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">列表辅助线聚焦点亮模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__Block-List-LightUpLineMode" class="b3-select fn__flex-center fn__size200"><option value="1">分体式</option><option value="2">总控式</option><option value="3">常亮式</option><option value="4">寻龙式</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">面包屑自适应 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__BreadcrumbsMode-Adaptive" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">图片底色增强模式 <div class="b3-label__text">针对透明图层设计</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__img-bg-color" class="b3-select fn__flex-center fn__size200"><option value="transparent">无底色</option><option value="#fff">纯白</option><option value="#000">纯黑</option><option value="var(--SCC-CNTC-茶白)">茶白</option><option value="var(--SCC-SGTC-6B)">SGTC-6B</option><option value="var(--SCC-SGTC-9B)">SGTC-9B</option><option value="var(--SCC-SGTC-30B)">SGTC-30B</option><option value="var(--b3-theme-surface-lighter)">跟随主题形态（淡雅）</option><option value="var(--b3-theme-primary-light)">跟随主题形态（靓丽）</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">图片底色增强模式常显 <div class="b3-label__text">关闭后需要鼠标聚焦才生效</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__img-bg-color_always" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">表格块最小宽度 <div class="b3-label__text">对处于滚屏态的表格无效</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockTable_MinWidth" class="b3-select fn__flex-center fn__size200"><option value="unset">不限制</option><option value="58%">58%</option><option value="88%">88%</option><option value="100%">100%</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">表格块最大宽度 <div class="b3-label__text">对处于滚屏态的表格无效</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockTable_MaxWidth" class="b3-select fn__flex-center fn__size200"><option value="unset">不限制</option><option value="88%">88%</option><option value="100%">100%</option><option value="186%">186%</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">表格文字大小 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockTable_FontSize" class="b3-select fn__flex-center fn__size200"><option value="unset">超大</option><option value="92%">大</option><option value="88%">中</option><option value="82%">小</option><option value="72%">超小</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">表格文字对齐 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__BlockTable_TextAlign" class="b3-select fn__flex-center fn__size200"><option value="left">左侧对齐</option><option value="right">右侧对齐</option><option value="center">居中对齐</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">表格居中显示 <div class="b3-label__text">对处于滚屏态的表格无效</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__BlockTable_Margin" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">引用弹出层钉住辅助感知 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__block__popover--open__PinSense" class="b3-select fn__flex-center fn__size200"><option value="">关闭</option><option value="1">弱水之隔</option><option value="2">光怪陆离</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档选区工具条位置 <div class="b3-label__text">注意：非默认选项会造成一些副作用</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__layout-center_protyle-toolbar_position" class="b3-select fn__flex-center fn__size200"><option value="">默认</option><option value="layout-center__protyle-toolbar-GOTOTOP.css">置顶</option><option value="layout-center__protyle-toolbar-GOTOBOTTOM.css">置底</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档属性缩放 <div class="b3-label__text">只会影响文档内右上角的属性显示</div></div><span class="fn__space"></span><select id="SC_winsay_cp_editor__protyle-attr-scale" class="b3-select fn__flex-center fn__size200"><option value="1">默认</option><option value="0">隐藏</option><option value="1.31">大</option><option value="2">特大</option></select></label></div><div id="sc-custom-container-appearance" class="sc-tab-container" data-name="appearance"><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏自动隐藏 <div class="b3-label__text">仅Windows端有效</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏高度 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__ToolBarMode__height" class="b3-select fn__flex-center fn__size200"><option value="26px">低</option><option value="31px">中</option><option value="37px">高</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏失去焦点时的背景颜色 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor" class="b3-select fn__flex-center fn__size200"><option value="var(--b3-theme-surface-lighter)">默认</option><option value="var(--b3-theme-background-light)">透明</option><option value="var(--SCC-primary-lightest)">经典</option></select></label><div class="b3-label">配置非聚焦时隐藏的顶栏元素 <div class="config-query-2cols"><label class="fn__flex"><div class="fn__flex-1 b3-label__text">文档名 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__docName" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">VIP功能图标 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__VIP" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">窗口三大控件 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__windowX" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">其他顶栏图标 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__Other" type="checkbox"></label></div></div><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏清爽模式 <div class="b3-label__text">将部分顶栏元素收纳至抽屉</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__CoolToolBar" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">dock栏底色增强显示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__DockBgColorFilter" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">显示网页链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ShowWebIcon" type="checkbox" checked></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">显示资源链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ShowFileIcon" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">WND页签栏布局模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__TabBarMode" class="b3-select fn__flex-center fn__size200"><option value="MI-TabBar-D.css">默认</option><option value="MI-TabBar-V.css">垂直</option><option value="MI-TabBar-H.css">水平</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">WND垂直页签栏自动收起 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__TabBarV_AutoFolded" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">WND页签风格 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__TabBarStyleFeel" class="b3-select fn__flex-center fn__size200"><option value="1">扁平简洁风</option><option value="2">拟物素雅风</option><option value="3">拟物鲜明风</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">WND页签文字晕染 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__TabBar_item__textShadow" class="b3-select fn__flex-center fn__size200"><option value="1">无晕染</option><option value="2">镶金</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">通用页签大小 <div class="b3-label__text">不同页签栏模式表现效果不同</div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__TabBarSize" class="b3-select fn__flex-center fn__size200"><option value="10">小杯</option><option value="12">中杯</option><option value="13">大杯</option><option value="14">超大杯</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">标题编号模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option><option value=""></option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">底部状态栏提示消息显示模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__status_msg_opacity" class="b3-select fn__flex-center fn__size200"><option value="0.9">默认</option><option value="0.31">淡化</option><option value="0">隐藏</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">反链面板边界强化 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__strengthen_backlinkList_panel_border" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">侧边栏容器背景增强 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__strengthen_layout-tab-container" type="checkbox"></label></div><div id="sc-custom-container-assets" class="sc-tab-container" data-name="assets"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-export" class="sc-tab-container" data-name="export"><label class="fn__flex b3-label SC_disableC__Android_desktop"><div class="fn__flex-1 fn__flex-center">导出配置数据 <div class="b3-label__text">将 <code class="fn__code">localStorage</code>中的所有主题配置数据以 json 文件方式导出</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC__exportData"><svg><use xlink:href="#iconUpload"></use></svg>导出</button><a href="#" id="SC__exportData_a"></a></label><div class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1 fn__flex-center">导入配置数据 <div class="b3-label__text">将导出的 json 文件数据导入，覆盖 <code class="fn__code">localStorage</code>已有主题配置数据 </div></div><span class="fn__space"></span><button id="SC__importData" class="b3-button b3-button--outline fn__flex-center fn__size200" style="position: relative"><input id="SC__importData_i" class="b3-form__upload" type="file"><svg><use xlink:href="#iconDownload"></use></svg>导入 </button></div><div class="b3-label SC_disableC__Android_desktop">导出配置附加项 <div class="b3-label__text">目前还不支持导入 </div><div class="config-query-2cols"><label class="fn__flex"><div class="fn__flex-1 b3-label__text">思源编辑器配置 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp__exportData__EXT_sy_editor" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">思源快捷键配置 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp__exportData__EXT_sy_keymap" type="checkbox"></label></div></div></div><div id="sc-custom-container-search" class="sc-tab-container" data-name="search"><label class="fn__flex b3-label"><div class="fn__flex-1">搜索面板标号 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_search__index" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">结果列表展示模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_search__layout" class="b3-select fn__flex-center fn__size200"><option value="layout-Auto.css">智能布局模式</option><option value="layout-LR1.css">左右紧凑布局</option><option value="layout-LR2.css">左右双行布局</option><option value="layout-TB1.css">上下紧凑布局</option><option value="layout-TB2.css">上下双行布局</option></select></label></div><div id="sc-custom-container-system" class="sc-tab-container" data-name="system"><label class="b3-label fn__flex SC_ableC__Android_mobile"><div class="fn__flex-1">清理主题本地存储空间数据 <div class="b3-label__text">删除主题并不会释放主题存放在 localStorage 的数据</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_system__ClearlocalStorage"><svg><use xlink:href="#iconClose"></use></svg>清空 </button></label><label class="b3-label fn__flex SC_ableC__Android_mobile"><div class="fn__flex-1">重置所有个性化配置 <div class="b3-label__text">所有自定义配置都会恢复到缺省值</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_system__ResetAllSettings"><svg><use xlink:href="#iconUndo"></use></svg>重置 </button></label><label class="b3-label fn__flex SC_ableC__Android_mobile"><div class="fn__flex-1">刷新页面 <div class="b3-label__text">平平无奇的圆圆圈圈</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_system__Refresh"><svg><use xlink:href="#iconRefresh"></use></svg>刷新 </button></label><label class="b3-label fn__flex SC_ableC__Android_mobile"><div class="fn__flex-1">调试信息 <div class="b3-label__text">🚧🚧🚧🚧🚧🚧</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_system__ShowDebugInfo"><svg><use xlink:href="#iconFormat"></use></svg>显示 </button></label><label class="fn__flex b3-label"><div class="fn__flex-1">主题自我保护 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_system__SelfProtection" type="checkbox"></label></div><div id="sc-custom-container-custom" class="sc-tab-container" data-name="custom"><label class="fn__flex b3-label"><div class="fn__flex-1">夜间护眼提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">明亮模式全局滤镜 <div class="b3-label__text">不需要的时候别忘了关闭喔</div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__root_filter_light" class="b3-select fn__flex-center fn__size200"><option value="none">无</option><option value="1">真彩显示</option><option value="2">鲜艳模式</option><option value="3">黑白显示</option><option value="4">夜间模式</option><option value="5">反色显示</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">暗黑模式全局滤镜 <div class="b3-label__text">不需要的时候别忘了关闭喔</div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__root_filter_dark" class="b3-select fn__flex-center fn__size200"><option value="none">无</option><option value="1">真彩显示</option><option value="2">鲜艳模式</option><option value="3">黑白显示</option><option value="4">夜间模式</option><option value="5">反色显示</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">定时开启滤镜 <div class="b3-label__text">自动识别明暗模式</div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">性能模式 <div class="b3-label__text">减少动效以提升性能</div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">突破思源最大页签打开数限制 <div class="b3-label__text">注意：仅用于临时需求，重载后会关闭额外打开的页签</div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__EXTmaxOpenTabCount" class="b3-select fn__flex-center fn__size200"><option value="">关闭</option><option value="58">扩容至58</option><option value="82">扩容至82</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">导出PDF形态 <div class="b3-label__text">只影响导出PDF效果，如果不生效可尝试重新加载</div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__defaultS" class="b3-select fn__flex-center fn__size200"><option value="">跟随当前模式形态</option><option value="preview.css">绝绝紫</option><option value="preview-L-Blue.css">纯洁蓝</option><option value="preview-L-Red.css">文中红</option><option value="preview-L-Pink.css">砰砰粉</option><option value="preview-L-Green.css">青葱绿</option><option value="preview-L-Yellow.css">智慧金</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">主题明亮模式形态 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__LS" class="b3-select fn__flex-center fn__size200"><option value="root.css">绝绝紫</option><option value="root-L-Blue.css">纯洁蓝</option><option value="root-L-Red.css">文中红</option><option value="root-L-Pink.css">砰砰粉</option><option value="root-L-Green.css">青葱绿</option><option value="root-L-Yellow.css">智慧金</option></select></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">主题暗黑模式形态 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_custom__DS" class="b3-select fn__flex-center fn__size200"><option value="root-D-BlackGoldBlue.css">黑金蓝</option><option value="root-D-InkGreenPurple.css">墨绿紫</option></select></label></div><div id="sc-custom-container-extension" class="sc-tab-container" data-name="extension"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-filetree" class="sc-tab-container" data-name="filetree"><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">文档树自适应显示 <div class="b3-label__text">笔记本间距自适应+字号自适应+多层级自适应。注意：开启后隐藏一些选项。</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__Adaptive_display" type="checkbox" checked></label><div class="SC_cp_BP SC_ableC__Android_mobile" id="BP__SC_winsay_cp_filetree__Adaptive_display"><label class="fn__flex b3-label"><div class="fn__flex-1">笔记本名字号 <div class="b3-label__text">单位 pt</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="10" id="SC_winsay_cp_filetree__nbFontsize__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__nbFontsize" max="16" min="10" step="0.2" type="range" value="10"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档名字号 <div class="b3-label__text">单位 pt</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="9" id="SC_winsay_cp_filetree__docFontsize__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__docFontsize" max="13" min="8.5" step="0.1" type="range" value="9"></div></label><label class="fn__flex b3-label SC_unableC__Android_mobile"><div class="fn__flex-1">笔记本间距 <div class="b3-label__text">单位 em</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="0" id="SC_winsay_cp_filetree__nbMargin__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__nbMargin" max="1" min="0" step="0.02" type="range" value="0"></div></label></div><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">隐藏 Untitle 文档名 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__Hide_untitle" type="checkbox" checked></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">隐藏 【更多】 控件 <div class="b3-label__text">仍可通过鼠标右键呼出更多菜单</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__Hide_item_action_more" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">禁用文档树修改图标 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__ChangeIconAvailability" type="checkbox"></label><label class="fn__flex b3-label SC_ableC__Android_mobile"><div class="fn__flex-1">禁用文档树笔记本名和文档名染色 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__DyeingNameAvailability" type="checkbox"></label></div><div id="sc-custom-container-eHiWindom" class="sc-tab-container" data-name="eHiWindom"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-about" class="sc-tab-container" data-name="about"><div class="b3-label"><div class="fn__hr"></div>2022.10.14-现在 • Hi-Windom（海文东） <div class="fn__hr"></div><div class="fn__hr"></div><div class="ft__on-surface">Sofill 系列主题的核心开发者是 <a href="https://ld246.com/member/soltus" target="_blank">Soltus</a></div></div><div style="width:100%;"><img id="sofill_preview" src="/appearance/themes/Sofill-/preview.png" style="width:min(26%,580px)"></div><label class="fn__flex b3-label"><div class="fn__flex-1" id="SC_winsay_cp_version"></div><div class="fn__space"></div><div class="fn__flex-center fn__size200"><button id="SC_winsay_cp__checkUpdateBtn" class="b3-button b3-button--outline fn__size200"><svg><use xlink:href="#iconRefresh"></use></svg>检查更新 </button></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">自检源 <div class="b3-label__text">Github 源可获取最新版本</div></div><span class="fn__space"></span><select id="SC_winsay_cp_search__about_checkAPI" class="b3-select fn__flex-center fn__size200"><option value="Bazaar">思源集市</option><option value="Github">Github</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">自动检查更新 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_search__about_checkTime" class="b3-select fn__flex-center fn__size200"><option value="">禁用</option><option value="Once">启动时检查</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">自动检查更新静默模式 <div class="b3-label__text">无可用更新时免通知打扰</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_search__about_AutoCheckSilently" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">检查更新范围 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">仅自检</option><option value="Once">自检+已安装挂件</option><option value="Interval">已安装主题</option></select></label></div></div></div></div></div></div></div>
`