class Blob 
{
   constructor(x, y)
   {
      this.x = x;
      this.y = y;

      var angle = random(0, 2*PI);
      var m = random(2,5);

      this.xspeed = m*cos(angle);
      this.yspeed = m*sin(angle);

      this.r = random(120, 240);
   }

   update()
   {
      this.x += this.xspeed;
      this.y += this.yspeed;

      if(this.x > width || this.x < 0) this.xspeed *= -1;
      if(this.y > height || this.y < 0) this.yspeed *= -1;
   }

   show()
   {
      noFill();
      stroke(0);
      strokeWeight(4);
      ellipse(this.x, this.y, this.r*2, this.r*2);
   }
}
