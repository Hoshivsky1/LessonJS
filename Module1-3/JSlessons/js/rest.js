const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log(124, 424, 424, 234, 234);

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3, 1);