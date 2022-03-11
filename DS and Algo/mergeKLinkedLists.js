
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var mergeHelper = function(list1, list2) {
    let i = list1, j = list2;
    const res = new ListNode();
    let current = res;
    while (!!i && !!j) {
        if (i.val > j.val) {
            current.next = new ListNode(j.val);
            j = j.next;
        } else {
            current.next = new ListNode(i.val);
            i = i.next;
        }
        current = current.next;
    }
    while (!!i) {
        current.next = new ListNode(i.val);
        i = i.next;
        current = current.next;
    }
    while (!!j) {
        current.next = new ListNode(j.val);
        j = j.next;
        current = current.next;
    }
    return res.next;
}
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    return mergeHelper(lists.pop(), mergeKLists(lists));
};

let list = [[1, 4, 5], [1, 3, 4], [2, 6]];
const lls = []; 

for (let i = 0; i < list.length; i++) {
    let head = new ListNode(0);
    let current = head;
    for (let j = 0; j < list[i].length; j++) {
        current.next = new ListNode(list[i][j]);
        current = current.next;
    }
    lls.push(head.next ? head.next : head);
}
console.log(mergeKLists(lls));
