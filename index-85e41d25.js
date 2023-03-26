/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0.9
*             ..:::::::::::'
*           '::::::::::::'
*             .::::::::::
*        '::::::::::::::..
*             ..::::::::::::.
*           .''::::::::::::::::
*            ::::'':::::::::'        .:::.
*           ::::'   ':::::'       .::::::::.
*         .::::'      ::::     .:::::::'::::.
*        .:::'       :::::  .:::::::::' ':::::.
*       .::'        :::::.:::::::::'      ':::::.
*      .::'         ::::::::::::::'         ''::::.
*  ...:::           ::::::::::::'              ''::.
* '''' ':.          ':::::::::'                  ::::..
*                    '.:::::'                    ':'''''..
*
 *
 * https://github.com/Hi-Windom/winsay
 * QQ 694357845
 *
 * For the brave souls who get this far: You are the chosen ones,
 * the valiant knights of programming who toil away, without rest,
 * fixing our most awful code. To you, true saviors, kings of men,
 * I say this: never gonna give you up, never gonna let you down,
 * never gonna run around and desert you. Never gonna make you cry,
 * never gonna say goodbye. Never gonna tell a lie and hurt you.
 *
 */
import{O as t,p as e}from"./localforage-c6e3b102.js";var o=document.createElement("div");o.id="Sofill-MobileBall",o.style.visibility="hidden",o.innerHTML='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Canonical</title><path d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C0 5.372 5.372 0 12 0c6.627 0 12 5.372 12 12zM12 2.92A9.08 9.08 0 002.92 12 9.08 9.08 0 0012 21.08 9.08 9.08 0 0021.081 12 9.08 9.08 0 0012 2.92zm0 16.722A7.64 7.64 0 014.36 12 7.64 7.64 0 0112 4.36 7.64 7.64 0 0119.641 12a7.64 7.64 0 01-7.64 7.641z"/></svg>',document.body.appendChild(o),window.winsay.history=[];class i{static hammerIt(t){const o=t;console.log("hammerIt begin elm",o);const i=new Hammer(o,{touchAction:"pan-x pan-y"});i.get("pinch").set({enable:!0}),console.log("hammertime",i);let n=0,s=0,a=1,l=1,r=0,c=0,d=0,h=0,p="";const u=o;i.on("panleft panright panup pandown tap press pdoubletap pan pinch panend pinchend",(function(t){if(console.log(t.type+" gesture detected."),"true"!==o.childNodes[1].getAttribute("contenteditable")){if("tap"===t.type&&!0===window.winsay.cp.TapAlert_docReadOnly&&e("当前只读模式"),"doubletap"===t.type){p="translate3d(0, 0, 0) scale3d(2, 2, 1) ",a=2,l=2;try{"matrix(1, 0, 0, 1, 0, 0)"!==window.getComputedStyle(u,null).getPropertyValue("-webkit-transform").toString()&&(p="translate3d(0, 0, 0) scale3d(1, 1, 1) ",a=1,l=1)}catch(t){}u.style.webkitTransform=p,p=""}1!==a&&(n=r+t.deltaX,s=c+t.deltaY,d=Math.ceil((a-1)*u.clientWidth/2),h=Math.ceil((a-1)*u.clientHeight/2),n>d&&(n=d),n<-d&&(n=-d),s>h&&(s=h),s<-h&&(s=-h)),"pinch"===t.type&&(a=Math.max(.999,Math.min(l*t.scale,4))),"pinchend"===t.type&&(l=a),"panend"===t.type&&(r=n<d?n:d,c=s<h?s:h),1!==a&&(p="translate3d("+n+"px,"+s+"px, 0) scale3d("+a+", "+a+", 1)"),p&&(u.style.webkitTransform=p)}else o.style.transform=""}))}}setTimeout((()=>{o.style.visibility="visible";var n=new Hammer.Manager(o);n.add(new Hammer.Press),n.add(new Hammer.Tap({event:"doubletap",taps:2})),n.add(new Hammer.Tap({event:"singletap"})),n.get("doubletap").recognizeWith("singletap"),n.get("singletap").requireFailure("doubletap"),n.on("doubletap",(function(t){document.body.classList.contains("music-mode")?document.body.classList.remove("music-mode"):document.body.classList.add("music-mode")})).on("singletap",(function(o){let i=t();e(i)})).on("press",(function(t){console.log(t),window.location.reload()}));var s=document.querySelector("#editor>.protyle-content");i.hammerIt(s)}),1e3),setTimeout((()=>{const t=document.querySelector("#editor>.protyle-content>.protyle-background"),e=document.querySelector(".toolbar"),o={attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0},i=new MutationObserver((function(t,e){for(let e of t)if("childList"===e.type)console.log("A child node has been added or removed.");else if("attributes"===e.type&&(console.log("The "+e.attributeName+" attribute was modified."),console.log(e),"data-node-id"===e.attributeName&&null!=e.oldValue&&(window.winsay.history.push(e.oldValue),console.warn(window.winsay.history)),"href"===e.attributeName)){let t=document.querySelector("#toolbarEdit");"#iconEdit"===e.oldValue?(t.style.color="var(--b3-font-color1)",t.style.filter="saturate(5.8) brightness(0.58)"):(t.style.color="var(--b3-theme-on-surface)",t.style.filter="none")}}));i.observe(t,o),i.observe(e,o)}),1e3),o.addEventListener("touchstart",(function(t){t.stopPropagation(),this.style.transition="none",this.style.opacity="1",clearTimeout(this.timer),this.l=this.offsetLeft,this.x=t.targetTouches[0].clientX,this.h=this.offsetTop,this.y=t.targetTouches[0].clientY}));const n=function(t){t.stopPropagation(),this._x=t.targetTouches[0].clientX,this._y=t.targetTouches[0].clientY;let e=this._x-(this.x-this.l),o=this._y-(this.y-this.h);this.style.left=e+"px",this.style.top=o+"px"};o.addEventListener("touchmove",(function(t){this.fn||(this.fn=function(t,e,o){let i=0;return function(...n){const s=+new Date;s-i>=e&&(t.apply(o,n),i=s)}}(n,10,this)),this.fn(t)})),o.addEventListener("touchend",(function(t){t.stopPropagation(),this.style.transition="all 0.3s ease";const e=this.offsetWidth,o=this.offsetHeight,i=this.offsetLeft,n=this.offsetTop,s=document.documentElement.clientWidth,a=document.documentElement.clientHeight;i<=0&&(this.style.left="0px"),i>=s-e&&(this.style.left=s-e+"px"),n<=0?this.style.top="0px":n>=a-o?this.style.top=a-o+"px":this.style.left=i<=(s-e)/2?"0px":s-e+"px",this.timer=setTimeout((()=>{this.style.opacity=.31}),3e3)}));
