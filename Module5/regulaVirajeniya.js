// new RegExp('pattern', 'flags');
// /pattern/f

const ans = 'My name is R2D2';
console.log(ans.match(/\w\d\w\d/i ));

const reg = /\d/g;
console.log(ans.match(reg));
 
console.log(ans.search(reg));
console.log(ans.match(reg));
console.log(ans.replace(reg, "II"));

console.log('12-34-56'.replace(/-/g, ':'));

