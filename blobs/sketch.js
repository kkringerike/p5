var blobs = []

function setup() 
{
   createCanvas(400, 300);
   colorMode(HSB);

   for(i = 0; i < 10; i++)
      blobs.push(new Blob(random(0, width), random(0, height)));
}

function draw() 
{
//   background(51);
   loadPixels();

   for(x = 0; x < width; x++)
   {
      for(y = 0; y < height; y++)
      {
         var index = (x + y*width)*4;
         var sum = 0;

         for(i = 0; i < blobs.length; i++)
         {
            var d = dist(x, y, blobs[i].x, blobs[i].y);
            sum += 10*blobs[i].r/d;
         }

         set(x, y, color(sum, 255, 255));
      }
   }

   updatePixels();

   for(i = 0; i < blobs.length; i++)
      blobs[i].update();
}