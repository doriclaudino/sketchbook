(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{"3VuS":function(n,t,r){"use strict";r.r(t);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),i=r("qKvR");function a(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(n){var t=n.random(90),r=0,o=0;n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(t,80,5),n.noFill(),n.blendMode(n.HARD_LIGHT),n.strokeWeight(2)},n.draw=function(){var i=n.noise(n.frameCount/400,r);n.stroke(n.map(n.tan(r),-1,1,t,t+10),80,75,o);for(var c=0;c<5;c++)n.line.apply(n,a(Object(e.a)(n.width/2,n.height/2,r+c*n.TWO_PI/5,n.height/2*i,!0)).concat([n.width/2,n.height/2]));(r+=.01)>3*n.TWO_PI?(o-=.01)<0&&n.noLoop():o=n.min(o+.01,5)}};t.default=function(n){var t=n.location;return Object(i.c)(o.a,{sketch:c,path:t.pathname,description:""})}},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return i}));var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e,i){void 0===i&&(i=!1);var a=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return i?[a,c]:{x:a,y:c}};t.a=function(n,t,r,i,a){void 0===a&&(a=!1);var c=o(n,r,i),u=e(t,r,i);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-27-js-03138c0a996c76fd89ac.js.map