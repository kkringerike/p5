var blobs = []

function setup() 
{
   createCanvas(500, 400);
   // colorMode(HSB);
   pixelDensity(1);

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
            var dx = (blobs[i].x - x);
            var dy = (blobs[i].y - y);
            var d = sqrt(dx*dx + dy*dy);

            sum += 10*blobs[i].r/d;

            // var d = dist(x, y, blobs[i].x, blobs[i].y);
            // sum += 10*blobs[i].r/d;
         }


         var pix = (x + y * width) * 4;

         pixels[pix + 0] = sum;
         pixels[pix + 1] = sum;
         pixels[pix + 2] = 255;
         pixels[pix + 3] = 255;

         // var c = color(sum, 255, 255);
         // pixels[pix + 0] = red(c);
         // pixels[pix + 1] = green(c);
         // pixels[pix + 2] = blue(c);
         // pixels[pix + 3] = 255;

//         set(x, y, color(sum, 255, 255));
      }
   }

   updatePixels();

   for(i = 0; i < blobs.length; i++)
      blobs[i].update();
}