!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var a=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(e.i,i,o),i.locals?i.locals:{});e.exports=r},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r={};function c(e,n,t){for(var a=0;a<n.length;a++){var i={css:n[a][1],media:n[a][2],sourceMap:n[a][3]};r[e][a]?r[e][a](i):r[e].push(p(i,t))}}function d(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=s(n,i);else{var o=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function m(e,n,t){var a=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var v=null,f=0;function p(e,n){var t,a,i;if(n.singleton){var o=f++;t=v||(v=d(n)),a=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=d(n),a=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i()),e=t.base?e+t.base:e,n=n||[],r[e]||(r[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){r[e]||(r[e]=[]),c(e,n,t);for(var a=n.length;a<r[e].length;a++)r[e][a]();r[e].length=n.length,0===r[e].length&&delete r[e]}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"nav {\n  background-color: #e53935;\n}\n\nh1 {\n  color: #e53935;\n}\n\n.main-img {\n  width: 100%;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(r=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var r,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var a=0;a<e.length;a++){var i=[].concat(e[a]);t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),n.push(i)}},n}},function(e,n,t){"use strict";t.r(n);t(0);var a=t.p+"6c0deee3eec6ad1f563c1ccb3635d724.jpg",i={renderNavbar:function(){var e=document.getElementById("content"),n=document.createElement("nav");n.innerHTML='\n    <div class="nav-wrapper navigation navigation container">\n      <a id ="init" href="#" class="brand-logo">Restaurant</a>\n      <ul id="nav-mobile" class="right hide-on-med-and-down">\n        <li><a id="about" href="#">About</a></li>\n        <li><a id="menu" href="#">Menu</a></li>\n        <li><a id="contact" href="#">Contact</a></li>\n      </ul>\n    </div>',e.appendChild(n)},renderMainPage:function(){var e=document.getElementById("content"),n=document.createElement("div");n.innerHTML="\n      <h1>WELCOME TO THE RESTAURANT</h1>";var t=document.createElement("img");t.classList.add("main-img"),e.classList.add("center-align"),e.classList.add("center-align"),t.src=a,e.appendChild(n),e.appendChild(t)},showMainPage:function(){var e=document.querySelector(".main-img"),n=document.querySelector("h1");e.style.display="block",n.style.display="block"},removeMainPage:function(){var e=document.querySelector(".main-img"),n=document.querySelector("h1");e.style.display="none",n.style.display="none"}},o={renderAbout:function(){var e=document.getElementById("content"),n=document.createElement("div");n.innerHTML='\n      <h1 class="center-align">THIS IS AN ABOUT PAGE</h1>',n.classList.add("about"),n.style.display="none",e.appendChild(n)},showAbout:function(){document.querySelector(".about").style.display="block"},removeAbout:function(){document.querySelector(".about").style.display="none"}},r={renderContact:function(){var e=document.getElementById("content"),n=document.createElement("div");n.innerHTML='\n    <h1 class="center-align">CONTACT US</h1>\n    <div class="row">\n    <form class="col s8 offset-m4">\n      <div class="row">\n        <div class="input-field col s3">\n          <input id="first_name" type="text" class="validate">\n          <label for="first_name">First Name</label>\n        </div>\n        <div class="input-field col s3">\n          <input id="last_name" type="text" class="validate">\n          <label for="last_name">Last Name</label>\n        </div>\n      </div>\n      <div class="row">\n      <div class="input-field col s6">\n        <input id="email" type="email" class="validate">\n        <label for="email">Email</label>\n      </div>\n    </div>\n      <div class="row">\n        <div class="input-field col s6">\n          <input value="Write your message" type="text" class="validate">\n          <label for="disabled">Message</label>\n        </div>\n      </div>\n      <button class="btn waves-effect waves-light left red darken-3" type="submit" name="action">SUBMIT</button>\n    </form>\n  </div>',n.classList.add("contact"),n.style.display="none",e.appendChild(n)},showContact:function(){document.querySelector(".contact").style.display="block"},removeContact:function(){document.querySelector(".contact").style.display="none"}},c=t.p+"49e47790d06ff7e0a0eb0c1e203459fe.jpg",d=t.p+"e124ad2276db6e220ef99b79d60205c4.jpg",l=t.p+"e1b520090e6ff3ab96381f16780aac79.jpg",s={renderMenu:function(){var e=document.getElementById("content"),n=document.createElement("div");n.innerHTML='<h1>Menu</h1>\n      <div class="row">\n        <div class="col s12 m4">\n          <div class="card small">\n            <div class="card-image">\n              <img id="img-1">\n            </div>\n            <div class="card-content">\n              <p>Lasagne, or the singular lasagna, commonly refers to a culinary dish made with stacked layers of pasta alternated with sauces and ingredients such as vegetables and cheese.</p>\n            </div>\n          </div>\n        </div>\n        <div class="col s12 m4">\n        <div class="card small">\n          <div class="card-image">\n            <img id="img-2">\n          </div>\n          <div class="card-content">\n            <p>Pasta is a type of Italian food typically made from an unleavened dough of durum wheat flour.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col s12 m4">\n      <div class="card small">\n        <div class="card-image">\n          <img id="img-3">\n        </div>\n        <div class="card-content">\n          <p>Pizza definition is - a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings.</p>\n        </div>\n      </div>\n    </div>\n      </div>',n.classList.add("menu"),n.style.display="none",e.appendChild(n),document.getElementById("img-1").src=c,document.getElementById("img-2").src=d,document.getElementById("img-3").src=l},showMenu:function(){document.querySelector(".menu").style.display="block"},removeMenu:function(){document.querySelector(".menu").style.display="none"}};!function(){i.renderNavbar(),i.renderMainPage(),o.renderAbout(),r.renderContact(),s.renderMenu();var e=document.getElementById("init"),n=document.getElementById("about"),t=document.getElementById("contact"),a=document.getElementById("menu");e.addEventListener("click",s.removeMenu),e.addEventListener("click",r.removeContact),e.addEventListener("click",o.removeAbout),e.addEventListener("click",i.showMainPage),n.addEventListener("click",s.removeMenu),n.addEventListener("click",r.removeContact),n.addEventListener("click",i.removeMainPage),n.addEventListener("click",o.showAbout),t.addEventListener("click",s.removeMenu),t.addEventListener("click",o.removeAbout),t.addEventListener("click",i.removeMainPage),t.addEventListener("click",r.showContact),a.addEventListener("click",o.removeAbout),a.addEventListener("click",r.removeContact),a.addEventListener("click",i.removeMainPage),a.addEventListener("click",s.showMenu)}()}]);