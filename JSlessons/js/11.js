let number = 5; 
function logNumber(){
    console.log(number);
}

number = 6;

logNumber();

number = 8;

logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1; 
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2 ,c3);

const c5 = increment();

console.log(c1, c2 ,c3, c5); 

let x = 5;
alert(x++);

console.log([ ] + false - null + true);

let y = 1; 
let a  = 2;
alert(y);
console.log([] + 1 + 2);