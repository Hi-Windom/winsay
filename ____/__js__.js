/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0.12
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
import{A as e,I as t,a,i as s,l as i,s as n,t as o,u as r,c,b as _,g as l,d as w,e as u,f as d,h as p,j as y}from"../localforage-ff346868.js";const m="winsayUserData";d("branch--Sillot")||function(){let e=new URL(window.location.href);switch(!0){case e.pathname.startsWith("/stage/build/app"):y("body--app");break;case e.pathname.startsWith("/stage/build/desktop"):y("body--desktop");break;case e.pathname.startsWith("/stage/build/mobile"):y("body--mobile");break;default:y("body--unkown")}}(),setInterval((()=>{null==window.siyuan.user?(p("user--Sub"),p("user--NonSub"),y("user--null")):window.siyuan.user.userSiYuanProExpireTime>Date.now()?(p("user--null"),p("user--NonSub"),y("user--Sub")):(p("user--null"),p("user--Sub"),y("user--NonSub"))}),5800),async function(){console.log("booting..."),window.winsay.API=e,window.winsay.storage.iterLC=t(w),window.winsay.storage.iterDC=a(u);var d=null,p=null;if(s()&&(d=require("fs"),p=require("path")),await new Promise((async function(e){let t=!0;for(;t;)try{await i.setDriver(i.INDEXEDDB).then((async()=>{i.config({storeName:m}),await i.ready().then((async()=>{await i.setItem("winsay_latest_boot_time",Date.now().toString()),t=!1,e(i.driver())}))}))}catch(e){console.log(e),await n(200)}})).then((async function(e){console.log(e),await new Promise((async e=>{import("../index-c466e2e5.js").then((()=>{import("../index-d7285686.js").then((async()=>{await async function(){await i.getItem("SC_winsay_cp_inited").then((async e=>{console.error(e),"true"!==e&&(await i.setItem("SC_winsay_cp_system__SelfProtection","true"),await i.setItem("SC_winsay_cp_editor__LH_Adaptive","true"),await i.setItem("SC_winsay_cp_editor__ListAutoIndent","true"),await i.setItem("SC_winsay_cp_editor__HintHint-index","true"),await i.setItem("SC_winsay_cp_editor__BlockTable_FontSize","92%"),await i.setItem("SC_winsay_cp_editor__Block-Inline-link__block-ref-content","⁅⁅ ⁆⁆"),await i.setItem("SC_winsay_cp_editor__block__popover--open__PinSense","1"),await i.setItem("SC_winsay_cp_appearance__ToolBarMode__NotFocus__bgColor","var(--b3-theme-surface-lighter)"),await i.setItem("SC_winsay_cp_appearance__ShowWebIcon","true"),await i.setItem("SC_winsay_cp_appearance__ShowFileIcon","true"),await i.setItem("SC_winsay_cp_appearance__status_msg_opacity","0.9"),await i.setItem("SC_winsay_cp_appearance__strengthen_backlinkList_panel_border","true"),await i.setItem("SC_winsay_cp_filetree__Adaptive_display","true"),await i.setItem("SC_winsay_cp_search__index","true"),await i.setItem("SC_winsay_cp_search__layout","layout-Auto.css"),await i.setItem("SC_winsay_cp_inited","true"))}))}()}))})),setTimeout((async()=>{await i.getItem("SC_winsay_cp_system__SelfProtection");var e="";p&&(e=p.join(window.siyuan.config.system.confDir,o)),d&&d.access(e,(t=>{t&&(console.error(t),alert(`主题根目录未正确命名或不存在：【致命错误】${e} 文件夹不存在。修正错误后，需重启思源并重新选择主题。（在主题设置中关闭主题自我保护可禁用此通知）`))}))}),1e3),e()}))})),window.winsay.ekits.gites={UPath:"/appearance/themes/Sofill=/eHiWindom/gites/"},window.winsay.ekits.lnco={},"android"===window.winsay.OS)r("Mobile",`${o}style/Mobile/Android.css`);else r("fonts",`${window.winsay.ekits.gites.UPath}style/fonts.css`);r("Popup",`${o}style/_css_popup.css`),r("Patch",`${o}style/_css_patch.css`),r("CP",`${o}style/_css_CP.css`),r("MI-ToolBar-Auto",`${o}style/sweet/MI-ToolBar-Auto.css`),"body--mobile"===c&&(_(`${o}/es/lib/hammer.min.js`,"module",!0).onload=()=>{import("../index-9888ab97.js")}),import("../index-c466e2e5.js").then((e=>{e.CP()}));let y=l(window.location.href,"action"),b=l(window.location.href,"name"),h=l(window.location.href,"args");if(y&&b)switch(y){case"updateTheme":document.querySelector("#toolbar #barSetting").click(),document.querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="bazaar"]').click(),setTimeout((()=>{document.querySelector(`#configBazaarTheme [class="b3-card__actions"][data-name="${b}"]>[data-type="install-t"]`).click()}),500);break;case"next":"update-winsay"===b&&window.open(`http://${decodeURIComponent(h)}/stage/build/desktop/?action=updateTheme&name=Sofill-&args=null`,"_self")}}
/*!
* sofill v1.0.64
* https://github.com/Hi-Windom/Sofill
* https://www.npmjs.com/package/sofill
*/(),console.log("boot finished");
