var box
var canvas;
var music;
var greenSurface,pinkSurface,yellowSurface,blueSurface
var leftEdge
var upEdge
var rightEdge
 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(random(20,750),200)
     box.velocityY=-4
     box.velocityX=4
    //create 4 different surfaces
    leftEdge=createSprite(0,200,1,800)
    upEdge=createSprite(200,0,1400,1)
    rightEdge=createSprite(800,200,1,800)
    greenSurface=createSprite(692,560,210,50)
    greenSurface.shapeColor="green"
    pinkSurface=createSprite(461,560,210,50)
    pinkSurface.shapeColor="pink"
    yellowSurface=createSprite(230,560,210,50)
    yellowSurface.shapeColor="yellow"
    blueSurface=createSprite(1,560,210,50)
    blueSurface.shapeColor="blue"

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    //create edgeSprite
     createEdgeSprites();    
    box.bounceOff(leftEdge)
    box.bounceOff(upEdge)
    box.bounceOff(rightEdge)
    if(box.isTouching(pinkSurface)&&box.bounceOff(pinkSurface)){
        box.shapeColor="pink"
    }
     if(box.isTouching(greenSurface)&&box.bounceOff(greenSurface)){
        box.shapeColor="green"
        music.play()
    }
     if(box.isTouching(yellowSurface)){
        box.shapeColor="yellow"
        box.velocityY=0
        box.velocityX=0
        music.stop()
    }
    //add condition to check if box touching surface and make it box
}
