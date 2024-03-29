class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        maxRobbedAmount = [0] * (len(nums) + 1)
        N = len(nums)
        maxRobbedAmount[N-1] = nums[N-1]
        
        for i in range(N - 2, -1, -1):
            maxRobbedAmount[i] = max(maxRobbedAmount[i+1], maxRobbedAmount[i+2] + nums[i])
            
        return maxRobbedAmount[0]
        