from math import ceil

class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        left_num = nums[0]
        right_num = nums[-1]
        midpoint = ceil((len(nums)-1)/2)
        mid_num = nums[midpoint]
        
        if nums[midpoint-1] > nums[midpoint]:
            return nums[midpoint]
        elif mid_num > right_num:
            return self.findMin(nums[midpoint:])
        else:
            return self.findMin(nums[:midpoint])
        