import React from "react";
import SketchLayout from "~components/sketch-layout";
import p5 from "p5";

const sketch = function(p = new p5()) {
  let lineSpace,
    theta,
    amp,
    wait,
    dx,
    speed,
    lineHeight,
    total,
    showDistances,
    settings,
    bgColor,
    color1,
    color2,
    canvasSize,
    gifDuration,
    loopProgress;

  p.getSettings = function() {
    return settings;
  };

  p.setup = function() {
    canvasSize = 1200;
    p.createCanvas(
      p.min(canvasSize, p.windowWidth),
      p.min(canvasSize, p.windowHeight)
    );
    lineSpace = 2; //space between waves
    lineHeight = 4;
    theta = 0.0;
    amp = p.height / 4; //amplitude of the wave, and radius of circle
    wait = 500.0; //wave offset
    speed = 0.01; //growth wave speed
    dx = (p.TWO_PI / wait) * lineSpace;
    total = (amp * 2) / (lineSpace + lineHeight);
    showDistances = false;
    bgColor = "#000000";
    color1 = "#ff0000";
    color2 = "#1a42e6";
    gifDuration = 5;
    setTimeout(() => {
      createPanel();
    }, 1000);
  };

  const createPanel = () => {
    let interval = setInterval(() => {
      if (window && window.QuickSettings) {
        clearInterval(interval);
        settings = QuickSettings.create(
          50,
          50,
          "controls",
          document.querySelector("#main > main")
        )
          .setCollapsible(true)
          .setDraggable(true)
          .addBoolean("show_distances", showDistances, x => (showDistances = x))
          .addRange("canvas_size", 1, p.windowWidth, canvasSize, 1, x => {
            canvasSize = x;
            p.windowResized();
          })
          .addRange(
            "line_space",
            0.01,
            10,
            lineSpace,
            0.01,
            x => (lineSpace = x)
          )
          .addRange(
            "line_height",
            0.01,
            10,
            lineHeight,
            0.01,
            x => (lineHeight = x)
          )
          .addRange("wave_wait", 100, 10000, wait, 1, x => {
            wait = x;
            dx = (p.TWO_PI / wait) * lineSpace;
          })
          .addRange("speed", 0.01, 3, speed, 0.01, x => (speed = x))
          .addColor("bgColor", bgColor, x => (bgColor = x))
          .addColor("color1", color1, x => (color1 = x))
          .addColor("color2", color2, x => (color2 = x))
          .addRange(
            "gif duration (s)",
            1,
            180,
            gifDuration,
            1,
            x => (gifDuration = x)
          )
          .addButton("save_gif", saveGif);
      }
      settings.collapse();
    }, 20);
  };

  const saveGif = () => {
    let loop = p.createLoop(gifDuration, {
      gif: { render: false, open: false, download: true },
    });
  };

  p.windowResized = function() {
    p.resizeCanvas(
      p.min(canvasSize, p.windowWidth),
      p.min(canvasSize, p.windowHeight)
    );
    settings.setRangeParameters("canvas_size", 1, p.windowWidth, 1);
  };

  p.draw = function() {
    amp = p.height / 4;
    total = (amp * 2) / (lineSpace + lineHeight);
    p.background(bgColor);
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
      let rmapcolor = p.map(dcolor, 0, amp * 2, 0, 1);
      let color1Rgb = p.color(color1);
      let color2Rgb = p.color(color2);
      let lerpColor = p.lerpColor(color1Rgb, color2Rgb, rmapcolor);
      //more red, little green, more blue
      p.fill(lerpColor);

      //every second
      if (showDistances && i % 2) p.text(p.round(dcolor), top.x2 + 30, top.y2);

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
