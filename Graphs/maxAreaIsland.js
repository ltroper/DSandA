const atlantisCounter = (i, j, grid) => {

    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === 0) return 0

    grid[i][j] = 0
    return 1 + (
        atlantisCounter(i - 1, j, grid) +
        atlantisCounter(i + 1, j, grid) +
        atlantisCounter(i, j - 1, grid) +
        atlantisCounter(i, j + 1, grid)
    )

}

const maxAreaOfIsland = function (grid) {
    let maxSize = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxSize = Math.max(atlantisCounter(i, j, grid), maxSize)
            }
        }
    }

    return maxSize
};


console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))
