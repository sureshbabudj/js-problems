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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeSort(first = [], second = []) {
    console.log(first, second)
    let res = [];
    let i = 0, j = 0;
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            res.push(first[i]);
            i++;
        } else {
            res.push(second[j]);
            j++;
        }
    }
    return [...res, ...first.slice(i), ...second.slice(j)]
}

function mergeKLists(lists) {
    if (lists.length === 0) return [];
    if (lists.length === 1) return lists[0];
    return mergeSort(lists[0], mergeKLists(lists.slice(1)));
};

console.log(mergeKLists(
    [[1,4,5],[1,3,4],[2,6]]
));