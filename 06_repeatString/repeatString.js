const repeatString = function(toRepeat, amount) {
    if (amount < 0) {
        return "ERROR";
    }
    
    let toReturn = "";
    
    for (let i = 0; i < amount; i++) {
        toReturn += toRepeat;
    }
    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
