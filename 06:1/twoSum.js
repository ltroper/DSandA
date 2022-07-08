var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++){
        let higher = nums.length-1
        while (higher > i) {
            if (nums[i] + nums[higher] === target){
                return [i, higher]
            }
            higher--
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
