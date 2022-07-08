const checkPossibility = function (nums) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            nums[i + 1] = nums[i]
            count++
        }
    }

    return count < 2 ? true : false
};


console.log(checkPossibility([4, 2, 1]))
console.log(checkPossibility([4, 2, 3]))
console.log(checkPossibility([3, 4, 2, 3]))
