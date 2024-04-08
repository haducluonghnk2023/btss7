"use strict";
function checkPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function allPrimes(arr) {
    return arr.every(num => checkPrimeNumber(num));
}
console.log(allPrimes([1, 3, 4, 2, 7, 9, 32, 43, 12, 45]));
console.log(allPrimes([3, 5, 7, 9, 11]));
