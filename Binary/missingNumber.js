const missingNumber = function (nums) {
    sorted = nums.sort((a, b) => a - b)

    for (let i = sorted[0]; i <= sorted.length; i++){
        if (i !== sorted[i]) return i
    }
};

console.log(missingNumber([0, 1]))
