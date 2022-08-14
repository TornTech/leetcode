class Solution:
    def rob(self, nums: List[int]) -> int:
        self.mem = {}
        rob_first  = self.robHelper(nums, 0)
        rob_second = self.robHelper(nums, 1)
        return max(rob_first, rob_second)
    
    def robHelper(self, nums: List[int], index: int) -> int: 
        if index >= len(nums):
            return 0
          
        if index in self.mem:
            return self.mem[index]
        
        rob_current = self.robHelper(nums, index+2) + nums[index]
        skip        = self.robHelper(nums, index+1)
        self.mem[index] = max(rob_current, skip)
        return self.mem[index]