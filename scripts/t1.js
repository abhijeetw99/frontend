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
console.log("Lexical This");
var emp = {
    id: 1,
    show: function () {
        var _this = this;
        console.log('id = ', this.id);
        setTimeout(function () {
            console.log('timed out id = ', _this.id);
        }, 1000);
    }
};
console.log(emp.show());
// Rest ans spread
console.log('Rest and spread');
var restColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var spreadColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of colors";
restColors(message, 'red', 'blue');
var colors = ['white', 'silver'];
spreadColors.apply(void 0, colors);
// For off loop
console.log('For off loop');
var animes = ['opm', 'bleach', 'MHA'];
for (var i in animes) {
    console.log(animes[i]);
}
for (var _i = 0, animes_1 = animes; _i < animes_1.length; _i++) {
    var anime = animes_1[_i];
    console.log(anime);
}
//# sourceMappingURL=t1.js.map