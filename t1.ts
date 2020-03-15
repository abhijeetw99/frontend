
console.log('dfjkghfjkdg');
var getvalue = function(){
    return 10;
}



console.log( 'yo', getvalue() );

const getArrowValue = (m: number) => 30*m;

console.log( getArrowValue(3) );

var getArith = function(a: number,b: number){
    return a*b;
}

console.log('add=', getArith(4,3));

const getEsArith = ( a:number, b:number) => a*b;

console.log('es mul = ', getEsArith(3,5));

let count = function(){
    let x = 1;
    return function(){
        return x++;
    }
}

let myCounter = count();

console.log(myCounter());
console.log(myCounter());

console.log("Lexical This");

var emp = {
    id:1,
    show:function(){
        console.log( 'id = ',this.id );
        setTimeout(() => {
            console.log( 'timed out id = ',this.id );
        }, 1000);
    }
};

console.log(emp.show());

// Rest ans spread

console.log('Rest and spread');

const restColors = function(message:string, ...colors:[]){
    for( let i in colors ) {
        console.log( colors[i] );
    }
}

const spreadColors = function( ...colors:[]){
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "List of colors";

restColors( message, 'red', 'blue' );

const colors = ['white', 'silver'];

spreadColors( ...colors);

// For off loop

console.log('For off loop');

let animes = ['opm','bleach', 'MHA'];

for( let i in animes ) {
    console.log( animes[i] );
}

for( let anime of animes ) {
    console.log( anime );
}

