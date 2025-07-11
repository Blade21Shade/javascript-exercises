const fibonacci = function(member) {
    if (member == 0) {
        return 0;
    }

    if (member < 0) {
        return "OOPS";
    }
    
    if (member < 3) { // 1 and 2 are 1
        return 1;
    }

    return recursiveFib(member, 2, 1, 1);
};

function recursiveFib(member, count, current, prev) {
    let temp = current + prev;
    count++;
    if (count != member) {
        return recursiveFib(member, count, temp, current);
    }
    
    return temp;
}

// Do not edit below this line
module.exports = fibonacci;
