function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
   
    let circleCounter = 0;
   let y = -25
   let width = 0
    while (circleCounter < 300){
        
        circle(100,y, width);
        circle(300,y,width);
        circle(500,y,width);
        y += 10;
        circleCounter += 1;
        width += 10;
    }

//    let y = -25
//     while (y < canvasHeight){
//         circle(100,y, 50);
//         y += 10;
//         console.log("circle");
//     }

    drawGrid(canvasWidth, canvasHeight);
}
