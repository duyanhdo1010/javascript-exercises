const repeatString = function(string, num) {
    string = string.toString();
    if (num < 0) {
        return 'ERROR';
    }

    if (string.length === 0) {
        return '';
    }

    let newString = '';
    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
