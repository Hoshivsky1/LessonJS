class User {
    constructor(name, age) {
        this.name = name;
        this._userAge = age;
    }

    say() {
        console.log(`User name: ${this.name}, age ${this._userAge}`);
    }

    get age() {
        return this._userAge;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._userAge = age;
        } else {
            console.log("Error number");
        }
    }
}

const max = new User('Maxim', 18 , );
console.log(max.name);
console.log(max.age);
max.age = 99;

max.say();