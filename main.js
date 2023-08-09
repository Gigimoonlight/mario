let noseX=0;
let noseY=0;
function preload() {
    world_start=loadSound("world_start.wav");
    mario_die=loadSound("mariodie.wav");
    mario_kick=loadSound("kick.wav");
    mario_jump=loadSound("jump.wav");
    mario_gameover=loadSound("gameover.wav");
    mario_coin=loadSound("coin.wav");
    setSprites();
    MarioAnimation();
}
function setup(){
    canvas=createCanvas(1240, 336);
    canvas.parent('canvas')
    instializeInSetup(mario);
    video=createCapture(VIDEO);
    video.size(700, 300);
    video.parent('gameConsole');
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    game();
}

function modelLoaded(){
    console.log(":)");
}

function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}