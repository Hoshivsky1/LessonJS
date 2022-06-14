
if (4 == 9) {
    console.log('Hi');
}else{
    console.log('kuku');
}

const num = 50;

if(num<49) {
    console.log('error');
} else if (num > 100) {
    console.log('More');
} else {
    console.log("Good!");
}

(num === 50) ? console.log('ok') : console.log('error');



switch (num) {
    case 49:
        console.log("error");
        break;
    case 100:
        console.log("error");
        break;
    case 50:
        console.log("Yeah!");
        break;
    default:
        console.log("Dont see 50 )");
        break;

}