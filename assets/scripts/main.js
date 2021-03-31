/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={674:()=>{window.addEventListener("keydown",(function(e){var t=e.key,n=e.ctrlKey;"e"!==t&&"E"!==t||!n||(document.designMode="off"===document.designMode?"on":"off")})),console.log("\n ___________________________________________________\n/                                                   \\\n| Hey there!                                         |\n| Nice to see you here :)                            |\n|                                                    |\n| Try clicking on the website content and            |\n| pressing Ctrl/Cmd + 'e' on your keyboard...        |\n|                                                    |\n| The full source of this website is available on    |\n| Github:                                            |\n| https://github.com/umcconnell/umcconnell.github.io |                                          \n\\                                                   /\n ===================================================\n                                                    \\\n                                                     \\\n                                                        ^__^                             \n                                                        (oo)\\_______                   \n                                                        (__)\\       )\\/\\             \n                                                            ||----w |           \n                                                            ||     ||  \n                                                            \n\n")},202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(202);var t,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],r=o.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},c=function(e){return"INPUT"===e.tagName},s=function(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},d=function(e){return!(!s(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(e)||a(e)<0)},l=o.concat("iframe").join(","),f=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,l)&&s(e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var m,b=(m=[],{activateTrap:function(e){if(m.length>0){var t=m[m.length-1];t!==e&&t.pause()}var n=m.indexOf(e);-1===n||m.splice(n,1),m.push(e)},deactivateTrap:function(e){var t=m.indexOf(e);-1!==t&&m.splice(t,1),m.length>0&&m[m.length-1].unpause()}}),y=function(e){return setTimeout(e,0)},h=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},g=function(e,n){var o,c=document,s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),l={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},m=function(e){return l.containers.some((function(t){return t.contains(e)}))},g=function(e){var t=s[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=c.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},w=function(){var e;if(null!==g("initialFocus"))e=g("initialFocus");else if(m(c.activeElement))e=c.activeElement;else{var t=l.tabbableGroups[0];e=t&&t.firstTabbableNode||g("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},_=function(){if(l.tabbableGroups=l.containers.map((function(e){var t,n,o,c,s,l,f,v=(n=[],o=[],(c=e,s=(t=t||{}).includeContainer,l=d,f=Array.prototype.slice.apply(c.querySelectorAll(r)),s&&i.call(c,r)&&f.unshift(c),f.filter(l)).forEach((function(e,t){var r=a(e);0===r?n.push(e):o.push({documentOrder:t,tabIndex:r,node:e})})),o.sort(u).map((function(e){return e.node})).concat(n));if(v.length>0)return{container:e,firstTabbableNode:v[0],lastTabbableNode:v[v.length-1]}})).filter((function(e){return!!e})),l.tabbableGroups.length<=0&&!g("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},L=function e(t){t!==c.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!s.preventScroll}),l.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},O=function(e){m(e.target)||(E(s.clickOutsideDeactivates,e)?o.deactivate({returnFocus:s.returnFocusOnDeactivate&&!f(e.target)}):E(s.allowOutsideClick,e)||e.preventDefault())},N=function(e){var t=m(e.target);t||e.target instanceof Document?t&&(l.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),L(l.mostRecentlyFocusedNode||w()))},T=function(e){if(!1!==s.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void o.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){_();var t=null;if(l.tabbableGroups.length>0)if(h(l.tabbableGroups,(function(t){return t.container.contains(e.target)}))<0)t=e.shiftKey?l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode:l.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var n=h(l.tabbableGroups,(function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var o=0===n?l.tabbableGroups.length-1:n-1;t=l.tabbableGroups[o].lastTabbableNode}}else{var r=h(l.tabbableGroups,(function(t){var n=t.lastTabbableNode;return e.target===n}));if(r>=0){var i=r===l.tabbableGroups.length-1?0:r+1;t=l.tabbableGroups[i].firstTabbableNode}}else t=g("fallbackFocus");t&&(e.preventDefault(),L(t))}(e)},k=function(e){E(s.clickOutsideDeactivates,e)||m(e.target)||E(s.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(l.active)return b.activateTrap(o),t=s.delayInitialFocus?y((function(){L(w())})):L(w()),c.addEventListener("focusin",N,!0),c.addEventListener("mousedown",O,{capture:!0,passive:!1}),c.addEventListener("touchstart",O,{capture:!0,passive:!1}),c.addEventListener("click",k,{capture:!0,passive:!1}),c.addEventListener("keydown",T,{capture:!0,passive:!1}),o},D=function(){if(l.active)return c.removeEventListener("focusin",N,!0),c.removeEventListener("mousedown",O,!0),c.removeEventListener("touchstart",O,!0),c.removeEventListener("click",k,!0),c.removeEventListener("keydown",T,!0),o};return(o={activate:function(e){if(l.active)return this;_(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=c.activeElement;var t=e&&e.onActivate?e.onActivate:s.onActivate;return t&&t(),S(),this},deactivate:function(e){if(!l.active)return this;clearTimeout(t),D(),l.active=!1,l.paused=!1,b.deactivateTrap(o);var n=e&&void 0!==e.onDeactivate?e.onDeactivate:s.onDeactivate;return n&&n(),(e&&void 0!==e.returnFocus?e.returnFocus:s.returnFocusOnDeactivate)&&y((function(){var e;L((e=l.nodeFocusedBeforeActivation,g("setReturnFocus")||e))})),this},pause:function(){return l.paused||!l.active||(l.paused=!0,D()),this},unpause:function(){return l.paused&&l.active?(l.paused=!1,_(),S(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return l.containers=t.map((function(e){return"string"==typeof e?c.querySelector(e):e})),l.active&&_(),this}}).updateContainerElements(e),o},w=".js-nav",_=function(){function t(){var e=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.isOpen=!1,this.nav=document.querySelector(w),this.toggleBtn=this.nav.querySelector(".js-nav-toggle"),this.focusTrap=g(this.nav),this.toggleBtn.addEventListener("click",(function(){return e.toggleMenu()}))}var n,o;return n=t,(o=[{key:"toggleMenu",value:function(e){this.isOpen="boolean"==typeof e?e:!this.isOpen,this.nav.classList.toggle("is-open",this.isOpen),this.toggleBtn.setAttribute("aria-expanded",String(this.isOpen)),this.isOpen?this.focusTrap.activate():this.focusTrap.deactivate()}}])&&e(n.prototype,o),t}();document.querySelector(w)&&new _,n(674)})()})();