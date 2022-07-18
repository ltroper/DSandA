const trap = function (h) {
    let l = 0
    let r = h.length - 1

    let res = 0


    if (h[l] < h[l + 1]) l++
    if (h[r] < h[r - 1]) r--

    if (h[l + 1] > h[r]) l++
    if (h[r - 1] > h[l]) r--

    let big = Math.min(h[l], h[r])

    for (let i = l+1; i < r; i++){
        res += Math.abs(big - h[i])
    }

    return res

};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
