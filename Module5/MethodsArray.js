//!   filter
const names = ['max', 'miha', 'jordan', 'Volodemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


//! map
const answer = ['mAxw', 'AnnA', 'hELLO'];

const result = answer.map(item => item.toLowerCase());

console.log(result); 


//! every/some 
const arr = [4, 'qwq', 'qwdqwdqwd'];

console.log(arr.some(item => typeof(item) === 'number'));

console.log(arr.every(item => typeof(item) === 'number'));


//! reduce
const arrs = [4, 5, 1, 3, 2, 6];
                        //!3 зразу підставить 3
                        //*0    //4
                        //*4    //5
                        //*9    //1
                        //*10   //3
                        //*13   //2
                        //*15   //6
                        //*21   //end   
                                                        //!3
const res = arrs.reduce((sum, current) => sum + current, 3); 
console.log(res);


const arrss = ['apple', 'banana' , 'pink'];
const ress = arrss.reduce((sum, current) =>`${sum},  ${current}`);
console.log(ress);


//! Перетворення з обєкту в масив та ЧЕНІНГ
const obj = {
    max: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);