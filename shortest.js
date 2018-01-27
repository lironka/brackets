module.exports = function (str) {
    const bracketsPattern = {
        ')':'(',
        '}':'{', 
        ']':'['
    };
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str.substr(i, 1);
        if(isNotBracket(char, bracketsPattern)) continue;
        if(bracketsPattern[char]){
            let lastBr = stack.pop();
            if(lastBr !== bracketsPattern[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

function isNotBracket(char, pattern) {
    let openBrs = Object.values(pattern);
    let closeBrs = Object.keys(pattern);
    return openBrs.indexOf(char) == -1 && closeBrs.indexOf(char) == -1;
}