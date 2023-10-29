const fibonacci = function(number) {
    if (typeof number === 'string') {
        number = parseInt(number);
    }

    fibonacciArray = [1, 1];
    
    if (number < 0 ){
        return "OOPS";
    } else if (number <= 2) {
        return fibonacciArray[number - 1];
    } else {
        for (let i = 2; i < number; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
        return fibonacciArray[fibonacciArray.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
