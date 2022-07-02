const now3 = new Date("2020-05-01");
const now1 = new Date(2020, 5, 1, 20);
const now2 = new Date(-999999999);
// const now3 = new Date();
// new Date.parse("2020-05-01");

console.log(now3.setHours(40));
console.log(now3);
// console.log(now3.getFullYear());
// console.log(now3.getMonth());
// console.log(now3.getDate());
// console.log(now3.getSeconds());
// console.log(now3.getDay());
// console.log(now3.getUTCHours());
// console.log(now3.getTimezoneOffset());

// console.log(now3.getTime());

let start = new Date();

for (let i = 0; i < 100000; i ++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл спрацював за  ${end - start} мілісекунд`);