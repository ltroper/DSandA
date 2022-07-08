const climbStairs = function(n) {

    // //recursive
    // if (n <= 1) return 1

    // return (climbStairs(n-1)+climbStairs(n-2))

    //iterative

    let one = 1
    let two = 1

    for (let i = 0; i < n-1; i++){
        let temp = one
        one += two
        two = temp
    }

    return one
};

// 1 = 1
// 2 = 1+1 || 2
// 3 = 1+1+1 || 2+1 || 1+2
// 4 = 1+1+1+1 || 1+2+1 || 2+1+1 || 1+1+2 || 2+2
// 5 = 1+1+1+1+1 || 1+2+1+1 || 1+1+2+1 ||
//     2+1+1+1 || 1+1+2+1 || 2+2+1 || 2+1+2 || 1+2+2

console.log(climbStairs(6))
