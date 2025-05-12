function setup() {
  createCanvas(800, 800); // width, height
}

function draw() {
  let pink = color(242, 0, 145);
  let lemon = color(237, 255, 6);
  let coral = color(255, 77, 77);

  background(pink);

  // x and y are coordinates of center
  fill("white"); // call fill and stroke before shape
  stroke("black");
  strokeWeight(5);
  rect(10, 10, 80, 160); // x y w h
  ellipse(755, 715, 75, 150); // x y w h
  square(10, 705, 80); // x y w
  // xy pairs are coordinates of each vertex
  triangle(790, 10, 790, 100, 710, 50); // x1 y1 x2 y2 x3 y3

  if (mouseIsPressed === true) {
    fill(coral);
  } else {
    fill("black");
  }
  noStroke();
  circle(400, 400, 400); // x y w

  if (mouseIsPressed === true) {
    fill(lemon);
  } else {
    fill("white");
  }
  noStroke();
  circle(mouseX, mouseY, 200);
}
