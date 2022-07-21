const atlantis = (i, j, grid) => {

    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === "0") return

    grid[i][j] = "0"

    atlantis(i - 1, j, grid)
    atlantis(i + 1, j, grid)
    atlantis(i, j - 1, grid)
    atlantis(i, j + 1, grid)
}


const numIslands = function (grid) {

    let islandCount = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                islandCount++
                atlantis(i, j, grid)
            }
        }
    }

    return islandCount
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))
