let str = 'some';
//! let strobj = new String(str);

console.log(typeof(str));
// console.log(strobj);

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = { 
    health: 100
};

// jonh.__proto__ = soldier;

Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();