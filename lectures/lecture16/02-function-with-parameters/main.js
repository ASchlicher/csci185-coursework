// make a function:
// function makeRed(){
//     document.querySelector("body").style.backgroundColor = "#B23";
// }
// function makeBlue(){
//     document.querySelector("body").style.backgroundColor = "#39E";
// }
// function makeGreen(){
//     document.querySelector("body").style.backgroundColor = "green";
// }

function changeColor(color){
    const bodyEl = document.querySelector("body");
    bodyEl.style.backgroundColor = color;
}