const findTheOldest = function(object) {
    let oldest = object[0];
    for (let i = 0; i < object.length; i++) {
        if (object[i].yearOfDeath === undefined) {
            object[i].yearOfDeath = new Date().getFullYear();
        }
        if (object[i].yearOfDeath - object[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = object[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
