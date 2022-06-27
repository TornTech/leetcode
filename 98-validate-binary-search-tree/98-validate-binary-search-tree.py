# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.isValidBSTHelper(root, float('-inf'), float('inf'))

    
    def isValidBSTHelper(self, root, minVal, maxVal):
        if root == None:
            return True

        if root.left and (root.left.val <= minVal or root.left.val >= root.val):
            return False
        
        if root.right and (root.right.val >= maxVal or root.right.val <= root.val):
            return False
        
        return (
            self.isValidBSTHelper(root.left, minVal, root.val) and
            self.isValidBSTHelper(root.right, root.val, maxVal)
        )