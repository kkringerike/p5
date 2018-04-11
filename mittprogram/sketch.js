function setup() {
  // put setup code
  createCanvas(windowWidth, windowHeight);

  // Farge: (Rødt, Grønt, Blått)
  background(100, 100, 255);

  noStroke();
}

function draw() {
   // put drawing code here

   var r = random(0, 255);
   var g = random(0, 255);
   var b = random(0, 255);
   
   fill(r, g, b, 180);

   var x = random(0, windowWidth);
   var y = random(0, windowHeight);

   var bredde = random(10, 200);
   var hoyde = random(10, 200);

   // Argumenter: (X-posisjon, Y-posisjon, bredde, høyde)
   ellipse(x, y, bredde, bredde);
}
