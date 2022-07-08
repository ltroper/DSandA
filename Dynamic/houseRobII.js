const rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    const memo = []
    const memo2 = []

    memo[0] = 0
    memo[1] = nums[0]

    memo2[0] = 0
    memo2[1] = nums[1]

    for (let i = 1; i < nums.length-1; i++){
        memo[i+1] = Math.max(memo[i], memo[i-1]+nums[i])
    }

    for (let i = 2; i < nums.length; i++){
        memo2[i] = Math.max(memo2[i-1], memo2[i-2]+nums[i])
    }



    return Math.max(memo[nums.length-1], memo2[nums.length-1])
};

console.log(rob([2, 3, 2]))
