const topKFrequent = function (nums, k) {
    let obj = {}

    for (let num of nums) {
        if (num in obj) {
            obj[num]++
        }
        else {
            obj[num] = 1
        }
    }

    let newArr = Object.values(obj).sort((a, b) => b - a)
    let res = []

    const keysOfObj = Object.keys(obj)

    for (let i = 0; i < k; i++) {
        for (let key of keysOfObj) {
            if (obj[key] === newArr[i]) {
                res.push(key)
                delete obj[key]
            }
        }
    }

    return res
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1, 2], 2))
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
