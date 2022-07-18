// const minCostClimbingStairs = function (cost) {
//     if (cost.length === 0) return 0
//     if (cost.length === 1) return cost[0]
//     if (cost.length === 2) return Math.min(cost[0], cost[1])




//     return Math.min(minCostClimbingStairs(cost), minCostClimbingStairs(cost.slice(1)))

//     // return memo[cost]

// };

const minCostClimbingStairs = function (cost) {
    cost.push(0)

    for (let i = (cost.length - 3); i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2])
        console.log(cost[i])
    }


    return Math.min(cost[0], cost[1])
}


// console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
