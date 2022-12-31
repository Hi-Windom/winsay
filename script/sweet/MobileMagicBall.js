import * as API from "./../utils/api.min.js";
var ball = document.createElement("div");
ball.id = "Sofill-MobileBall";
ball.innerHTML = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Canonical</title><path d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C0 5.372 5.372 0 12 0c6.627 0 12 5.372 12 12zM12 2.92A9.08 9.08 0 002.92 12 9.08 9.08 0 0012 21.08 9.08 9.08 0 0021.081 12 9.08 9.08 0 0012 2.92zm0 16.722A7.64 7.64 0 014.36 12 7.64 7.64 0 0112 4.36 7.64 7.64 0 0119.641 12a7.64 7.64 0 01-7.64 7.641z"/></svg>`;
document.body.appendChild(ball);

setTimeout(() => {
  var hammertime = new Hammer(ball);
  hammertime.on("tap", function (ev) {
    console.log(ev); //输出拖移事件对象 alert("单击事件");
    let id = API.getFocusedDocID();
    alert(id);
  });
  hammertime.on("press", function (ev) {
    console.log(ev); //输出拖移事件对象 alert("按压事件");
    window.location.reload();
  });
}, 3000);

// 节流函数
function throttle(fn, interval, _this) {
  let lastTime = 0;
  // tslint:disable-next-line:only-arrow-functions
  return function (...args) {
    const nowTime = +new Date();
    if (nowTime - lastTime >= interval) {
      fn.apply(_this, args);
      lastTime = nowTime;
    }
  };
}

ball.addEventListener("touchstart", function (e) {
  e.stopPropagation(); // 阻止冒泡

  // 删除过渡效果
  this.style.transition = "none";
  // 去除透明, 并清除定时器
  this.style.opacity = 1;
  clearTimeout(this.timer);

  this.l = this.offsetLeft; // 获取初始状态下悬浮球的左偏移量
  this.x = e.targetTouches[0].clientX; // 获取初始状态下悬浮球的上偏移量
  this.h = this.offsetTop; // 获取初次触屏点距离屏幕左端的距离
  this.y = e.targetTouches[0].clientY; // 获取初次触屏点距离屏幕顶端的距离
});

const ballMove = function (e) {
  e.stopPropagation();

  this._x = e.targetTouches[0].clientX; // 移动中实时获取触屏点距离屏幕左端的距离
  this._y = e.targetTouches[0].clientY; // 移动中实时获取触屏点距离屏幕顶端的距离
  let newLeft = this._x - (this.x - this.l); // 移动中实时计算悬浮球的左偏移量
  let newTop = this._y - (this.y - this.h); // 移动中实时计算悬浮球的上偏移量

  this.style.left = newLeft + "px";
  this.style.top = newTop + "px";
};

ball.addEventListener("touchmove", function (e) {
  if (!this.fn) {
    this.fn = throttle(ballMove, 10, this);
    this.fn(e);
  } else {
    this.fn(e);
  }
});

ball.addEventListener("touchend", function (e) {
  e.stopPropagation();

  // 弹回添加过渡效果
  this.style.transition = "all 0.3s ease";

  const ballWidth = this.offsetWidth; // 悬浮球宽度
  const ballHeight = this.offsetHeight; // 悬浮球高度
  const l = this.offsetLeft; // 手指离开屏幕时悬浮球左偏移量
  const h = this.offsetTop; // 手指离开屏幕时悬浮球上偏移量
  const clientWidth = document.documentElement.clientWidth; // 屏幕宽度
  const clientHeight = document.documentElement.clientHeight; // 屏幕高度

  // 悬浮球移出屏幕左侧, 弹回最左
  if (l <= 0) {
    this.style.left = 0 + "px";
  }
  // 悬浮球移出屏幕右侧, 弹回最右
  if (l >= clientWidth - ballWidth) {
    this.style.left = clientWidth - ballWidth + "px";
  }
  // 悬浮球移出屏幕顶部, 弹回最上
  if (h <= 0) {
    this.style.top = 0 + "px";
  } else if (h >= clientHeight - ballHeight) {
    // 悬浮球移出屏幕底部, 弹回最底
    this.style.top = clientHeight - ballHeight + "px";
  } else if (l <= (clientWidth - ballWidth) / 2) {
    // 悬浮球未移过中间线, 弹回最左, 否则弹回最右
    this.style.left = 0 + "px";
  } else {
    this.style.left = clientWidth - ballWidth + "px";
  }

  // 添加定时器, 3s后悬浮球变透明
  this.timer = setTimeout(() => {
    this.style.opacity = 0.31;
  }, 3000);
});
