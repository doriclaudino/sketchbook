(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return e})),r.d(n,"b",(function(){return i}));var o=function(t,n,r){return t+Math.cos(n)*r},e=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,o,e,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=o(t,r,i),u=e(n,r,i);return a?[c,u]:{x:c,y:u}}},jVLR:function(t,n,r){"use strict";r.r(n);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("n0hJ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),i=r("qKvR");function a(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){function n(n){return t.color(100*t.abs(t.cos(n)),100*t.abs(t.sin(-n+t.PI)),100)}t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var r=20-t.width/2,o=20-t.height/2,i=[];r<0;){for(var c=[];o<0;){var u=t.noise(.02*r,.02*o,t.frameCount/100);c.push([r,o,t.map(u,0,1,-400,400)]),o+=20}i.push(c),r+=20,o=20-t.height/2}i.forEach((function(r){r.forEach((function(r){t.stroke(n(r[2]/100)),t.line.apply(t,a(r).concat([Object(e.c)(-t.width/4,t.frameCount/100,200),Object(e.d)(-t.height/4,t.frameCount/100,200),-400])),t.push(),t.translate.apply(t,a(r)),t.noStroke(),t.fill(n(r[2]/100)),t.sphere(2),t.pop()}))}))}};n.default=function(t){var n=t.location;return Object(i.c)(o.a,{sketch:c,path:n.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-16-js-f335b373be76dcc2bcf2.js.map