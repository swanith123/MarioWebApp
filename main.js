function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	coin = loadSound("coin.wav");
    game_over = loadSound("game_over.wav");
	kill = loadSound("kick.wav");
	die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent("game-console");

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
    console.log("Model is Loaded.");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}




