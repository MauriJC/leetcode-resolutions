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
// Optimized solution
// let stack: string[] = [];
//     let matchingBrackets: { [key: string]: string } = { ")": "(", "]": "[", "}": "{" };
//     for (let char of s) {
//         if (char === "(" || char === "[" || char === "{") {
//             stack.push(char);
//         } else if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
//             return false;
//         } else {
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
