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
import{b as t,J as e}from"./localforage-c05ff5e1.js";function n(){var t=document.querySelectorAll(".protyle-title__input");for(let s=0;s<t.length;s++){const o=t[s];var e=r(o.parentElement),n=e.innerText;if(""===n||"日期获取中……"===n){var l=i(o);e.innerText=l}}}function r(t){var n=t.children;for(let t=0;t<n.length;t++){const e=n[t];if(null!=e.getAttribute("documentCreatTimeElement"))return e}var r=e(t,"span");return r.setAttribute("documentCreatTimeElement","true"),r.style.display="block",r.style.marginLeft="7px",r.style.marginBottom="0px",r.style.fontSize="70%",r.style.color="#484550",r.style.opacity="0.58",r}function i(t){var e=t.parentElement.previousElementSibling.getAttribute("data-node-id");if(null==e)return"";var n=e.substring(0,4),r=e.substring(4,6),i=e.substring(6,8);return e.substring(8,10),e.substring(10,12),e.substring(12,14),"since "+n+"-"+r+"-"+i}"body--mobile"!==t&&setTimeout((()=>{setInterval(n,300)}),500);
