/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0
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
import{b as e,H as t,J as n,t as a,y as s,u as o,E as i,i as l,K as d}from"./localforage-c05ff5e1.js";async function r(){if("body--mobile"!==e)return;if(document.getElementById(t.BUTTON_TOOLBAR_CHANGE_COLOR))return;var l=document.getElementById("SofillToolbar");const d=n(l,"div");d.id=t.BUTTON_TOOLBAR_CHANGE_COLOR,d.style.width="17px",d.style.height="100%",d.style.float="left",d.style.marginLeft="10px",d.style.backgroundImage=`url(${a}src/icon/S2.svg)`,d.style.backgroundRepeat="no-repeat",d.style.backgroundPosition="left top",d.style.backgroundSize="100%",d.addEventListener("click",(async e=>{let n=null;var a;"dark"===s?(n=window.winsay.storage.iterDC.next().value,(a=document.getElementById("SC_winsay_cp_custom__DS"))&&(a.bindIDB=n)):(n=window.winsay.storage.iterLC.next().value,(a=document.getElementById("SC_winsay_cp_custom__LS"))&&(a.bindIDB=n));o(t.STYLE_COLOR,`${i}${n}`)}))}async function c(){l()&&require("fs");const e=document.getElementById("drag");if(d){const n=document.createElement("button");n.id=t.BUTTON_TOOLBAR_CHANGE_COLOR,n.className="toolbar__item b3-tooltips b3-tooltips__sw",n.ariaLabel="形态切换（实验性）",n.innerHTML='<svg><use xlink:href="#iconTheme"></use></svg>',n.addEventListener("click",(async e=>{let n=null;var a;"dark"===s?(n=window.winsay.storage.iterDC.next().value,(a=document.getElementById("SC_winsay_cp_custom__DS"))&&(a.bindIDB=n)):(n=window.winsay.storage.iterLC.next().value,(a=document.getElementById("SC_winsay_cp_custom__LS"))&&(a.bindIDB=n));o(t.STYLE_COLOR,`${i}${n}`)})),null==document.getElementById(t.BUTTON_TOOLBAR_CHANGE_COLOR)&&e.insertAdjacentElement("afterend",n)}}export{c as D,r as M};
