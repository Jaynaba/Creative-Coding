var cows


function preload() {
	soundFormats("mp3");
	cows = loadSound("animalsounds/cow.mp3");
	
}

function setup() {
	createCanvas(400, 400);
	background(100, 38, 50);
	cows.play();
}