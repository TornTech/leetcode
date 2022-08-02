class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest_streak = 1
        if not nums:
            return 0
        
        num_set = set(nums)
        
        for num in num_set:
            if num-1 in num_set:
                continue
            
            current_streak = 1
            while num+1 in num_set:
                num += 1
                current_streak += 1
                longest_streak = max(longest_streak, current_streak)
        
        return longest_streak
        