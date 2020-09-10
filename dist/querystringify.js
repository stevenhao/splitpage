// https://cdn.jsdelivr.net/npm/querystringify@2.2.0/index.min.js
//
/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/querystringify@2.2.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
window.querystringify = function (exports) {
"use strict";var undef,has=Object.prototype.hasOwnProperty;function decode(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function encode(e){try{return encodeURIComponent(e)}catch(e){return null}}function querystring(e){for(var n,r=/([^=?#&]+)=?([^&]*)/g,t={};n=r.exec(e);){var o=decode(n[1]),u=decode(n[2]);null===o||null===u||o in t||(t[o]=u)}return t}function querystringify(e,n){n=n||"";var r,t,o=[];for(t in"string"!=typeof n&&(n="?"),e)if(has.call(e,t)){if((r=e[t])||null!==r&&r!==undef&&!isNaN(r)||(r=""),t=encode(t),r=encode(r),null===t||null===r)continue;o.push(t+"="+r)}return o.length?n+o.join("&"):""}exports.stringify=querystringify,exports.parse=querystring;
   return exports;
}({});
//# sourceMappingURL=/sm/536c98874e4fc5fe614c904a0c719ffc62c330b1a9cc284d00d3e123e9c2416e.map
