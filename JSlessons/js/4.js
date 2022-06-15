
if (4 == 9) {
    console.log('Hi');
}else{
    console.log('kuku');
}

const num = 50;

if(num<49) {
    console.log('error');
} else if (num > 100) {
    console.log('More');
} else {
    console.log("Good!");
}

let a = (num === 50) ? console.log('ok') : console.log('error');



switch (num) {
    case 49:
        console.log("error");
        break;
    case 100:
        console.log("error");
        break;
    case 50:
        console.log("Yeah!");
        break;
    default:
        console.log("Dont see 50 )");
        break;

}

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

if ("Ёжик" > "яблоко"){
    console.log("ej");
}else{
    console.log("apple");
}