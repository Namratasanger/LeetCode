/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let object = {
        "+": (num1,num2) => num1+num2,
        "-": (num1,num2) => num1-num2,
        "*": (num1,num2) => num1*num2,
        "/": (num1,num2) => num1/num2
    }
    tokens.forEach((token)=>{
        if(object[token]){
            let num2 = stack.pop();
            let num1 = stack.pop();
            let newValue = Math.trunc(object[token](num1,num2));
            stack.push(newValue);
        }else{
            stack.push(Number(token));
        }
    });
    return stack[0];
};
