const threeSum = (nums) => {
    const sorted = nums.sort((a, b) => a - b)
    const output = []

    for (let i = 0; i < sorted.length - 2; i++) {

        if (i === 0 || sorted[i] !== sorted[i - 1]){
            let left = i + 1
            let right = nums.length - 1

            while (left < right){
                let sum = sorted[i] + sorted[left] + sorted[right]

                if (sum === 0){
                    output.push([sorted[i], sorted[left], sorted[right]])
                    while (sorted[left]===sorted[left+1]) left++
                    while (sorted[right]===sorted[right-1]) right--
                    left++
                    right--
                }else if (sum > 0) right --
                else left ++
            }
        }

    }
    return output
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
