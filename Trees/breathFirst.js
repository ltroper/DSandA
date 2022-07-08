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

const breathFirst = (root) => {
    if (root === null) return []

    let queue = [root]
    let values = []

    while (queue.length > 0){
        let current = queue.shift()
        values.push(current.val)

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return values
}


console.log(breathFirst(a))
