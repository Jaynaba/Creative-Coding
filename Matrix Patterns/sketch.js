var r
var b
var g

function setup(){
	createCanvas(400, 400);
	background(200, 39, 110);
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw(){
	stroke(r, g, b);
	fill(r, g, b);
	ellipse(260, 100, 100, 100);

	stroke(r, g, b);
	fill(r, g, b);
	ellipse(250, 90, 90, 90);

	stroke(r, g, b);
	fill(r, g, b);
	ellipse(240, 100, 100, 100);

	stroke(r, g, b);
	fill(r, g, b);
	ellipse(230, 100, 100, 100);

	stroke(r, g, b);
	fill(r, g, b);
	ellipse(220, 90, 90, 90);

}

function mousePressed(){
	var d = dist(mouseX, mouseY, 360, 200);
	if (d < 100){
	r = random(255);
	g = random(255);
	b = random(255);
	}
