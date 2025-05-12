function setup() {
  createCanvas(800, 800);
}

function draw() {
  let pink = color(242, 0, 145);
  let lemon = color(237, 255, 6);
  let coral = color(255, 77, 77);

  background(pink);

  if (mouseIsPressed === true) {
    fill(coral);
  } else {
    fill("black");
  }

  noStroke();
  circle(400, 400, 400); // x, y, width

  if (mouseIsPressed === true) {
    fill(lemon);
  } else {
    fill("white");
  }

  noStroke();
  circle(mouseX, mouseY, 200); // x, y, width
}
