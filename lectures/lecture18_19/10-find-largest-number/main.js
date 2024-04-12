const numbers = [65, 1800, 12, 20, 1963, 5000, 260, 0, 40, 953, 775, 67, 33];

// your code here:
let biggestNumberYet = numbers[0]
for(let i=0; i<numbers.length; i++){
    let currentNumber = numbers[i];
    if(currentNumber>biggestNumberYet){
        biggestNumberYet = currentNumber
    }
}
console.log(biggestNumberYet);