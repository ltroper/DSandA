// const fib = (n, obj = {}) => {
//     if (obj[n]) return obj[n]
//     if (n <= 2) return 1

//     obj[n] = fib(n - 1, obj) + fib(n - 2, obj)
//     return obj[n]
// }

const fib = (n, memo = {}) => {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1

    memo[n] = (fib(n-1, memo) + fib(n-2, memo))
    return memo[n]
}

// 1 1 2 3 5 8 13
//this uses DP to make the time complexity O(n) instead of O(2^n)


console.log(fib(25))
