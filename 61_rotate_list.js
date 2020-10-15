/**
 * https://leetcode.com/problems/rotate-list/
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


 //super slow solution:
var rotateRight = function (head, k) {
	//fail fast for invalid head:
	if (!head || !head.next || !k) return head;
	let count = 0;
	let tempHead;
	//keep rotating until k
	while (count !== k) {
		//remove tail
		let { newTail, oldTail } = findTail(head);
		//make new tail
		newTail.next = null;
		//save current head
		tempHead = head;
    head = oldTail;
    //now that we have new head, make it's next the old head
		head.next = tempHead;
		count++;
	}
	return head;
};

//helper function for finding the tail
function findTail(head) {
	let oldTail = head;
	let newTail = oldTail;
	//keep looping until node.next == null (we found tail)
	while (oldTail.next !== null) {
		newTail = oldTail;
		oldTail = oldTail.next;
	}
	//we need both the last and second to last node
	return { newTail, oldTail };
}
