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
window.addEventListener('resize', function () {
    let currentPixelRatio = window.devicePixelRatio;
    if (currentPixelRatio !== lastPixelRatio) {
        console.log('缩放比例是：' + Math.round(1000 * (currentPixelRatio / originPixelRatio)) / 10 + '%（100%基准为软件初始缩放，并非实际缩放，仅供参考）');
    }
    // 记住上一次的设备像素比
    lastPixelRatio = currentPixelRatio;
});