function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ab3d00");

  stroke(255)
  for(i = 0; i < 100; i++){
    startdrop = 2*i
    enddrop = 15*i
     line (0,0+startdrop, 400-enddrop,400)
   }
  for(i = 0; i < 81; i++){
   line(5*i,0,5*i,200-abs(200-5*i))
  }
  for(i = 0; i < 81; i++){
    line(400, 5*i,200+abs(200-5*i), 5*i)
   }
}