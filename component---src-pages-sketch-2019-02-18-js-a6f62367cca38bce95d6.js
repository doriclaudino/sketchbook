(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{qVgO:function(t,e,n){"use strict";n.r(e);n("n0hJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("ToIb"),n("YbXK"),n("cFtU"),n("q1tI");var r=n("Gmm/"),o=n("Wbzz"),i=n("qKvR"),a=function(t){var e,n,r,i,a=[{letter:"T",x:337,y:225},{letter:"H",x:416,y:225},{letter:"I",x:493,y:225},{letter:"S",x:571,y:225},{letter:"I",x:78,y:375},{letter:"S",x:156,y:375},{letter:"J",x:312,y:375},{letter:"U",x:390,y:375},{letter:"S",x:468,y:375},{letter:"T",x:546,y:375},{letter:"I",x:49,y:525},{letter:"N",x:127,y:525},{letter:"Y",x:283,y:525},{letter:"O",x:361,y:525},{letter:"U",x:439,y:525},{letter:"R",x:517,y:525},{letter:"H",x:22,y:675},{letter:"E",x:100,y:675},{letter:"A",x:178,y:675},{letter:"D",x:256,y:675}].reverse(),c=[function(e){return 240*t.abs(t.sin(e))},function(e){return 240*t.abs(t.cos(e))},function(e){return 240*t.abs(t.tan(e))},function(e){return 240*t.abs(t.sin(e+t.PI))},function(e){return 240*t.abs(t.cos(e+t.PI))},function(e){return 240*t.abs(t.tan(e+t.PI))},function(e){return 240*t.abs(t.sin(-e))},function(e){return 240*t.abs(t.cos(-e))},function(e){return 240*t.abs(t.tan(-e))},function(e){return 240*t.abs(t.sin(-e+t.PI))},function(e){return 240*t.abs(t.cos(-e+t.PI))},function(e){return 240*t.abs(t.tan(-e+t.PI))}],s=0,u=[],l=0;t.preload=function(){e=t.loadFont(Object(o.withPrefix)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){for(t.createCanvas(660,840),t.background(255),t.textAlign(t.LEFT),t.textFont(e),t.textSize(130),t.textLeading(150);Array.from(new Set([n,r,i])).length<3;)n=t.random(c),r=t.random(c),i=t.random(c)},t.draw=function(){t.fill(255,l<2?255:0),t.noStroke();var o,c=a[s],f=c.letter,x=c.x,d=c.y;if(t.text(f,x,d),t.frameCount%60==1){var y=e.textToPoints(f,x,d,130,{sampleFactor:.05});u=u.concat(y.map((function(e){var n=e.x,r=e.y;return{position:t.createVector(n,r),velocity:t.createVector(t.random(-2,2),t.random(-2,2)),acceleration:t.createVector(t.random(-.05,.05),t.random(-.05,.05))}})))}o=t.frameCount/(60*a.length*2),t.stroke(n(o),r(o),i(o),64),u.forEach((function(e,n){var r=e.position,o=e.velocity,i=e.acceleration;u[n].position=r.add(o.add(i)),(r.x<20||r.x>t.width-20||r.y<20||r.y>t.height-20)&&u.splice(n,1)})),u.length>0&&function(){var e=u.map((function(t){return{position:t.position,reached:!1}}));e[0].reached=!0;for(var n=function(){var n=2*t.dist(0,0,t.width,t.height),r=void 0,o=void 0;e.forEach((function(i,a){i.reached||e.forEach((function(e,c){if(!e.reached){var s=t.dist(i.position.x,i.position.y,e.position.x,e.position.y);s<n&&(n=s,r=a,o=c)}}))})),t.line(e[r].position.x,e[r].position.y,e[o].position.x,e[o].position.y),e[o].reached=!0};e.filter((function(t){return t.reached})).length<e.length;)n()}(),t.frameCount%60==0&&s++,s===a.length&&(s=0,l++),l>2&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(i.c)(r.a,{sketch:a,path:e.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-18-js-a6f62367cca38bce95d6.js.map