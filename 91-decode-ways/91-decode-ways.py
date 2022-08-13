class Solution:
    def numDecodings(self, s: str) -> int:
        mem = [-1] * len(s)
        
        return self.numDecodingsHelper(s, 0, mem)
    
    def numDecodingsHelper(self, s: str, index: int, mem: list) -> int:
        if index <= len(s) - 1 and s[index] == "0":
            return 0
        
        if index > len(s) - 2:
            return 1
        
        if mem[index] != -1:
            return mem[index]
        
        first_digit  = s[index]
        second_digit = s[index+1]
        
        if int(first_digit + second_digit) <= 26:
            mem[index] = self.numDecodingsHelper(s, index + 1, mem)  + self.numDecodingsHelper(s, index + 2, mem)
            return mem[index]
        elif first_digit == "0":
            mem[index] = self.numDecodingsHelper(s, index + 2, mem)
            return mem[index]
        else:
            mem[index] = self.numDecodingsHelper(s, index + 1, mem)
            return mem[index]