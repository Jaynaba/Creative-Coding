var cows;
var cow;
var slider1;
var pigs;
var pig;
var slider2;
var roosters;
var rooster;
var slider3;

function preload(){
	cows = loadSound("animalsounds/cow.mp3");
	pigs = loadSound("animalsounds/pig.mp3");
	roosters = loadSound("animalsounds/rooster.mp3");
	cow = loadImage("anims/cow.JPG");
	pig = = loadImage("anims/pig.JPG");
	rooster  = loadImage("anims/rooster.JPG");

function setup() {
	createCanvas(720, 200);
	background(255, 0, 0);
	slider1 = createSlider(0, 1, 0.5, 0.01 );
	cows.play();
	slider2 =  createSlider(0, 1, 0.5, 0.01 );
	pigs.play();
	slider3 =  createSlider(0, 1, 0.5, 0.01 );
	rooster.play();


function draw(){
	background(0);
	cows.setVolume(slider1.value());
	pigs.setVolume(slider2.value());
	roosters.setVolume(slider3.value());

	



}


