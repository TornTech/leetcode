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
var isBalanced = function(root) {
    if (!root) return true;
  
    const treeHeight = (node) => {
        if (!node) return 0;
    
        return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
    }
  
    const nodeBalanced = Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1;
  
    return isBalanced(root.left) && isBalanced(root.right) && nodeBalanced;
};