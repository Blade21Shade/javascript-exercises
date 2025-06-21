const reverseString = function(toReverse) {
    // Edge case and error handling
    if (toReverse === '') {
        return '';
    }

    if (typeof toReverse !== 'string') {
        return;
    }

    // Core logic
    let reversed = "";
    let splitString = toReverse.split('');
    
    for (let i = splitString.length - 1; i >= 0; i--) {
        reversed += splitString[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
