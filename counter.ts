let counter = function(){
    let privateCounter = 0;

    function change(x:number){
        privateCounter += x;
    }

    return {
        increment:function(x:number){
            change(x);
            this.value();
        },

        decrement:function(x:number) {
            change(-x);
            this.value();
        },

        value:() => console.log(privateCounter)
    }
};

let myCounter = counter();

console.log(typeof(counter));

console.log(myCounter.value());

console.log(myCounter.increment(2));

console.log(myCounter.decrement(1));






