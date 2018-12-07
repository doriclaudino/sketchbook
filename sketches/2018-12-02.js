window.sketchHeadline = "Move pointer over sketch.";

const circleGap = 30;
const noiseScale = 0.02;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noFill();
}

function draw() {
  background('white');

  let i = .2;
  let y = map(
    mouseY,
    0, height,
    height, height + width,
    true
  );
  let strokeWeightValue = 5;

  while (y > mouseY - (width * 2)) {
    const noiseVal = noise(mouseX * noiseScale, y * noiseScale);
    strokeWeight(i);
    ellipse((width / 2) * noiseVal, y, width);
    ellipse((width / 2) * noiseVal, height - y, width);
    i += .1;
    y -= circleGap;
  }
}