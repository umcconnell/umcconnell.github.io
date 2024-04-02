/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={844:()=>{window.addEventListener("keydown",(function(e){var t=e.key,n=e.ctrlKey;"e"!==t&&"E"!==t||!n||(document.designMode="off"===document.designMode?"on":"off")})),console.log("\n ___________________________________________________\n/                                                   \\\n| Hey there!                                         |\n| Nice to see you here :)                            |\n|                                                    |\n| Try clicking on the website content and            |\n| pressing Ctrl/Cmd + 'e' on your keyboard...        |\n|                                                    |\n| The full source of this website is available on    |\n| Github:                                            |\n| https://github.com/umcconnell/umcconnell.github.io |                                          \n\\                                                   /\n ===================================================\n                                                    \\\n                                                     \\\n                                                        ^__^                             \n                                                        (oo)\\_______                   \n                                                        (__)\\       )\\/\\             \n                                                            ||----w |           \n                                                            ||     ||  \n                                                            \n\n")},842:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function o(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t(r.key),r)}}n(842);var r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],i=r.join(","),a="undefined"==typeof Element,u=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!a&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){var o;void 0===n&&(n=!0);var r=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},l=function(e,t,n){if(s(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(i));return t&&u.call(e,i)&&o.unshift(e),o.filter(n)},d=function e(t,n,o){for(var r=[],a=Array.from(t);a.length;){var c=a.shift();if(!s(c,!1))if("SLOT"===c.tagName){var l=c.assignedElements(),d=e(l.length?l:c.children,!0,o);o.flatten?r.push.apply(r,d):r.push({scopeParent:c,candidates:d})}else{u.call(c,i)&&o.filter(c)&&(n||!t.includes(c))&&r.push(c);var f=c.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(c),v=!s(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(c));if(f&&v){var p=e(!0===f?c.children:f.children,!0,o);o.flatten?r.push.apply(r,p):r.push({scopeParent:c,candidates:p})}else a.unshift.apply(a,c.children)}}return r},f=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},v=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!f(e)?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},b=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},h=function(e,t){return!(t.disabled||s(t)||function(e){return b(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=u.call(e,"details>summary:first-of-type")?e.parentElement:e;if(u.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof o){for(var i=e;e;){var a=e.parentElement,s=c(e);if(a&&!a.shadowRoot&&!0===o(a))return m(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,o,r,i=e&&c(e),a=null===(t=i)||void 0===t?void 0:t.host,u=!1;if(i&&i!==e)for(u=!!(null!==(n=a)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(a)||null!=e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(e));!u&&a;){var s,l,d;u=!(null===(l=a=null===(s=i=c(a))||void 0===s?void 0:s.host)||void 0===l||null===(d=l.ownerDocument)||void 0===d||!d.contains(a))}return u}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!u.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},y=function(e,t){return!(function(e){return function(e){return b(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(t)||v(t)<0||!h(e,t))},w=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},g=function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scopeParent,a=i?t.scopeParent:t,u=function(e,t){var n=v(e);return n<0&&t&&!f(e)?0:n}(a,i),c=i?e(t.candidates):a;0===u?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:u,item:t,isScope:i,content:c})})),o.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},E=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==u.call(e,i)&&y(t,e)},N=r.concat("iframe").join(","),_=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==u.call(e,N)&&h(t,e)};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){var o,r,i;o=e,r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(r))in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},S=function(e){return L(e)&&!e.shiftKey},F=function(e){return L(e)&&e.shiftKey},k=function(e){return setTimeout(e,0)},D=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},R=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},P=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},A=[],C=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=(null==t?void 0:t.trapStack)||A,i=T({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:S,isKeyBackward:F},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},c=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return a.containerGroups.findIndex((function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||r.find((function(t){return t===e}))}))},s=function(e){var t=i[e];if("function"==typeof t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t=t.apply(void 0,r)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return u},f=function(){var e=s("initialFocus");if(!1===e)return!1;if(void 0===e||!_(e,i.tabbableOptions))if(c(o.activeElement)>=0)e=o.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(a.containerGroups=a.containers.map((function(e){var t=function(e,t){var n;return n=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:y.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:w}):l(e,t.includeContainer,y.bind(null,t)),g(n)}(e,i.tabbableOptions),n=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):l(e,t.includeContainer,h.bind(null,t))}(e,i.tabbableOptions),o=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,a=n.find((function(e){return E(e)})),u=n.slice().reverse().find((function(e){return E(e)})),c=!!t.find((function(e){return v(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:o,lastTabbableNode:r,firstDomTabbableNode:a,lastDomTabbableNode:u,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?o?n.slice(n.indexOf(e)+1).find((function(e){return E(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return E(e)})):t[r+(o?1:-1)]}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find((function(e){return e.posTabIndexesFound}))&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function e(t){var n=t.activeElement;if(n)return n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n},m=function e(t){!1!==t&&t!==b(document)&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},N=function(e){var t=s("setReturnFocus",e);return t||!1!==t&&e},O=function(e){var t=e.target,n=e.event,o=e.isBackward,r=void 0!==o&&o;t=t||P(n),p();var u=null;if(a.tabbableGroups.length>0){var l=c(t,n),d=l>=0?a.containerGroups[l]:void 0;if(l<0)u=r?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(r){var f=D(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(f<0&&(d.container===t||_(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!d.nextTabbableNode(t,!1))&&(f=l),f>=0){var b=0===f?a.tabbableGroups.length-1:f-1,m=a.tabbableGroups[b];u=v(t)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else L(n)||(u=d.nextTabbableNode(t,!1))}else{var h=D(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(h<0&&(d.container===t||_(t,i.tabbableOptions)&&!E(t,i.tabbableOptions)&&!d.nextTabbableNode(t))&&(h=l),h>=0){var y=h===a.tabbableGroups.length-1?0:h+1,w=a.tabbableGroups[y];u=v(t)>=0?w.firstTabbableNode:w.firstDomTabbableNode}else L(n)||(u=d.nextTabbableNode(t))}}else u=s("fallbackFocus");return u},C=function(e){var t=P(e);c(t,e)>=0||(R(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate}):R(i.allowOutsideClick,e)||e.preventDefault())},x=function(e){var t=P(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{var o;e.stopImmediatePropagation();var r=!0;if(a.mostRecentlyFocusedNode)if(v(a.mostRecentlyFocusedNode)>0){var u=c(a.mostRecentlyFocusedNode),s=a.containerGroups[u].tabbableNodes;if(s.length>0){var l=s.findIndex((function(e){return e===a.mostRecentlyFocusedNode}));l>=0&&(i.isKeyForward(a.recentNavEvent)?l+1<s.length&&(o=s[l+1],r=!1):l-1>=0&&(o=s[l-1],r=!1))}}else a.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return v(e)>0}))}))||(r=!1);else r=!1;r&&(o=O({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),m(o||a.mostRecentlyFocusedNode||f())}a.recentNavEvent=void 0},I=function(e){if(("Escape"===(null==(t=e)?void 0:t.key)||"Esc"===(null==t?void 0:t.key)||27===(null==t?void 0:t.keyCode))&&!1!==R(i.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(i.isKeyForward(e)||i.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.recentNavEvent=e;var n=O({event:e,isBackward:t});n&&(L(e)&&e.preventDefault(),m(n))}(e,i.isKeyBackward(e))},G=function(e){var t=P(e);c(t,e)>=0||R(i.clickOutsideDeactivates,e)||R(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},j=function(){if(a.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)}(r,n),a.delayInitialFocusTimer=i.delayInitialFocus?k((function(){m(f())})):m(f()),o.addEventListener("focusin",x,!0),o.addEventListener("mousedown",C,{capture:!0,passive:!1}),o.addEventListener("touchstart",C,{capture:!0,passive:!1}),o.addEventListener("click",G,{capture:!0,passive:!1}),o.addEventListener("keydown",I,{capture:!0,passive:!1}),n},B=function(){if(a.active)return o.removeEventListener("focusin",x,!0),o.removeEventListener("mousedown",C,!0),o.removeEventListener("touchstart",C,!0),o.removeEventListener("click",G,!0),o.removeEventListener("keydown",I,!0),n},M="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===a.mostRecentlyFocusedNode}))}))&&m(f())})):void 0,K=function(){M&&(M.disconnect(),a.active&&!a.paused&&a.containers.map((function(e){M.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),r=u(e,"checkCanFocusTrap");r||p(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=o.activeElement,null==t||t();var i=function(){r&&p(),j(),K(),null==n||n()};return r?(r(a.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!a.active)return this;var t=T({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,B(),a.active=!1,a.paused=!1,K(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(r,n);var o=u(t,"onDeactivate"),c=u(t,"onPostDeactivate"),s=u(t,"checkCanReturnFocus"),l=u(t,"returnFocus","returnFocusOnDeactivate");null==o||o();var d=function(){k((function(){l&&m(N(a.nodeFocusedBeforeActivation)),null==c||c()}))};return l&&s?(s(N(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(a.paused||!a.active)return this;var t=u(e,"onPause"),n=u(e,"onPostPause");return a.paused=!0,null==t||t(),B(),K(),null==n||n(),this},unpause:function(e){if(!a.paused||!a.active)return this;var t=u(e,"onUnpause"),n=u(e,"onPostUnpause");return a.paused=!1,null==t||t(),p(),j(),K(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),a.active&&p(),K(),this}}).updateContainerElements(e),n},x=".js-nav",I=function(){return e=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOpen=!1,this.nav=document.querySelector(x),this.toggleBtn=this.nav.querySelector(".js-nav-toggle"),this.focusTrap=C(this.nav),this.toggleBtn.addEventListener("click",(function(){return t.toggleMenu()}))},(t=[{key:"toggleMenu",value:function(e){this.isOpen="boolean"==typeof e?e:!this.isOpen,this.nav.classList.toggle("is-open",this.isOpen),this.toggleBtn.setAttribute("aria-expanded",String(this.isOpen)),this.isOpen?this.focusTrap.activate():this.focusTrap.deactivate()}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();document.querySelector(x)&&new I,n(844)})()})();