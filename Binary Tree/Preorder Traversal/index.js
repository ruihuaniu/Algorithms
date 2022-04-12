
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

//Method 1: Preorder Traversal with Recursion
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


//Method 2: Preorder Traversal with Iteration
var preorderTraversal = function (root) {
    if (!root) return [];
    const result = [];
    const stack = [];
    stack.push(root)
    while (stack.length > 0) {
        const node = stack.shift();
        result.push(node.val);
        if (node.right) stack.unshift(node.right)
        if (node.left) stack.unshift(node.left)
    }
    return result;
}; 