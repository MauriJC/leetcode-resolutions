"use strict";
console.log("Fibonacci loaded");
function fibonacci(num) {
    if (num <= 2)
        return 1;
    let fibo = fibonacci(num - 2) + fibonacci(num - 1);
    return fibo;
}
fibonacci(3);
