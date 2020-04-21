// Preorder Traversal with Recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const result = [];
    const traversal = function (node, arr) {
        if (node) {
            arr.push(node.val);
            traversal(node.left, arr);
            traversal(node.right, arr);
        }
    }
    traversal(root, result);
    return result;
};