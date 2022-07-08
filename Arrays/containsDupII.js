// const containsNearbyDuplicate = function(nums, k) {

//     brute force
//     for (let i = 0; i < nums.length-1; i++){
//         for (let j = i+1; j < nums.length; j++){
//             if (nums[i] === nums[j] && Math.abs(i-j) <=k) {
//                 return true
//             }
//         }
//     }
//     return false

// };

const containsNearbyDuplicate = (nums, k) => {
    //hashmap

    const hashMap = {}

    for (let i = 0; i < nums.length; i++){
        if (hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = i
        }
        else if (Math.abs(hashMap[nums[i]] - i) > k) {
            hashMap[nums[i]] = i
        }
        else {
            return true
        }
    }

    return false
}

console.log(containsNearbyDuplicate([1,0,1,1], 1))
