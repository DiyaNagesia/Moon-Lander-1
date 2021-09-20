var backgroundImage;
var lander,landerImage;
var vx = 0
var vy = 0
var g = 0.05

function preload(){
  backgroundImage = loadImage("bg_sur.png")
  landerImage = loadImage("normal.png")
}

function setup(){
  createCanvas(500,500)
  lander = createSprite(250,250,50,50)
  lander.addImage(landerImage)
  lander.scale = 0.1

}

function draw(){
  background(backgroundImage)
text("vertical velocity:"+round(vy),350,50)
vy+=g
lander.position.y+=vy

  drawSprites()

}