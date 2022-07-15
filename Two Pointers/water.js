const trap = function (height) {
    let left = 0
    let right = 1

    let res = 0

    while (right < height.length) {
        // console.log(res)
        // console.log("Left:", left)
        // console.log("Right", right)

        if (height[right] <= height[right + 1]) {
            right++
        }

        else {
            let dif = Math.abs(height[right] - height[left])

            for (let i = left + 1; i < right; i++) {
                if (dif - height[i] > 0) res += dif - height[i]
            }
            left++
            right = left + 1
        }

    }

    return res
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
