const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c50", "#e1f0c450", "#6bab9050", "#55917f50", "#5e4c5a50"];
const rainbow =["red","orange","yellow","green","blue","purple"]

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second

    // fill(color);
    strokeWeight(0);

    // generate a random x-position, y-position, and size:


    // Draw a random circle:
    // let counter = 0;
    // while (counter < 500) {
    //     let color = colors[randomInt(0,4)]
    //     fill(color);
    //     let x = randomInt(0, canvasWidth);
    //     let y = randomInt(0, canvasHeight);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter += 1;
    // }
    // counter = 0
    // fill(color)
    // while (counter < 500) {
    //     let x = randomInt(canvasWidth/2, canvasWidth);
    //     let y = randomInt(0, canvasHeight/2);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter += 1;
    // }

    let counter = 0;
    while (counter < 70000) {
        let color = rainbow[randomInt(0,5)]
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(5, 10);
        circle(x, y, size);
        counter += 1;
    }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter = 0;
    while (counter < 4000) {
        let color = rainbow[randomInt(0,5)]
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(15, 30);
        circle(x, y, size);
        counter += 1;
    }
    // generate a random x-position, y-position, and size:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    // let size = randomFloat(25, 125);

    // draw a random circle each time the program animates:
    // circle(x, y, size);
}
