"use strict";
console.log('dfjkghfjkdg');
var getvalue = function () {
    return 10;
};
console.log('yo', getvalue());
var getArrowValue = function (m) { return 30 * m; };
console.log(getArrowValue(3));
var getArith = function (a, b) {
    return a * b;
};
console.log('add=', getArith(4, 3));
var getEsArith = function (a, b) { return a * b; };
console.log('es mul = ', getEsArith(3, 5));
var count = function () {
    var x = 1;
    return function () {
        return x++;
    };
};
var myCounter = count();
console.log(myCounter());
console.log(myCounter());
//# sourceMappingURL=t1.js.map