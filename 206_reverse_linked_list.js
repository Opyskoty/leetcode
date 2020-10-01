/***
 * https://leetcode.com/problems/reverse-linked-list/
 * Reverse a singly linked list.
 */

var reverseList = function (head) {
	//fail fast for empty list or list w/ only one node;
	//this is how tail will become new head;
	if (!head || !head.next) return head;

	//currentHead will always be one after the head we will be "popping off"
	let currentHead = head.next;
	//head we will be popping off
	let oldHead = head;
	//add old head to the end
	oldHead.next = null;

	while (currentHead !== null) {
		//store currentHead in a temp variable
		let temp = currentHead;
		//move currentHead to the next variable
		currentHead = currentHead.next;
		//add temp variable to reversed list
		temp.next = oldHead;
		//update the oldHead
		oldHead = temp;
	}
	return oldHead;
};
