module.exports = function (primaryString) {
    //Open Bracket is odd, Close Bracket is even
    const bracketsPattern = ['(', ')', '{', '}', '[', ']'];
    let result = true;
    let stack = [];

    for (let i = 0; i < primaryString.length; i++) {
        let current = primaryString.substr(i, 1);
        let indexCurrentInPattern = bracketsPattern.indexOf(current);
        if (indexCurrentInPattern > -1) {
            if (Number.isInteger(indexCurrentInPattern / 2)) {
                //if indexCurrentInPattern is odd
                stack.push(current);
            } else {
                //if indexCurrentInPattern is even
                if (stack.length === 0) {
                    result = false;
                    break;
                } else {
                    let prevBracket = stack[stack.length-1];
                    if(isCurrentIsClosedForPrev(prevBracket, current, bracketsPattern)){
                        stack.pop();
                    } else {
                        result = false;
                    }
                }
            }
        }
    }

    return result;
};

function isCurrentIsClosedForPrev(prevBracket, nextBracket, pattern) {
    let indexPrev = pattern.indexOf(prevBracket);
    let indexNext = pattern.indexOf(nextBracket); 
    return (indexNext - indexPrev) == 1;
}