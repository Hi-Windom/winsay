/*!
*                    .::::.
*                  .::::::::.
*                 :::::::::::  winsay v2.0.1
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
import{C as e,g as n,a as t,b as a,c as o,d as i,e as s,f as c,h as r,i as l,j as d,k as m,l as u,m as y,n as _,o as w}from"../_SystemMonitor-c9edd461.js";import{i as b,b as f,m as p,n as g,l as h,通 as S,o as v,p as k,q as C,t as I}from"../localforage-35dd8612.js";var D=null,$=null;async function E(e,t,a,o){if(null==document.getElementById(a)){const i=document.createElement("button");i.id=a,i.className=o,i.ariaLabel="主题设置（实验性）",i.style.paddingRight="0",i.innerHTML='<svg class="b3-menu__icon Sofill-CDUI-btn__icon" "=""><use xlink:href="#iconSettings"></use></svg><span class="b3-menu__label">主题设置</span>',e.insertAdjacentElement(t,i),document.getElementById(a).onclick=async()=>{$.open(),await n("Sofill-"),document.getElementById("sofill_preview").setAttribute("src",`${I}preview.png`)}}}async function T(){!function(){if(setTimeout((()=>{E(document.querySelector("#barDock > .b3-menu").children[0],"beforebegin","Sofill-CDUI-2","Sofill-CDUI-btn b3-menu__item")}),500),"body--mobile"===f){const e=document.getElementById("sidebar"),t=document.getElementById("menu");if(null==document.getElementById("Sofill-CDUI-1")){const a=document.createElement("svg");a.setAttribute("data-type",""),a.id="Sofill-CDUI-1",a.className="Sofill-CDUI-btn toolbar__icon",a.innerHTML='<svg id="CP_ep1" viewBox="0 0 32 32">\n      <path d="M25.143 10.667h-1.524v-3.048c0-4.206-3.413-7.619-7.619-7.619s-7.619 3.413-7.619 7.619v3.048h-1.524c-1.676 0-3.048 1.371-3.048 3.048v15.238c0 1.676 1.371 3.048 3.048 3.048h18.286c1.676 0 3.048-1.371 3.048-3.048v-15.238c0-1.676-1.371-3.048-3.048-3.048zM11.428 7.619c0-2.53 2.042-4.571 4.571-4.571s4.571 2.042 4.571 4.571v3.048h-9.143v-3.048zM25.143 28.952h-18.286v-15.238h18.286v15.238zM16 24.381c1.676 0 3.048-1.371 3.048-3.048s-1.371-3.048-3.048-3.048-3.048 1.371-3.048 3.048 1.371 3.048 3.048 3.048z"></path>\n    </svg>';const o=document.createElement("div");o.id="Sofill-CDUI-2",o.className="Sofill-CDUI-btn b3-list-item b3-list-item--big",o.innerHTML='<span class="b3-list-item__icon b3-list-item__graphic">🏳️&zwj;🌈</span><span class="b3-list-item__text">主题设置</span>',e.children[0].insertAdjacentElement("beforeend",a),document.querySelector("#Sofill-CDUI-1").addEventListener("click",(async e=>{$.open(),await n("Sofill-"),e.stopPropagation()})),document.querySelector("#toolbarMore").addEventListener("click",(e=>{setTimeout((()=>{t.insertBefore(o,t.children[0]),document.querySelector("#Sofill-CDUI-2").addEventListener("click",(async e=>{$.open(),await n("Sofill-")}))}),100)}))}}else{var e=document.querySelector("#barHelp");if(e?(e.addEventListener("click",(e=>{let n=e.target,t=n.parentNode,a=t.parentNode,o=a.parentNode;"toolbarVIP"===a.id||"toolbarVIP"===o.id?(document.querySelector("#toolbar #barSetting").click(),document.querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="account"]').click(),e.stopPropagation()):"barMode"===t.id||"barMode"===a.id?(document.querySelector("#toolbar #barMode").click(),e.stopPropagation()):t.classList.contains("b3-menu__item")||a.classList.contains("b3-menu__item")?console.log(n.innerHTML):"barTopHelp"===n.id||"barTopHelp"===t.id?n.id="barHelp":e.stopPropagation()}),!0),e.setAttribute("class","toolbar__item"),e.children[0].innerHTML='<use xlink:href="#iconMore"></use>',E(e.children[1],"beforeend","Sofill-CDUI-1","Sofill-CDUI-btn b3-menu__item")):setTimeout((()=>{E(document.querySelector("#barDock > .b3-menu").children[0],"beforebegin","Sofill-CDUI-2","Sofill-CDUI-btn b3-menu__item")}),100),e&&null==document.getElementById("sc_drawer")){var t=document.createElement("div");t.id="sc_drawer",t.style.display="flex",t.style.flexDirection="row-reverse",t.style.borderBottom="2px dashed var(--b3-theme-surface-lighter)",t.style.minHeight="2rem",setTimeout((()=>{t.setAttribute("data-themeInfo",`${p}`)}),1e3),e.children[1].insertAdjacentElement("afterbegin",t)}if(document.querySelector("body.android.body--desktop")){let e='<svg><use xlink:href="#iconQuit"></use></svg>',n=document.querySelector("#toolbar"),t=document.createElement("div");t.id="barQuit",t.className="toolbar__item b3-tooltips b3-tooltips__sw",t.setAttribute("aria-label","退出 Quit"),t.innerHTML=e,n.insertAdjacentElement("beforeend",t),t.onclick=()=>{document.body.classList.contains("client--browser")?(document.querySelector("#toolbar #barSetting").click(),document.querySelector('.b3-tab-bar:not(.sc-custom-nav) [data-name="about"]').click(),setTimeout((()=>{document.querySelector("#menuSafeQuit").click(),document.elementFromPoint(1,1).click()}),500)):window.location.href="siyuan://api/system/exit"}}}}(),await async function(){let e=await h.getItem("SC_winsay_cp_custom-nav-bind-id");C(e)||(document.getElementById(e).checked=!0);document.querySelectorAll("input[id^='sc-custom-nav-bind-id'][type='radio']").forEach((async e=>{e.addEventListener("click",(async()=>{e.checked&&!0===e.checked&&await h.setItem("SC_winsay_cp_custom-nav-bind-id",e.id)}))}))}(),await async function(){await r(),await l(),await d(),await m(),await u(),await y(),await _(),await w()}(),await async function(){let e=document.querySelector("#SC-CP");e?await g(e):console.error("CP_dialog not found")}(),await async function(){document.getElementById("SC_winsay_cp_system__ClearlocalStorage").addEventListener("click",(async()=>{new t({isCancel:!0,dragable:!1,XML:a,success(){console.log("点击了确定");var e=0;h.length().then((n=>{for(var t=0;t<n;t++)h.key(t).then((n=>{(n.startsWith("winsay_")||n.startsWith("SC_winsay_"))&&(h.removeItem(n),console.log(`${n} removed`),e++)}))})),S(`已清理 ${e} 项<br>页面即将刷新`),setTimeout((()=>{window.location.reload()}),3e3)},cancel(){console.log("点击了取消")},maskable:!0}).open()})),document.getElementById("SC_winsay_cp_system__ResetAllSettings").addEventListener("click",(async()=>{new t({isCancel:!0,dragable:!1,XML:o,success(){console.log("点击了确定");var e=0;h.length().then((n=>{for(var t=0;t<n;t++)h.key(t).then((n=>{n.startsWith("SC_winsay_cp")&&(h.removeItem(n),console.log(`${n} removed`),e++)}))})),S(`已重置 ${e} 项<br>页面即将刷新`),setTimeout((()=>{window.location.reload()}),3e3)},cancel(){console.log("点击了取消")},maskable:!0}).open()})),document.getElementById("SC_winsay_cp_system__Refresh").addEventListener("click",(async()=>{setTimeout((()=>{window.location.reload()}),300)})),document.getElementById("SC_winsay_cp_system__ShowDebugInfo").addEventListener("click",(async()=>{setTimeout((()=>{new t({isCancel:!0,dragable:!1,XML:i,success(){console.log("点击了确定")},cancel(){console.log("点击了取消")},maskable:!1}).open((()=>{document.getElementById("UpdateInfo").innerHTML=`\n<div style="max-height: 58vh;overflow: auto;white-space: nowrap;">\nlocalIPs  <br><code class="fn__code">${window.siyuan.config.localIPs}</code><br><br>\napi.token  <br><code class="fn__code">${window.siyuan.config.api.token}</code><br><br>\nsystem.homeDir  <br><code class="fn__code">${window.siyuan.config.system.homeDir}</code><br><br>\nsystem.workspaceDir  <br><code class="fn__code">${window.siyuan.config.system.workspaceDir}</code><br><br>\nsystem.confDir  <br><code class="fn__code">${window.siyuan.config.system.confDir}</code><br><br>\nsystem.dataDir  <br><code class="fn__code">${window.siyuan.config.system.dataDir}</code><br><br>\nappearance.darkThemes  <br><code class="fn__code">${window.siyuan.config.appearance.darkThemes}</code><br><br>\nappearance.lightThemes  <br><code class="fn__code">${window.siyuan.config.appearance.lightThemes}</code><br><br>\nappearance.mode  <br><code class="fn__code">${window.siyuan.config.appearance.mode}</code><br><br>\nappearance.themeDark  <br><code class="fn__code">${window.siyuan.config.appearance.themeDark}</code><br><br>\nappearance.themeLight  <br><code class="fn__code">${window.siyuan.config.appearance.themeLight}</code><br><br>\nappearance.themeVer  <br><code class="fn__code">${window.siyuan.config.appearance.themeVer}</code><br><br>\nappearance.blockRefTextLeft  <br><code class="fn__code">${window.siyuan.config.export.blockRefTextLeft}</code><br><br>\nappearance.blockRefTextRight  <br><code class="fn__code">${window.siyuan.config.export.blockRefTextRight}</code><br><br>\nfileTree.maxOpenTabCount（页签打开最大数量）  <br><code class="fn__code">${window.siyuan.config.fileTree.maxOpenTabCount}</code><br><br>\nsystem.fixedPort（是否固定端口）  <br><code class="fn__code">${window.siyuan.config.system.fixedPort}</code><br><br>\nappearance.hideStatusBar（修改没有效果，仅用于判断是否隐藏底部状态栏）  <br><code class="fn__code">${window.siyuan.config.appearance.hideStatusBar}</code><br><br>\nappearance.customCSS（是否开启自定义主题）  <br><code class="fn__code">${window.siyuan.config.appearance.customCSS}</code>\n</div>\n`,console.warn(window.siyuan.languages)}))}),300)})),document.getElementById("SC__exportData").addEventListener("click",(async()=>{var e=document.querySelector("#SC__exportData_a"),n=0,t=0,a={winsay:{},sy_editor:{},sy_keymap:{}};h.length().then((e=>{for(var o=0;o<e;o++)h.key(o).then((e=>{if(e.startsWith("winsay_")||e.startsWith("SC_winsay_"))try{h.getItem(e).then((n=>{a.winsay[e]=n})),t++}catch(n){console.error(`${e} is not a valid value for ${n}`),a.winsay[e]=null}finally{n++}}))}));let o=await h.getItem("SC_winsay_cp__exportData__EXT_sy_editor");a.sy_editor="true"===o?window.siyuan.config.editor:"禁用了附加这部分数据";let i=await h.getItem("SC_winsay_cp__exportData__EXT_sy_keymap");if(a.sy_keymap="true"===i?window.siyuan.config.keymap:"禁用了附加这部分数据","true"===await h.getItem("SC_winsay_cp__exportData__EXT_sy_sync")?(a.sy_sync=window.siyuan.config.sync,a.sy_repo=window.siyuan.config.repo):(a.sy_sync="禁用了附加这部分数据",a.sy_repo="禁用了附加这部分数据"),v())document.body.classList.contains("user--Sub")?(k.putFile(`/data/snippets/Sofill-ConfigData__${Date.now()}.json`,JSON.stringify(a)),S(`导出 ${t}/${n}<br>【订阅用户权益生效提示】备份已保存到同步文件夹 ${window.siyuan.config.system.dataDir}/snippets/`)):S("平台受限，仅支持订阅用户导出");else{var s=new Blob([JSON.stringify(a)]);e.href=URL.createObjectURL(s),e.download="Sofill-ConfigData.json",e.click(),S(`导出 ${t}/${n}`),D&&document.body.classList.contains("user--Sub")&&D.writeFile(`${window.siyuan.config.system.dataDir}/snippets/Sofill-ConfigData__${Date.now()}.json`,JSON.stringify(a),"utf-8",(function(e){e?console.error(e):(console.log("Write successfully~~"),S(`【订阅用户权益生效提示】备份已保存到同步文件夹 ${window.siyuan.config.system.dataDir}/snippets/`))}))}})),document.getElementById("SC__importData").addEventListener("click",(async()=>{var e=document.querySelector("#SC__importData_i");e.onchange=()=>{if(""===this.value||this.files.length<1)return console.warn("Oops..."),!1;var e=0,n=0,a={},o=0,i=new FileReader;i.readAsText(this.files[0]),i.onload=async function(i){var c=i.target.result;try{c=JSON.parse(c)}catch(e){return void S(`无效数据 ${e}`,3e3)}for(var r in console.log(c),c)if(a[r]={},"winsay"===r)for(var l in c[r])e+=1,c[r][l]!==await h.getItem(l)&&(n+=1,a[r][l]=`${await h.getItem(l)} => ${c[r][l]}`);console.warn("================================ Changes Preview ================================"),console.log(a),console.warn("================================================================================");let d=new t({isCancel:!0,dragable:!1,XML:s,success(){for(var t in console.log("点击了确定"),c)if(a[t]={},"winsay"===t)for(var i in c[t])try{h.setItem(i,c[t][i]).then((e=>{o+=1,console.warn(`${i} updated`)}))}catch(e){console.error(e)}S(`导入成功 ${o}/${e}，覆盖 ${n} 项`)},cancel(){console.log("点击了取消")},maskable:!0});await d.open((()=>{document.getElementById("CoverWarming").innerHTML=`影响 ${n}/${e} 项`}))}},e.value=""})),document.getElementById("SC_winsay_cp__checkUpdateBtn").addEventListener("click",(async()=>{c()}))}()}b()&&(D=require("fs"),require("path")),null==document.getElementById("SC-CP")&&($=new e({isCancel:!0,dragable:!1,maskable:!0})),window.winsay.localVersion={},window.winsay.localVersion.version="",window.winsay.localVersion.useBazaar="",window.winsay.localVersion.useGithub="",window.winsay.localVersion.vinfoHTML="",window.winsay.storage.SC_winsay_cp_editor__DocWidthMode__previousValue="null",window.winsay.storage.SC_winsay_cp_T__t2=null,window.winsay.storage.It_DocWidthMode=null,window.winsay.storage.It_SelfProtector=null,window.winsay.storage.It_filterTimer=null,setTimeout((async()=>{await T()}),0);
