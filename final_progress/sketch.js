var state = 0
var img
var img2
let x = 0;
let y = 0;
let spacing = 10;


function setup(){
	createCanvas(700, 400);
	background('blue');
	//img = loadImage("Abundance.png");
	//img2 = loadImage("Grass.png")
}

function draw(){
	if(state == 0){
		stateZero();
	}
	if(state == 1){
		stateOne();
	}
	else if(state == 2){
		stateTwo();
	}

}
//StateZero-Pattern
function stateZero(){
	
	stroke(255, 255, 255);
	if (random(1) < 0.5){
		line(x, y, x + spacing , y + spacing);
	} else{
		line(x, y + spacing , x + spacing , y);
	}
	x = x + spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;}
		if (y > 400){
		state = 1;
	}

	
}
//StateOne-Aphoto
function stateOne(){
	background(245, 80, 22);
	if (mouseIsPressed){
		state = 2;
	}

	
	

}
//StateTwo-Vphoto
function stateTwo(){
	background(22, 22, 22);
	
}