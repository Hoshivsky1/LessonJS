const arr = ['Maxim', 'Oleg', 'Mixa', 'Maxim'];

const set = new Set(arr);

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// set.add('Ivan');
// set.add('Oleg');

// console.log(set);  

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values )

