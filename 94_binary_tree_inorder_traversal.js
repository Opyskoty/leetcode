/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// RECURSIVE SOLUTION:
var inorderTraversal = function (root) {
	//fail fast for no root:
	if (!root) return [];
	let visited = [];
	//helper recursive function that traverses the left side first
	//then continues to the right
	function traverse(node) {
		//if there is a left node, traverse it's left nodes
		node.left && traverse(node.left);
		//once finished traversing, push the most recent node to visited
		visited.push(node.val);
		//if there's a right node, traverse the right side
		node.right && traverse(node.right);
	}
	traverse(root);
	return visited;
};

// ITERATIVE SOLUTION:
var inorderTraversal = function (root) {
	//fail fast for no root:
	if (!root) return [];
	let result = [];
	let visited = new Set();
	//stack for DFS
	let stack = [root];
	while (stack.length !== 0) {
		//we aren't removing from stack yet because we need to traverse all the way down
		//the left side first
		let node = stack[stack.length - 1];
		if (node.left && !visited.has(node.left)) {
			//if node has a left and it hasn't been visited yet, add to stack:
			stack.push(node.left);
			//add to set so that we don't keep ending up in this block
			visited.add(node.left);
		} else {
      //if there's no left, or we've traversed all the way to the left 
      //(this is what the set is for) we can add to result:
			let current = stack.pop();
			result.push(current.val);
			//if there's a right, add to the stack
			if (node.right) stack.push(node.right);
		}
	}
	return result;
};
