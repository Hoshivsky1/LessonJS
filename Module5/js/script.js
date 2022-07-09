const names = ['max', 'miha', 'jordan', 'Volodemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


//! map
const answer = ['mAxw', 'AnnA', 'hELLO'];

const result = answer.map(item => item.toLowerCase());

console.log(result); 