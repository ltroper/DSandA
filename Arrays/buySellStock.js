const maxProfit = function(prices) {
    let max = 0
    let min = prices[0]

    for (let i = 0; i < prices.length; i++){
        if (prices[i] < min){
            min = prices[i]
        }
        else {
            max = Math.max(max, prices[i]-min)
        }
    }
    return max
};


console.log(maxProfit([7,1,5,3,6,4]))
