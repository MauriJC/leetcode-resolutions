"use strict";
console.log('valid parentheses');
let firstS = "()";
let secondS = "()[]{}";
let thirdS = "(]";
let fourthS = "({{{{}}}))";
function isValid(s) {
    let stack = [];
    let valid = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        }
        else if (s[i] == ")") {
            if (stack[stack.length - 1] == "(") {
                valid = true;
            }
            else {
                return false;
            }
            ;
            stack.pop();
        }
        else if (s[i] == "]") {
            if (stack[stack.length - 1] == "[") {
                valid = true;
            }
            else {
                return false;
            }
            ;
            stack.pop();
        }
        else {
            if (stack[stack.length - 1] == "{") {
                valid = true;
            }
            else {
                return false;
            }
            ;
            stack.pop();
        }
    }
    if (stack.length != 0)
        return false;
    return valid;
}
;
isValid(fourthS);
