import React from "react";
import SketchLayout from "~components/sketch-layout";
// import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  // const DURATION = 20;
  const RATE = 60;
  let maxWidth = 6,
  turbineWidth = 15,
  heliceHeight,
  heliceWidth = 3,
  angle = 0,
  speed = 1.25,
  htmlSlider, htmlP

  p.setup = function() {
    p.createCanvas(600, 600);
    heliceHeight = p.height/6;
     
    p.frameRate(RATE)
    p.background(100);
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(600, 600);

    htmlP = p.createP(speed + ' speed');
    htmlSlider = p.createSlider(0, 70, speed, 0.01); 
    htmlP.parent("sketch-controls");
    htmlSlider.parent("sketch-controls");

    // p.createLoop(DURATION, {
    //  gif: RENDER ? { render: false, open: true } : false,
    //  noiseRadius: 0.1,
    // });
  };

  p.draw = function() {
    p.strokeWeight(0.5);
    speed = htmlSlider.value();
    htmlP.elt.innerText = speed + " speed";
    //59.6
    p.background(100);
    p.translate(p.width / 2, p.height / 1.5);

    //base
    p.rect(maxWidth / -2, 0, maxWidth, p.height / 2);

    //center turbine
    p.circle(0, 0, turbineWidth);
    p.push();
    p.angleMode(p.DEGREES);
    p.rotate(angle);
    let spaceFromCenter = turbineWidth / 5;
    let x = p.cos(-90) * turbineWidth - heliceWidth / 2;
    let y = (p.sin(-90) * turbineWidth) / 2 + spaceFromCenter;

    //one
    p.rect(x, y, heliceWidth, -heliceHeight);

    //two
    p.rotate(360 / 3);
    p.rect(x, y, heliceWidth, -heliceHeight);

    //three
    p.rotate(360 / 3);
    p.rect(x, y, heliceWidth, -heliceHeight);
    p.pop();

    angle += speed;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="wind generator" />
);
