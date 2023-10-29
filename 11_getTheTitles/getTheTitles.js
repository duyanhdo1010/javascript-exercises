const getTheTitles = function(object) {
    for (let i = 0; i < object.length; i++) {
        return object.map(book => book.title);
    }
};

// Do not edit below this line
module.exports = getTheTitles;
