console.log("Hello World");
const hangul = require("./node_modules/hangul-js");
console.log(hangul.disassemble("가나다"));

const circle = require("./circle.js");
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);