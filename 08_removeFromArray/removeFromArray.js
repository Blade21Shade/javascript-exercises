const removeFromArray = function(arr, ...toRemove) {
    for (let i = 0; i < arr.length; i++) {
        for (tr of toRemove) {
            if (arr[i] === tr) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
