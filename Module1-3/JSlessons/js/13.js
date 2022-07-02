const user = {
    name: 'Max',
    surname: 'Tor',
    birthday: '20/03/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), writable: false, enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);

Object.defineProperty(user, {
    name: {writable: false},
    surname: {writable: false}
});


//! writable - свойство можна міняти
//! enumerable - свойство будуть робьити в циклах
//! configu