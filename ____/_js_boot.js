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
import{A as e,I as t,a,i as s,l as i,s as n,t as o,c as _,通 as c,u as r,b as w,d as l,g as y,e as m,f as p}from"../localforage-e9565520.js";const d="winsayUserData";async function u(){console.log("booting..."),window.winsay.API=e,window.winsay.storage.iterLC=t(m),window.winsay.storage.iterDC=a(p);var u=null,h=null;if(s()&&(u=require("fs"),h=require("path")),await new Promise((async function(e){let t=!0;for(;t;)try{await i.setDriver(i.INDEXEDDB).then((async()=>{i.config({storeName:d}),await i.ready().then((async()=>{await i.setItem("winsay_latest_boot_time",Date.now().toString()),t=!1,e(i.driver())}))}))}catch(e){console.log(e),await n(200)}})).then((async function(e){console.log(e),await new Promise((async e=>{import("../index-fd91e0dc.js").then((()=>{import("../index-63dfea0f.js").then((async()=>{await async function(){await i.getItem("SC_winsay_cp_inited").then((async e=>{console.error(e),"true"!==e&&(await i.setItem("SC_winsay_cp_system__SelfProtection","true"),await i.setItem("SC_winsay_cp_editor__LH_Adaptive","true"),await i.setItem("SC_winsay_cp_editor__ListAutoIndent","true"),await i.setItem("SC_winsay_cp_editor__HintHint-index","true"),await i.setItem("SC_winsay_cp_editor__BlockTable_FontSize","92%"),await i.setItem("SC_winsay_cp_editor__Block-Inline-link__block-ref-content","⁅⁅ ⁆⁆"),await i.setItem("SC_winsay_cp_editor__block__popover--open__PinSense","1"),await i.setItem("SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor","var(--b3-theme-surface-lighter)"),await i.setItem("SC_winsay_cp_appearance__ShowWebIcon","true"),await i.setItem("SC_winsay_cp_appearance__ShowFileIcon","true"),await i.setItem("SC_winsay_cp_appearance__status_msg_opacity","0.9"),await i.setItem("SC_winsay_cp_appearance__strengthen_backlinkList_panel_border","true"),await i.setItem("SC_winsay_cp_filetree__Adaptive_display","true"),await i.setItem("SC_winsay_cp_search__index","true"),await i.setItem("SC_winsay_cp_search__layout","layout-Auto.css"),await i.setItem("SC_winsay_cp_inited","true"))}))}()}))})),setTimeout((async()=>{await i.getItem("SC_winsay_cp_system__SelfProtection");var e="";h&&(e=h.join(window.siyuan.config.system.confDir,o)),u&&u.access(e,(t=>{t&&(console.error(t),alert(`主题根目录未正确命名或不存在：【致命错误】${e} 文件夹不存在。修正错误后，需重启思源并重新选择主题。（在主题设置中关闭主题自我保护可禁用此通知）`))}))}),1e3);var t=window.siyuan.config.system.kernelVersion,a="2.6.1",s=_(a,t),n=await i.getItem("SC_winsay_cp_search__about_AutoCheckSilently");switch(s){case 1:case 0:n&&"true"===n||setTimeout((()=>{c(`主题已停止支援思源 ${a} 及更早版本，建议更新思源版本<br><a href="https://github.com/Hi-Windom/winsay/issues?q=is%3Aissue+label%3AAbolishment+is%3Aclosed+label%3A%E9%80%82%E9%85%8D%E6%80%9D%E6%BA%90" target="_blank" style="color: #58c">更多信息</a>`,8e3)}),3e3)}e()}))})),window.winsay.ekits.gites={UPath:"/appearance/themes/Sofill=/eHiWindom/gites/"},window.winsay.ekits.lnco={},"android"===window.winsay.OS)r("Mobile",`${o}style/Mobile/Android.css`);else r("fonts",`${window.winsay.ekits.gites.UPath}style/fonts.css`);r("Popup",`${o}style/_css_popup.css`),r("Patch",`${o}style/_css_patch.css`),r("CP",`${o}style/_css_CP.css`),r("MI-ToolBar-Auto",`${o}style/sweet/MI-ToolBar-Auto.css`),"body--mobile"===w&&(l(`${o}/es/lib/hammer.min.js`,"module",!0).onload=()=>{import("../index-9db60ff2.js")}),import("../index-fd91e0dc.js").then((e=>{e.CP()}));let S=y(window.location.href,"action"),b=y(window.location.href,"name"),f=y(window.location.href,"args");if(S&&b)switch(S){case"updateTheme":document.querySelector("#toolbar #barSetting").click(),document.querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]').click(),setTimeout((()=>{document.querySelector(`#configBazaarTheme [class="b3-card__actions"][data-name="${b}"]>[data-type="install-t"]`).click()}),500);break;case"next":"update-winsay"===b&&window.open(`http://${decodeURIComponent(f)}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`,"_self")}}export{u as boot};
