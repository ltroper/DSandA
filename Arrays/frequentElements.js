const topKFrequent = function(nums, k) {
    let obj = {}

    for (let num of nums) {
        if (num in obj){
            obj[num] ++
        }
        else {
            obj[num] = 1
        }
    }

    let newArr = Object.values(obj).sort((a,b) => a + b)
    let res = []

    for (let i = 0; i < k; i++){
        res.push(Object.keys(obj).find(key => obj[key] === newArr[i]))
    }

    return res
};

console.log(topKFrequent([1,1,1,2,2,3], 2))

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
