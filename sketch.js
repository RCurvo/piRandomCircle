
const r = 200;
let circle = 0;
let total = 0;
let n = 1;

function setup() {
  createCanvas(402, 402);
  background(0);
  translate(width/2, height/2);
  stroke(0, 0,255);
  strokeWeight(2);


noFill();
  ellipse(0, 0, r*2,r*2);
  rectMode(CENTER);
  rect(0,0,r*2,r*2);
  
}

function draw() {
  translate(width/2, height/2);

  for (let i = 0; i < n+1; i++){
const x = random(-r,r);
const y = random(-r,r);
total++;

const d = x*x + y*y;
if (d<r*r){
  stroke (255,0,0)
  circle++;
}
else {
  stroke(255);
}

point(x,y);
  }

const pi = 4*(circle/total);
let c = color('black');

noFill();
stroke (0,0,0)
piround = round(pi, 2);
textSize(32);
text(piround, -30, 10);
if(n < 700){
  n = n*1.005;
}
}

