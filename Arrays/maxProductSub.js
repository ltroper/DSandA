const maxProduct = function(nums) {
    let res = Math.max(...nums)
    let min = 1
    let max = 1

    for (n of nums){
        if (n === 0){
            min = 1
            max = 1
            continue
        }

        let temp = max*n
        max = Math.max(temp, min*n, n)
        min = Math.min(temp, min*n, n)
        res = Math.max(max, res)
    }
    return res
};


console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([1,0,-1,2,3,-5,-2]))
