(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"PY9/":function(r,t,e){"use strict";function n(r){if(1===r)return!1;if(2===r)return!0;for(var t=2;t<r;t++)if(r%t==0)return!1;return!0}e.d(t,"a",(function(){return n}))},"kb/5":function(r,t,e){"use strict";e.r(t);e("YbXK"),e("cFtU"),e("q1tI");var n=e("Gmm/"),o=e("PY9/"),c=e("qKvR"),a=function(r){var t,e,n,c=1,a=[],i=!0;r.setup=function(){for(r.createCanvas(660,840),r.background(255),t=r.floor(r.random(5,8));!Object(o.a)(c);)c=r.floor(r.random(20*t,25*t));var i=r.width/2/t;e=i/t,n=r.width/2-e;for(var f=function(e){a=a.concat(Array.from(Array(c*(e+1)),(function(o,a){var f=r.map(a*t,0,c,0,r.TWO_PI),u=r.constrain(r.randomGaussian((e*i+(e+1)*i)/2,i/t+r.noise(f)*t),0,n);return{vector:r.createVector(r.width/2+r.cos(f)*u,r.height/2+r.sin(f)*u),reached:!1}})))},u=0;u<t;u++)f(u);a[r.floor(r.random(c))].reached=!0},r.draw=function(){r.push(),r.stroke(i?"red":255),r.strokeWeight(1),a.filter((function(r){return!r.reached})).forEach((function(t){var e=t.vector;return r.point(e.x,e.y)})),r.pop();var t,e,o=a.filter((function(r){return r.reached})),c=n;r.strokeWeight(2),a.forEach((function(n,a){n.reached||o.forEach((function(o){var i=o.vector,f=r.dist(i.x,i.y,n.vector.x,n.vector.y);f<c&&(c=f,e=a,t=i)}))})),r.line(t.x,t.y,a[e].vector.x,a[e].vector.y),a[e].reached=!0,a.filter((function(r){return r.reached})).length===a.length&&r.noLoop()},r.mousePressed=function(){i=!i}};t.default=function(r){var t=r.location;return Object(c.c)(n.a,{sketch:a,path:t.pathname,description:"\r Be patient. Reload page for a different variation. Click sketch to toggle\r the vertices.\r "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-08-js-662cc8fbd5cd25aef8fd.js.map