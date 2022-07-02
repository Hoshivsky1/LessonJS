let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

//* ==========================================================================

const obj = {
    a: 5,
    b: 1,
};

const copy = obj;//!link
copy.a = 10;
console.log(copy);
console.log(obj);

//* ==========================================================================
function copys(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj;
    }
    return objCopy;
}

//* ==========================================================================
const numbers = {
    a:2,
    b:5,
    c: {
        d:3,
        x:7,
    }
};

const newNumbers = copys(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

//* ===========================================================================
const add = {
    d:17,
    e:20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

//* ============================================================================
const oldArray = ["a", 'b', `c`];
const newArray = oldArray.slice();

newArray[1] = 'Hi';
console.log(newArray);
console.log(oldArray);

//* =============================================================================
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'faccebook'];
console.log(internet);

//* =============================================================================
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

//*==============================================================================
const array = ['a', 'b'];
const newsArray = [...array];

//*==============================================================================
const q = {
    one:1,
    two:2
};

const nObj = {...q};
nObj.one = 5;
console.log(nObj);
console.log(q);

//*================================================================================
