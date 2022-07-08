//binary search
const findMin = function(nums) {
    if (nums.length === 0) return -1
    if (nums.length === 1) return nums[0]

    let left = 0
    let rigth = nums.length-1

    while(left < rigth){
        let mid = Math.floor((left+rigth)/2)

        if (nums[mid] < nums[mid-1]) return nums[mid]
        else if (nums[left] <= nums[mid] && nums[rigth] < nums[mid]){
            left = mid + 1
        }
        else {
            rigth = mid-1
        }
    }
    return nums[left]
}


//my solution
// const findMin = function(nums) {

//     if (nums.length === 1) return nums[0]

//     let left = nums.slice(0, Math.floor(nums.length/2))
//     let rigth = nums.slice(Math.floor(nums.length/2))

//     while (left[0] > left[left.length-1]) left.shift()
//     while (rigth[0] > rigth[rigth.length-1]) rigth.shift()

//     return Math.min(rigth[0], left[0])


// };


console.log(findMin([4,5,6,7,0,1,2]))
