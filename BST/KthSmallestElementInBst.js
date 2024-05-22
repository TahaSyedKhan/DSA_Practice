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
 * @param {number} k
 * @return {number}
 */
let result;

function f(root) {
    if(root == null) return;
    f(root.left);
    result.push(root.val);
    f(root.right);
    return result;
}
var kthSmallest = function(root, k) {
    result = [];
    f(root);
    console.log(result);
    for(let i = 0; i < result.length; i++) {
        if(i = k) {
            return result[i - 1];
        }
    }
};