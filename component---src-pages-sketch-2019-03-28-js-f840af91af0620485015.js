(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"3GQf":function(t,n,r){"use strict";r.r(n);r("nWfQ"),r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),i=r("qKvR");function a(t,n,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var e=new(Function.bind.apply(t,o));return r&&c(e,r.prototype),e}).apply(null,arguments)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(t){var n=t.random(0,33),r=[n,n+33,n+66],o=0,i=t.random(5),c=function(){function n(n,o,e,i){this.x=n,this.y=o,this.z=e,this.size=i,this.hue=t.random(r)}return n.prototype.draw=function(){t.stroke(this.hue,50,100,5);for(var n=0;n<t.TWO_PI;n+=.001/t.TWO_PI)t.point.apply(t,u(Object(e.a)(t.randomGaussian(this.x,this.z),t.randomGaussian(this.y,this.z),n,t.randomGaussian(this.size,this.size/2),!0)))},n}();t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),t.background(t.random(r),100,25),t.blendMode(t.HARD_LIGHT),t.noFill()},t.draw=function(){a(c,u(Object(e.a)(t.width/2,t.height/2,o,t.map(t.tan(o/i),-1,1,t.width/5,0),!0)).concat([t.floor(t.random([1,5,t.random(5)])),t.randomGaussian(5,t.width/50)])).draw(),(o+=1/t.TWO_PI)>2*t.TWO_PI&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(i.c)(o.a,{sketch:f,path:n.pathname,description:"Refresh page for a different color variation."})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return e})),r.d(n,"b",(function(){return i}));var o=function(t,n,r){return t+Math.cos(n)*r},e=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,o,e,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=o(t,r,i),u=e(n,r,i);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-28-js-f840af91af0620485015.js.map