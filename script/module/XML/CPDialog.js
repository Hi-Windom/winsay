export {CP};
var CP = `
<div class="SCC-wrapper"></div><div class="b3-dialog--open"><div class="SCC-dialog b3-dialog"><div class="b3-dialog__scrim"></div><div class="b3-dialog__container" style="min-width: max(58vw,580px);"><div style="height:auto"><div class="fn__flex-column" style="border-radius: 4px;overflow: hidden;position: relative"><div class="fn__flex-1 fn__flex sc-custom-container-p"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-editor" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-appearance" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-assets" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-export" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-search" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-system" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-custom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-extension" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-filetree" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-eHiWindom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-about" type="radio" name="nav"><ul class="b3-tab-bar b3-list b3-list--background sc-custom-nav" style="user-select:none;width: 180px;height:572px;overflow: auto;padding: 8px 0;box-sizing: border-box"><li data-name="editor" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-editor"><svg class="b3-list-item__graphic"><use xlink:href="#iconEdit"></use></svg>编辑器</label></li><li data-name="appearance" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-appearance"><svg class="b3-list-item__graphic"><use xlink:href="#iconTheme"></use></svg>外观</label></li><li data-name="assets" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-assets"><svg class="b3-list-item__graphic"><use xlink:href="#iconImage"></use></svg>资源</label></li><li data-name="export" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-export"><svg class="b3-list-item__graphic"><use xlink:href="#iconUpload"></use></svg>导出</label></li><li data-name="search" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-search"><svg class="b3-list-item__graphic"><use xlink:href="#iconSearch"></use></svg>搜索</label></li><li data-name="system" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-system"><svg class="b3-list-item__graphic"><use xlink:href="#iconKeymap"></use></svg>系统</label></li><li data-name="custom" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-custom"><svg class="b3-list-item__graphic"><use xlink:href="#iconAccount"></use></svg>个性化</label></li><li data-name="extension" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-extension"><svg class="b3-list-item__graphic"><use xlink:href="#iconBazaar"></use></svg>扩展</label></li><li data-name="filetree" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-filetree"><svg class="b3-list-item__graphic"><use xlink:href="#iconFiles"></use></svg>文档树</label></li><li data-name="eHiWindom" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-eHiWindom"><svg class="b3-list-item__graphic"><use xlink:href="#iconCloud"></use></svg>海文东互联</label></li><li data-name="about" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-about"><svg class="b3-list-item__graphic"><use xlink:href="#iconInfo"></use></svg>关于</label></li></ul><div id="sc-custom-container-placehold" class="b3-tab-container" style="height:572px"><div class="sc-custom-placeholder">Sofill- v0 CP</div></div><div id="sc-custom-container-editor" class="b3-tab-container" style="height:572px" data-name="editor"><label class="fn__flex b3-label"><div class="fn__flex-1">行距自适应 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">段首缩进 <div class="b3-label__text">仅影响顶级的段落，单位：rem，范围（-5，20）</div></div><span class="fn__space"></span><input class="b3-text-field fn__flex-center fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__pIndent" type="number" min="-5" max="20" value="0"></label><label class="fn__flex b3-label"><div class="fn__flex-1">行高 <div class="b3-label__text">仅影响顶级的段落，单位：100%，范围（1.1，3）</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="1.5" id="SC_winsay_cp_editor__LH_Adaptive__LH__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__LH" max="3" min="1.1" step="0.01" type="range" value="1.5"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">段前段后间距 <div class="b3-label__text">仅影响顶级的段落，前后分别为段前间距和段后间距，单位：1/100pt，范围（100,500）</div></div><span class="fn__space"></span><input class="b3-text-field fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive__marginTop" style="width: 96px" type="number" step="1" min="100" max="500"><span class="fn__space"></span><input class="b3-text-field fn__flex-center" id="SC_winsay_cp_editor__LH_Adaptive__marginBottom" style="width: 96px" type="number" step="1" min="100" max="500"></label><label class="fn__flex b3-label"><div class="fn__flex-1">字符间距 <div class="b3-label__text">仅影响顶级的段落，单位：px，范围（-1,1）</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="0" id="SC_winsay_cp_editor__LH_Adaptive__lSpacing__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_editor__LH_Adaptive__lSpacing" max="1" min="-1" step="0.01" type="range" value="0"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">大型文档结尾提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">在文档名下方显示创建日期 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">列表视图转换功能 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">插入引用面板排序 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><div class="b3-label">聚焦提示增强 <div class="config-query-3cols"><label class="fn__flex"><div class="fn__flex-1 b3-label__text">各种块的聚焦阴影 </div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">标题动画 </div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">行内代码聚焦彩蛋 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_editor__FocusEnhanc_inlineCode" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">引用聚焦波浪线 </div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">只读模式聚焦阴影 </div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label></div></div><label class="fn__flex b3-label"><div class="fn__flex-1">标题折叠样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">块滚动条模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">常显</option><option value="">聚焦显示</option><option value="">完全隐藏</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档宽度模式 <div class="b3-label__text">需在软件设置里关闭自适应宽度</div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">默认</option><option value="">A4</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">引用锚文本样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">行内标签样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">题头图粘性布局 <div class="b3-label__text">开启后文章背景会呈现磨砂效果，具体表现因不同图片和形态而异</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__AreoBg-Filter" type="checkbox"></label></div><div id="sc-custom-container-appearance" class="b3-tab-container" style="height:572px" data-name="appearance"><label class="fn__flex b3-label"><div class="fn__flex-1">有序列表模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">面包屑模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏自动隐藏 <div class="b3-label__text">仅Windows端有效</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏高度 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__ToolBarMode__height" class="b3-select fn__flex-center fn__size200"><option value="26px">低</option><option value="31px">中</option><option value="37px">高</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏失去焦点时的背景颜色 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor" class="b3-select fn__flex-center fn__size200"><option value="var(--SCC-primary-lightest)">默认</option><option value="var(--b3-theme-background-light)">透明</option></select></label><div class="b3-label">配置非聚焦时隐藏的顶栏元素 <div class="config-query-2cols"><label class="fn__flex"><div class="fn__flex-1 b3-label__text">文档名 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__docName" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">VIP功能图标 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__VIP" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">窗口三大控件 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__windowX" type="checkbox"></label><label class="fn__flex"><div class="fn__flex-1 b3-label__text">其他顶栏图标 </div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__ToolBarMode__HideList__Other" type="checkbox"></label></div></div><label class="fn__flex b3-label"><div class="fn__flex-1">dock栏底色增强显示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_appearance__DockBgColorFilter" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">显示网页链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">显示资源链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">页签栏布局模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="SC_winsay_cp_appearance__TabBarMode" class="b3-select fn__flex-center fn__size200"><option value="sweet/MI-TabBar-D.css">默认</option><option value="sweet/MI-TabBar-V.css">垂直</option><option value="sweet/MI-TabBar-H.css">水平</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">页签大小 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">小</option><option value="">中</option><option value="">大</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">标题编号模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option><option value=""></option></select></label></div><div id="sc-custom-container-assets" class="b3-tab-container" style="height:572px" data-name="assets"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-export" class="b3-tab-container" style="height:572px" data-name="export"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-search" class="b3-tab-container" style="height:572px" data-name="search"><label class="fn__flex b3-label"><div class="fn__flex-1">搜索面板排序 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">允许宽度足够时左右布局 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">结果列表展示模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">左右紧凑展示</option><option value="">左右双行展示</option><option value="">上下紧凑展示</option></select></label></div><div id="sc-custom-container-system" class="b3-tab-container" style="height:572px" data-name="system"><label class="b3-label fn__flex"><div class="fn__flex-1">清理主题本地存储空间数据 <div class="b3-label__text">删除主题并不会释放主题存放在 localStorage 的数据</div></div><span class="fn__space"></span><button class="b3-button b3-button--outline fn__flex-center fn__size200" id="SC_winsay_cp_system__ClearlocalStorage"><svg><use xlink:href="#iconClose"></use></svg>重置 </button></label></div><div id="sc-custom-container-custom" class="b3-tab-container" style="height:572px" data-name="custom"><label class="fn__flex b3-label"><div class="fn__flex-1">夜间护眼提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">夜间模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">定时开启夜间模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">性能模式 <div class="b3-label__text">关闭动效以提升性能</div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label></div><div id="sc-custom-container-extension" class="b3-tab-container" style="height:572px" data-name="extension"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-filetree" class="b3-tab-container" style="height:572px" data-name="filetree"><label class="fn__flex b3-label"><div class="fn__flex-1">文档树自适应显示 <div class="b3-label__text">笔记本间距自适应+字号自适应+多层级自适应</div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__Adaptive_display" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">笔记本名字号 <div class="b3-label__text">单位 pt</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="10" id="SC_winsay_cp_filetree__nbFontsize__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__nbFontsize" max="16" min="10" step="0.2" type="range" value="10"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档名字号 <div class="b3-label__text">单位 pt</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="9" id="SC_winsay_cp_filetree__docFontsize__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__docFontsize" max="13" min="8.5" step="0.1" type="range" value="9"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">笔记本间距 <div class="b3-label__text">单位 em</div></div><span class="fn__space"></span><div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="0" id="SC_winsay_cp_filetree__nbMargin__label"><input class="b3-slider fn__size200" id="SC_winsay_cp_filetree__nbMargin" max="1" min="0" step="0.02" type="range" value="0"></div></label><label class="fn__flex b3-label"><div class="fn__flex-1">隐藏 Untitle 文档名 <div class="b3-label__text"></div></div><span class="fn__space"></span><input class="b3-switch fn__flex-center" id="SC_winsay_cp_filetree__Hide_untitle" type="checkbox" checked></label></div><div id="sc-custom-container-eHiWindom" class="b3-tab-container" style="height:572px" data-name="eHiWindom"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-about" class="b3-tab-container" style="height:572px" data-name="about"><div class="sc-custom-placeholder">敬请期待</div></div></div></div></div></div></div></div>
`