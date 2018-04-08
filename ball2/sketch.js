var r = 50;

var x = 400;
var y = r;

var a = 0.3;

var speedX, speedY;

function setup() {
  // put setup code here
   createCanvas(800, 600);
   background(100);

   speedX = random(1, 10);
   speedY = 0;
}

function draw() {

   speedY += a;

   if(x > width - r) {
      speedX = -0.8*abs(speedX);
   }
   else if(x < r) {
      speedX = 0.8*abs(speedX);      
   }

   if(y > height - r) {
      speedY = -0.8*speedY;
   }

   x += speedX;
   y += speedY;

     // put drawing code here
   background(100);
   ellipse(x, y, 2*r);
}