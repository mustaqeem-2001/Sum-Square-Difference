// squaring each natural numbers up to 10 = 385
// adding all the natural numbers and then squaring that = 3025

function sumSquareDifference(num) {
    let sumOfSquare = 0;
    let squareOfSum = 0;
    for (let i = 1; i <= num; i++) {
        sumOfSquare += i * i;
        squareOfSum += i;
    }
    squareOfSum *= squareOfSum;
    return squareOfSum - sumOfSquare;

    
}
console.log(sumSquareDifference(100))