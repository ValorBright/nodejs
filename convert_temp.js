"use strict";

let celsius = process.argv[2];

let fahrenheit = (celsius * 9/5) + 32;

// 21 in celsius is 69.8 in Fahrenheit
console.log(celsius, "in celsius is", fahrenheit, "Fahrenheit");