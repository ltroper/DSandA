const countBits = function(n) {
   //brute force
    // let output = []

    // while (n >= 0){
    //     let string = n.toString(2)
    //     output.unshift(parseInt(string))
    //     n--
    // }

    // for (let i = 0; i < output.length; i++){
    //     let count = 0
    //     let ele = output[i]
    //     while (ele > 0){
    //         count += ele%2
    //         ele = Math.floor(ele/10)
    //     }
    //     output[i] = count
    // }

    // return output


    //fancy af

    let dp = [0]

    let offset = 1

    for (let i = 1; i <= n; i++){
        if (offset * 2 === i){
            offset *= 2
        }
        dp.push(1 + dp[i - offset])
    }


    return dp
};

console.log(countBits(5))
