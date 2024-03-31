function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */
    strokeWeight(0)
    fill('brown')
    rect(250, 500, 100, 400);

    // https://p5js.org/reference/#/p5/circle
    fill("green")
  
    circle(300, 300, 200);
    circle(150, 400, 200);
    circle(450, 400, 200);
    circle(300, 450, 200);

    // https://p5js.org/reference/#/p5/rect
    
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // strokeWeight(20)   
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // strokeWeight(1);
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    // drawGrid(canvasWidth, canvasHeight)
}