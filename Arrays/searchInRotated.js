const search = function (nums, target) {
    if (nums.length === 0) return -1

    let left = 0
    let rigth = nums.length - 1

    while (left < rigth) {
        let mid = Math.floor((left + rigth) / 2)

        if (nums[mid] > nums[rigth]) {
            left = mid + 1
        }
        else {
            rigth = mid
        }
    }

    if (nums[left] === target) return left

    if (target <= nums[nums.length - 1]) {
        rigth = nums.length - 1
    }
    else {
        rigth = left
        left = 0
    }

    while (left <= rigth) {
        mid = Math.floor((left + rigth) / 2)

        if (target === nums[mid]) return mid
        if (target === nums[left]) return left
        if (target === nums[rigth]) return rigth
        else if (nums[mid] < target) {
            left = mid+1
        }
        else {
            rigth = mid-1
        }
    }

    return -1

};


// console.log(search([2, 4, 5, 6, 7, 0, 1], 0))
// console.log(search([4, 5, 6, 7, 0, 1, 2], 5))
// console.log(search([7, 8, 1, 2, 3, 4, 5, 6], 2))
console.log(search([1,3], 3))
