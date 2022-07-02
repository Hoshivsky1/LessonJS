
let num = 50;

while (num <= 55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++; 
}
while(num < 55);

for(let i = 1; i < 10; i++){
    if (i === 6){
        break;
        // !continue;
    }
    console.log(i);
}

for(let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****



let result = '';
const lenght = 7;

for(let i = 1; i < lenght;i++) {
    
    for(let j = 0; j < i; j++) {
        switch(j){
            case 0: result += `М`;
                break;
            case 1: result += `A`;
                break;
            case 2: result += `K`;
                break;
            case 3: result += `C`;
                break;
            case 4: result += `И`;
                break;
            case 5: result += `М`;
                break;
            default:
                break;
        }
    }

    result += '\n';
}


console.log(result);

first: for(let i = 0; i < 3; i++){
    console.log(`Frist level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) {break first;}
            console.log(`Third level: ${k}`);
        }
    }
}
