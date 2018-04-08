var r = 50;

var x = r;
var y = r;

var speedX, speedY;

function setup() {
  // put setup code here
   createCanvas(800, 600);
   background(100);

   speedX = random(1, 10);
   speedY = random(1, 10);
}

function draw() {

   if(x > width - r || x < r) {
      speedX *= -1;
   }

   if(y > height - r || y < r) {
      speedY *= -1;
   }

   x += speedX;
   y += speedY;

     // put drawing code here
   background(100);
   ellipse(x, y, 2*r);
}