(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{GS09:function(t,a,e){"use strict";e.r(a);e("q8oJ"),e("8npG"),e("m210"),e("4DPX"),e("rzGZ"),e("YbXK"),e("cFtU"),e("q1tI");var n=e("Gmm/"),r=e("ViKx"),i=e("qKvR");function o(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var a=[];t.setup=function(){t.createCanvas(660,840),t.background(0),t.stroke(255),t.strokeWeight(5),t.noFill();for(var e=Array.from(Array(4),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/4,.45*t.width)}})),n=function(t){a=a.concat(e.map((function(a){var e=a.a,n=a.d;return{a:e+t,d:n}})))},r=0;r<t.TWO_PI;r+=t.TWO_PI/5)n(r)},t.draw=function(){t.curve.apply(t,o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount].a,a[t.frameCount].d,!0)).concat(o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)))),t.frameCount===a.length-4&&(t.curve.apply(t,o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0)).concat(o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)))),t.curve.apply(t,o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)).concat(o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)))),t.curve.apply(t,o(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)).concat(o(Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0)))),t.curve.apply(t,o(Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)).concat(o(Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0)),o(Object(r.a)(t.width/2,t.height/2,a[3].a,a[3].d,!0)))),t.noLoop())}};a.default=function(t){var a=t.location;return Object(i.c)(n.a,{sketch:c,path:a.pathname,description:"Reload page for a different variation."})}},ViKx:function(t,a,e){"use strict";e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return r})),e.d(a,"b",(function(){return i}));var n=function(t,a,e){return t+Math.cos(a)*e},r=function(t,a,e){return t+Math.sin(a)*e},i=function(t,a,e,n,r,i){void 0===i&&(i=!1);var o=t+Math.cos(e)*n,c=a+Math.sin(e)*r;return i?[o,c]:{x:o,y:c}};a.a=function(t,a,e,i,o){void 0===o&&(o=!1);var c=n(t,e,i),h=r(a,e,i);return o?[c,h]:{x:c,y:h}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-11-js-d238584710de5d19654a.js.map