const rob = function(nums) {
    if (nums.length === 0) return 0

    const memo = []

    memo[0] = 0
    memo[1] = nums[0]

    for (let i = 1; i < nums.length; i++){
        memo[i+1] = Math.max(memo[i], memo[i-1]+nums[i])
    }

    return memo[nums.length]


}

    // for (let i = 0; i < nums.length; i++){
    //     let newNums
    //     res = nums[i]
    //     if (i === 0) {
    //         newNums = nums.slice(2)
    //     }
    //     else if (i === nums.length-1){
    //         newNums = nums.slice(0, nums.length-2)
    //     }
    //     else {
    //         newNums = [...nums.slice(0, i-1), ...nums.slice(i+2)]
    //     }

    //     let newFunc = rob(newNums)
    //     if (newFunc > 0) {
    //         res += newFunc
    //     }
    //     max = Math.max(res, max)

    // }


;

console.log(rob([1, 2, 3, 1]))
console.log(rob([2,7,9,3,1]))
