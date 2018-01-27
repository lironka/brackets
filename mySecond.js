module.exports = function (str) {
    const bracketsPattern = {
        ')':'(',
        '}':'{', 
        ']':'['
    };
    let stack = [];
    let openBrs = Object.values(bracketsPattern);
    let closeBrs = Object.keys(bracketsPattern);

    for (let i = 0; i < str.length; i++) {
        let char = str.substr(i, 1);
        if(stack.length === 0 && closeBrs.indexOf(char) != -1) return false;
        if(closeBrs.indexOf(char) != -1) {
            if(bracketsPattern[char] === stack[stack.length - 1]){
                stack.pop();
            } else {
                return false;
            }
        }
        if(openBrs.indexOf(char) != -1) {
            stack.push(char);
        }
    }

    return stack.length === 0;
};