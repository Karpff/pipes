class Ball
{
  constructor(pos,spd,radius)
  {
    this.pos = pos;
    this.spd = spd;
    if(Math.random()<0.5)this.z = 1;
    else this.z = -1;
    this.radius = radius;
    this.color = Math.random()*360;
  }

  update()
  {
    if(Math.random()<0.08)
    {
      c.beginPath();
      if(this.spd.x > 0)
      {
        if(Math.random()<0.5)
        {
          this.spd = new Vector(0,10);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI*1.5,Math.PI*2);
        }
        else
        {
          this.spd = new Vector(0,-10);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,0,Math.PI*0.5);
        }
      }
      else if(this.spd.x < 0)
      {
        if(Math.random()<0.5)
        {
          this.spd = new Vector(0,10);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI,Math.PI*1.5);
        }
        else
        {
          this.spd = new Vector(0,-10);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI*0.5,Math.PI);
        }
      }
      else if(this.spd.y > 0)
      {
        if(Math.random()<0.5)
        {
          this.spd = new Vector(10,0);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI*0.5,Math.PI);
        }
        else
        {
          this.spd = new Vector(-10,0);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,0,Math.PI*0.5);
        }
      }
      else if(this.spd.y < 0)
      {
        if(Math.random()<0.5)
        {
          this.spd = new Vector(10,0);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI,Math.PI*1.5);
        }
        else
        {
          this.spd = new Vector(-10,0);
          c.arc(this.pos.x,this.pos.y,this.radius*1.15,Math.PI*1.5,Math.PI*2);
        }
      }
      c.fillStyle = "hsl("+this.color+",100%,30%)";
      c.fill();
    }
    if(this.radius < 5 && this.z == -1)this.z = 1;
    if(this.radius > 20 && this.z == 1)this.z = -1;
    this.radius+=this.z/20;

    c.beginPath();
    c.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2);
    c.fillStyle = "hsl("+this.color+",100%,50%)";
    c.fill();

    c.beginPath();
    c.moveTo(this.pos.x,this.pos.y);
    this.pos.add(this.spd);
    c.lineTo(this.pos.x,this.pos.y);

    c.lineWidth = this.radius*2.3;
    c.strokeStyle = "hsl("+this.color+",100%,30%)";
    c.stroke();

    c.lineWidth = this.radius*2;
    c.strokeStyle = "hsl("+this.color+",100%,50%)";
    c.stroke();

    c.beginPath();
    c.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2);
    c.fillStyle = "hsl("+this.color+",100%,50%)";
    c.fill();

    if(this.pos.x >= canvas.width-this.radius && this.spd.x > 0 || this.pos.x <= this.radius && this.spd.x < 0)this.spd.x = -this.spd.x;
    if(this.pos.y >= canvas.height-this.radius && this.spd.y > 0 || this.pos.y <= this.radius && this.spd.y < 0)this.spd.y = -this.spd.y;
  }
}
