var = canvas;

function setup() 
{
  canvas = createCanvas(400, 400);
  canvas.position(0, 20);
}

function draw() 
{
  background(255);
  fill(255, 0, 0);
  rect(width/2, heigh/2, 50, 50);
}
