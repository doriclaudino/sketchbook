(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{LrQJ:function(t,n,e){"use strict";e.r(n);e("YbXK"),e("cFtU"),e("q8oJ"),e("8npG"),e("m210"),e("4DPX"),e("rzGZ"),e("n0hJ"),e("q1tI");var o=e("Gmm/"),r=(e("PZSu"),e("ViKx")),a=e("qLl8"),i=e("av4u"),c=e("qKvR");function h(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(t){var n,e=t.shuffle([1,2,3,5,7,9,11,13,17]),o=t.shuffle([t.QUARTER_PI,t.HALF_PI,t.PI]),c=t.random(t.TWO_PI),u=t.random([4,5,6,7,8]),l=[],d=0;t.setup=function(){t.frameRate(60),t.createCanvas(660,840),t.colorMode(t.HSB,t.TWO_PI),t.background(t.TWO_PI-c,t.QUARTER_PI,t.PI),t.createLoop(360,{noiseRadius:2}),t.blendMode(t.OVERLAY),n=t.width/2-t.width/20,l=Array(u).fill().map((function(e,o){return[Object(r.a)(t.width/2,t.height/2,t.TWO_PI/u*o,n,!0),Object(r.a)(t.width/2,t.height/2,t.TWO_PI/u*(o+1),n,!0)]}))},t.draw=function(){for(var u=t.animLoop,f=u.theta,s=u.noise1D,p=f*e[0],w=f*e[1]+o[0],b=f*e[2]+o[1],y=f*e[3]+o[2],O={x:null,y:null},m={x:null,y:null},I=0;I<l.length;I++)O=O.x&&O.y?O:a.a.apply(void 0,[t.width/2,t.height/2].concat(h(Object(r.a)(t.width/2,t.height/2,p,t.width/2,!0)),h(l[I][0]),h(l[I][1]))),m=m.x&&m.y?m:a.a.apply(void 0,[t.width/2,t.height/2].concat(h(Object(r.a)(t.width/2,t.height/2,w,t.width/2,!0)),h(l[I][0]),h(l[I][1])));t.stroke(c,t.asin(t.sin(f*e[4]))+t.PI/2,t.acos(t.cos(f*e[5]))+t.PI/2,t.HALF_PI),t.noFill(),t.bezier.apply(t,[O.x,O.y].concat(h(Object(r.a)(t.width/2,t.height/2,b,.8*n*Object(i.a)((s(e[6])+1)/2),!0)),h(Object(r.a)(t.width/2,t.height/2,y,.8*n*Object(i.a)((s(e[7])+1)/2),!0)),[m.x,m.y]));var P=t.floor(t.frameCount/21600*100);P>d&&(d=P,console.info(d+"%")),21600===t.frameCount&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(c.c)(o.a,{sketch:u,path:n.pathname,description:""})}},qLl8:function(t,n,e){"use strict";function o(t,n,e,o,r,a,i,c){var h=((i-r)*(n-a)-(c-a)*(t-r))/((c-a)*(e-t)-(i-r)*(o-n)),u=((e-t)*(n-a)-(o-n)*(t-r))/((c-a)*(e-t)-(i-r)*(o-n));return h>=0&&h<=1&&u>=0&&u<=1?{x:t+h*(e-t),y:n+h*(o-n)}:{x:null,y:null}}e.d(n,"a",(function(){return o}))}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-01-20-js-e3b17578c116ba7a0d88.js.map