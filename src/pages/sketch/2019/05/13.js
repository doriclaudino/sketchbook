import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  let hue = p.random(33);
  let y = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.LIGHTEST);
    p.background(hue, 25, 25);
    p.strokeWeight(6);
  };

  p.draw = function() {
    const NOISE = p.noise(p.frameCount / hue, y / hue) / 5;
    p.stroke(hue * ((p.frameCount % 3) + 1), 90, 75, 75);

    lerpLine(p, p.width / 2, y, p.width * 0.75, y, NOISE, false);
    lerpLine(p, p.width / 2, y, p.width * 0.25, y, NOISE, false);
    lerpLine(
      p,
      p.width / 2,
      p.height - y,
      p.width * 0.75,
      p.height - y,
      NOISE,
      false
    );
    lerpLine(
      p,
      p.width / 2,
      p.height - y,
      p.width * 0.25,
      p.height - y,
      NOISE,
      false
    );
    lerpLine(p, 0, y, p.width * 0.25, y, NOISE, false);
    lerpLine(p, p.width, y, p.width * 0.75, y, NOISE, false);
    lerpLine(p, 0, p.height - y, p.width * 0.25, p.height - y, NOISE, false);
    lerpLine(
      p,
      p.width,
      p.height - y,
      p.width * 0.75,
      p.height - y,
      NOISE,
      false
    );

    y += 2;
    if (y > p.height / 2) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
