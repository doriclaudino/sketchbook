(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{dr7y:function(t,o,e){"use strict";e.r(o);e("q1tI");var a=e("Wbzz"),n=e("Gmm/"),r=e("qKvR"),i=function(t){var o,e,n=t.random(1e6);t.preload=function(){o=t.loadFont(Object(a.withPrefix)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.strokeWeight(.1)},t.draw=function(){var a=t.map(t.cos(t.frameCount/100),-1,1,0,.1);(e=(e=(e=[]).concat(o.textToPoints("—————",t.random(t.width),-150,120,{sampleFactor:a}),o.textToPoints("There is",20,150,100,{sampleFactor:a}),o.textToPoints("no way",20,250,100,{sampleFactor:a}),o.textToPoints("out,",20,350,100,{sampleFactor:a}),o.textToPoints("only a",20,450,100,{sampleFactor:a}),o.textToPoints("new place",20,550,100,{sampleFactor:a}),o.textToPoints("to be.",20,650,100,{sampleFactor:a}),o.textToPoints("—————",t.random(t.width),t.height+150,120,{sampleFactor:a}))).map((function(o){return{x:o.x,y:o.y,corner:t.random([{x:0,y:0},{x:t.width,y:0},{x:0,y:t.height},{x:t.width,y:t.height}])}}))).forEach((function(o,a){var r=o.x,i=o.y;o.corner;e[a+1]&&(t.stroke(t.map(t.sin((t.frameCount+n)/1e3),-1,1,0,100),50,t.frameCount%2?100:0,t.map(t.dist(r,i,e[a+1].x,e[a+1].y),0,t.width,100,0)),t.line(r,i,e[a+1].x,e[a+1].y))})),t.frameCount>1500&&t.noLoop()}};o.default=function(t){var o=t.location;return Object(r.c)(n.a,{sketch:i,path:o.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-10-js-6ff809a9ce63bd77313b.js.map