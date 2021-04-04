var canvas;
var music;
var blue1
var green2
var red3
var orange4
var dude

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    blue1=createSprite(100,500,200,30)
    blue1.shapeColor="blue"
    green2=createSprite(300,500,200,30)
    green2.shapeColor="green"
    red3=createSprite(500,500,200,30)
    red3.shapeColor="red"
    orange4=createSprite(700,500,200,30)
    orange4.shapeColor="orange"
    dude=createSprite(400,40,20,20)
    dude.shapeColor="purple"
    dude.velocityX= -5
    dude.velocityY= 4
    

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    edges=createEdgeSprites()
    dude.bounceOff(edges)
    dude.bounceOff(blue1)
    dude.bounceOff(green2)
    dude.bounceOff(red3)
    dude.bounceOff(orange4)
    if(dude.isTouching(blue1)){
        blue1.shapeColor="pink"
    }
    if(dude.isTouching(green2)){
        green2.shapeColor="yellow"
        
    }
    if(dude.isTouching(red3)){
       red3.shapeColor="grey"
        
    }
    if(dude.isTouching(orange4)){
        orange4.shapeColor="white"
        
    }
    



    //add condition to check if box touching surface and make it box
}
