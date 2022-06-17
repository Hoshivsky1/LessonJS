const arr = [4, 2, 6, 1, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} в середині масива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));