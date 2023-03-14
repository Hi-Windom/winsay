/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0.2
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
import{i as a,m as i,l as n,n as o}from"./localforage-1a9216ea.js";import{a as t,b as e,C as s,c as w,d as c,e as d,f as r,g as l,h as u,i as y}from"./index-579ab212.js";async function _(){t(),await async function(){let a=await n.getItem("SC_winsay_cp_custom-nav-bind-id");o(a)||(document.getElementById(a).checked=!0);document.querySelectorAll("input[id^='sc-custom-nav-bind-id'][type='radio']").forEach((async a=>{a.addEventListener("click",(async()=>{a.checked&&!0===a.checked&&await n.setItem("SC_winsay_cp_custom-nav-bind-id",a.id)}))}))}(),await async function(){await s(),await w(),await c(),await d(),await r(),await l(),await u(),await y()}(),await async function(){let a=document.querySelector("#SC-CP");a?await i(a):console.error("CP_dialog not found")}(),await e()}a()&&(require("fs"),require("path")),window.winsay.localVersion={},window.winsay.localVersion.version="",window.winsay.localVersion.useBazaar="",window.winsay.localVersion.useGithub="",window.winsay.localVersion.vinfoHTML="",window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue="null",window.winsay.storage.SC_winsay_cp_T__t2=null,window.winsay.storage.It_DocWidthMode=null,window.winsay.storage.It_SelfProtector=null,window.winsay.storage.It_filterTimer=null,setTimeout((async()=>{await _()}),0);
