class Solution:
    def climbStairs(self, n: int) -> int:
        stairs = [1 for i in range(n)]
        if n < 2:
            return n
        
        stairs[1] = 2
        
        for i in range(2,n):
            stairs[i] = stairs[i-1] + stairs[i-2]
        
        return stairs[-1]