"use strict";
let counter = function () {
    let privateCounter = 0;
    function change(x) {
        privateCounter += x;
    }
    return {
        increment: function (x) {
            change(x);
            this.value();
        },
        decrement: function (x) {
            change(-x);
            this.value();
        },
        value: () => console.log(privateCounter)
    };
};
let myCounter = counter();
console.log(typeof (counter));
console.log(myCounter.value());
console.log(myCounter.increment(2));
console.log(myCounter.decrement(1));
//# sourceMappingURL=counter.js.map