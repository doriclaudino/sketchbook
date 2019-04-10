import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import shuffle from "~lib/shuffle";

const sketch = function(p) {
  const getColorVals = () => [p.random(33), p.random(33, 66), p.random(66, 99)];
  const HUE = shuffle(getColorVals());
  const SAT = shuffle(getColorVals());
  const BRIGHT = getColorVals().reverse();

  let radius;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);

    radius = p.dist(0, 0, p.width / 2, p.height / 2);
  };

  p.draw = function() {
    p.background(HUE[0], SAT[0] / 2, BRIGHT[0] / 2);

    HUE.forEach((_, i) => {
      p.push();
      p.blendMode(p.HARD_LIGHT);
      p.translate(p.width / 2, p.height / 2);
      p.stroke(HUE[i], SAT[i], BRIGHT[i]);
      p.strokeWeight(6 * p.pow(i, 2) - 24 * i + 30);

      for (
        let r = 0;
        r < p.TWO_PI;
        r +=
          p.TWO_PI /
          (50 *
            p.noise(
              (i + 1) / 100,
              (i + 2) / 100,
              p.frameCount / ((i + 1) * 4000)
            ))
      ) {
        const start = polarToCartesian(0, 0, r, radius, true);
        const end = [start[0], -start[1]];
        p.line(...start, ...end);
        p.line(start[1], start[0], end[1], end[0]);
      }
      p.pop();
    });
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Refresh page for a different variation."
  />
);
