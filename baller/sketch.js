var baller = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < 100; i++)
  {
       baller.push(new Ball(windowWidth/2, windowHeight/2, random(10, 100)));
  }
}

function draw() {
  // put drawing code here
  background(200, 200, 200);
   
  for(var i = 0; i < baller.length; i++)
  {
      baller[i].update();
      baller[i].draw();
  }
}