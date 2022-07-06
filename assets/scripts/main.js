/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={674:()=>{window.addEventListener("keydown",(function(e){var t=e.key,n=e.ctrlKey;"e"!==t&&"E"!==t||!n||(document.designMode="off"===document.designMode?"on":"off")})),console.log("\n ___________________________________________________\n/                                                   \\\n| Hey there!                                         |\n| Nice to see you here :)                            |\n|                                                    |\n| Try clicking on the website content and            |\n| pressing Ctrl/Cmd + 'e' on your keyboard...        |\n|                                                    |\n| The full source of this website is available on    |\n| Github:                                            |\n| https://github.com/umcconnell/umcconnell.github.io |                                          \n\\                                                   /\n ===================================================\n                                                    \\\n                                                     \\\n                                                        ^__^                             \n                                                        (oo)\\_______                   \n                                                        (__)\\       )\\/\\             \n                                                            ||----w |           \n                                                            ||     ||  \n                                                            \n\n")},202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&i(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,u;a(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&i(e.target)}),!0),e.addEventListener("blur",(function(e){var t;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(202);var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=t.join(","),r="undefined"==typeof Element,a=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!r&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r.filter(n)},c=function e(t,n,r){for(var i=[],u=Array.from(t);u.length;){var c=u.shift();if("SLOT"===c.tagName){var s=c.assignedElements(),d=e(s.length?s:c.children,!0,r);r.flatten?i.push.apply(i,d):i.push({scope:c,candidates:d})}else{a.call(c,o)&&r.filter(c)&&(n||!t.includes(c))&&i.push(c);var l=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),f=!r.shadowRootFilter||r.shadowRootFilter(c);if(l&&f){var v=e(!0===l?c.children:l.children,!0,r);r.flatten?i.push.apply(i,v):i.push({scope:c,candidates:v})}else u.unshift.apply(u,c.children)}}return i},s=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},f=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},v=function(e,t){return!(t.disabled||function(e){return l(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(r,"details:not([open]) *"))return!0;var u=i(e).host,c=(null==u?void 0:u.ownerDocument.contains(u))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return f(e)}else{if("function"==typeof o){for(var s=e;e;){var d=e.parentElement,l=i(e);if(d&&!d.shadowRoot&&!0===o(d))return f(e);e=e.assignedSlot?e.assignedSlot:d||l===e.ownerDocument?d:l.host}e=s}if(c)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!a.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},p=function(e,t){return!(function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||i(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(t)||s(t)<0||!v(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},m=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scope,i=a?t.scope:t,u=s(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:u,item:t,isScope:a,content:c})})),o.sort(d).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},h=function(e,t){var n;return n=(t=t||{}).getShadowRoot?c([e],t.includeContainer,{filter:p.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):u(e,t.includeContainer,p.bind(null,t)),m(n)},y=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,o)&&p(t,e)},g=t.concat("iframe").join(","),E=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,g)&&v(t,e)};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,L=(N=[],{activateTrap:function(e){if(N.length>0){var t=N[N.length-1];t!==e&&t.pause()}var n=N.indexOf(e);-1===n||N.splice(n,1),N.push(e)},deactivateTrap:function(e){var t=N.indexOf(e);-1!==t&&N.splice(t,1),N.length>0&&N[N.length-1].unpause()}}),T=function(e){return setTimeout(e,0)},S=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},D=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},k=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},C=".js-nav",F=function(){function t(){var e,n,o,r,a,i,s,d,l,f,p,b,m,g,w,O,N,F,A,R=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.isOpen=!1,this.nav=document.querySelector(C),this.toggleBtn=this.nav.querySelector(".js-nav-toggle"),this.focusTrap=(e=this.nav,r=(null==n?void 0:n.document)||document,a=_({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},d=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,o=t.tabbableNodes;return n.contains(e)||o.find((function(t){return t===e}))}))},l=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return u},f=function(){var e=l("initialFocus");if(!1===e)return!1;if(void 0===e)if(d(r.activeElement)>=0)e=r.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,o=h(e,a.tabbableOptions),r=(t=e,(n=(n=a.tabbableOptions)||{}).getShadowRoot?c([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):u(t,n.includeContainer,v.bind(null,n)));return{container:e,tabbableNodes:o,focusableNodes:r,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=r.findIndex((function(t){return t===e}));if(!(n<0))return t?r.slice(n+1).find((function(e){return y(e,a.tabbableOptions)})):r.slice(0,n).reverse().find((function(e){return y(e,a.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},b=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!a.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},m=function(e){var t=l("setReturnFocus",e);return t||!1!==t&&e},g=function(e){var t=k(e);d(t)>=0||(D(a.clickOutsideDeactivates,e)?o.deactivate({returnFocus:a.returnFocusOnDeactivate&&!E(t,a.tabbableOptions)}):D(a.allowOutsideClick,e)||e.preventDefault())},w=function(e){var t=k(e),n=d(t)>=0;n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),b(i.mostRecentlyFocusedNode||f()))},O=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==D(a.escapeDeactivates,e))return e.preventDefault(),void o.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=k(e);p();var n=null;if(i.tabbableGroups.length>0){var o=d(t),r=o>=0?i.containerGroups[o]:void 0;if(o<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=S(i.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(u<0&&(r.container===t||E(t,a.tabbableOptions)&&!y(t,a.tabbableOptions)&&!r.nextTabbableNode(t,!1))&&(u=o),u>=0){var c=0===u?i.tabbableGroups.length-1:u-1;n=i.tabbableGroups[c].lastTabbableNode}}else{var s=S(i.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(s<0&&(r.container===t||E(t,a.tabbableOptions)&&!y(t,a.tabbableOptions)&&!r.nextTabbableNode(t))&&(s=o),s>=0){var f=s===i.tabbableGroups.length-1?0:s+1;n=i.tabbableGroups[f].firstTabbableNode}}}else n=l("fallbackFocus");n&&(e.preventDefault(),b(n))}(e)},N=function(e){var t=k(e);d(t)>=0||D(a.clickOutsideDeactivates,e)||D(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},F=function(){if(i.active)return L.activateTrap(o),i.delayInitialFocusTimer=a.delayInitialFocus?T((function(){b(f())})):b(f()),r.addEventListener("focusin",w,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",N,{capture:!0,passive:!1}),r.addEventListener("keydown",O,{capture:!0,passive:!1}),o},A=function(){if(i.active)return r.removeEventListener("focusin",w,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",N,!0),r.removeEventListener("keydown",O,!0),o},(o={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=s(e,"onActivate"),n=s(e,"onPostActivate"),o=s(e,"checkCanFocusTrap");o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t();var a=function(){o&&p(),F(),n&&n()};return o?(o(i.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!i.active)return this;var t=_({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,A(),i.active=!1,i.paused=!1,L.deactivateTrap(o);var n=s(t,"onDeactivate"),r=s(t,"onPostDeactivate"),u=s(t,"checkCanReturnFocus"),c=s(t,"returnFocus","returnFocusOnDeactivate");n&&n();var d=function(){T((function(){c&&b(m(i.nodeFocusedBeforeActivation)),r&&r()}))};return c&&u?(u(m(i.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,A()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),F(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&p(),this}}).updateContainerElements(e),o),this.toggleBtn.addEventListener("click",(function(){return R.toggleMenu()}))}var n,o;return n=t,(o=[{key:"toggleMenu",value:function(e){this.isOpen="boolean"==typeof e?e:!this.isOpen,this.nav.classList.toggle("is-open",this.isOpen),this.toggleBtn.setAttribute("aria-expanded",String(this.isOpen)),this.isOpen?this.focusTrap.activate():this.focusTrap.deactivate()}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();document.querySelector(C)&&new F,n(674)})()})();