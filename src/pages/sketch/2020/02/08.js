import React from "react";
import SketchLayout from "~components/sketch-layout";
// import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  // const DURATION = 20;
  const RATE = 30;

  const colors = {
    brown: "#341C09",
    mustard: "#F3A914",
    niceRed: "#E34C43",
  };
  let rotationSpeedSlider;
  let rotationSpeedP;
  let rotationSpeedSliderPanel = 0;
  let rotationSpeedPPanel = 0;
  let initialRotations = [0, 60, 120, 180, 240, 300];
  let starRotation = 0;
  let panelRotation = 0;
  let size = 0;
  let color1 = colors.mustard;
  let color2 = colors.brown;
  let color3 = colors.niceRed;
  let colorPicker1;
  let colorPicker2;
  let colorPicker3;
  let speed1;
  let speed2;

  const toSeconds = (value, decimals) =>
    decimals
      ? (toFrameRate(value) * 60).toFixed(decimals)
      : toFrameRate(value) * 60;
  const toFrameRate = (value, decimals) =>
    decimals
      ? (value / p.getFrameRate()).toFixed(decimals)
      : value / p.getFrameRate();
  const getSpeedStats = value =>
    `${value}speed ${toFrameRate(value, 2)}°/frame  ${toSeconds(value, 2)}°/s`;

  const backgroundSquare = (size, rotation, color = colors.purple) => {
    p.push();
    p.rectMode(p.CENTER);
    p.rotate(rotation);
    p.fill(color);
    p.noStroke();
    p.rect(0, 0, size, size);
    p.pop();
  };

  const diamond = (angle, base, color, rotation) => {
    p.push();
    p.noStroke();
    p.fill(color);
    p.rotate(rotation);
    p.quad(
      0,
      0,
      0,
      base * 2,
      tangHeight(base, angle),
      base * 3,
      tangHeight(base, angle),
      base
    );
    p.pop();
  };

  const rightPanel = (size, rotation = 0, color = colors.green) => {
    panel(size, color, rotation, true);
  };

  const leftPanel = (size, rotation = 0, color = colors.orange) => {
    panel(size, color, rotation);
  };

  const panel = (size, color, rotation, flip = false) => {
    let altura = tangHeight(size / 2);
    p.push();
    p.rotate(rotation);
    p.fill(color);
    p.noStroke();
    p.quad(
      0,
      0,

      0,
      size / 2,

      flip ? size / 2 : size / -2,
      size / 2,

      flip ? size / 2 : size / -2,
      -altura
    );
    p.pop();
  };

  const tangHeight = (base = height / 2, angle = 30) => {
    let rad = p.radians(angle);
    let tan = Math.tan(rad);
    let altura = tan * base;
    return altura;
  };

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.background(255);
    p.createCanvas(720, 720);
    p.angleMode(p.DEGREES);

    colorPicker2 = p.createColorPicker(color2);
    colorPicker1 = p.createColorPicker(color1);
    colorPicker3 = p.createColorPicker(color3);
    colorPicker1.parent("sketch-controls");
    colorPicker2.parent("sketch-controls");
    colorPicker3.parent("sketch-controls");

    rotationSpeedSlider = p.createSlider(-1, 1, 0.5, 0.0001);
    rotationSpeedP = p.createP(`${rotationSpeedSlider.value()} rotation speed`);
    rotationSpeedSlider.parent("sketch-controls");
    rotationSpeedP.parent("sketch-controls");

    rotationSpeedSliderPanel = p.createSlider(-1, 1, 0, 0.0001);
    rotationSpeedPPanel = p.createP(
      `${rotationSpeedSliderPanel.value()} rotation speed`
    );
    rotationSpeedSliderPanel.parent("sketch-controls");
    rotationSpeedPPanel.parent("sketch-controls");

    // p.createLoop(DURATION, {
    //  gif: RENDER ? { render: false, open: true } : false,
    //  noiseRadius: 0.1,
    // });
  };

  p.draw = function() {
    /** update colors */
    color1 = colorPicker1.value();
    color2 = colorPicker2.value();
    color3 = colorPicker3.value();

    /** update speed values */
    speed1 = rotationSpeedSlider.value();
    speed2 = rotationSpeedSliderPanel.value();

    /** resize panels on background twices bigger than canvas */
    size = p.height * 2;

    /** update texts */
    rotationSpeedP.elt.innerText = getSpeedStats(speed1);
    rotationSpeedPPanel.elt.innerText = getSpeedStats(speed2);

    /** move everything on center of our canva */
    p.translate(p.width / 2, p.height / 2);

    /** create a square to keep rotate kinda background */
    backgroundSquare(size, panelRotation, color1);

    /** add our left/right panels*/
    leftPanel(size, panelRotation, color3);
    rightPanel(size, panelRotation, color2);

    /** diamonds on center */
    diamond(60, 60, color3, initialRotations[0] + starRotation);
    diamond(60, 60, color2, initialRotations[1] + starRotation);
    diamond(60, 60, color1, initialRotations[2] + starRotation);
    diamond(60, 60, color3, initialRotations[3] + starRotation);
    diamond(60, 60, color2, initialRotations[4] + starRotation);
    diamond(60, 60, color1, initialRotations[5] + starRotation);

    /** update speed every frame */
    starRotation += speed1;
    panelRotation += speed2;
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="it create illusions of squares when the diamonds cross the background with the same color"
  />
);
