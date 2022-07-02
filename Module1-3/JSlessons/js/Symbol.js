const user = {
    name: 'Max',
    surname: 'Tor',
    birthday: '20/03/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// for (const key of user) {
//     console.log(user[key]);
// }

const arr = ['a', 'b', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);
for (const key of arr) {
    console.log(key);
}

// const str = 'string';

// for (const key in str) {
//     console.log(str[key]);
// }

const money = {
    john: 500,
    ivan: 1000,
    max: 5000,
    sayHello: function() {
        console.log('Hello');
    }
};

money[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.max,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done:false, value: this.current}
            } else {
                return {done : true}
            }
            // {done: true, value: 123}
        }
    }
} 

const iterator = money[Symbol.iterator]();
console.log(iterator.next());