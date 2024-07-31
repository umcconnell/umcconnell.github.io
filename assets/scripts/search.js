(()=>{"use strict";var e,t,n,r,o={155:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(227),o=n(995);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=u(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var i=document.getElementById("search");i.value=new URLSearchParams(window.location.search).get("q")||"",i.focus();var s=await fetch("/searchindex.json").then((function(e){return e.json()})),c=new r.A(s.index,{keys:["title","description","content","tags"],includeScore:!0,ignoreLocation:!0});function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(document.getElementById("search-results").innerHTML="",document.getElementById("search-results-perf").innerHTML="",""===e)return document.getElementById("search-results-no-results").innerText="Search results will appear here",void document.getElementById("search-results-no-results").removeAttribute("hidden");var r=performance.now(),i=c.search(e).filter((function(e){return e.score<t})),s=performance.now();if(n&&(document.getElementById("search-results-perf").innerHTML="Found ".concat(i.length," result").concat(1==i.length?"":"s"," in ").concat(s-r," ms")),0===i.length)return console.log("No results found"),document.getElementById("search-results-no-results").innerText="No results ¯\\_(ツ)_/¯",void document.getElementById("search-results-no-results").removeAttribute("hidden");document.getElementById("search-results-no-results").setAttribute("hidden","");var a,h=l(i);try{for(h.s();!(a=h.n()).done;){var u=a.value.item,d=new Date(u.updated).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),f="<li>".concat((0,o.j)(u.url,u.title,d,u.description,u.tags,"card--search"),"</li>");document.getElementById("search-results").insertAdjacentHTML("beforeend",f)}}catch(e){h.e(e)}finally{h.f()}}""!==i.value&&f(i.value.trim()),i.addEventListener("input",(a=function(e){var t=i.value.trim();f(t),window.history.pushState({},"","?q=".concat(encodeURIComponent(t)))},150,function(){var e=this,t=arguments;clearTimeout(h),h=setTimeout((function(){h=null,a.apply(e,t)}),150)})),t()}catch(g){t(g)}var a,h}),1)},995:(e,t,n)=>{n.d(t,{j:()=>r});var r=function(e,t,n,r,o){return'<div class="card card--post '.concat(arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",'">\n        <h2 class="card__title"><a href="').concat(e,'">').concat(t,'</a></h2>\n        <strong class="card--post__date">').concat(n,'</strong>\n        <p class="card__description">').concat(r,"</p>\n        ").concat(function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return'<ul class="taglist '.concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",'">\n        ').concat(e.slice(t).map((function(e){return'<li class="taglist__tag"><a href="/posts/tags/'.concat(e,'">#').concat(e,"</a></li>")})).join(""),"\n    </ul> ")}(o,"card--post__taglist"),"\n    </div>")}},227:(e,t,n)=>{function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===h(e)}function o(e){return"string"==typeof e}function i(e){return"number"==typeof e}function s(e){return!0===e||!1===e||function(e){return function(e){return"object"==typeof e}(e)&&null!==e}(e)&&"[object Boolean]"==h(e)}function c(e){return null!=e}function a(e){return!e.trim().length}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}n.d(t,{A:()=>F});const l=e=>`Missing ${e} property in key`,u=e=>`Property 'weight' in key '${e}' must be a positive integer`,d=Object.prototype.hasOwnProperty;class f{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=g(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function g(e){let t=null,n=null,i=null,s=1,c=null;if(o(e)||r(e))i=e,t=p(e),n=m(e);else{if(!d.call(e,"name"))throw new Error(l("name"));const r=e.name;if(i=r,d.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(u(r));t=p(r),n=m(r),c=e.getFn}return{path:t,id:n,weight:s,src:i,getFn:c}}function p(e){return r(e)?e:e.split(".")}function m(e){return r(e)?e.join("."):e}var y={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let n=[],a=!1;const h=(e,t,l)=>{if(c(e))if(t[l]){const u=e[t[l]];if(!c(u))return;if(l===t.length-1&&(o(u)||i(u)||s(u)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(u));else if(r(u)){a=!0;for(let e=0,n=u.length;e<n;e+=1)h(u[e],t,l+1)}else t.length&&h(u,t,l+1)}else n.push(e)};return h(e,o(t)?t.split("."):t,0),a?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const v=/[^ ]+/g;class _{constructor({getFn:e=y.getFn,fieldNormWeight:t=y.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(t){const o=t.match(v).length;if(n.has(o))return n.get(o);const i=1/Math.pow(o,.5*e),s=parseFloat(Math.round(i*r)/r);return n.set(o,s),s},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,o(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();o(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!c(e)||a(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(c(s))if(r(s)){let e=[];const t=[{nestedArrIndex:-1,value:s}];for(;t.length;){const{nestedArrIndex:n,value:i}=t.pop();if(c(i))if(o(i)&&!a(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else r(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(o(s)&&!a(s)){let e={v:s,n:this.norm.get(s)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function M(e,t,{getFn:n=y.getFn,fieldNormWeight:r=y.fieldNormWeight}={}){const o=new _({getFn:n,fieldNormWeight:r});return o.setKeys(e.map(g)),o.setSources(t),o.create(),o}function w(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:o=y.distance,ignoreLocation:i=y.ignoreLocation}={}){const s=t/e.length;if(i)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}const x=32;function b(e,t,n,{location:r=y.location,distance:o=y.distance,threshold:i=y.threshold,findAllMatches:s=y.findAllMatches,minMatchCharLength:c=y.minMatchCharLength,includeMatches:a=y.includeMatches,ignoreLocation:h=y.ignoreLocation}={}){if(t.length>x)throw new Error("Pattern length exceeds max of 32.");const l=t.length,u=e.length,d=Math.max(0,Math.min(r,u));let f=i,g=d;const p=c>1||a,m=p?Array(u):[];let v;for(;(v=e.indexOf(t,g))>-1;){let e=w(t,{currentLocation:v,expectedLocation:d,distance:o,ignoreLocation:h});if(f=Math.min(e,f),g=v+l,p){let e=0;for(;e<l;)m[v+e]=1,e+=1}}g=-1;let _=[],M=1,b=l+u;const L=1<<l-1;for(let r=0;r<l;r+=1){let i=0,c=b;for(;i<c;)w(t,{errors:r,currentLocation:d+c,expectedLocation:d,distance:o,ignoreLocation:h})<=f?i=c:b=c,c=Math.floor((b-i)/2+i);b=c;let a=Math.max(1,d-c+1),y=s?u:Math.min(d+c,u)+l,v=Array(y+2);v[y+1]=(1<<r)-1;for(let i=y;i>=a;i-=1){let s=i-1,c=n[e.charAt(s)];if(p&&(m[s]=+!!c),v[i]=(v[i+1]<<1|1)&c,r&&(v[i]|=(_[i+1]|_[i])<<1|1|_[i+1]),v[i]&L&&(M=w(t,{errors:r,currentLocation:s,expectedLocation:d,distance:o,ignoreLocation:h}),M<=f)){if(f=M,g=s,g<=d)break;a=Math.max(1,2*d-g)}}if(w(t,{errors:r+1,currentLocation:d,expectedLocation:d,distance:o,ignoreLocation:h})>f)break;_=v}const k={isMatch:g>=0,score:Math.max(.001,M)};if(p){const e=function(e=[],t=y.minMatchCharLength){let n=[],r=-1,o=-1,i=0;for(let s=e.length;i<s;i+=1){let s=e[i];s&&-1===r?r=i:s||-1===r||(o=i-1,o-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(m,c);e.length?a&&(k.indices=e):k.isMatch=!1}return k}function L(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<r-n-1}return t}class k{constructor(e,{location:t=y.location,threshold:n=y.threshold,distance:r=y.distance,includeMatches:o=y.includeMatches,findAllMatches:i=y.findAllMatches,minMatchCharLength:s=y.minMatchCharLength,isCaseSensitive:c=y.isCaseSensitive,ignoreLocation:a=y.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:s,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(e,t)=>{this.chunks.push({pattern:e,alphabet:L(e),startIndex:t})},l=this.pattern.length;if(l>x){let e=0;const t=l%x,n=l-t;for(;e<n;)h(this.pattern.substr(e,x),e),e+=x;if(t){const e=l-x;h(this.pattern.substr(e),e)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:o,threshold:i,findAllMatches:s,minMatchCharLength:c,ignoreLocation:a}=this.options;let h=[],l=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:f})=>{const{isMatch:g,score:p,indices:m}=b(e,t,d,{location:r+f,distance:o,threshold:i,findAllMatches:s,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});g&&(u=!0),l+=p,g&&m&&(h=[...h,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=h),d}}const S=[];function E(e,t){for(let n=0,r=S.length;n<r;n+=1){let r=S[n];if(r.condition(e,t))return new r(e,t)}return new k(e,t)}function I(e,t){const n=e.matches;t.matches=[],c(n)&&n.forEach((e=>{if(!c(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let o={indices:n,value:r};e.key&&(o.key=e.key.src),e.idx>-1&&(o.refIndex=e.idx),t.matches.push(o)}))}function A(e,t){t.score=e.score}class F{constructor(e,t={},n){if(this.options={...y,...t},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new f(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof _))throw new Error("Incorrect 'index' type");this._myIndex=t||M(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){c(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,r-=1,t.push(o))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:s,sortFn:c,ignoreFieldNorm:a}=this.options;let h=o(e)?o(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=y.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:o})=>{const i=e?e.weight:null;n*=Math.pow(0===o&&i?Number.EPSILON:o,(i||1)*(t?1:r))})),e.score=n}))}(h,{ignoreFieldNorm:a}),s&&h.sort(c),i(t)&&t>-1&&(h=h.slice(0,t)),function(e,t,{includeMatches:n=y.includeMatches,includeScore:r=y.includeScore}={}){const o=[];return n&&o.push(I),r&&o.push(A),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return o.length&&o.forEach((t=>{t(e,r)})),r}))}(h,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=E(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:o})=>{if(!c(e))return;const{isMatch:i,score:s,indices:a}=t.searchIn(e);i&&r.push({item:e,idx:n,matches:[{score:s,value:e,norm:o,indices:a}]})})),r}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const t=E(e,this.options),{keys:n,records:r}=this._myIndex,o=[];return r.forEach((({$:e,i:r})=>{if(!c(e))return;let i=[];n.forEach(((n,r)=>{i.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),i.length&&o.push({idx:r,item:e,matches:i})})),o}_findMatches({key:e,value:t,searcher:n}){if(!c(t))return[];let o=[];if(r(t))t.forEach((({v:t,i:r,n:i})=>{if(!c(t))return;const{isMatch:s,score:a,indices:h}=n.searchIn(t);s&&o.push({score:a,key:e,value:t,idx:r,norm:i,indices:h})}));else{const{v:r,n:i}=t,{isMatch:s,score:c,indices:a}=n.searchIn(r);s&&o.push({score:c,key:e,value:r,norm:i,indices:a})}return o}}F.version="7.0.0",F.createIndex=M,F.parseIndex=function(e,{getFn:t=y.getFn,fieldNormWeight:n=y.fieldNormWeight}={}){const{keys:r,records:o}=e,i=new _({getFn:t,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(o),i},F.config=y}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,s),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(o,i,s)=>{var c;s&&((c=[]).d=-1);var a,h,l,u=new Set,d=o.exports,f=new Promise(((e,t)=>{l=t,h=e}));f[t]=d,f[e]=e=>(c&&e(c),u.forEach(e),f.catch((e=>{}))),o.exports=f,i((o=>{var i;a=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var i=[];i.d=0,o.then((e=>{s[t]=e,r(i)}),(e=>{s[n]=e,r(i)}));var s={};return s[e]=e=>e(i),s}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var s=()=>a.map((e=>{if(e[n])throw e[n];return e[t]})),h=new Promise((t=>{(i=()=>t(s)).r=0;var n=e=>e!==c&&!u.has(e)&&(u.add(e),e&&!e.d&&(i.r++,e.push(i)));a.map((t=>t[e](n)))}));return i.r?h:s()}),(e=>(e?l(f[n]=e):h(d),r(c)))),c&&c.d<0&&(c.d=0)},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s(155)})();