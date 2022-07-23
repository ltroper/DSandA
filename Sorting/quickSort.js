const quick = (arr) => {
    if (arr.length <= 1) return arr

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for (let ele of arr.slice(0, arr.length-1)){
        if (ele <= pivot) left.push(ele)
        else right.push(ele)
    }
    return[...quick(left), pivot, ...quick(right)]
}


console.log(quick([2, 4, 7, 3, 1]))
