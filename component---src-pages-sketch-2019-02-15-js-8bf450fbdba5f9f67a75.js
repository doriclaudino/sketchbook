(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"K+yR":function(t,e,r){"use strict";r.r(e);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("q1tI");var n=r("Gmm/"),a=r("qKvR");function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(t){t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.strokeWeight(.5),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var e=5-t.width/2,r=5-t.height/2,n=[];e<0;){for(var a=[];r<0;){var i=t.noise(.005*e,.005*r,t.frameCount/250);a.push([e,r,t.map(i,0,1,-400,400)]),r+=5}n.push(a),e+=5,r=5-t.height/2}n.forEach((function(e){t.beginShape(),e.forEach((function(e){return t.vertex.apply(t,o(e))})),t.endShape()}));for(var c=0;c<n[0].length;c++){t.beginShape();for(var h=0;h<n.length;h++)t.vertex.apply(t,o(n[h][c]));t.endShape()}}};e.default=function(t){var e=t.location;return Object(a.c)(n.a,{sketch:i,path:e.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-15-js-8bf450fbdba5f9f67a75.js.map