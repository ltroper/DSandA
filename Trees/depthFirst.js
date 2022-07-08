class Node {
    constructor (val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")
const f = new Node("F")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


//iterative depth first search
const depthFirst = (root) => {
    if (root === null) return []


    // Initialize stack with root in it
    let stack = [root]
    let values = []

    while (stack.length > 0) {
        let current = stack.pop()
        values.push(current.val)

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

    // Iterate over elements while the stack is not empty

        //remove last element from stack, make it current element
        //if it exists, push right (first) and left to stack
        return values
}

const depthFirstRecursive = (root) => {
    //base cases
    if (root === null) return []

    return [root.val, ...depthFirstRecursive(root.left), ...depthFirstRecursive(root.right)]
}

console.log(depthFirst(a))
console.log(depthFirstRecursive(a))
