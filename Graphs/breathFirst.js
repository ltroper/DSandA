const breathFirst = (graph, start) => {

    let queue = [start]
    let res = []

    while (queue.length > 0){
        let curr = queue.shift()
        res.push(curr)

        for (let nei of graph[curr]){
            queue.push(nei)
        }
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

console.log(breathFirst(graph, "a"))
