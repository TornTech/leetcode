class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums = set(nums)
        n = len(nums)
        
        for i in range(0, n):
            if i not in nums:
                return i
            
        return n