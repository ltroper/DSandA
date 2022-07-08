
const maxArea = function (height) {
    //brute force
    let max = 0
    let i = 0
    let end = height.length - 1

    while (i < end) {
        max = Math.max(max, Math.min(height[i], height[end]) * (end - i))

        if (height[i] > height[end]) end--
        else i++
    }

    return max

    //let's get fancy

    // let object = {}

    // for (let i = 0; i < height.length; i++){
    //     object[i] = height[i]
    // }

    // const sorted = height.sort((a,b) => b-a)




};

// {
//     '0': 1,
//     '1': 8,
//     '2': 6,
//     '3': 2,
//     '4': 5,
//     '5': 4,
//     '6': 8,
//     '7': 3,
//     '8': 7
//   }

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
