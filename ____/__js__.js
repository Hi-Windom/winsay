/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0.10
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
import{A as e,I as t,a,i as s,l as i,s as n,t as o,p as r,u as c,c as _,b as l,g as w,d as u,e as d,f as p,h as y,j as m}from"../localforage-32730fa8.js";const b="winsayUserData";p("branch--Sillot")||function(){let e=new URL(window.location.href);switch(!0){case e.pathname.startsWith("/stage/build/app"):m("body--app");break;case e.pathname.startsWith("/stage/build/desktop"):m("body--desktop");break;case e.pathname.startsWith("/stage/build/mobile"):m("body--mobile");break;default:m("body--unkown")}}(),setInterval((()=>{null==window.siyuan.user?(y("user--Sub"),y("user--NonSub"),m("user--null")):window.siyuan.user.userSiYuanProExpireTime>Date.now()?(y("user--null"),y("user--NonSub"),m("user--Sub")):(y("user--null"),y("user--Sub"),m("user--NonSub"))}),5800),async function(){console.log("booting..."),window.winsay.API=e,window.winsay.storage.iterLC=t(u),window.winsay.storage.iterDC=a(d);var p=null,y=null;if(s()&&(p=require("fs"),y=require("path")),await new Promise((async function(e){let t=!0;for(;t;)try{await i.setDriver(i.INDEXEDDB).then((async()=>{i.config({storeName:b}),await i.ready().then((async()=>{await i.setItem("winsay_latest_boot_time",Date.now().toString()),t=!1,e(i.driver())}))}))}catch(e){console.log(e),await n(200)}})).then((async function(e){console.log(e),await new Promise((async e=>{import("../index-8ba7525b.js").then((()=>{import("../index-a980fb60.js").then((async()=>{await async function(){await i.getItem("SC_winsay_cp_inited").then((async e=>{console.error(e),"true"!==e&&(await i.setItem("SC_winsay_cp_system__SelfProtection","true"),await i.setItem("SC_winsay_cp_editor__LH_Adaptive","true"),await i.setItem("SC_winsay_cp_editor__ListAutoIndent","true"),await i.setItem("SC_winsay_cp_editor__HintHint-index","true"),await i.setItem("SC_winsay_cp_editor__BlockTable_FontSize","92%"),await i.setItem("SC_winsay_cp_editor__Block-Inline-link__block-ref-content","⁅⁅ ⁆⁆"),await i.setItem("SC_winsay_cp_editor__block__popover--open__PinSense","1"),await i.setItem("SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor","var(--b3-theme-surface-lighter)"),await i.setItem("SC_winsay_cp_appearance__ShowWebIcon","true"),await i.setItem("SC_winsay_cp_appearance__ShowFileIcon","true"),await i.setItem("SC_winsay_cp_appearance__status_msg_opacity","0.9"),await i.setItem("SC_winsay_cp_appearance__strengthen_backlinkList_panel_border","true"),await i.setItem("SC_winsay_cp_filetree__Adaptive_display","true"),await i.setItem("SC_winsay_cp_search__index","true"),await i.setItem("SC_winsay_cp_search__layout","layout-Auto.css"),await i.setItem("SC_winsay_cp_inited","true"))}))}()}))})),setTimeout((async()=>{await i.getItem("SC_winsay_cp_system__SelfProtection");var e="";y&&(e=y.join(window.siyuan.config.system.confDir,o)),p&&p.access(e,(t=>{t&&(console.error(t),alert(`主题根目录未正确命名或不存在：【致命错误】${e} 文件夹不存在。修正错误后，需重启思源并重新选择主题。（在主题设置中关闭主题自我保护可禁用此通知）`))}))}),1e3),document.body.classList.contains("branch--Sillot")||setTimeout((()=>{r('当前主题完美适配汐洛 ( Sillot )<br><a href="https://github.com/Hi-Windom/Sillot" target="_blank" style="color: #58c">尝鲜体验</a>',8e3)}),3e3),e()}))})),window.winsay.ekits.gites={UPath:"/appearance/themes/Sofill=/eHiWindom/gites/"},window.winsay.ekits.lnco={},"android"===window.winsay.OS)c("Mobile",`${o}style/Mobile/Android.css`);else c("fonts",`${window.winsay.ekits.gites.UPath}style/fonts.css`);c("Popup",`${o}style/_css_popup.css`),c("Patch",`${o}style/_css_patch.css`),c("CP",`${o}style/_css_CP.css`),c("MI-ToolBar-Auto",`${o}style/sweet/MI-ToolBar-Auto.css`),"body--mobile"===_&&(l(`${o}/es/lib/hammer.min.js`,"module",!0).onload=()=>{import("../index-a980ef83.js")}),import("../index-8ba7525b.js").then((e=>{e.CP()}));let m=w(window.location.href,"action"),h=w(window.location.href,"name"),S=w(window.location.href,"args");if(m&&h)switch(m){case"updateTheme":document.querySelector("#toolbar #barSetting").click(),document.querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]').click(),setTimeout((()=>{document.querySelector(`#configBazaarTheme [class="b3-card__actions"][data-name="${h}"]>[data-type="install-t"]`).click()}),500);break;case"next":"update-winsay"===h&&window.open(`http://${decodeURIComponent(S)}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`,"_self")}}
/*!
* sofill v1.0.64
* https://github.com/Hi-Windom/Sofill
* https://www.npmjs.com/package/sofill
*/(),console.log("boot finished");
