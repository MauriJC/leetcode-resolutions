console.log("Climbing stairs");

function climbStairs(n: number): number {

    if (n <= 2) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const current = first + second;
        console.log(current, first, second);
        first = second;
        second = current;
    }

    console.log(second);
    return second;
};

climbStairs(10);