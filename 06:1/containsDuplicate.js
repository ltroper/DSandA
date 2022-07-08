var containsDuplicate = function(nums) {
    sorted = nums.sort(function(a,b){return a-b})

    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] === sorted[i+1]) return true
    }
    return false
};


console.log(containsDuplicate([1,2,3,1]))
