const persone = {
    name: 'Maxim',
    tel: '+3805150',
    parents: {
        mom: 'galya',
        dad: 'miron'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents. mom = 'Galya';
console.log(clone);
console.log(persone); 
