(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{ViKx:function(t,n,o){"use strict";o.d(n,"c",(function(){return r})),o.d(n,"d",(function(){return e})),o.d(n,"b",(function(){return i}));var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},i=function(t,n,o,r,e,i){void 0===i&&(i=!1);var c=t+Math.cos(o)*r,a=n+Math.sin(o)*e;return i?[c,a]:{x:c,y:a}};n.a=function(t,n,o,i,c){void 0===c&&(c=!1);var a=r(t,o,i),u=e(n,o,i);return c?[a,u]:{x:a,y:u}}},a8Wq:function(t,n,o){"use strict";o.r(n);o("nWfQ"),o("YbXK"),o("cFtU"),o("q8oJ"),o("8npG"),o("m210"),o("4DPX"),o("rzGZ"),o("n0hJ"),o("q1tI");var r=o("Gmm/"),e=(o("Aw06"),o("ViKx")),i=o("qKvR");function c(t,n,o){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,o){var r=[null];r.push.apply(r,n);var e=new(Function.bind.apply(t,r));return o&&a(e,o.prototype),e}).apply(null,arguments)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var n=5,o=[],r=function(){function n(n,o,r){this.x=n,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}return n.prototype.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.99,.99),this.position.add(this.velocity)},n}();t.setup=function(){t.createCanvas(660,840);for(var n=0;n<t.TWO_PI;n+=t.TWO_PI/50)o.push(c(r,u(Object(e.a)(t.width/2,t.height/2,n,100,!0))));t.background(0),t.noStroke()},t.draw=function(){t.fill(t.map(t.cos(t.frameCount/100),-1,1,0,255),n),t.beginShape(),o.forEach((function(n){n.move(),t.vertex(n.position.x,n.position.y)})),t.endShape(t.CLOSE)},0===(n-=5e-4)&&t.noLoop()};n.default=function(t){var n=t.location;return Object(i.c)(r.a,{sketch:s,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-03-js-2a64b10c659aa8f9e955.js.map