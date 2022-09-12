class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        seenNums = set()
        
        for num in nums:
            if num in seenNums:
                seenNums.remove(num)
            else:
                seenNums.add(num)
                
        return list(seenNums)[0]