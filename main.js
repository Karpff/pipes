var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');
c.fillRect(0,0,innerWidth,innerHeight)
var balls = [];
for(let i=0;i<10;i++)
{
  var dir = Math.random();
  if(dir<0.25)
  {
    balls.push(new Ball(new Vector(Math.random()*innerWidth,Math.random()*innerHeight),new Vector(10,0),Math.random()*10+5));
  }
  else if(dir<0.5)
  {
    balls.push(new Ball(new Vector(Math.random()*innerWidth,Math.random()*innerHeight),new Vector(-10,0),Math.random()*10+5));
  }
  else if(dir<0.75)
  {
    balls.push(new Ball(new Vector(Math.random()*innerWidth,Math.random()*innerHeight),new Vector(0,10),Math.random()*10+5));
  }
  else
  {
    balls.push(new Ball(new Vector(Math.random()*innerWidth,Math.random()*innerHeight),new Vector(0,-10),Math.random()*10+5));
  }
}

function animate()
{
  c.fillStyle = "rgba(0,0,0,0.01)";
  c.fillRect(0,0,innerWidth,innerHeight)
  for(let i=0;i<balls.length;i++)
  {
    balls[i].update();
  }
  window.requestAnimationFrame(animate);
}
animate();
