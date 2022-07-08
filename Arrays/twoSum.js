const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length-1; i++){
        let high = nums.length-1

        while (high > i){
            if (nums[i] + nums[high] === target) return [i, high]
            high--
        }
    }
    return false
}


console.log(twoSum([2,7,11,15], 9))
