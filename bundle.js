(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),s=t(645),a=t.n(s)()(o());a.push([e.id,"\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: cursive;\n  font-size: larger;\n  height: 100vh;\n}\n\n#scoreplayer {\n  width: 98%;\n}\n\nbutton,\ninput {\n  font-family: cursive;\n  font-size: larger;\n}\n\nbutton:hover {\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n\nh2 {\n  margin: 0;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.scores {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1em;\n  width: 100%;\n}\n\n.constructor {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  align-items: flex-start;\n  flex-direction: column-reverse;\n  gap: 2em;\n}\n\n.stylescores {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n  flex-direction: row;\n}\n\n.stylelist {\n  text-decoration: none;\n}\n\n.scorelist {\n  list-style: none;\n  padding: 0;\n}\n\n.Recentscores {\n  width: 100%;\n}\n\n.listscores:nth-child(even) { background: #ccc; }\n.listscores:nth-child(odd) { background: #fff; }\n\n@media screen and (min-width: 768px) {\n  .constructor {\n    justify-content: space-evenly;\n    align-items: flex-start;\n    flex-direction: row;\n  }\n}\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},a=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=t(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var c=t(s[a]);n[c].references--}for(var i=r(e,o),l=0;l<s.length;l++){var d=t(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),s=t(569),a=t.n(s),c=t(565),i=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=class{constructor(e,n){this.name=e,this.score=n}addscorelist(){const e=document.getElementById("scoreslist"),n=document.createElement("div");n.classList.add("listscores"),e.style.border="2px solid black",n.innerHTML=`<li>${this.name} : ${this.score}</li>`,e.appendChild(n),document.getElementById("form").reset()}},h=(e,n)=>{""===e&&""===n||(new v(e,n).addscorelist(),(async(e,n)=>{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores",{method:"POST",body:JSON.stringify({user:e,score:n}),headers:{"Content-type":"application/json; charset=UTF-8"}});try{return await t.json()}catch(e){throw new Error(e.message)}})(e,n))},y=document.getElementById("submit");document.getElementById("refresh").addEventListener("click",(async()=>{document.getElementById("scoreslist").innerHTML="<p>Loading...</p>";const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}});let n;try{e.ok&&(n=await e.json(),n.result.forEach((e=>{new v(e.user,e.score).addscorelist()})),document.querySelector("p").remove())}catch(e){throw new Error(e)}return n})),y.addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("nameplayer").value,t=document.getElementById("scoreplayer").value;h(n,t)}))})()})();