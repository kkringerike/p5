class Ball 
{
   constructor(posX, posY, r)
   {
      this.posX = posX;
      this.posY = posY;

      this.r = r;
      
      this.c = color(random(0, 255), random(0, 255), random(0, 255));

      this.speedX = random(-10, 10);
      this.speedY = random(-10, 10);
   }

   update()
   {
      if(this.posX > width || this.posX < 0)
         this.speedX *= -1;

      if(this.posY > height || this.posY < 0)
         this.speedY *= -1;

      this.posX += this.speedX;
      this.posY += this.speedY;   
   }

   draw()
   {
      fill(this.c);
      ellipse(this.posX, this.posY, this.r, this.r);
   }
}