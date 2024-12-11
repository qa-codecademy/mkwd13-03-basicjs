let number = 101;
let end = 150;

function sumOfSquares(startNum, endNum) {
    let sum = 0;
    while (startNum <= endNum) {
        //  sum = sum + Math.pow(number, 2);
        sum += Math.pow(startNum, 2);
        startNum++;
    }
    return sum;
}

console.log(sumOfSquares(number, end));
console.log(sumOfSquares(1, 4)); // 1+4+9+16 = 30