const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}
// feel free to change these values as you like!
const c1 = {
    x: 0,
    y: 100,
    width: 100,
    speed:3,
    color: 'purple'
};

const c2 ={
    x: canvasWidth,
    y: 300,
    width: 100,
    speed: -5,
    color: 'hotpink'
}

const c3 ={
    x: 0,
    y: 500,
    width: 200,
    speed: 7,
    color: 'blue'
}

const c4 ={
    x: 0,
    y: 0,
    width: 200,
    speed: 7,
    color: 'orange'
}

// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
   if (c1.x > canvasWidth+c1.width/2){
    c1.x = -c1.width/2;
   }
    c1.x += c1.speed;
    if (c2.x < -c2.width/2){
        c2.x = canvasWidth+c2.width/2;
       }
    c2.x += c2.speed;
    if (c3.x > canvasWidth+c3.width/2){
        c3.x = -c3.width/2;
       }
    c3.x += c3.speed;

    c4.x += c4.speed;
    c4.y += c4.speed;
    if (c4.x > canvasWidth || c4.x > 
        canvasHeight){
        c4.x = 0;
        c4.y = 0;

       }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawCar(c4.x, c4.y, c4.width, c4.color);

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
