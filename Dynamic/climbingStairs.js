const climbStairs = function(n, memo={}) {

    // //recursive
    if (n <= 1) return 1
    if (memo[n]) return memo[n]

    memo[n] = climbStairs(n-1, memo)+climbStairs(n-2, memo)

    return memo[n]


};


// iterative

//     let one = 1
//     let two = 1

//     for (let i = 0; i < n-1; i++){
//         let temp = one
//         one += two
//         two = temp
//     }

//     return one


console.log(climbStairs(56))
