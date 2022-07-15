const searchMatrix = function (matrix, target) {


    for (const row of matrix) {
        if (row[0] === target || row[row.length - 1] === target) return true
        if (row[0] < target && row[row.length - 1] > target) {
            let left = 0
            let right = row.length - 1

            while (left <= right) {
                let mid = left + Math.floor((right - left) / 2)

                if (row[mid] === target) return true
                else if (row[mid] < target) left = mid + 1
                else right = mid - 1
            }
        }
    }

    return false

};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
