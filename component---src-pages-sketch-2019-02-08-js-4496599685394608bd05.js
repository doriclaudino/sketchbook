(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return e}));var o=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,i,e){void 0===e&&(e=!1);var a=n+Math.cos(r)*o,c=t+Math.sin(r)*i;return e?[a,c]:{x:a,y:c}};t.a=function(n,t,r,e,a){void 0===a&&(a=!1);var c=o(n,r,e),u=i(t,r,e);return a?[c,u]:{x:c,y:u}}},"xx+Q":function(n,t,r){"use strict";r.r(t);r("q8oJ"),r("m210"),r("4DPX"),r("n0hJ"),r("rzGZ"),r("Dq+y"),r("8npG"),r("ToIb"),r("YbXK"),r("cFtU"),r("q1tI");var o=r("Gmm/"),i=r("Wbzz"),e=r("ViKx"),a=r("qKvR");function c(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(n){var t,r,o=4,a=[],u=function(){function t(){var t=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];for(this.cf=[];Array.from(new Set(this._cf)).length<3;)this._cf=[n.random(t),n.random(t),n.random(t)];this.points=Array(o).fill().map((function(n){return new s}))}var r=t.prototype;return r._clr=function(){return n.color(this._cf[0](n.frameCount),this._cf[1](n.frameCount),this._cf[2](n.frameCount))},r.draw=function(){var t=this;n.blendMode(n.frameCount%3?n.DIFFERENCE:n.ADD),n.noStroke(),n.fill(this._clr()),n.beginShape(),n.vertex(this.points[0].location.x,this.points[0].location.y),this.points.forEach((function(r,o){var i=r.location;0!==o&&(n.vertex(i.x,i.y),t.points[o].move())})),n.vertex(this.points[0].location.x,this.points[0].location.y),n.endShape(n.CLOSE)},t}(),s=function(){function t(){this._angle=n.random(n.TWO_PI),this._dist=n.random(200,350),this._speed=n.random([-.05,.05]),this.location=this._getLocation()}var o=t.prototype;return o._getLocation=function(){return Object(e.a)(r.x,r.y,this._angle,this._dist)},o.move=function(){this._angle+=this._speed,this.location=this._getLocation()},t}();n.preload=function(){t=n.loadImage(Object(i.withPrefix)("/assets/susan.png"))},n.setup=function(){n.createCanvas(660,840),n.background(255),r=n.createVector(n.width/2,350),a=c(Array(3).keys()).map((function(n){return new u})),setTimeout((function(){n.noLoop()}),2e4)},n.draw=function(){a.forEach((function(n,t){return n.draw()})),n.blendMode(n.DARKEST),n.image(t,0,0,n.width,n.height)}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:u,path:t.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-08-js-4496599685394608bd05.js.map