function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

//*==================================================================================
const onj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); //*виведо обэкт
        // function shout() {
        //     console.log(this);
        // }
    }
};
onj.sum();

//*==================================================================================
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
const maxim = new User('Maxim', 18);

//*==================================================================================
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Maxim',
};

sayName.call(user, ' Hoshivskyi');
sayName.apply(user, [' Hoshivskyi']);  

//*==================================================================================
function count(num) {
    return this*num;
}

const doubl = count.bind(2);
console.log(doubl  (13));

//*==================================================================================
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber(); 

const double = a => a * 2;
 
//! 1) Проста функція this = window, якщо 'use strict' - undefined
//! 2) Контекст у методів обєкта - сам обект
//! 3) this в конструкторах і класах це новий екземпляр обєкта
//! 4) Ручне привязування this: call, apply, bind
