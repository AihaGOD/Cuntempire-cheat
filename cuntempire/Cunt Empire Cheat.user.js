// ==UserScript==
// @name         Cunt Empire Cheat
// @version      1.2020-08-20
// @description  Enables the cheat menu - open it by pressing "c"
// @author       iBelg
// @match        https://www.cuntempire.com/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

!function(){"use strict";GM_xmlhttpRequest({method:"GET",url:`${document.location.origin}/src/app.bundle.js`,onload:e=>{let o=e.responseText;o=o.replace(/(window\.onload\s?=\s?\(\)\s?=>\s?{)(.*})/,"$1 window._game = $2").replace(/(this\.buttonCheat\s?=\s?new .*?\(.,)0(\))/g,"$11$2").replace(/(const\s?f\s?=\s?new .*?\(.,)0(\))/g,"$11$2"),GM_xmlhttpRequest({method:"GET",url:document.location.origin,onload:e=>{let t=e.responseText;t=t.replace(/ src="\/src\/app\.bundle\.js">/,`>\n${o.toString()}`),document.open(),document.write(t),document.close()}})}})}();