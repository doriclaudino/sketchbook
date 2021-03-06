import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.stroke(255);
    p.fill(255);

    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.2,
    });
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 7) {
      p.push();
      p.blendMode(p.DIFFERENCE);
      p.rotate(a);

      p.beginShape();
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(5),
          (p.width / 2) * p.sin(theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(7),
          (p.width / 2) * p.cos(theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(9),
          (p.width / 2) * p.sin(-theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(1),
          (p.width / 2) * p.cos(-theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(5),
          (p.width / 2) * p.sin(theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(7),
          (p.width / 2) * p.cos(theta),
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * noise1D(9),
          (p.width / 2) * p.sin(-theta),
          true
        )
      );

      p.endShape();
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
