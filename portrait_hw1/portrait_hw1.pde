void setup(){
  size(1000, 1000);
}

void draw()
{
  background(50, 150, 250);
  //my face
  noStroke();
  fill(139, 69, 19);
  rect(155, 155, 290, 290);
  noStroke();
  fill(139, 69, 19);
  ellipse(300, 400 , 300, 300);
  noStroke();
  fill(192, 192, 192);
  ellipse(450, 130, 290, 290);
  ellipse(150, 130, 290, 290);
  //my nose
  stroke(0, 0, 0);
  noFill();
  bezier(290, 330, 305, 345, 325, 325, 310, 310);
  //my mouth
  strokeWeight(5);
  stroke(0, 0, 0);
  bezier(200, 350, 220, 420, 350, 400, 350, 400);
  //glasses
  
  
}
