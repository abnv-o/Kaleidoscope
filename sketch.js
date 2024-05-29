let symmetry = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(220);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseIsPressed) {
    for (let i = 0; i < symmetry; i++) {
      rotate(360 / symmetry);

      let colorValue = map(mouseX, 0, width, 0, 300);
      stroke(colorValue, colorValue, 255);
      strokeWeight(mouseY / 30);

      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
      push();
      scale(1, -1);
      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
      pop();
    }
  }
}

function touchMoved() {
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Reset Button Functionality
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
  clear();
  background(220);
});
