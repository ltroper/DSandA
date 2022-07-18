function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let F = new ListNode(4, null)
let E = new ListNode(3, F)
let D = new ListNode(1, E)

let C = new ListNode(4, null)
let B = new ListNode(2, C)
let A = new ListNode(1, B)


const mergeTwoLists = function(list1, list2) {

    let curr = new ListNode()
    let tail = curr

    while (list1 && list2){
        if (list1.val < list2.val){
            tail.next = list1
            list1 = list1.next
        }
        else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next

    }

    if (list1) tail.next = list1
    else tail.next = list2

    return curr.next

};


console.log(mergeTwoLists(A, D))
