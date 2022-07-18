function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let E = new ListNode(5, null)
let D = new ListNode(4, E)
let C = new ListNode(3, D)
let B = new ListNode(2, C)
let A = new ListNode(1, B)

var reverseList = function(head) {

    let prev = null
    let curr = head

    while (curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
   }

   return prev
};


console.log(reverseList(A))
