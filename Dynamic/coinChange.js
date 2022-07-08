const coinChange = function(coins, amount, memo={}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return -1

    let res = -1

    for (let coin of coins){
        let remainder = amount - coin
        let remainderFunc = coinChange(coins, remainder, memo)
        if (remainderFunc !== -1){
            let arrayLength = remainderFunc +  1
            if (res === -1 || arrayLength < res){
                res = arrayLength
            }
        }
    }

    memo[amount] = res
    return res
};


console.log(coinChange([6, 5, 9, 1], 100))
