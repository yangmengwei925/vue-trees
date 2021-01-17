!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-c-trees",[],t):"object"==typeof exports?exports["vue-c-trees"]=t():e["vue-c-trees"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";var r=n(5);t.a={props:{data:{type:[Object,Array],required:!0}},components:{cTreeItem:r.a}}},function(e,t,n){"use strict";t.a={name:"TreeItem",props:{data:{type:[Object,Array],required:!0}},data:function(){return{open:!1}},computed:{hasChild:function(){return this.data.children&&this.data.children.length}},methods:{toggle:function(){this.hasChild&&(this.open=!this.open)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=[r.a],i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&i(window.Vue),t.default={install:i,cTree:r.a}},function(e,t,n){"use strict";var r=n(1),o=n(12),i=n(0),a=i(r.a,o.a,!1,null,null,null);t.a=a.exports},function(e,t,n){"use strict";function r(e){n(6)}var o=n(2),i=n(11),a=n(0),s=r,u=a(o.a,i.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(9)("3e2393ea",r,!0,{})},function(e,t,n){t=e.exports=n(8)(!1),t.push([e.i,"ul{list-style:none;margin:10px 0}li{padding:3px 0}li>span{cursor:pointer;font-size:14px;line-height:20px}li>span:visited{background:#fff}em.icon{display:inline-block;width:20px;height:20px;margin-right:5px;background-repeat:no-repeat;vertical-align:middle}.tree-menu li{line-height:1.5}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(10),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,m=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=d[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],d={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",{on:{click:e.toggle}},[e.hasChild?n("em",{staticClass:"icon"},[e._v(e._s(e.open?"-":"+"))]):e._e(),e._v(" "),e.hasChild?e._e():n("em",{staticClass:"icon file-text"}),e._v("\n        "+e._s(e.data.name)+"\n    ")]),e._v(" "),e.hasChild?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}]},e._l(e.data.children,function(e,t){return n("tree-item",{key:t,attrs:{data:e}})})):e._e()])},o=[],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-menu"},e._l(e.data,function(e){return n("ul",[n("c-tree-item",{attrs:{data:e}})],1)}))},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=vue-c-trees.js.map