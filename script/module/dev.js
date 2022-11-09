import * as API from "./../utils/api.js";

// 初始缩放比例
let originPixelRatio = localStorage.devicePixelRatio;
if (!originPixelRatio) {
  originPixelRatio = window.devicePixelRatio;
  // 整数才保存
  if (Number.isInteger(originPixelRatio)) {
    localStorage.devicePixelRatio = originPixelRatio;
  }
}
// 来源：https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/
let lastPixelRatio = originPixelRatio;
window.addEventListener("resize", function () {
  let currentPixelRatio = window.devicePixelRatio;
  if (currentPixelRatio !== lastPixelRatio) {
    console.log(
      "缩放比例是：" +
      Math.round(1000 * (currentPixelRatio / originPixelRatio)) / 10 +
      "%（100%基准为软件初始缩放，并非实际缩放，仅供参考）"
    );
  }
  // 记住上一次的设备像素比
  lastPixelRatio = currentPixelRatio;
});

//夜间返回true，白天返回false，（这里夜间时间设置为23:00 -- 07:00）
function isDaylight(){
  var currdate = new Date();
  if(currdate.getHours()>=23 || currdate.getHours()<7){
    return true;
  }else{
    return false;
  }
}

var setSleepNote;

if(isDaylight) {
  clearInterval(setSleepNote);
} else {
  setSleepNote = setInterval(() => {
    var currdate = new Date();
    let h = currdate.getHours();
    API.通知(`⏰ 现在已经 ${h} 点啦<br>劳逸结合是维持效率的秘诀 ~`);
  }, 3600000);
}