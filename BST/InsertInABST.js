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
 * @param {number} val
 * @return {TreeNode}
 */
function f(root, val) {
    if(root == null) {
        return new TreeNode(val);
    }

    if(root.val > val) {
        root.left = f(root.left, val);
    } else {
        root.right = f(root.right, val);
    }
    return root;
}
var insertIntoBST = function(root, val) {
    return f(root, val);
};