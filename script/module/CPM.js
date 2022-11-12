export default class Dialog extends EventTarget {
  constructor(options) {
    super();

    // 默认配置
    let defalultOptions = {
      width: "30%",
      height: "250px",
      title: "测试标题",
      content: "测试内容",
      dragable: false, //是否可拖拽
      maskable: true, //是否有遮罩
      isCancel: false, //是否有取消
      success() {},
      cancel() {},
    };
    // 合并配置；
    //方法一：
    // this.opts = Object.assign(defalultOptions,options);
    //方法二:
    this.opts = { ...defalultOptions, ...options };
    //方法三：
    // this.opts = {
    //     width,
    //     height,
    //     title,
    //     content,
    //     dragable,
    //     maskable,
    //     isCancel,
    //     success,
    //     cancel
    // }
    // console.log(this.opts);
    this.init();
  }
  // 初始化组件方法
  init() {
    this.createElement();
    // this.addEvent("success",this.opts.success);
    this.addEventListener("success", this.opts.success);
    this.addEleEvent();
    if (!this.opts.maskable) {
      this.divEles.querySelector(".k-wrapper").style.display = "none";
    }
    if (this.opts.dragable) {
      this.drag();
    }
  }
  // 创建节点
  createElement() {
    // console.log(this.opts.width)
    let divEles = document.createElement("div");
    divEles.innerHTML = `<div class="k-wrapper"></div><div class="k-dialog b3-dialog--open"><div class="b3-dialog"><div class="b3-dialog__scrim"></div><div class="b3-dialog__container" style="width:58vw;"><div style="height:auto"><div class="fn__flex-column" style="border-radius: 4px;overflow: hidden;position: relative"><div class="fn__flex-1 fn__flex sc-custom-container-p"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-editor" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-appearance" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-assets" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-export" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-search" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-system" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-custom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-extension" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-explore" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-eHiWindom" type="radio" name="nav"><input class="sc-custom-nav-bind-class" id="sc-custom-nav-bind-id-about" type="radio" name="nav"><ul class="b3-tab-bar b3-list b3-list--background sc-custom-nav" style="user-select:none;width: 180px;height:572px;overflow: auto;padding: 8px 0;box-sizing: border-box"><li data-name="editor" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-editor"><svg class="b3-list-item__graphic"><use xlink:href="#iconEdit"></use></svg>编辑器</label></li><li data-name="appearance" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-appearance"><svg class="b3-list-item__graphic"><use xlink:href="#iconTheme"></use></svg>外观</label></li><li data-name="assets" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-assets"><svg class="b3-list-item__graphic"><use xlink:href="#iconImage"></use></svg>资源</label></li><li data-name="export" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-export"><svg class="b3-list-item__graphic"><use xlink:href="#iconUpload"></use></svg>导出</label></li><li data-name="search" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-search"><svg class="b3-list-item__graphic"><use xlink:href="#iconSearch"></use></svg>搜索</label></li><li data-name="system" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-system"><svg class="b3-list-item__graphic"><use xlink:href="#iconKeymap"></use></svg>系统</label></li><li data-name="custom" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-custom"><svg class="b3-list-item__graphic"><use xlink:href="#iconAccount"></use></svg>个性化</label></li><li data-name="extension" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-extension"><svg class="b3-list-item__graphic"><use xlink:href="#iconBazaar"></use></svg>扩展</label></li><li data-name="explore" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-explore"><svg class="b3-list-item__graphic"><use xlink:href="#iconFiles"></use></svg>探索专区</label></li><li data-name="eHiWindom" class="b3-list-item b3-list-item--big" style="display:none;"><label for="sc-custom-nav-bind-id-eHiWindom"><svg class="b3-list-item__graphic"><use xlink:href="#iconCloud"></use></svg>海文东互联</label></li><li data-name="about" class="b3-list-item b3-list-item--big"><label for="sc-custom-nav-bind-id-about"><svg class="b3-list-item__graphic"><use xlink:href="#iconInfo"></use></svg>关于</label></li></ul><div id="sc-custom-container-placehold" class="b3-tab-container" style="height:572px"><div class="sc-custom-placeholder">Sofill- v0 CP</div></div><div id="sc-custom-container-editor" class="b3-tab-container" style="height:572px" data-name="editor"><label class="fn__flex b3-label"><div class="fn__flex-1">大型文档结尾提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">在文档名下方显示创建日期 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">列表视图转换功能 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">插入引用面板排序 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">聚焦提示增强 <div class="b3-label__text">包括各种块的聚焦阴影、标题动画、行内代码聚焦彩蛋、引用聚焦波浪线等，不涉及编辑器外的页签聚焦、文档树聚焦等</div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">标题折叠样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">块滚动条模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">常显</option><option value="">聚焦显示</option><option value="">完全隐藏</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档宽度模式 <div class="b3-label__text">需在软件设置里关闭自适应宽度</div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">默认</option><option value="">A4</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">引用锚文本样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">行内标签样式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option></select></label></div><div id="sc-custom-container-appearance" class="b3-tab-container" style="height:572px" data-name="appearance"><label class="fn__flex b3-label"><div class="fn__flex-1">有序列表模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">面包屑模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">顶栏固定高度 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">显示网页链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">显示资源链接 icon <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">文档树自适应显示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">页签栏布局模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select id="winsay_cp_appearance__TabBarMode" class="b3-select fn__flex-center fn__size200"><option value="MI-TabBar.css">默认</option><option value="sweet/MI-TabBar-V.css">垂直</option><option value="sweet/MI-TabBar-H.css">水平</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">页签大小 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">小</option><option value="">中</option><option value="">大</option></select></label><label class="fn__flex b3-label"><div class="fn__flex-1">标题编号模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value=""></option><option value=""></option><option value=""></option></select></label></div><div id="sc-custom-container-assets" class="b3-tab-container" style="height:572px" data-name="assets"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-export" class="b3-tab-container" style="height:572px" data-name="export"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-search" class="b3-tab-container" style="height:572px" data-name="search"><label class="fn__flex b3-label"><div class="fn__flex-1">搜索面板排序 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">允许宽度足够时左右布局 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">结果列表展示模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><select disabled id="" class="b3-select fn__flex-center fn__size200"><option value="">左右紧凑展示</option><option value="">左右双行展示</option><option value="">上下紧凑展示</option></select></label></div><div id="sc-custom-container-system" class="b3-tab-container" style="height:572px" data-name="system"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-custom" class="b3-tab-container" style="height:572px" data-name="custom"><label class="fn__flex b3-label"><div class="fn__flex-1">夜间护眼提示 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox" checked></label><label class="fn__flex b3-label"><div class="fn__flex-1">夜间模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label><label class="fn__flex b3-label"><div class="fn__flex-1">定时开启夜间模式 <div class="b3-label__text"></div></div><span class="fn__space"></span><input disabled class="b3-switch fn__flex-center" id="" type="checkbox"></label></div><div id="sc-custom-container-extension" class="b3-tab-container" style="height:572px" data-name="extension"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-explore" class="b3-tab-container" style="height:572px" data-name="explore"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-eHiWindom" class="b3-tab-container" style="height:572px" data-name="eHiWindom"><div class="sc-custom-placeholder">敬请期待</div></div><div id="sc-custom-container-about" class="b3-tab-container" style="height:572px" data-name="about"><div class="sc-custom-placeholder">敬请期待</div></div></div></div></div></div></div></div>`;
    divEles.style.display = "none";
    document.body.appendChild(divEles);
    this.divEles = divEles;
  }
  // 添加事件
  addEleEvent() {
    // let closeEle = this.divEles.querySelector(".k-close");
    // closeEle.addEventListener("click",()=>{
    //     this.close();
    // })
    // let cancelEle = this.divEles.querySelector(".k-default") ;
    // console.log(cancelEle)
    // cancelEle &&  cancelEle.addEventListener("click",()=>{
    //     console.log("close")
    // })
    // 事件委托
    let kDialog = this.divEles.querySelector(".k-dialog");
    kDialog.addEventListener("click", (e) => {
        //  console.log(e.target);
      let className = e.target.className;
      switch (className) {
        case "k-close":
          case "b3-dialog__scrim":
          this.close();
          break;
        case "k-default":
          this.opts.cancel();
          this.close();
          break;
        case "k-primary":
          // this.opts.success();
          // this.trigger("success");
          this.sure();
          this.close();
          break;
        default:
          // console.log("未点中");
          break;
      }
    });
  }
  sure(value) {
    let success = new CustomEvent("success", {
      detail: value,
    });
    this.dispatchEvent(success);
  }
  // 关闭组件
  close() {
    this.divEles.style.display = "none";
  }
  // 打开组件
  open() {
    // console.log("open");
    this.divEles.style.display = "block";
  }
  drag() {
    let kDialog = this.divEles.querySelector(".k-dialog");
    kDialog.onmousedown = function (e) {
      let x = e.clientX - this.offsetLeft;
      let y = e.clientY - this.offsetTop;
      this.onmousemove = function (e) {
        let xx = e.clientX;
        let yy = e.clientY;
        this.style.left = xx - x + "px";
        this.style.top = yy - y + "px";
      };
    };
    document.onmouseup = function () {
      kDialog.onmousemove = "";
    };
  }
}
// 通过继承扩展功能；
export class InputDialog extends Dialog {
  constructor(options) {
    super(options);
    this.createInput();
  }
  createInput() {
    let myInput = document.createElement("input");
    myInput.classList.add("input-inner");
    this.divEles.querySelector(".k-body").appendChild(myInput);
    this.myInput = myInput;
  }
  sure() {
    let value = this.myInput.value;
    super.sure(value);
  }
}
class ShowDialog extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<button>按钮</button>`;
    let dialog = new Dialog({
      title: this.title,
      success: (e) => {
        // console.log("点击了确定")
        this.dispatchEvent(new CustomEvent("success"));
      },
    });
    // this.title = this.getAttribute("title")
    this.onclick = function () {
      dialog.open();
    };
  }
  get title() {
    return this.getAttribute("title") ?? "默认标题";
  }
}
customElements.define("show-dialog", ShowDialog);
