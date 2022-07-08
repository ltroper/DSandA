const maxSubArray = function(nums) {
    let count = nums[0]
    let max = count

    for (let i = 1; i < nums.length; i++){
        count = Math.max(nums[i], nums[i]+count)
        max = Math.max(max, count)
    }

    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
