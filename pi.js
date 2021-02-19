'use strict'

let counter = 0;
let denominator = 1;
let sign = 1;
let sum = 0;

while(counter < 100000000) {

    let term = sign * 1/denominator;

    sum = sum + term;

    sign = sign * -1;
    denominator = denominator + 2;
    counter++;
}

let pi = sum * 4
console.log(pi);
console.log(Math.PI);