import React from "react";
import SketchLayout from "~components/sketch-layout";
import p5 from "p5";
// import "p5.createloop";

const sketch = function(p = new p5()) {
  let lineSpace, theta, amp, wait, dx, speed, lineHeight, total;

  p.setup = function() {
    p.createCanvas(1200, 1200);
    lineSpace = 2; //space between waves
    lineHeight = 4;
    theta = 0.0;
    amp = 400.0; //amplitude of the wave, and radius of circle
    wait = 500.0; //wave offset
    speed = 0.01; //growth wave speed
    dx = (p.TWO_PI / wait) * lineSpace;
    total = (amp * 2) / (lineSpace + lineHeight);
  };

  p.draw = function() {
    p.background(0);
    p.noStroke();
    p.translate(p.width / 2, p.height / 2);
    p.textSize(16);

    theta += speed;
    let x = theta;
    let init = -amp; //init from top
    let centerOffset = init;
    let bottom = {};
    let top = {};

    for (let i = 0; i < total; i++) {
      //here control the wave length in/out
      let cosx = p.cos(x);
      let offsetX = p.map(cosx, -1, 1, -amp * 2, 0);

      //move or lines down/up
      centerOffset = centerOffset + lineSpace;

      //bottom points if we start from bottom
      bottom = getLinePoints(amp, centerOffset);

      //move to the next line or top points
      centerOffset = centerOffset + lineHeight;

      //top points if we start from bottom
      top = getLinePoints(amp, centerOffset);

      //get max dist
      let dcolor = p.dist(
        bottom.x1,
        bottom.y1,
        p.max(bottom.x1, bottom.x2 + offsetX),
        bottom.y2
      );
      let rmapcolor = p.map(dcolor, 0, amp * 2, 255, 0);

      //more red, little green, more blue
      p.fill(255, 75, rmapcolor - 75);

      //every second
      //if (i % 2) p.text(p.round(dcolor), top.x2 + 30, top.y2);

      p.quad(
        bottom.x1,
        bottom.y1,
        top.x1,
        top.y1,
        top.x2,
        top.y2,
        p.max(bottom.x1, bottom.x2 + offsetX),
        bottom.y2
      );

      //update delay
      x += dx;
    }
  };

  const getLinePoints = (amp, centerOffset) => ({
    x1: -cateto(amp, centerOffset),
    y1: -centerOffset,
    x2: cateto(amp, centerOffset),
    y2: -centerOffset,
  });

  //base on radius and cathetus height, we can find other cathetus, using triangle
  const cateto = (radius, height) =>
    p.sqrt(p.pow(radius, 2) - p.pow(height, 2));
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
