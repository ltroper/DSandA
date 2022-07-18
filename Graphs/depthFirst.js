
const depthFirst = (graph, start) => {

    const stack = [start]
    const values = []

    while (stack.length > 0){
        let current = stack.pop()

        values.push(current)
        for (let neighboor of graph[current]){
            stack.push(neighboor)
        }
    }
    return values

}

const depthFirstRecursive = (graph, start) => {

    let res = [start]
    
    for (let nei of graph[start]){
        res.push(...depthFirstRecursive(graph, nei))
    }
    return res
}


const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}

console.log(depthFirstRecursive(graph, "a"))
