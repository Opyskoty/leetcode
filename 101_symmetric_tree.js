/**
 * https://leetcode.com/problems/symmetric-tree/
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
//if there is no root, return true
//lets do a q and bfs
//while both qs are not empty
//keep adding to each one
//shift from both, if both are null keep going
//if they don't equal, then return false;
//if one is null and the other isn't return false

var isSymmetric = function (root) {
  if (!root) return true;
	let q1 = [root.left];
	let q2 = [root.right];

	while (q1.length > 0 && q2.length > 0) {
		let q1Curr = q1.shift();
		let q2Curr = q2.shift();

		if (!q1Curr && !q2Curr) continue;

		if (!q1Curr || !q2Curr) return false;
		if (q1Curr.val !== q2Curr.val) return false;

		q1.push(q1Curr.left);
		q2.push(q2Curr.right);
		q1.push(q1Curr.right);
		q2.push(q2Curr.left);
	}
	return true;
};
