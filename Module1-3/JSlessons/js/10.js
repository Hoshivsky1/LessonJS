let a = "";
let b = 7;

for (let i = 0; i < b; i++) {
    console.log(a += ' #');
}
console.log('\n');
let l = '';
let width = 5;
let height = 8;

for (let i = 0; i < height; i++){
    l = '';
    if (i % 2 === 0){
        for (let j = 0; j < width; j++){
            l += ' #';
        }
    }else{
        for (let j = 0; j < width; j++){
            l += '# ';
        }
    }
    console.log(l);
}
console.log('\n');
let g = 100;
let Fizz = 'Fizz';
let Buzz = 'Buzz'; 

for (let i = 1; i < g; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(Fizz+Buzz);
    }else if (i % 3 === 0) {
        console.log(Fizz);
    }else if (i % 5 === 0) {
        console.log(Buzz);
    }else{
        console.log(i);
    }
}

