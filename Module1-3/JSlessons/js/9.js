//*to string=====================
console.log(typeof(String(null)));

console.log(typeof(5 + ''));

const num = 5;

console.log('https://gogle.com/' + num);

const fontSize = 26 + 'px';

//*to number====================

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

//*To boolean=========================

//1) False
//?  0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"4444"));
