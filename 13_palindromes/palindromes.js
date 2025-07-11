const palindromes = function (pal) {
    // Edge case checking
    if (pal.length == 0 || pal.length == 1) {
        return true;
    }
    
    // String transformation
    let workPal = pal;
    workPal = workPal.replaceAll(/[\p{P}\s]/ug,""); // Gets rid of punctuation characters
    workPal = workPal.trim();
    workPal = workPal.toLowerCase();

    // Find check limit
    /* The check limit may not be 100% obvious as to what it does, so I'm going to explain it in this comment
    For even lengths, half the length is the number of checks necessary to check each pair of indices for that length
        Example for length 10
            Indices: 0,1,2,3,4, 5,6,7,8,9
            10/2 = 5
            5 checks are needed to check each pair of indices {(0,9), (1,8), etc.}
    For odd lengths, the length needs to be decremented before begin halved, but is otherwise identical to even lengths
        Example for length 11
            Indices: 0,1,2,3,4  5, 6,7,8,9,10 (5 on each side of the middle, so 5 pairs of indices)
            (11-1) / 2 = 5
            5 checks are needed to check each pair of indices (same as above)
            Since the middle value is equal to itself, checking it can be skipped
    */
    let numOfChecks = 0;
    if (workPal.length % 2 == 0) {
        numOfChecks = workPal.length / 2;
    } else {
        numOfChecks = (workPal.length - 1) / 2;
    }

    // Actual logic
    let isPal = true;
    for (let i = 0; i <= numOfChecks; i++) {
        if (workPal.at(i) !== workPal.at(-i-1)) { // -1 since negative values start counting from -1, not -0
            isPal = false;
            break;
        }
    }

    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
