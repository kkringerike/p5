var radius = 50;
var c;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 200);
  noStroke();
  c = color(255, 0, 0, 100);
}

function draw() {
  // put drawing code here

   // Vis palett
   fill(100, 100, 100);
   rect(0, 0, windowWidth, 100);

   fill(c);
   ellipse(50, 50, radius, radius);

   if(mouseIsPressed) {
      ellipse(mouseX, mouseY, radius, radius);
   }
}

function mouseWheel(event) {
   radius += event.delta;

   if(radius < 10)
      radius = 10;

   if(radius > 100)
      radius = 100;
}

function keyTyped() {
   if(key == '1') {
      c = color(255, 0, 0, 100);
   }
   else if(key == '2') {
      c = color(0, 255, 0, 100);
   }

   else if(key == '3') {
      c = color(0, 0, 255, 100);
   }
}