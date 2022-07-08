const canJump = function (nums, memo = {}) {

    const key = nums
    if (key in memo) return memo[key]

    if (nums.length === 0) return false
    if (nums.length === 1) return true

    let maxSteps = nums[0]

    for (let i = 1; i <= maxSteps; i++) {
        memo[key] = canJump(nums.slice(i), memo)
    }

    return memo[key] ? memo[key] : false
};

console.log(canJump([2, 0, 0]))
console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
