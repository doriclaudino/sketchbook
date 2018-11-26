const speed = 0.3;

let angle = 2;
let scalar = 3;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noStroke();
  fill(0);
  background("white");
}

function draw() {
  const x = (width / 2) + cos(angle) * scalar;
  const y = (height / 2) + sin(angle) * scalar;
  const rectWidth = scalar / speed;
  rotate(PI / angle);
  rect(x, y, rectWidth, 1);
  if (rectWidth > width) {
    noLoop();
  }
  angle += speed;
  scalar += speed;
}