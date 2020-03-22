"use strict";
function getSquare(x) {
    return x * x;
}
function squareDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            document.write('<br>cache');
            return x;
        }
        cache.set(x, func(x));
        document.write('<br>not cache');
        console.log(cache);
        return cache.get(x);
    };
}
getSquare = squareDecorator(getSquare);
document.write(getSquare(2));
document.write(getSquare(2));
document.write(getSquare(3));
document.write(getSquare(4));
//# sourceMappingURL=decorater.js.map