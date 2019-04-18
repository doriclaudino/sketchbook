import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  let hue = 0;
  let t = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.noFill();
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);
    hue = p.map(p.sin(p.frameCount / 500), -1, 1, 0, 100);
    p.stroke(hue, 50, 100, 10);
    p.beginShape();
    for (let i = 0; i < p.HALF_PI; i += 0.01) {
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          i + t,
          p.map(p.noise(i, t), 0, 1, 0, p.width),
          true
        )
      );
    }
    p.endShape();
    p.beginShape();
    for (let i = 0; i < p.HALF_PI; i += 0.01) {
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          i + t + p.PI,
          p.map(p.noise(i, t), 0, 1, 0, p.width / 2),
          true
        )
      );
    }
    p.endShape();
    t += 0.001;
    t > p.TWO_PI && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
