//!Функція конструктор

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Користувач ${this.name}, покинув нас!`);
};


const maxim = new User('Maxim', 18);
const miha = new User('Miha', 17);

maxim.exit();

maxim.hello();
miha.hello();

console.log(maxim);
console.log(miha);  

//!Цы функції створюють обєкти