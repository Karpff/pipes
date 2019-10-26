class Vector
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
  }

  add(o)
  {
    this.x += o.x;
    this.y += o.y;
  }

  sub(o)
  {
    this.x -= o.x;
    this.y -= o.y;
  }

  plus(o)
  {
    return new Vector(this.x+o.x,this.y+o.y);
  }

  minus(o)
  {
    return new Vector(this.x-o.x,this.y-o.y);
  }

  getDistanceTo(o)
  {
    return Math.sqrt((this.x-o.x)*(this.x-o.x)+(this.y-o.y)*(this.y-o.y));
  }
}

function angleBetween(o1,o2)
{
  return Math.atan2(o2.y-o1.y,o2.x-o1.x);
}

function createVector(angle,l)
{
  return new Vector(Math.cos(angle)*l,Math.sin(angle)*l);
}
