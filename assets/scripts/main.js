/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={674:()=>{window.addEventListener("keydown",(function(e){var t=e.key,n=e.ctrlKey;"e"!==t&&"E"!==t||!n||(document.designMode="off"===document.designMode?"on":"off")})),console.log("\n ___________________________________________________\n/                                                   \\\n| Hey there!                                         |\n| Nice to see you here :)                            |\n|                                                    |\n| Try clicking on the website content and            |\n| pressing Ctrl/Cmd + 'e' on your keyboard...        |\n|                                                    |\n| The full source of this website is available on    |\n| Github:                                            |\n| https://github.com/umcconnell/umcconnell.github.io |                                          \n\\                                                   /\n ===================================================\n                                                    \\\n                                                     \\\n                                                        ^__^                             \n                                                        (oo)\\_______                   \n                                                        (__)\\       )\\/\\             \n                                                            ||----w |           \n                                                            ||     ||  \n                                                            \n\n")},202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(202);var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},s=function(e,t){return!(!c(e,t)||function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(t)||i(t)<0)},d=t.concat("iframe").join(","),l=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,d)&&c(t,e)};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p,m=(p=[],{activateTrap:function(e){if(p.length>0){var t=p[p.length-1];t!==e&&t.pause()}var n=p.indexOf(e);-1===n||p.splice(n,1),p.push(e)},deactivateTrap:function(e){var t=p.indexOf(e);-1!==t&&p.splice(t,1),p.length>0&&p[p.length-1].unpause()}}),b=function(e){return setTimeout(e,0)},h=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},E=function(e,t){var n,u=document,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),d={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},p=function(e,t,n){return e&&void 0!==e[t]?e[t]:c[n||t]},E=function(e){return d.containers.some((function(t){return t.contains(e)}))},g=function(e){var t=c[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=u.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},w=function(){var e;if(!1===p({},"initialFocus"))return!1;if(null!==g("initialFocus"))e=g("initialFocus");else if(E(u.activeElement))e=u.activeElement;else{var t=d.tabbableGroups[0];e=t&&t.firstTabbableNode||g("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},_=function(){if(d.tabbableGroups=d.containers.map((function(e){var t,n,u,c,d,l,f,v=(n=[],u=[],(c=e,d=(t=t||{}).includeContainer,l=s.bind(null,t),f=Array.prototype.slice.apply(c.querySelectorAll(o)),d&&r.call(c,o)&&f.unshift(c),f.filter(l)).forEach((function(e,t){var o=i(e);0===o?n.push(e):u.push({documentOrder:t,tabIndex:o,node:e})})),u.sort(a).map((function(e){return e.node})).concat(n));if(v.length>0)return{container:e,firstTabbableNode:v[0],lastTabbableNode:v[v.length-1]}})).filter((function(e){return!!e})),d.tabbableGroups.length<=0&&!g("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},L=function e(t){!1!==t&&t!==u.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!c.preventScroll}),d.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},O=function(e){return g("setReturnFocus")||e},T=function(e){E(e.target)||(y(c.clickOutsideDeactivates,e)?n.deactivate({returnFocus:c.returnFocusOnDeactivate&&!l(e.target)}):y(c.allowOutsideClick,e)||e.preventDefault())},N=function(e){var t=E(e.target);t||e.target instanceof Document?t&&(d.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),L(d.mostRecentlyFocusedNode||w()))},k=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==y(c.escapeDeactivates))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){_();var t=null;if(d.tabbableGroups.length>0){var n=h(d.tabbableGroups,(function(t){return t.container.contains(e.target)}));if(n<0)t=e.shiftKey?d.tabbableGroups[d.tabbableGroups.length-1].lastTabbableNode:d.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var o=h(d.tabbableGroups,(function(t){var n=t.firstTabbableNode;return e.target===n}));if(o<0&&d.tabbableGroups[n].container===e.target&&(o=n),o>=0){var r=0===o?d.tabbableGroups.length-1:o-1;t=d.tabbableGroups[r].lastTabbableNode}}else{var i=h(d.tabbableGroups,(function(t){var n=t.lastTabbableNode;return e.target===n}));if(i<0&&d.tabbableGroups[n].container===e.target&&(i=n),i>=0){var a=i===d.tabbableGroups.length-1?0:i+1;t=d.tabbableGroups[a].firstTabbableNode}}}else t=g("fallbackFocus");t&&(e.preventDefault(),L(t))}(e)},S=function(e){y(c.clickOutsideDeactivates,e)||E(e.target)||y(c.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},F=function(){if(d.active)return m.activateTrap(n),d.delayInitialFocusTimer=c.delayInitialFocus?b((function(){L(w())})):L(w()),u.addEventListener("focusin",N,!0),u.addEventListener("mousedown",T,{capture:!0,passive:!1}),u.addEventListener("touchstart",T,{capture:!0,passive:!1}),u.addEventListener("click",S,{capture:!0,passive:!1}),u.addEventListener("keydown",k,{capture:!0,passive:!1}),n},C=function(){if(d.active)return u.removeEventListener("focusin",N,!0),u.removeEventListener("mousedown",T,!0),u.removeEventListener("touchstart",T,!0),u.removeEventListener("click",S,!0),u.removeEventListener("keydown",k,!0),n};return(n={activate:function(e){if(d.active)return this;var t=p(e,"onActivate"),n=p(e,"onPostActivate"),o=p(e,"checkCanFocusTrap");o||_(),d.active=!0,d.paused=!1,d.nodeFocusedBeforeActivation=u.activeElement,t&&t();var r=function(){o&&_(),F(),n&&n()};return o?(o(d.containers.concat()).then(r,r),this):(r(),this)},deactivate:function(e){if(!d.active)return this;clearTimeout(d.delayInitialFocusTimer),d.delayInitialFocusTimer=void 0,C(),d.active=!1,d.paused=!1,m.deactivateTrap(n);var t=p(e,"onDeactivate"),o=p(e,"onPostDeactivate"),r=p(e,"checkCanReturnFocus");t&&t();var i=p(e,"returnFocus","returnFocusOnDeactivate"),a=function(){b((function(){i&&L(O(d.nodeFocusedBeforeActivation)),o&&o()}))};return i&&r?(r(O(d.nodeFocusedBeforeActivation)).then(a,a),this):(a(),this)},pause:function(){return d.paused||!d.active||(d.paused=!0,C()),this},unpause:function(){return d.paused&&d.active?(d.paused=!1,_(),F(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return d.containers=t.map((function(e){return"string"==typeof e?u.querySelector(e):e})),d.active&&_(),this}}).updateContainerElements(e),n},g=".js-nav",w=function(){function t(){var e=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.isOpen=!1,this.nav=document.querySelector(g),this.toggleBtn=this.nav.querySelector(".js-nav-toggle"),this.focusTrap=E(this.nav),this.toggleBtn.addEventListener("click",(function(){return e.toggleMenu()}))}var n,o;return n=t,(o=[{key:"toggleMenu",value:function(e){this.isOpen="boolean"==typeof e?e:!this.isOpen,this.nav.classList.toggle("is-open",this.isOpen),this.toggleBtn.setAttribute("aria-expanded",String(this.isOpen)),this.isOpen?this.focusTrap.activate():this.focusTrap.deactivate()}}])&&e(n.prototype,o),t}();document.querySelector(g)&&new w,n(674)})()})();