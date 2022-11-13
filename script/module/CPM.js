import {DialogModule} from './XML/CPDialog.js';
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
      this.divEles.querySelector(".SCC-wrapper").style.display = "none";
    }
    if (this.opts.dragable) {
      this.drag();
    }
  }
  // 创建节点
  createElement() {
    // console.log(this.opts.width)
    let divEles = document.createElement("div");
    divEles.innerHTML = DialogModule;
    divEles.style.display = "none";
    document.body.appendChild(divEles);
    this.divEles = divEles;
  }
  // 添加事件
  addEleEvent() {
    // 事件委托
    let SCCDialog = this.divEles.querySelector(".SCC-dialog");
    SCCDialog.addEventListener("click", (e) => {
        //  console.log(e.target);
      let className = e.target.className;
      switch (className) {
        case "SCC-close":
          case "b3-dialog__scrim":
          this.close();
          break;
        case "SCC-default":
          this.opts.cancel();
          this.close();
          break;
        case "SCC-primary":
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
    let kDialog = this.divEles.querySelector(".SCC-dialog");
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
