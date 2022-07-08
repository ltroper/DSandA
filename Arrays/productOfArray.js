const productExceptSelf = function(nums) {
    let left = [1]
    let rigth = [1]
    let ans = []
    let countL = 1
    let countR = 1

    for (let i = 0; i < nums.length-1; i++){
        countL = nums[i]*countL
        left.push(countL)
    }

    for (let i = nums.length-1; i > 0; i--){
        countR = nums[i]*countR
        rigth.push(countR)
    }


    for (let i = 0; i < left.length; i++){
        ans.push(left[i]*rigth[left.length-i-1])
    }

    return ans
};


console.log(productExceptSelf([5,2,3,4]))
