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
import{l as a,B as e,q as t,M as n,u as s,E as o,H as r,f as i,z as l,N as w,e as c}from"./localforage-c05ff5e1.js";async function f(){await a.getItem(e).then((a=>{t(a)&&(a=n,console.warn(a)),s(r.STYLE_COLOR,`${o}${a}`);for(let e=0;e<i.length&&window.winsay.storage.iterDC.next().value!==a;++e);}))}async function g(){await a.getItem(l).then((a=>{t(a)&&(a=w,console.warn(a)),s(r.STYLE_COLOR,`${o}${a}`);for(let e=0;e<c.length&&window.winsay.storage.iterLC.next().value!==a;++e);}))}export{f as iterDC,g as iterLC};
