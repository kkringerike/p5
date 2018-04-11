function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0, 80, 0);
  noStroke();
}

function draw() {
   // put drawing code here   
   fill(random(0,255), random(0,255), random(0,255), 100);

   var radius = random(10, 100);

   var posX = random(0, windowWidth);
   var posY = random(0, windowHeight);

   ellipse(posX, posY, radius, radius);
}
