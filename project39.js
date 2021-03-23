var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car, trex1, trex2, trex3, trex4;
var track,trex1img,trex2img,trex3img,trex4img,groundimg;
function preload(){
  track=loadImage("../images/track.jpg");
  trex1img=loadImage("../images/trex1.png");
  trex2img=loadImage("../images/trex2.png");
  trex3img=loadImage("../images/trex3.png");
  trex4img=loadImage("../images/trex4.png");
  groundimg=loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
