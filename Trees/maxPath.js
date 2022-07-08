var maxDepth1 = function(root) {
    if (root === null) return 0

    return 1 + Math.max(maxDepth1(root.left), maxDepth1(root.right))

};

const maxDepthBFS = (root) => {
    if (root === null) return 0

    let stack = [[root, 1]]
    let res = 1

    while (stack.length > 0){
        ([current, depth] = stack.pop())

        if (current !== null) res = Math.max(res, depth)
        stack.push([current.left, depth+1])
        stack.push([current.right, depth+1])

    }
    return res
}
