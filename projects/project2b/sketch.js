
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const ground = 2*canvasHeight/3;
let dinoGround = ground-50;
let jump = 0;
let scoreNumber = 0;
const dino = {
    x:  canvasHeight/4,
    y: dinoGround,
    w: 50,
    h: 50,

}
let counter = 0;
const cacti=[];
let play = 1;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(30);
    // text("scoreNumber",50,50);
}
function draw(){
    clear();
    if(jump > 0 && jump < 15){
        dino.y -= 10;
        jump -= 1;
    } else if(jump > 0){
        dino.y -= 15;
        jump -= 1;
    } else if(dino.y < dinoGround){
        dino.y += 10;
       };
       if(dino.y > dinoGround){
        dino.y = dinoGround;
    } 
    if(jump > 0 ){
        dino.y -= 10;
        jump -= 1;
    }
    drawDino();
   
   
    scoreNumber++;
    textFont('Courier New');
    textSize(24);
    text(`Score:${scoreNumber}`, 35, 55);

    if(counter < 75){
        counter++;
    }else{
        newCactus()
        counter = 0
    }
    drawCacti()
    
    line(0,ground,canvasWidth,ground);
    if(play === 0){
            noLoop();
            textFont('Courier New');
          textSize(50);
          text("Game Over", canvasWidth/2,canvasHeight/3 - 30)
          textSize(25)
            text(`Your Score:${scoreNumber}`, canvasWidth/2,canvasHeight/3 + 20)
            textSize(20)
            text("Refresh Page to Play Again", canvasWidth/2,canvasHeight/3 + 60)
           }
    }



 function drawDino(){
    fill("")
    rect(dino.x,dino.y,dino.w,dino.h);
    fill("black")
    circle(dino.x+4*dino.w/5,dino.y+15,5)
    arc(dino.x+7*dino.w/10, dino.y+30, 15, 15, 0, PI + QUARTER_PI, CHORD);
 }

 function keyPressed(){
    if(key == ' ' && dino.y === dinoGround){
        jump = 20;
    }
    return false;
 }

function newCactus(){
    let ranInt = int(random(0,10))
    // console.log(ranInt)
    if(ranInt > -1 && ranInt<5){
       cacti.push(new cactus("one"))
    } else if(ranInt<8){
        cacti.push(new cactus("two"))
    }else{
        cacti.push(new cactus("three"))
    }

}
 function drawCacti(){
    for(let i=0;i<cacti.length;i++){
        // console.log(cacti[i].x)
        if(cacti[i].type === "one"){
            rect(cacti[i].x,cacti[i].y,20,cacti[i].h)
            if (collideRectRect(dino.x,dino.y,dino.w,dino.h,cacti[i].x,cacti[i].y,20,cacti[i].h)){
                console.log("you lose")
                play = 0
            }
        } else if(cacti[i].type === "two"){
            rect(cacti[i].x,cacti[i].y,35,cacti[i].h)
            if (collideRectRect(dino.x,dino.y,dino.w,dino.h,cacti[i].x,cacti[i].y,35,cacti[i].h)){
                console.log("you lose")
                play = 0
            }
        } else {
            rect(cacti[i].x,cacti[i].y,50,cacti[i].h)
            if (collideRectRect(dino.x,dino.y,dino.w,dino.h,cacti[i].x,cacti[i].y,50,cacti[i].h)){
                console.log("you lose")
                play = 0
            }
        }
    cacti[i].x -= 10;
    }
 }

 function cactus(type){
    this.type = type;
    this.x = canvasWidth;
    this.y = ground-75;
    this.h = 75;
 }