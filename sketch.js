var dog ;
var happyDog; 
var database;
var foodS;
var foodStock;
var dogimg;
var happyDogimg;
var readstock;

function preload()
{
  dogimg=loadImage("Dog.png");
  happyDogimg=loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
   dog = createSprite(250,250,40,40);
 dog.addImage(dogimg)
 dog.scale=0.5;
  database=firebase.database()
  foodStock=database.ref("FOOD");
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
dog.addImage(happyDogimg)
  writefoodS(readstock)
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogimg)
}

drawSprites();
textSize(24);
fill("red");
text("FOODSTOCK=" + readstock ,100,20);
  //add styles here

}
 function readStock(data){
readstock=data.val()
 }
function writefoodS(x){
if(x>0){
  x=x-1;
}
else{
  x=0;
}
database.ref("/").update({
FOOD:x
})
}

